/**
 * SocialLink Component
 * Reusable social media link with icon and animation
 *
 * Reasons for separate file:
 * 1. Reusability: Can be used across multiple pages (home, contact, footer, etc.)
 * 2. Maintainability: Icon and styling logic isolated for easier updates
 */

"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  label: string;
  href: string;
  delay: string;
  isLoaded: boolean;
}

export default function SocialLink({
  label,
  href,
  delay,
  isLoaded,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-2 transition-all duration-1000 ease-out",
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      )}
      style={{ transitionDelay: delay }}
    >
      <span
        className="text-xs text-white font-mono font-bold uppercase"
        style={{ fontFamily: "var(--font-space-mono)" }}
      >
        {label}
      </span>
      <Image src="/arrowtr.svg" alt="" width={12} height={12} />
    </a>
  );
}
