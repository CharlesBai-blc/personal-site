"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="fixed top-6 left-6 z-50 transition-transform duration-300 hover:scale-110"
    >
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-2 shadow-lg">
        <Image
          src="/cblogo.png"
          alt="CBai Logo"
          width={40}
          height={40}
          className="w-10 h-10"
          priority
        />
      </div>
    </Link>
  );
}
