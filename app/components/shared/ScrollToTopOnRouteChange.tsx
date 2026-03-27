"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement) {
      activeElement.blur();
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const rafId = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    const timeoutId = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 120);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
