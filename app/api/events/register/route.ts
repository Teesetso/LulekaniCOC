import { NextRequest, NextResponse } from "next/server";
import { applyCors, isRateLimited, sanitizeText, validateEmail } from "@/lib/api-security";

export function OPTIONS() {
  return applyCors(new NextResponse(null, { status: 204 }));
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  if (isRateLimited(`events:${ip}`)) {
    return applyCors(NextResponse.json({ error: "Too many requests" }, { status: 429 }));
  }

  const { name, email, eventId } = (await request.json()) as Record<string, string>;

  if (!sanitizeText(name ?? "") || !validateEmail(email ?? "") || !sanitizeText(eventId ?? "")) {
    return applyCors(NextResponse.json({ error: "Invalid event registration" }, { status: 400 }));
  }

  return applyCors(NextResponse.json({ ok: true }, { status: 200 }));
}
