"use client";

import Nav from "@/components/layout/Nav";
import Logo from "@/components/layout/Logo";

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      <Logo />
      <Nav />

      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              portfolio
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              selected projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
