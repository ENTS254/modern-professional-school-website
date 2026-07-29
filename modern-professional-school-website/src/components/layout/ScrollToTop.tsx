import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures each route change starts at the top of the page, and if a hash
 * is present (e.g. /admissions#process) smoothly scrolls to that section.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // slight delay to allow the page content to render first
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
      return () => clearTimeout(timeout);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
