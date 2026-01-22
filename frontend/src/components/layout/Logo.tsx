"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Logo Component
 * Site logo that links to home page
 *
 * Reasons for layout folder:
 * 1. Layout component: Used across all pages as part of the site layout
 * 2. Consistency: Groups all layout-related components together (Logo, Nav, CenteredNav, etc.)
 */
interface LogoProps {
  isLoaded?: boolean;
  delay?: string;
}

export default function Logo({ isLoaded = true, delay = "500ms" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "fixed top-6 left-6 z-50 transition-all duration-1000 ease-out hover:scale-110",
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      )}
      style={{ transitionDelay: delay }}
    >
      <Image
        src="/cblogoblack.png"
        alt="CBai Logo"
        width={40}
        height={40}
        priority
      />
    </Link>
  );
}
