import { NextResponse } from "next/server";

const requestCounts = new Map<string, { count: number; timestamp: number }>();

export function applyCors(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function sanitizeText(input: string) {
  return input.replace(/[<>]/g, "").trim();
}

export function isRateLimited(key: string, limit = 10, windowMs = 60_000) {
  const now = Date.now();
  const current = requestCounts.get(key);

  if (!current || now - current.timestamp > windowMs) {
    requestCounts.set(key, { count: 1, timestamp: now });
    return false;
  }

  current.count += 1;
  requestCounts.set(key, current);
  return current.count > limit;
}
