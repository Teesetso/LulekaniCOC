import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lulekani Church of Christ | 2026",
  description:
    "A modern church platform for worship, events, giving, prayer, and member connection.",
  keywords: ["church", "events", "livestream", "donations", "Lulekani"],
  openGraph: {
    title: "Lulekani Church of Christ",
    description: "Faith, community, worship, and digital ministry in one platform.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
