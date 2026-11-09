"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Drives the portrait entrance (see .portrait-* in globals.css): children with
 * `.portrait-media` fade/scale in (1.04 to 1), then `.portrait-caption` slides up.
 * Content is visible by default (SSR, no JS, reduced motion). After hydration the
 * pending state is applied only when the block is below the fold.
 */
export function PortraitReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.75) return; // already in view

    el.classList.add("portrait-pending");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("portrait-in");
          el.classList.remove("portrait-pending");
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
