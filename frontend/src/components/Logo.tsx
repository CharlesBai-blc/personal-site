"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="fixed top-6 left-6 z-50 transition-transform duration-300 hover:scale-110"
    >
      <Image
        src="/cblogoblack.png"
        alt="CBai Logo"
        width={40}
        height={40}
        priority
      />
    </Link>
  );
}
