import type { Metadata } from "next";
import { Inter, Poppins, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charles Bai",
  description:
    "Welcome to my personal website. Discover my story, passions, and professional journey.",
  icons: {
    icon: [{ url: "/cblogo.png", type: "image/png" }],
    apple: [{ url: "/cblogo.png", type: "image/png" }],
    shortcut: "/cblogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cblogobw.png" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${spaceMono.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
