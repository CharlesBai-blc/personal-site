import Link from "next/link";
import type { ReactNode } from "react";
import Logo from "@/components/layout/Logo";
import Nav from "@/components/layout/Nav";
import { SOCIAL_LINKS } from "@/config/social";

interface InteriorPageProps {
  children: ReactNode;
}

export default function InteriorPage({ children }: InteriorPageProps) {
  return (
    <div className="interior-page">
      <div className="interior-page__texture" aria-hidden="true" />
      <Logo isScrolled />
      <Nav />

      {children}

      <footer className="interior-footer">
        <div className="interior-shell interior-footer__inner">
          <Link href="/" className="interior-footer__name">
            Charles Bai
          </Link>

          <p className="interior-footer__note">
            Software engineering, systems, and useful things.
          </p>

          <div className="interior-footer__links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
