/**
 * NavItem Component
 * Reusable navigation item with staggered animation and hover effects
 *
 * Reasons for separate file:
 * 1. Reusability: Used in multiple navigation contexts (home page, potentially other layouts)
 * 2. Complexity: Contains complex animation logic and hover effects that benefit from isolation
 */

"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  label: string;
  href: string;
  delay: string;
  isLoaded: boolean;
  textColor?: "black" | "white";
}

export default function NavItem({ label, href, delay, isLoaded, textColor = "black" }: NavItemProps) {
  const textColorClass = textColor === "white" ? "text-white" : "text-black";

  return (
    <Link
      href={href}
      className={cn(
        "relative overflow-hidden cursor-pointer transition-all duration-1000 ease-out block",
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      )}
      style={{ transitionDelay: delay }}
    >
      <div className="group">
        <div
          className={cn(
            "text-sm font-mono font-bold uppercase transition-all duration-500 ease-out group-hover:-translate-y-full",
            textColorClass
          )}
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          {label}
        </div>
        <div
          className={cn(
            "text-sm font-mono font-bold uppercase transition-all duration-500 ease-out translate-y-full group-hover:translate-y-0 absolute inset-0",
            textColorClass
          )}
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          {label}
        </div>
      </div>
    </Link>
  );
}
