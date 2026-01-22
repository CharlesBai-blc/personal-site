/**
 * useScrollPosition Hook
 * Detects scroll position and determines if user has scrolled past hero section
 *
 * Reasons for separate file:
 * 1. Reusability: Can be used in multiple components that need scroll-based behavior
 * 2. Separation of concerns: Scroll logic isolated from component rendering logic
 */

"use client";

import { useState, useEffect } from "react";

export function useScrollPosition(threshold: number = 0) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
