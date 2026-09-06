import { readFile, readdir, rm, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { pathToFileURL } from "node:url";

const CACHE_MANIFEST = join(process.cwd(), ".cache", "blob-assets.json");
const OUTPUT_DIR = join(process.cwd(), "dist");
const TEXT_EXTENSIONS = new Set([".css", ".html", ".js", ".json", ".txt", ".xml"]);
const SITE_ORIGINS = ["https://www.cubagarcia.com", "https://cubagarcia.com"];

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

export function rewriteText(source, mapping) {
  let rewritten = source;
  const placeholders = [];
  const replacements = Object.entries(mapping).sort(
    ([left], [right]) => right.length - left.length,
  );

  replacements.forEach(([publicPath, blobUrl], index) => {
    const placeholder = `__BLOB_ASSET_${index}__`;
    for (const origin of SITE_ORIGINS) {
      rewritten = rewritten.replaceAll(`${origin}${publicPath}`, placeholder);
    }
    rewritten = rewritten.replaceAll(publicPath, placeholder);
    placeholders.push([placeholder, blobUrl]);
  });

  for (const [placeholder, blobUrl] of placeholders) {
    rewritten = rewritten.replaceAll(placeholder, blobUrl);
  }

  return rewritten;
}

async function main() {
  let manifest;
  try {
    manifest = JSON.parse(await readFile(CACHE_MANIFEST, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("[blob] No build manifest; retaining local deployment assets.");
      return;
    }
    throw error;
  }

  const replacements = Object.entries(manifest.mapping || {});
  if (!replacements.length) throw new Error("Blob asset mapping is empty.");

  const files = (await walk(OUTPUT_DIR)).filter((file) =>
    TEXT_EXTENSIONS.has(extname(file).toLowerCase()),
  );

  for (const file of files) {
    const original = await readFile(file, "utf8");
    const rewritten = rewriteText(original, manifest.mapping);

    if (rewritten !== original) await writeFile(file, rewritten);
  }

  await Promise.all([
    rm(join(OUTPUT_DIR, "images"), { recursive: true, force: true }),
    rm(join(OUTPUT_DIR, "downloads"), { recursive: true, force: true }),
  ]);

  console.log(`[blob] Rewrote ${replacements.length} asset URLs and removed local copies.`);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  await main();
}
