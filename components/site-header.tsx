import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Events", "/events"],
  ["Donate", "/donate"],
  ["Contact", "/contact"],
  ["Blog", "/blog"],
  ["Prayer", "/prayer"],
  ["Member", "/member"],
  ["Admin", "/admin"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/20 bg-[var(--surface)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link className="text-lg font-semibold" href="/">
          Lulekani COC 2026
        </Link>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {links.map(([label, href]) => (
            <Link key={href} className="hover:text-cyan-400 transition-colors" href={href}>
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
