export const AION_BOOK_SLUG = "aion";
export const AION_BLOB_PATH =
  "paid-books/aion-engineering-the-organization-for-the-age-of-agents.pdf";
export const AION_DOWNLOAD_FILENAME =
  "AION-Engineering-the-Organization-for-the-Age-of-Agents.pdf";
export const DEFAULT_AION_PRICE_ORE = 9900;
export const DEFAULT_DOWNLOAD_WINDOW_HOURS = 72;

export function priceInOre(value = process.env.AION_PRICE_SEK) {
  if (value === undefined || value === null || value === "") {
    return DEFAULT_AION_PRICE_ORE;
  }
  const kronor = Number(value);
  if (!Number.isFinite(kronor) || kronor <= 0 || kronor > 100000) {
    throw new Error("AION_PRICE_SEK must be a positive number no greater than 100000.");
  }
  return Math.round(kronor * 100);
}

export function downloadWindowHours(value = process.env.AION_DOWNLOAD_WINDOW_HOURS) {
  if (value === undefined || value === null || value === "") {
    return DEFAULT_DOWNLOAD_WINDOW_HOURS;
  }
  const hours = Number(value);
  if (!Number.isFinite(hours) || hours <= 0 || hours > 24 * 30) {
    throw new Error("AION_DOWNLOAD_WINDOW_HOURS must be between 0 and 720.");
  }
  return hours;
}

export function siteOrigin(request) {
  const configured = process.env.SITE_URL?.trim();
  if (configured) return new URL(configured).origin;
  if (process.env.VERCEL_URL) {
    return new URL("https://" + process.env.VERCEL_URL).origin;
  }
  const host = request?.headers?.host || "localhost:8080";
  const forwardedProto = request?.headers?.["x-forwarded-proto"];
  const protocol = forwardedProto || (host.startsWith("localhost") ? "http" : "https");
  return new URL(protocol + "://" + host).origin;
}

export function isPaidAionSession(session, nowSeconds = Math.floor(Date.now() / 1000)) {
  if (!session || session.mode !== "payment" || session.payment_status !== "paid") {
    return false;
  }
  if (session.metadata?.book_slug !== AION_BOOK_SLUG) return false;
  const paymentIntent = session.payment_intent;
  const charge =
    paymentIntent && typeof paymentIntent === "object" ? paymentIntent.latest_charge : null;
  if (charge && typeof charge === "object" && charge.refunded) return false;
  const maxAge = downloadWindowHours() * 60 * 60;
  return Number.isFinite(session.created) && nowSeconds - session.created <= maxAge;
}
