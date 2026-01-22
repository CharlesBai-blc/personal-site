"use client";

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

  return (
    <div className="min-h-screen overflow-y-scroll">
      <Logo />
      <CenteredNav isLoaded={isLoaded} />
      <LocationInfo isLoaded={isLoaded} />
      <SocialLinks isLoaded={isLoaded} />
      <HeroSection isLoaded={isLoaded} />
      <ProjectsSection githubUsername="CharlesBai-blc" />
    </div>
  );
}
