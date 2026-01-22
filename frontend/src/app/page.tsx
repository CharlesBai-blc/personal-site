"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/layout/Logo";
import CenteredNav from "@/components/layout/CenteredNav";
import LocationInfo from "@/components/ui/LocationInfo";
import SocialLinks from "@/components/layout/SocialLinks";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { usePageLoad } from "@/hooks/usePageLoad";

/**
 * Home Page
 *
 * Refactored for corporate standards:
 * 1. Separation of concerns: Page orchestrates components, doesn't contain business logic
 * 2. Maintainability: All data and configuration extracted to config files
 */
export default function Home() {
  const isLoaded = usePageLoad();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section is full screen (100vh), so when scrolled past it, change color
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.8); // Start transition at 80% of hero height
    };

    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "white" : "black";

  return (
    <div className="min-h-screen overflow-y-scroll">
      <Logo isLoaded={isLoaded} delay="500ms" isScrolled={isScrolled} />
      <CenteredNav isLoaded={isLoaded} textColor={textColor} />
      <LocationInfo isLoaded={isLoaded} textColor={textColor} />
      <SocialLinks isLoaded={isLoaded} />
      <HeroSection isLoaded={isLoaded} />
      <ProjectsSection githubUsername="CharlesBai-blc" />
    </div>
  );
}
