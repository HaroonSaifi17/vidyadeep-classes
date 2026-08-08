import { useState, useEffect } from "react";

export function useScrollDirection(threshold = 10) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      // Always show at the top of the page
      if (scrollY < 50) {
        setIsVisible(true);
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
        return;
      }

      const diff = scrollY - lastScrollY;

      if (Math.abs(diff) >= threshold) {
        if (diff > 0) {
          // Scrolling down -> hide navbar
          setIsVisible(false);
        } else {
          // Scrolling up -> show navbar
          setIsVisible(true);
        }
        lastScrollY = scrollY;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isVisible;
}
