/**
 * Utility functions
 * Common utility functions including className merging
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes with proper conflict resolution
 * Reasons for separate utility:
 * 1. Reusability: Used across all components for consistent className handling
 * 2. Best practice: Standard pattern in Next.js/React projects using Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
