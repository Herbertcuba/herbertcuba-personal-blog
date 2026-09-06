import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";

const CACHE_DIR = join(process.cwd(), ".cache");
const BUILD_MANIFEST = join(CACHE_DIR, "blob-assets.json");
const BLOB_PREFIX = "site-assets";
const REMOTE_MANIFEST_PATH = `${BLOB_PREFIX}/manifest.json`;
const UPLOAD_CONCURRENCY = 4;

const roots = [
  { source: join(process.cwd(), "src", "static", "images"), publicRoot: "images" },
  { source: join(process.cwd(), "src", "images"), publicRoot: "images" },
  { source: join(process.cwd(), "src", "static", "downloads"), publicRoot: "downloads" },
];

function isBlobConfigured() {
  return Boolean(
    process.env.BLOB_READ_WRITE_TOKEN ||
      (process.env.BLOB_STORE_ID && process.env.VERCEL_OIDC_TOKEN),
  );
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const pathname = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(pathname)));
    else if (entry.isFile()) files.push(pathname);
  }

  return files;
}

function contentType(pathname) {
  const types = {
    ".gif": "image/gif",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".pdf": "application/pdf",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
  };
  return types[extname(pathname).toLowerCase()] || "application/octet-stream";
}

async function localAssets() {
  const byPublicPath = new Map();

  for (const root of roots) {
    let files = [];
    try {
      files = await walk(root.source);
    } catch (error) {
      if (error.code === "ENOENT") continue;
      throw error;
    }

    for (const file of files) {
      const relativePath = relative(root.source, file).split(sep).join("/");
      const publicPath = `/${root.publicRoot}/${relativePath}`;
      const body = await readFile(file);
      byPublicPath.set(publicPath, {
        body,
        contentType: contentType(file),
        hash: createHash("sha256").update(body).digest("hex"),
        pathname: `${BLOB_PREFIX}${publicPath}`,
        size: (await stat(file)).size,
      });
    }
  }

  return byPublicPath;
}

async function existingBlobs(list) {
  const byPathname = new Map();
  let cursor;

  do {
    const page = await list({ prefix: `${BLOB_PREFIX}/`, cursor, limit: 1000 });
    for (const blob of page.blobs) byPathname.set(blob.pathname, blob);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);

  return byPathname;
}

async function previousHashes(blobs) {
  const manifest = blobs.get(REMOTE_MANIFEST_PATH);
  if (!manifest) return {};

  const response = await fetch(manifest.url, { cache: "no-store" });
  if (!response.ok) return {};

  try {
    return (await response.json()).hashes || {};
  } catch {
    return {};
  }
}

async function inBatches(items, worker) {
  let index = 0;
  const workers = Array.from({ length: UPLOAD_CONCURRENCY }, async () => {
    while (index < items.length) {
      const item = items[index];
      index += 1;
      await worker(item);
    }
  });
  await Promise.all(workers);
}

async function main() {
  if (!isBlobConfigured()) {
    console.log("[blob] No Vercel Blob connection detected; keeping local assets.");
    return;
  }

  const { list, put } = await import("@vercel/blob");
  const assets = await localAssets();
  const blobs = await existingBlobs(list);
  const oldHashes = await previousHashes(blobs);
  const changed = [...assets.entries()].filter(
    ([publicPath, asset]) =>
      oldHashes[publicPath] !== asset.hash || !blobs.has(asset.pathname),
  );

  await inBatches(changed, async ([publicPath, asset]) => {
    const result = await put(asset.pathname, asset.body, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 3600,
      contentType: asset.contentType,
      multipart: asset.size > 5 * 1024 * 1024,
    });
    blobs.set(asset.pathname, result);
    console.log(`[blob] Uploaded ${publicPath}`);
  });

  const mapping = {};
  const hashes = {};
  for (const [publicPath, asset] of assets) {
    const blob = blobs.get(asset.pathname);
    if (!blob?.url) throw new Error(`Missing Blob URL for ${publicPath}`);
    mapping[publicPath] = blob.url;
    hashes[publicPath] = asset.hash;
  }

  await put(
    REMOTE_MANIFEST_PATH,
    JSON.stringify({ hashes, updatedAt: new Date().toISOString() }),
    {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 60,
      contentType: "application/json",
    },
  );

  await mkdir(CACHE_DIR, { recursive: true });
  await writeFile(BUILD_MANIFEST, `${JSON.stringify({ mapping }, null, 2)}\n`);
  console.log(
    `[blob] ${assets.size} assets ready (${changed.length} uploaded, ${assets.size - changed.length} reused).`,
  );
}

await main();
