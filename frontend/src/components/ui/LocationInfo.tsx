/**
 * LocationInfo Component
 * Displays location information with staggered animation
 *
 * Reasons for separate file:
 * 1. Reusability: Can be used in header, footer, or contact pages
 * 2. Maintainability: Location data and styling isolated for easy updates
 */

"use client";

import { cn } from "@/lib/utils";

interface LocationInfoProps {
  isLoaded: boolean;
  delay?: string;
}

const LOCATIONS = ["ITHACA, NY", "FREDERICK, MD"];

export default function LocationInfo({
  isLoaded,
  delay = "1000ms",
}: LocationInfoProps) {
  return (
    <div
      className="fixed top-6 right-6 z-50 text-right"
      style={{ top: "1.5rem", right: "2.25rem" }}
    >
      <div
        className="text-xs text-black font-mono font-bold uppercase leading-relaxed"
        style={{ fontFamily: "var(--font-space-mono)" }}
      >
        {LOCATIONS.map((location) => (
          <div
            key={location}
            className={cn(
              "transition-all duration-1000 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            )}
            style={{ transitionDelay: delay }}
          >
            {location}
          </div>
        ))}
      </div>
    </div>
  );
}
