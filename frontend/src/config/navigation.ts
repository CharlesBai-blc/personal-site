/**
 * Navigation configuration
 * Centralized navigation links for maintainability and consistency
 */

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "about" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/blog", label: "blog" },
  { href: "/contact", label: "contact" },
];

export const NAV_ANIMATION_DELAYS = {
  about: "500ms",
  portfolio: "600ms",
  blog: "700ms",
  contact: "800ms",
} as const;
