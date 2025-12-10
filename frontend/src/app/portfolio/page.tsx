'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Portfolio() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with React, featuring real-time inventory management and seamless payment integration.',
      tags: ['React', 'Next.js', 'TypeScript'],
    },
    {
      title: 'Design System',
      description: 'Comprehensive design system for a SaaS platform, improving consistency and developer productivity across teams.',
      tags: ['Design', 'Figma', 'React'],
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      tags: ['React Native', 'TypeScript', 'Security'],
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization dashboard with real-time metrics and customizable reporting features.',
      tags: ['React', 'D3.js', 'Data Visualization'],
    },
  ];

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
        <div className="max-w-4xl mx-auto space-y-12 w-full">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              portfolio
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              selected projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`
                  bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-6 shadow-lg
                  transition-all duration-300
                  ${hoveredProject === index ? 'bg-white/30 scale-105' : ''}
                `}
              >
                <h3 className="text-xl font-light text-foreground mb-3 font-display">
                  {project.title}
                </h3>
                <p className="text-foreground leading-relaxed font-light text-sm mb-4 opacity-80">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="font-mono text-xs text-foreground opacity-60 bg-white/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
