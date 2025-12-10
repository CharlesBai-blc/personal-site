'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const navItems = [
    { name: 'about', href: '/about' },
    { name: 'portfolio', href: '/portfolio' },
    { name: 'blog', href: '/blog' },
    { name: 'contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen relative">
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

      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-4 py-2 hover:bg-white/30 transition-all duration-300 shadow-lg"
      >
        <span className="font-mono text-xs text-foreground opacity-80">cd ..</span>
      </Link>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              about
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              a brief introduction
            </p>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-lg">
              <p className="text-foreground leading-relaxed font-light text-lg">
                I&apos;m a creative professional passionate about building meaningful digital experiences 
                that connect people and solve real-world problems through thoughtful design and technology.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-light text-foreground mb-4 font-display">background</h2>
              <p className="text-foreground leading-relaxed font-light">
                With experience in web development and design, I specialize in creating 
                user-centered digital solutions that are both beautiful and functional. 
                My approach combines technical expertise with creative thinking to deliver 
                products that users love.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-light text-foreground mb-4 font-display">interests</h2>
              <p className="text-foreground leading-relaxed font-light">
                When I&apos;m not coding or designing, you&apos;ll find me exploring new technologies, 
                experimenting with creative projects, or diving into the latest design trends. 
                I believe that great design comes from understanding both technical possibilities 
                and human needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
