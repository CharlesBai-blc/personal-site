'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const navItems = [
    { name: 'about', href: '/about' },
    { name: 'portfolio', href: '/portfolio' },
    { name: 'blog', href: '/blog' },
    { name: 'contact', href: '/contact' },
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Main Hero Section - Full Screen */}
      <section className="h-screen flex items-center justify-center px-4 relative snap-start">
        {/* Navigation - Top Right */}
        <nav className="fixed top-6 right-6 flex gap-6 z-50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredButton(item.name)}
              onMouseLeave={() => setHoveredButton(null)}
              className={`
                relative
                font-extralight text-foreground
                transition-all duration-300 ease-out
                cursor-pointer
                text-xs tracking-widest
                lowercase
                ${hoveredButton === item.name
                  ? 'opacity-100 scale-105'
                  : 'opacity-50 hover:opacity-70'
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Main Content */}
        <div className="text-center space-y-12 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              Charles Bai
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              Creative Professional
            </p>
          </div>
        </div>

        {/* Scroll Indicator - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 animate-bounce-subtle">
          <svg
            className="w-6 h-6 text-foreground opacity-40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Section 1 */}
      <section className="h-screen flex items-center justify-center px-4 snap-start bg-foreground/5">
        <div className="text-center max-w-4xl">
          {/* Empty section - placeholder */}
        </div>
      </section>

      {/* Section 2 */}
      <section className="h-screen flex items-center justify-center px-4 snap-start bg-foreground/10">
        <div className="text-center max-w-4xl">
          {/* Empty section - placeholder */}
        </div>
      </section>
    </div>
  );
}
