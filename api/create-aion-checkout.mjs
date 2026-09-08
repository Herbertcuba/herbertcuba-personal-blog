import Stripe from "stripe";
import {
  AION_BOOK_SLUG,
  downloadWindowHours,
  priceInOre,
  siteOrigin,
} from "../lib/aion-commerce.mjs";

function json(response, status, body) {
  response.status(status);
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.json(body);
}

function requestBody(request) {
  if (typeof request.body === "string") return JSON.parse(request.body);
  return request.body || {};
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return json(response, 405, { error: "Method not allowed." });
  }
  if (!process.env.STRIPE_SECRET_KEY || !process.env.AION_BLOB_STORE_ID) {
    return json(response, 503, { error: "Checkout is not configured yet." });
  }
  let body;
  try {
    body = requestBody(request);
  } catch {
    return json(response, 400, { error: "Invalid request." });
  }
  if (body.digitalContentConsent !== true) {
    return json(response, 400, {
      error: "Please accept immediate digital delivery before continuing.",
    });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const origin = siteOrigin(request);
    const consentedAt = new Date().toISOString();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: "auto",
      customer_creation: "always",
      billing_address_collection: "auto",
      tax_id_collection: { enabled: true },
      automatic_tax: { enabled: process.env.STRIPE_AUTOMATIC_TAX !== "false" },
      line_items: [{
        quantity: 1,
        price_data: {
          currency: "sek",
          unit_amount: priceInOre(),
          tax_behavior: "inclusive",
          product_data: {
            name: "AION",
            description: "Engineering the Organization for the Age of Agents — PDF field manual",
          },
        },
      }],
      metadata: {
        book_slug: AION_BOOK_SLUG,
        digital_content_consent: "accepted",
        digital_content_consented_at: consentedAt,
        download_window_hours: String(downloadWindowHours()),
      },
      payment_intent_data: {
        metadata: {
          book_slug: AION_BOOK_SLUG,
          digital_content_consent: "accepted",
          digital_content_consented_at: consentedAt,
        },
      },
      success_url: origin + "/books/aion/thank-you/?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: origin + "/books/#aion",
    });
    return json(response, 200, { url: session.url });
  } catch (error) {
    console.error("AION checkout creation failed", error?.type || error?.name || "Error");
    return json(response, 500, {
      error: "Checkout could not be started. Please try again.",
    });
  }
}
