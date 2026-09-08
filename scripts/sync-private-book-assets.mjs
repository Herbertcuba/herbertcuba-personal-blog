import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { get, put } from "@vercel/blob";
import { AION_BLOB_PATH } from "../lib/aion-commerce.mjs";

const source = join(
  process.cwd(),
  "src/private/downloads/aion-engineering-the-organization-for-the-age-of-agents.pdf",
);
const manifestPath = "paid-books/aion-manifest.json";

function isBlobConfigured() {
  return Boolean(
    process.env.BLOB_READ_WRITE_TOKEN ||
      (process.env.BLOB_STORE_ID && process.env.VERCEL_OIDC_TOKEN),
  );
}

async function previousHash() {
  const manifest = await get(manifestPath, { access: "private", useCache: false });
  if (!manifest?.stream) return null;
  try {
    const data = await new Response(manifest.stream).json();
    return data.hash || null;
  } catch {
    return null;
  }
}

async function main() {
  if (!isBlobConfigured()) {
    console.log("[private-books] No Vercel Blob connection detected; skipping private upload.");
    return;
  }

  const body = await readFile(source);
  const hash = createHash("sha256").update(body).digest("hex");
  if ((await previousHash()) === hash) {
    console.log("[private-books] AION is already current.");
    return;
  }

  await put(process.env.AION_BLOB_PATH || AION_BLOB_PATH, body, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/pdf",
    multipart: true,
  });
  await put(manifestPath, JSON.stringify({ hash, updatedAt: new Date().toISOString() }), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
  console.log("[private-books] Uploaded AION to private Blob storage.");
}

await main();
