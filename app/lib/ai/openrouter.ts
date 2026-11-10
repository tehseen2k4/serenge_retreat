/**
 * OpenRouter AI Client for Serengé Retreat
 *
 * Configurable LLM gateway evaluating:
 * meta-llama/llama-3.2-3b-instruct
 */

import { buildSystemPrompt } from "./systemPrompt";
import { conversationMemory, type ChatRole } from "./memory";

export interface AIResponse {
  text: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    estimatedCostUsd: number;
  };
  modelUsed: string;
  durationMs: number;
  isFallback: boolean;
  error?: string;
}

const DEFAULT_MODEL = "meta-llama/llama-3.2-3b-instruct";
const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const REQUEST_TIMEOUT_MS = 10000; // 10 second timeout

// Cost per token for meta-llama/llama-3.2-3b-instruct ($0.06 / 1M tokens)
const COST_PER_PROMPT_TOKEN = 0.06 / 1_000_000;
const COST_PER_COMPLETION_TOKEN = 0.06 / 1_000_000;

function isUrduQuery(text: string): boolean {
  const urduPatterns = [
    /\b(kia|kya|hai|hain|kahan|kitna|kitnay|kitne|kaise|kese|karna|chahiye|shukriya|room|kamra|paas|mil|sakta|sakti|ap|aap|hum|apka|apki)\b/i,
  ];
  return urduPatterns.some((p) => p.test(text));
}

function getSafeFallback(userMessage: string): string {
  if (isUrduQuery(userMessage)) {
    return "Serengé Retreat se rabta karne ka shukriya! Is waqt system masroof hai. Barah-e-karam hamare host se seedha WhatsApp +92 334 9669198 par rabta farmayein, hum foran madad karenge.";
  }
  return "Thank you for contacting Serengé Retreat! We are temporarily experiencing a high volume of inquiries. Please message our host directly on WhatsApp at +92 334 9669198 and we will be delighted to assist you.";
}

export async function generateAIResponse(
  sessionId: string,
  userMessage: string
): Promise<AIResponse> {
  const startTime = Date.now();
  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL || DEFAULT_MODEL;

  const sanitizedMessage = conversationMemory.sanitizeInput(userMessage);

  if (!apiKey) {
    console.warn("[AI Service] OPENROUTER_API_KEY is not set. Returning safe fallback.");
    return {
      text: getSafeFallback(sanitizedMessage),
      modelUsed: model,
      durationMs: Date.now() - startTime,
      isFallback: true,
      error: "OPENROUTER_API_KEY_MISSING",
    };
  }

  // Retrieve recent context from memory
  const history = conversationMemory.getHistory(sessionId);

  // Construct message array
  const systemPrompt = buildSystemPrompt();
  const messages: Array<{ role: ChatRole; content: string }> = [
    { role: "system", content: systemPrompt },
    ...history.map((h) => ({ role: h.role, content: h.content })),
    { role: "user", content: sanitizedMessage },
  ];

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    const response = await fetch(OPENROUTER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://www.serengeretreatpakistan.com",
        "X-Title": "Serenge Retreat WhatsApp Inquiry Assistant",
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        max_tokens: 180,
        temperature: 0.3,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      console.error(`[AI Service] OpenRouter HTTP ${response.status}:`, errText);
      return {
        text: getSafeFallback(sanitizedMessage),
        modelUsed: model,
        durationMs: Date.now() - startTime,
        isFallback: true,
        error: `HTTP_${response.status}`,
      };
    }

    const data = await response.json();
    const choice = data.choices?.[0];
    const generatedText = choice?.message?.content?.trim();

    if (!generatedText) {
      console.error("[AI Service] OpenRouter returned empty response:", data);
      return {
        text: getSafeFallback(sanitizedMessage),
        modelUsed: model,
        durationMs: Date.now() - startTime,
        isFallback: true,
        error: "EMPTY_RESPONSE",
      };
    }

    // Save turn to conversation memory
    conversationMemory.addTurn(sessionId, "user", sanitizedMessage);
    conversationMemory.addTurn(sessionId, "assistant", generatedText);

    // Calculate usage & cost
    const promptTokens = data.usage?.prompt_tokens ?? 0;
    const completionTokens = data.usage?.completion_tokens ?? 0;
    const totalTokens = data.usage?.total_tokens ?? (promptTokens + completionTokens);
    const estimatedCostUsd =
      promptTokens * COST_PER_PROMPT_TOKEN + completionTokens * COST_PER_COMPLETION_TOKEN;

    return {
      text: generatedText,
      usage: {
        promptTokens,
        completionTokens,
        totalTokens,
        estimatedCostUsd,
      },
      modelUsed: data.model || model,
      durationMs: Date.now() - startTime,
      isFallback: false,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[AI Service] Exception during generation:", errorMsg);

    return {
      text: getSafeFallback(sanitizedMessage),
      modelUsed: model,
      durationMs: Date.now() - startTime,
      isFallback: true,
      error: errorMsg,
    };
  }
}
