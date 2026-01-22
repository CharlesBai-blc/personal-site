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
  isScrolled?: boolean;
}

export default function Logo({ isLoaded = true, delay = "500ms", isScrolled = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "fixed top-6 left-6 z-50 transition-all duration-1000 ease-out hover:scale-110 group",
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      )}
      style={{ transitionDelay: delay }}
    >
      <div className="relative w-10 h-10">
        {/* Black logo - visible when not scrolled and not hovered */}
        <Image
          src="/cblogoblack.png"
          alt="CBai Logo"
          width={40}
          height={40}
          priority
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            isScrolled ? "opacity-0" : "opacity-100",
            "group-hover:opacity-0"
          )}
        />
        {/* White logo - visible when scrolled and not hovered */}
        <Image
          src="/cblogobw.png"
          alt="CBai Logo"
          width={40}
          height={40}
          priority
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            isScrolled ? "opacity-100" : "opacity-0",
            "group-hover:opacity-0"
          )}
        />
        {/* Colored logo - visible on hover */}
        <Image
          src="/cblogo.png"
          alt="CBai Logo"
          width={40}
          height={40}
          priority
          className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>
    </Link>
  );
}
