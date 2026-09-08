import assert from "node:assert/strict";
import test from "node:test";
import {
  DEFAULT_AION_PRICE_ORE,
  isPaidAionSession,
  priceInOre,
} from "../lib/aion-commerce.mjs";

test("AION defaults to a 99 SEK price", () => {
  assert.equal(priceInOre(), DEFAULT_AION_PRICE_ORE);
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
