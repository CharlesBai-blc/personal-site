/**
 * CenteredNav Component
 * Centered navigation bar with staggered animation
 *
 * Reasons for separate file:
 * 1. Reusability: Can be used as an alternative navigation layout
 * 2. Separation of concerns: Navigation logic separated from page content
 */

"use client";

import NavItem from "@/components/ui/NavItem";
import { NAV_LINKS, NAV_ANIMATION_DELAYS } from "@/config/navigation";

interface CenteredNavProps {
  isLoaded: boolean;
  textColor?: "black" | "white";
}

export default function CenteredNav({ isLoaded, textColor = "black" }: CenteredNavProps) {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-16">
        {NAV_LINKS.map((link) => (
          <NavItem
            key={link.href}
            label={link.label}
            href={link.href}
            delay={
              NAV_ANIMATION_DELAYS[
                link.label as keyof typeof NAV_ANIMATION_DELAYS
              ] || "500ms"
            }
            isLoaded={isLoaded}
            textColor={textColor}
          />
        ))}
      </div>
    </nav>
  );
}
