import { NextResponse } from "next/server";
import { replyFor } from "@/components/features/chat/chat-knowledge";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = body?.messages;
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 50) return NextResponse.json({ error: "messages must be a non-empty array" }, { status: 400 });
    const last = messages.at(-1);
    if (!last || last.role !== "user" || typeof last.content !== "string" || last.content.trim().length === 0 || last.content.length > 2000) return NextResponse.json({ error: "the last message must be a valid user message" }, { status: 400 });
    return NextResponse.json({ role: "assistant", content: replyFor(last.content), demo: true });
  } catch {
    return NextResponse.json({ error: "Invalid JSON request" }, { status: 400 });
  }
}
