"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS: Array<{ href: string; label: string }> = [
  { href: "/about", label: "about" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/blog", label: "blog" },
  { href: "/contact", label: "contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-3 py-2 shadow-lg">
        {LINKS.map((l) => {
          const isActive = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={[
                "px-2 py-1 rounded-md text-sm font-light transition-colors duration-200",
                isActive
                  ? "text-foreground bg-white/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/10",
              ].join(" ")}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

