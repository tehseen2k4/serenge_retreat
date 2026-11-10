import { NextResponse } from "next/server";
import { generateAIResponse } from "@/app/lib/ai/openrouter";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body.message !== "string" || !body.message.trim()) {
      return NextResponse.json(
        { error: "Invalid request. 'message' string is required." },
        { status: 400 }
      );
    }

    const sessionId = (body.sessionId && String(body.sessionId)) || `test-${Date.now()}`;
    const userMessage = body.message.trim();

    const result = await generateAIResponse(sessionId, userMessage);

    return NextResponse.json(result);
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
