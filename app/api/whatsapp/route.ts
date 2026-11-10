import { NextResponse } from "next/server";
import { generateAIResponse } from "@/app/lib/ai/openrouter";
import {
  isDuplicateMessage,
  verifyMetaSignature,
  sendWhatsAppTextMessage,
} from "@/app/lib/whatsapp/client";

export const dynamic = "force-dynamic";

/**
 * GET Webhook Verification Handler for Meta WhatsApp Cloud API
 *
 * Meta calls this endpoint when configuring the webhook URL in the Developer Portal.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const configuredToken = process.env.WHATSAPP_VERIFY_TOKEN;

  if (mode === "subscribe" && token && configuredToken && token === configuredToken) {
    console.log("[WhatsApp Webhook] Challenge verified successfully by Meta.");
    return new Response(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

  console.warn("[WhatsApp Webhook] Verification failed. Token mismatch or missing mode.");
  return new Response("Forbidden", { status: 403 });
}

/**
 * POST Webhook Event Handler for Incoming WhatsApp Messages
 */
export async function POST(request: Request) {
  try {
    const rawBody = await request.text();

    // 1. Validate Meta HMAC-SHA256 signature if APP_SECRET is configured
    const appSecret = process.env.WHATSAPP_APP_SECRET;
    if (appSecret) {
      const signature = request.headers.get("x-hub-signature-256");
      const isValid = verifyMetaSignature(rawBody, signature, appSecret);
      if (!isValid) {
        console.error("[WhatsApp Webhook] Invalid HMAC signature received.");
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      }
    }

    const payload = JSON.parse(rawBody);

    if (payload.object !== "whatsapp_business_account") {
      return NextResponse.json({ status: "ignored" }, { status: 200 });
    }

    // 2. Process incoming entries
    const entries = payload.entry || [];
    for (const entry of entries) {
      const changes = entry.changes || [];
      for (const change of changes) {
        // Under WhatsApp Coexistence, ignore outbound message echoes (host replying from phone)
        if (change.field === "message_echoes") {
          console.log("[WhatsApp Webhook] Ignored outbound message echo from mobile app.");
          continue;
        }

        const value = change.value;
        if (!value) continue;

        // Ignore delivery status notifications (sent, delivered, read)
        if (value.statuses && !value.messages) {
          continue;
        }

        // Identify business number to prevent self-reply loops under Coexistence
        const businessPhone = (value.metadata?.display_phone_number || "").replace(/\D/g, "");

        const messages = value.messages || [];
        for (const message of messages) {
          const messageId = message.id;

          // Deduplicate incoming messages (Meta retries on network lag)
          if (messageId && isDuplicateMessage(messageId)) {
            console.log(`[WhatsApp Webhook] Skipped duplicate message ID: ${messageId}`);
            continue;
          }

          const senderPhone = message.from;
          const cleanSender = senderPhone.replace(/\D/g, "");

          // Coexistence safeguard: Ignore any messages originating from the retreat host number
          if (
            (businessPhone && cleanSender === businessPhone) ||
            cleanSender === "923349669198"
          ) {
            console.log("[WhatsApp Webhook] Ignored message sent by retreat host.");
            continue;
          }

          // Handle non-text messages safely (voice notes, images, stickers, etc.)
          if (message.type !== "text") {
            const nonTextNotice =
              "Thank you for reaching out to Serengé Retreat! Our automated inquiry system currently handles text messages. Our host will review your media shortly, or you can call us directly on WhatsApp (+92 334 9669198).";
            await sendWhatsAppTextMessage(senderPhone, nonTextNotice);
            continue;
          }

          const customerText = message.text?.body || "";
          if (!customerText.trim()) continue;

          console.log(`[WhatsApp Webhook] Received message from ${senderPhone.slice(0, 5)}***: "${customerText.slice(0, 50)}..."`);

          // 3. Generate response using OpenRouter + verified knowledge
          const aiResult = await generateAIResponse(senderPhone, customerText);

          // 4. Send reply back to customer via Meta Cloud API
          const sendResult = await sendWhatsAppTextMessage(senderPhone, aiResult.text);

          if (!sendResult.success) {
            console.error(
              `[WhatsApp Webhook] Failed to send reply to ${senderPhone}:`,
              sendResult.error
            );
          } else {
            console.log(`[WhatsApp Webhook] Reply sent successfully to ${senderPhone.slice(0, 5)}***`);
          }
        }
      }
    }

    // Always acknowledge Meta with HTTP 200 promptly
    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[WhatsApp Webhook] Processing error:", errorMsg);
    // Return 200 to Meta to avoid infinite webhook retry loops while logging the failure
    return NextResponse.json({ error: errorMsg }, { status: 200 });
  }
}
