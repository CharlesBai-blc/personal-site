'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const router = useRouter();

  const navItems = [
    { name: 'about', href: '/about' },
    { name: 'portfolio', href: '/portfolio' },
    { name: 'blog', href: '/blog' },
    { name: 'contact', href: '/contact' },
  ];

  useEffect(() => {
    navItems.forEach((item) => {
      router.prefetch(item.href);
    });
    router.prefetch('/'); // Prefetch home page
  }, [router]);

  const handleMouseEnter = (href: string, name: string) => {
    setHoveredButton(name);
    router.prefetch(href);
  };

  return (
    <div className="min-h-screen relative">
      {/* Navigation - Top Right */}
      <nav className="fixed top-8 right-8 sm:top-10 sm:right-10 flex gap-8 z-50">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            prefetch={true}
            onMouseEnter={() => handleMouseEnter(item.href, item.name)}
            onMouseLeave={() => setHoveredButton(null)}
            className={`
              relative
              font-light text-foreground
              transition-all duration-300 ease-out
              cursor-pointer
              text-sm tracking-widest
              lowercase
              ${hoveredButton === item.name
                ? 'opacity-100 scale-105'
                : 'opacity-70 hover:opacity-90'
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
        prefetch={true}
        className="fixed top-6 left-6 z-50 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-4 py-2 hover:bg-white/30 transition-all duration-300 shadow-lg"
      >
        <span className="font-mono text-xs text-foreground opacity-80">cd ..</span>
      </Link>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto space-y-12 w-full">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              contact
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              let&apos;s connect
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-light text-foreground mb-2 text-sm">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:bg-white/20 transition-all font-light"
                  placeholder="your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-light text-foreground mb-2 text-sm">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:bg-white/20 transition-all font-light"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-light text-foreground mb-2 text-sm">
                  message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:bg-white/20 transition-all font-light resize-none"
                  placeholder="tell me about your project or how I can help..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-6 py-3 font-light text-foreground hover:bg-white/30 transition-all duration-300"
              >
                send message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-lg">
            <div className="space-y-4">
              <div>
                <span className="font-mono text-xs text-foreground opacity-60 block mb-1">email</span>
                <a href="mailto:your.email@example.com" className="font-light text-foreground hover:opacity-70 transition-opacity">
                  your.email@example.com
                </a>
              </div>
              <div>
                <span className="font-mono text-xs text-foreground opacity-60 block mb-1">linkedin</span>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="font-light text-foreground hover:opacity-70 transition-opacity">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
