/**
 * Trending posts — read from a STATIC file committed to the repo.
 *
 * The ranking is produced OUT OF BAND by a scheduled GitHub Actions job
 * (.github/workflows/update-trending.yml) which calls the GA4 Data API at
 * most once per day and writes src/_data/trending.json. This keeps the site
 * build itself completely free of GA calls, tokens, and external runtime
 * dependencies — every deploy just reads the last committed JSON.
 *
 * Shape of trending.json: { "generated": "<iso>", "ranked": { "/posts/<slug>/": 1, ... } }
 *
 * GRACEFUL FALLBACK: if the file is missing or malformed, returns null and
 * templates fall back to the manual `trending: true` frontmatter flag, so the
 * site always builds.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

export default function () {
  const here = dirname(fileURLToPath(import.meta.url));
  const file = join(here, "trending.json");
  try {
    const data = JSON.parse(readFileSync(file, "utf8"));
    const ranked = data && data.ranked ? data.ranked : null;
    if (ranked && Object.keys(ranked).length) {
      console.log(`[trending] loaded ${Object.keys(ranked).length} ranked posts from trending.json (generated ${data.generated || "?"}).`);
      return ranked;
    }
    console.log("[trending] trending.json present but empty — using frontmatter flags.");
    return null;
  } catch (err) {
    console.log(`[trending] no usable trending.json (${err.code || err.message}) — using frontmatter flags.`);
    return null;
  }
}
