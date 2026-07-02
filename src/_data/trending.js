/**
 * Trending posts, fetched from Google Analytics (GA4) Data API at build time.
 *
 * Returns an object: { "/posts/<slug>/": rank, ... } where rank is 1..N
 * (1 = most trafficked in the window). Templates check `trending[post.url]`.
 *
 * Config via environment variables (set in Vercel project settings):
 *   GA4_PROPERTY_ID        — numeric GA4 property id, e.g. "123456789"
 *   GA_SERVICE_ACCOUNT_JSON — the full service-account JSON (as a single-line string)
 *        (or) GOOGLE_APPLICATION_CREDENTIALS — path to a key file (local dev)
 *
 * GRACEFUL FALLBACK: if credentials are missing or the API call fails, this
 * returns null. Templates then fall back to the manual `trending: true`
 * frontmatter flag, so the site always builds — GA is an enhancement, not a
 * dependency.
 */

const WINDOW_DAYS = 30;   // trailing window to rank by
const TOP_N = 8;          // how many posts to mark trending

export default async function () {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const saJson = process.env.GA_SERVICE_ACCOUNT_JSON;
  const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;

  // No config → silent fallback to frontmatter trending flags.
  if (!propertyId || (!saJson && !keyFile)) {
    console.log("[trending] GA4 not configured — using frontmatter `trending` flags.");
    return null;
  }

  try {
    const { BetaAnalyticsDataClient } = await import("@google-analytics/data");

    let clientOptions = {};
    if (saJson) {
      const credentials = JSON.parse(saJson);
      // Vercel env vars escape newlines in the private key — restore them.
      if (credentials.private_key) {
        credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");
      }
      clientOptions = {
        credentials,
        projectId: credentials.project_id,
      };
    }
    // If keyFile is set, the client picks it up from GOOGLE_APPLICATION_CREDENTIALS automatically.

    const client = new BetaAnalyticsDataClient(clientOptions);

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

    const rows = response.rows || [];
    const ranked = {};
    let rank = 0;
    for (const row of rows) {
      let path = row.dimensionValues?.[0]?.value || "";
      // Normalize: strip query/hash, ensure trailing slash
      path = path.split("?")[0].split("#")[0];
      if (!path.endsWith("/")) path += "/";
      if (!path.startsWith("/posts/")) continue;
      if (ranked[path]) continue; // dedupe (e.g. index variants)
      rank += 1;
      ranked[path] = rank;
      if (rank >= TOP_N) break;
    }

    console.log(`[trending] GA4 ok — ${Object.keys(ranked).length} trending posts from last ${WINDOW_DAYS}d.`);
    return ranked;
  } catch (err) {
    console.warn(`[trending] GA4 fetch failed (${err.message}) — falling back to frontmatter flags.`);
    return null;
  }
}
