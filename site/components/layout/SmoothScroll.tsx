"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getSmoothScroll, scrollToId, setSmoothScroll } from "@/lib/smooth-scroll";

/**
 * Premium smooth scrolling (Lenis) for mouse and trackpad wheels.
 * - Touch keeps native scrolling (syncTouch is off).
 * - Completely off when the visitor prefers reduced motion.
 * - Paused while the drawer / lightbox is open (see lib/useModal.ts).
 * - Same-page #anchor links glide to their target, offset for the sticky header.
 * - Scrolls to the top on every route change.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  // Create / destroy Lenis (and react to the reduced-motion preference changing).
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const create = () => {
      if (lenis) return;
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true, syncTouch: false, autoRaf: true });
      setSmoothScroll(lenis);
    };
    const destroy = () => {
      lenis?.destroy();
      lenis = null;
      setSmoothScroll(null);
    };
    const sync = () => (query.matches ? destroy() : create());

    sync();
    query.addEventListener("change", sync);
    return () => {
      query.removeEventListener("change", sync);
      destroy();
    };
  }, []);

  // Same-page anchor links: smooth scroll with the header offset.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash || url.hash === "#") {
        return;
      }
      const id = url.hash.slice(1);
      if (!document.getElementById(decodeURIComponent(id))) return;
      e.preventDefault();
      scrollToId(id);
      if (window.location.hash !== url.hash) {
        history.pushState(null, "", url.hash);
        // Let listeners (e.g. the services accordion) react to the new hash.
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    };
    // Capture phase: run before Next's <Link> handler so we control the scroll.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Route change: top of the new page, or its #anchor if the URL has one.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Wait a frame so the new page (and any accordion it opens) has laid out.
      const id = requestAnimationFrame(() => {
        if (!scrollToId(hash, true)) getSmoothScroll()?.scrollTo(0, { immediate: true, force: true });
      });
      return () => cancelAnimationFrame(id);
    }
    const lenis = getSmoothScroll();
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
