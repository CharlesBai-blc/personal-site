/**
 * Custom hook for page load animation state
 * Provides reusable animation state management across components
 */

import { useEffect, useState } from "react";

export function usePageLoad() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded;
}
