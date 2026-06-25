import { NextRequest, NextResponse } from "next/server";
import { applyCors, isRateLimited, sanitizeText } from "@/lib/api-security";

export function OPTIONS() {
  return applyCors(new NextResponse(null, { status: 204 }));
}

export async function POST(request: NextRequest) {
  const ip = (request.headers.get("x-forwarded-for") ?? "local").split(",")[0]?.trim() || "local";
  if (isRateLimited(`prayer:${ip}`)) {
    return applyCors(NextResponse.json({ error: "Too many requests" }, { status: 429 }));
  }

  const { requestText } = (await request.json()) as Record<string, string>;
  const sanitized = sanitizeText(requestText ?? "");

  if (sanitized.length < 5) {
    return applyCors(NextResponse.json({ error: "Invalid prayer request" }, { status: 400 }));
  }

  return applyCors(NextResponse.json({ ok: true }, { status: 200 }));
}
