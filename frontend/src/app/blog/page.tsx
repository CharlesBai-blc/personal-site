"use client";

import Nav from "@/components/layout/Nav";
import Logo from "@/components/layout/Logo";

export default function Blog() {
  return (
    <div className="min-h-screen relative">
      <Logo />
      <Nav />

      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto w-full">
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              blog
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              thoughts and insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
