import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { get, put } from "@vercel/blob";
import { BOOKS } from "../lib/aion-commerce.mjs";

const sources = {
  aion: "aion-engineering-the-organization-for-the-age-of-agents.pdf",
  "digital-singularity-shift": "digital-singularity-shift.pdf",
  "three-crucibles": "three-crucibles.pdf",
};
const manifestPath = "paid-books/manifest.json";

function blobOptions() {
  return {
    access: "private",
    storeId: process.env.AION_BLOB_STORE_ID,
    token: process.env.AION_READ_WRITE_TOKEN,
  };
}

function isBlobConfigured() {
  return Boolean(process.env.AION_BLOB_STORE_ID && process.env.AION_READ_WRITE_TOKEN);
}

async function previousHashes() {
  try {
    const manifest = await get(manifestPath, { ...blobOptions(), useCache: false });
    if (!manifest?.stream) return {};
    const data = await new Response(manifest.stream).json();
    return data.hashes || {};
  } catch (error) {
    if (error?.statusCode === 404) return {};
    throw error;
  }
}

async function main() {
  if (!isBlobConfigured()) {
    console.log("[private-books] No Vercel Blob connection detected; skipping private upload.");
    return;
  }

  const prior = await previousHashes();
  const hashes = {};
  let uploaded = 0;

  for (const [slug, filename] of Object.entries(sources)) {
    const body = await readFile(join(process.cwd(), "src/private/downloads", filename));
    const hash = createHash("sha256").update(body).digest("hex");
    hashes[slug] = hash;
    if (prior[slug] === hash) continue;

    await put(BOOKS[slug].blobPath, body, {
      ...blobOptions(),
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/pdf",
      multipart: true,
    });
    uploaded += 1;
  }

  if (uploaded > 0 || Object.keys(prior).length !== Object.keys(hashes).length) {
    await put(manifestPath, JSON.stringify({ hashes, updatedAt: new Date().toISOString() }), {
      ...blobOptions(),
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
  }
  console.log(`[private-books] ${uploaded ? `Uploaded ${uploaded} book(s).` : "All books are current."}`);
}

await main();
