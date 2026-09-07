import { Readable } from "node:stream";
import { get } from "@vercel/blob";
import Stripe from "stripe";
import {
  AION_BLOB_PATH,
  AION_DOWNLOAD_FILENAME,
  isPaidAionSession,
} from "../lib/aion-commerce.mjs";

function fail(response, status, message) {
  response.status(status);
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.json({ error: message });
}

export default async function handler(request, response) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.setHeader("Allow", "GET, HEAD");
    return fail(response, 405, "Method not allowed.");
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return fail(response, 503, "Downloads are not configured yet.");
  }

  const sessionId = Array.isArray(request.query?.session_id)
    ? request.query.session_id[0]
    : request.query?.session_id;
  if (!/^cs_(?:test|live)_[A-Za-z0-9]+$/.test(sessionId || "")) {
    return fail(response, 400, "The download link is invalid.");
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent.latest_charge"],
    });
    if (!isPaidAionSession(session)) {
      return fail(response, 403, "This download is unavailable or has expired.");
    }
    if (request.method === "HEAD") {
      response.status(204);
      response.setHeader("Cache-Control", "private, no-store");
      return response.end();
    }

    const file = await get(process.env.AION_BLOB_PATH || AION_BLOB_PATH, {
      access: "private",
    });
    if (!file?.stream) return fail(response, 404, "The book file is not available.");
    response.status(200);
    response.setHeader("Cache-Control", "private, no-store");
    response.setHeader("Content-Type", file.blob.contentType || "application/pdf");
    response.setHeader("Content-Length", String(file.blob.size));
    response.setHeader(
      "Content-Disposition",
      'attachment; filename="' + AION_DOWNLOAD_FILENAME + '"',
    );
    return Readable.fromWeb(file.stream).pipe(response);
  } catch (error) {
    if (error?.statusCode === 404 || error?.code === "resource_missing") {
      return fail(response, 404, "The payment session could not be found.");
    }
    console.error("AION download verification failed", error?.type || error?.name || "Error");
    return fail(response, 500, "The download could not be verified. Please try again.");
  }
}
