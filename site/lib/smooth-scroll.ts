import type Lenis from "lenis";

// Holds the single Lenis instance so non-React code (the modal hook, anchor
// handling) can pause or drive it. Null when Lenis is off (reduced motion / SSR).
let instance: Lenis | null = null;

export function setSmoothScroll(lenis: Lenis | null) {
  instance = lenis;
}

export function getSmoothScroll(): Lenis | null {
  return instance;
}

/** Pause smooth scrolling (drawer / lightbox open). */
export function stopSmoothScroll() {
  instance?.stop();
}

/** Resume smooth scrolling. */
export function startSmoothScroll() {
  instance?.start();
}

/** Pixels to leave above an anchor target: the fixed header plus any sticky section nav. */
export function anchorOffset(): number {
  const header = document.querySelector("header");
  const sticky = document.querySelector<HTMLElement>("nav.sticky");
  return (header?.getBoundingClientRect().height ?? 72) + (sticky?.offsetHeight ?? 0) + 8;
}

/** Scroll to an element id (no leading #) with the header offset. Returns false if not found. */
export function scrollToId(id: string, immediate = false): boolean {
  const target = document.getElementById(decodeURIComponent(id));
  if (!target) return false;
  const lenis = instance;
  if (lenis) {
    // Lenis already subtracts the element's CSS scroll-padding-top, so only add the difference.
    const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    lenis.scrollTo(target, { offset: -(anchorOffset() - padding), immediate });
  } else {
    const y = target.getBoundingClientRect().top + window.scrollY - anchorOffset();
    window.scrollTo({ top: y, behavior: immediate ? "instant" : "smooth" });
  }
  return true;
}
