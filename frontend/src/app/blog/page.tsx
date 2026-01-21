"use client";

import { useState } from "react";
import Nav from "../../components/Nav";
import Logo from "../../components/Logo";

export default function Blog() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const posts = [
    {
      title: "The Future of Web Design",
      excerpt:
        "Exploring emerging trends and technologies that are shaping the future of digital experiences.",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Building Better User Experiences",
      excerpt:
        "A deep dive into user-centered design principles and how they can transform your projects.",
      date: "February 28, 2024",
      readTime: "7 min read",
    },
    {
      title: "Minimalism in Digital Design",
      excerpt:
        "Why less is often more when it comes to creating impactful and memorable digital interfaces.",
      date: "February 10, 2024",
      readTime: "4 min read",
    },
    {
      title: "The Art of Code",
      excerpt:
        "Exploring the creative side of programming and how code can be both functional and beautiful.",
      date: "January 22, 2024",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Logo />
      <Nav />

      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-12 w-full">
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              blog
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              thoughts and insights
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredPost(index)}
                onMouseLeave={() => setHoveredPost(null)}
                className={`
                  bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-6 shadow-lg
                  transition-all duration-300 cursor-pointer
                  ${hoveredPost === index ? "bg-white/30 scale-[1.02]" : ""}
                `}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-light text-foreground font-display flex-1">
                    {post.title}
                  </h3>
                </div>
                <p className="text-foreground leading-relaxed font-light text-sm mb-4 opacity-80">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 font-mono text-xs text-foreground opacity-60">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
