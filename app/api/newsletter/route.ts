import { NextRequest, NextResponse } from "next/server";
import { applyCors, isRateLimited, validateEmail } from "@/lib/api-security";

export function OPTIONS() {
  return applyCors(new NextResponse(null, { status: 204 }));
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  if (isRateLimited(`newsletter:${ip}`)) {
    return applyCors(NextResponse.json({ error: "Too many requests" }, { status: 429 }));
  }

  const { email } = (await request.json()) as Record<string, string>;

  if (!validateEmail(email ?? "")) {
    return applyCors(NextResponse.json({ error: "Invalid email" }, { status: 400 }));
  }

  return applyCors(NextResponse.json({ ok: true }, { status: 200 }));
}
