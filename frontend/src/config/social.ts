/**
 * Social media links configuration
 * Centralized social links for easy updates and consistency
 */

export interface SocialLink {
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/charles-bai06" },
  { label: "GITHUB", href: "https://github.com/CharlesBai-blc" },
];
