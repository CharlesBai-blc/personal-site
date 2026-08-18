"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/config/navigation";

/**
 * Compact fixed navigation shared by the interior pages.
 */
export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="interior-nav" aria-label="Primary navigation">
      <span className="interior-nav__edition" aria-hidden="true">
        CB / 26
      </span>
      <div className="interior-nav__links">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className="interior-nav__link"
              data-active={isActive}
            >
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
