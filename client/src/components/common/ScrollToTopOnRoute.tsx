"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTopOnRoute() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;

    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const timeout = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return null;
}
