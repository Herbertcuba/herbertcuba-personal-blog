#!/usr/bin/env node
/** Export LinkedIn-attributed article visits for Content Engine as a private artifact. */

import { mkdirSync, writeFileSync } from "node:fs";

const propertyId = process.env.GA4_PROPERTY_ID;
const rawCredentials = process.env.GA_SERVICE_ACCOUNT_JSON;
if (!propertyId || !rawCredentials) throw new Error("GA4 credentials are required");

const credentials = JSON.parse(rawCredentials);
if (credentials.private_key) credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");
const { BetaAnalyticsDataClient } = await import("@google-analytics/data");
const client = new BetaAnalyticsDataClient({ credentials, projectId: credentials.project_id });

const [response] = await client.runReport({
  property: `properties/${propertyId}`,
  dateRanges: [{ startDate: "730daysAgo", endDate: "today" }],
  dimensions: [{ name: "landingPagePlusQueryString" }],
  metrics: [
    { name: "sessions" },
    { name: "activeUsers" },
    { name: "screenPageViews" },
  ],
  dimensionFilter: {
    filter: {
      fieldName: "sessionSource",
      stringFilter: { matchType: "CONTAINS", value: "linkedin", caseSensitive: false },
    },
  },
  limit: 10000,
});

const rows = (response.rows || []).map((row) => ({
  landing_page: row.dimensionValues?.[0]?.value || "",
  sessions: Number(row.metricValues?.[0]?.value || 0),
  active_users: Number(row.metricValues?.[1]?.value || 0),
  page_views: Number(row.metricValues?.[2]?.value || 0),
}));
const generated = new Date();
const windowStart = new Date(generated);
windowStart.setUTCDate(windowStart.getUTCDate() - 730);
const payload = {
  schema_version: "content-engine-article-analytics/v1",
  generated_at: generated.toISOString(),
  window_start: windowStart.toISOString().slice(0, 10),
  window_end: generated.toISOString().slice(0, 10),
  rows,
};
mkdirSync("analytics-artifact", { recursive: true });
writeFileSync("analytics-artifact/article-analytics.json", JSON.stringify(payload, null, 2) + "\n");
console.log(`[analytics-export] wrote ${rows.length} LinkedIn landing-page rows`);
