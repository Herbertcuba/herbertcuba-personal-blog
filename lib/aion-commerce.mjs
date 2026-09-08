export const DEFAULT_DOWNLOAD_WINDOW_HOURS = 72;

export const BOOKS = Object.freeze({
  aion: Object.freeze({
    slug: "aion",
    name: "AION",
    description: "Engineering the Organization for the Age of Agents — PDF field manual",
    blobPath: "paid-books/aion-engineering-the-organization-for-the-age-of-agents.pdf",
    downloadFilename: "AION-Engineering-the-Organization-for-the-Age-of-Agents.pdf",
    defaultPriceOre: 199900,
    priceEnv: "AION_PRICE_SEK",
  }),
  "digital-singularity-shift": Object.freeze({
    slug: "digital-singularity-shift",
    name: "The Digital Singularity Shift",
    description: "The Rise of Metamodern Brand Narratives — PDF e-book",
    blobPath: "paid-books/digital-singularity-shift.pdf",
    downloadFilename: "The-Digital-Singularity-Shift.pdf",
    defaultPriceOre: 9900,
    priceEnv: "DIGITAL_SINGULARITY_PRICE_SEK",
  }),
  "three-crucibles": Object.freeze({
    slug: "three-crucibles",
    name: "The Three Crucibles",
    description: "A Prophecy of Collapse, Transformation, and the Fight for Abundance — PDF e-book",
    blobPath: "paid-books/three-crucibles.pdf",
    downloadFilename: "The-Three-Crucibles.pdf",
    defaultPriceOre: 9900,
    priceEnv: "THREE_CRUCIBLES_PRICE_SEK",
  }),
});

export const AION_BOOK_SLUG = BOOKS.aion.slug;
export const AION_BLOB_PATH = BOOKS.aion.blobPath;
export const AION_DOWNLOAD_FILENAME = BOOKS.aion.downloadFilename;
export const DEFAULT_AION_PRICE_ORE = BOOKS.aion.defaultPriceOre;

export function bookBySlug(slug) {
  return typeof slug === "string" ? BOOKS[slug] || null : null;
}

export function priceInOreForBook(book, value = process.env[book.priceEnv]) {
  if (value === undefined || value === null || value === "") {
    return book.defaultPriceOre;
  }
  const kronor = Number(value);
  if (!Number.isFinite(kronor) || kronor <= 0 || kronor > 100000) {
    throw new Error(book.priceEnv + " must be a positive number no greater than 100000.");
  }
  return Math.round(kronor * 100);
}

export function priceInOre(value = process.env.AION_PRICE_SEK) {
  return priceInOreForBook(BOOKS.aion, value);
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

export function isPaidBookSession(
  session,
  expectedSlug,
  nowSeconds = Math.floor(Date.now() / 1000),
) {
  if (!session || session.mode !== "payment" || session.payment_status !== "paid") {
    return false;
  }
  const slug = session.metadata?.book_slug;
  if (!bookBySlug(slug) || (expectedSlug && slug !== expectedSlug)) return false;
  const paymentIntent = session.payment_intent;
  const charge =
    paymentIntent && typeof paymentIntent === "object" ? paymentIntent.latest_charge : null;
  if (charge && typeof charge === "object" && charge.refunded) return false;
  const maxAge = downloadWindowHours() * 60 * 60;
  return Number.isFinite(session.created) && nowSeconds - session.created <= maxAge;
}

export function isPaidAionSession(session, nowSeconds = Math.floor(Date.now() / 1000)) {
  return isPaidBookSession(session, AION_BOOK_SLUG, nowSeconds);
}
