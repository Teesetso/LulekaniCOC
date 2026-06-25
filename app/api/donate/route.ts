import { NextRequest, NextResponse } from "next/server";
import { applyCors, isRateLimited, sanitizeText, validateEmail } from "@/lib/api-security";

export function OPTIONS() {
  return applyCors(new NextResponse(null, { status: 204 }));
}

export async function POST(request: NextRequest) {
  const ip = (request.headers.get("x-forwarded-for") ?? "local").split(",")[0]?.trim() || "local";
  if (isRateLimited(`donate:${ip}`, 5)) {
    return applyCors(NextResponse.json({ error: "Too many requests" }, { status: 429 }));
  }

  const { name, email, amount } = (await request.json()) as Record<string, string>;
  const sanitizedName = sanitizeText(name ?? "");
  const parsedAmount = Number(amount);

  if (!sanitizedName || !validateEmail(email ?? "") || !Number.isFinite(parsedAmount) || parsedAmount <= 0) {
    return applyCors(NextResponse.json({ error: "Invalid donation payload" }, { status: 400 }));
  }

  return applyCors(
    NextResponse.json(
      { ok: true, message: "Demo donation accepted. Connect your payment gateway in production." },
      { status: 200 },
    ),
  );
}
