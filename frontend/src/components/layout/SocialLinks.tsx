/**
 * SocialLinks Component
 * Container for social media links with staggered animation
 *
 * Reasons for separate file:
 * 1. Reusability: Can be used in footer, sidebar, or other page sections
 * 2. Separation of concerns: Social links logic isolated from page structure
 */

"use client";

import SocialLink from "@/components/ui/SocialLink";
import { SOCIAL_LINKS } from "@/config/social";

interface SocialLinksProps {
  isLoaded: boolean;
  baseDelay?: number;
}

export default function SocialLinks({
  isLoaded,
  baseDelay = 1200,
}: SocialLinksProps) {
  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex flex-col gap-4"
      style={{ bottom: "3.25rem", left: "1.5rem" }}
    >
      {SOCIAL_LINKS.map((link, index) => (
        <SocialLink
          key={link.label}
          label={link.label}
          href={link.href}
          delay={`${baseDelay + index * 100}ms`}
          isLoaded={isLoaded}
        />
      ))}
    </div>
  );
}
