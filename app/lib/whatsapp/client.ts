/**
 * Meta WhatsApp Cloud API Client & Security Utilities
 *
 * Implements:
 * - HMAC-SHA256 signature verification (X-Hub-Signature-256)
 * - Message deduplication (prevents duplicate AI calls on Meta retries)
 * - Sending text messages via Graph API v21.0
 */

import crypto from "node:crypto";

const GRAPH_API_VERSION = "v21.0";
const DEDUP_CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes cache

// In-memory message deduplication set
const processedMessageIds = new Map<string, number>();

/**
 * Checks if a message ID has already been processed to prevent duplicate replies
 */
export function isDuplicateMessage(messageId: string): boolean {
  const now = Date.now();

  // Prune expired entries
  for (const [id, timestamp] of processedMessageIds.entries()) {
    if (now - timestamp > DEDUP_CACHE_TTL_MS) {
      processedMessageIds.delete(id);
    }
  }

  if (processedMessageIds.has(messageId)) {
    return true;
  }

  processedMessageIds.set(messageId, now);
  return false;
}

/**
 * Validates Meta's X-Hub-Signature-256 against the raw request body and app secret
 */
export function verifyMetaSignature(
  rawBody: string,
  signatureHeader: string | null,
  appSecret: string
): boolean {
  if (!signatureHeader || !signatureHeader.startsWith("sha256=")) {
    return false;
  }

  const expectedHash = signatureHeader.slice(7);
  const hmac = crypto.createHmac("sha256", appSecret);
  hmac.update(rawBody);
  const actualHash = hmac.digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(actualHash, "hex"),
      Buffer.from(expectedHash, "hex")
    );
  } catch {
    return false;
  }
}

/**
 * Sends a text message to a WhatsApp recipient using Meta Graph API
 */
export async function sendWhatsAppTextMessage(
  recipientPhoneNumber: string,
  messageText: string
): Promise<{ success: boolean; data?: unknown; error?: string }> {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!accessToken || !phoneNumberId) {
    console.warn(
      "[WhatsApp Client] WHATSAPP_ACCESS_TOKEN or WHATSAPP_PHONE_NUMBER_ID not configured."
    );
    return {
      success: false,
      error: "CREDENTIALS_MISSING",
    };
  }

  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${phoneNumberId}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: recipientPhoneNumber,
    type: "text",
    text: {
      preview_url: false,
      body: messageText,
    },
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("[WhatsApp Client] Meta API error:", data);
      return { success: false, error: JSON.stringify(data) };
    }

    return { success: true, data };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[WhatsApp Client] Network failure sending message:", errorMsg);
    return { success: false, error: errorMsg };
  }
}
