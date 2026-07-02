#!/usr/bin/env node
/**
 * Fetch the top-N most-trafficked /posts/ pages from GA4 (trailing window)
 * and write src/_data/trending.json. Run by GitHub Actions on a daily cron.
 *
 * Deterministic, no AI, no interactive auth. Requires two env vars:
 *   GA4_PROPERTY_ID          — numeric GA4 property id
 *   GA_SERVICE_ACCOUNT_JSON  — full service-account JSON (single-line string)
 *
 * Exits 0 always on "no change" or "no creds" so the workflow stays green;
 * exits non-zero only on an unexpected write error.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const WINDOW_DAYS = 30;
const TOP_N = 8;

const here = dirname(fileURLToPath(import.meta.url));
const outFile = join(here, "..", "src", "_data", "trending.json");

const propertyId = process.env.GA4_PROPERTY_ID;
const saJson = process.env.GA_SERVICE_ACCOUNT_JSON;

if (!propertyId || !saJson) {
  console.log("[update-trending] GA4 env not set — leaving trending.json untouched.");
  process.exit(0);
}

const credentials = JSON.parse(saJson);
if (credentials.private_key) {
  credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");
}

const { BetaAnalyticsDataClient } = await import("@google-analytics/data");
const client = new BetaAnalyticsDataClient({ credentials, projectId: credentials.project_id });

let ranked = {};
try {
  const [response] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: `${WINDOW_DAYS}daysAgo`, endDate: "today" }],
    dimensions: [{ name: "pagePath" }],
    metrics: [{ name: "screenPageViews" }],
    orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
    dimensionFilter: {
      filter: {
        fieldName: "pagePath",
        stringFilter: { matchType: "BEGINS_WITH", value: "/posts/" },
      },
    },
    limit: 100,
  });

  let rank = 0;
  for (const row of response.rows || []) {
    let path = row.dimensionValues?.[0]?.value || "";
    path = path.split("?")[0].split("#")[0];
    if (!path.endsWith("/")) path += "/";
    if (!path.startsWith("/posts/")) continue;
    if (ranked[path]) continue;
    rank += 1;
    ranked[path] = rank;
    if (rank >= TOP_N) break;
  }
} catch (err) {
  console.error(`[update-trending] GA4 fetch failed: ${err.message}`);
  console.log("[update-trending] leaving trending.json untouched.");
  process.exit(0);
}

const next = JSON.stringify(ranked);
let prev = "";
if (existsSync(outFile)) {
  try {
    prev = JSON.stringify(JSON.parse(readFileSync(outFile, "utf8")).ranked || {});
  } catch { /* treat as changed */ }
}

if (next === prev) {
  console.log("[update-trending] ranking unchanged — no write.");
  process.exit(0);
}

const payload = { generated: new Date().toISOString(), window_days: WINDOW_DAYS, ranked };
writeFileSync(outFile, JSON.stringify(payload, null, 2) + "\n");
console.log(`[update-trending] wrote ${Object.keys(ranked).length} ranked posts to trending.json.`);
