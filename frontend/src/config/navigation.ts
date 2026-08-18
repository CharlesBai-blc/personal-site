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
];

export const NAV_ANIMATION_DELAYS = {
  about: "500ms",
  portfolio: "600ms",
} as const;
