import assert from "node:assert/strict";
import test from "node:test";
import {
  BOOKS,
  DEFAULT_AION_PRICE_ORE,
  isPaidBookSession,
  isPaidAionSession,
  priceInOre,
  priceInOreForBook,
  siteOrigin,
} from "../lib/aion-commerce.mjs";

test("the three books use the configured server-side prices", () => {
  assert.equal(DEFAULT_AION_PRICE_ORE, 199900);
  assert.equal(priceInOre(), DEFAULT_AION_PRICE_ORE);
  assert.equal(priceInOreForBook(BOOKS["digital-singularity-shift"]), 9900);
  assert.equal(priceInOreForBook(BOOKS["three-crucibles"]), 9900);
  assert.equal(priceInOre("149"), 14900);
  assert.equal(priceInOre("99.50"), 9950);
});

test("AION rejects invalid prices", () => {
  assert.throws(() => priceInOre("0"));
  assert.throws(() => priceInOre("not-a-price"));
});

test("a paid AION Checkout session can download within 72 hours", () => {
  const now = 2_000_000;
  assert.equal(
    isPaidAionSession({
      mode: "payment",
      payment_status: "paid",
      created: now - 71 * 60 * 60,
      metadata: { book_slug: "aion" },
      payment_intent: { latest_charge: { refunded: false } },
    }, now),
    true,
  );
});

test("unpaid, refunded, wrong-product, and expired sessions cannot download", () => {
  const now = 2_000_000;
  const base = {
    mode: "payment",
    payment_status: "paid",
    created: now,
    metadata: { book_slug: "aion" },
    payment_intent: { latest_charge: { refunded: false } },
  };
  assert.equal(isPaidAionSession({ ...base, payment_status: "unpaid" }, now), false);
  assert.equal(isPaidAionSession({
    ...base,
    payment_intent: { latest_charge: { refunded: true } },
  }, now), false);
  assert.equal(isPaidAionSession({ ...base, metadata: { book_slug: "other" } }, now), false);
  assert.equal(isPaidAionSession({ ...base, created: now - 73 * 60 * 60 }, now), false);
});

test("each paid book session is bound to its purchased title", () => {
  const now = 2_000_000;
  const session = {
    mode: "payment",
    payment_status: "paid",
    created: now,
    metadata: { book_slug: "three-crucibles" },
    payment_intent: { latest_charge: { refunded: false } },
  };
  assert.equal(isPaidBookSession(session, "three-crucibles", now), true);
  assert.equal(isPaidBookSession(session, "digital-singularity-shift", now), false);
});

test("Checkout returns to the customer-facing request host", () => {
  const previousVercelUrl = process.env.VERCEL_URL;
  process.env.VERCEL_URL = "protected-deployment.vercel.app";
  try {
    assert.equal(
      siteOrigin({ headers: { host: "www.cubagarcia.com", "x-forwarded-proto": "https" } }),
      "https://www.cubagarcia.com",
    );
  } finally {
    if (previousVercelUrl === undefined) delete process.env.VERCEL_URL;
    else process.env.VERCEL_URL = previousVercelUrl;
  }
});
