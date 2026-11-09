"use client";

import { useEffect, useRef, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type Options = {
  active: boolean;
  containerRef: RefObject<HTMLElement | null>;
  onClose: () => void;
  /** Called for ArrowLeft / ArrowRight (lightbox). */
  onArrow?: (direction: -1 | 1) => void;
};

/**
 * Shared modal behaviour: focus trap, Escape to close, optional arrow keys,
 * body scroll lock, and focus restoration to the trigger on close.
 */
export function useModal({ active, containerRef, onClose, onArrow }: Options) {
  // Keep the latest callbacks in refs so the effect below only runs on open/close.
  const onCloseRef = useRef(onClose);
  const onArrowRef = useRef(onArrow);
  useEffect(() => {
    onCloseRef.current = onClose;
    onArrowRef.current = onArrow;
  });

  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Lock body scroll without layout shift.
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    const focusables = () =>
      container
        ? Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
            (el) => el.offsetParent !== null || el === document.activeElement,
          )
        : [];

    // Move focus into the dialog.
    const initial = container?.querySelector<HTMLElement>("[data-autofocus]") ?? focusables()[0];
    (initial ?? container)?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (onArrowRef.current && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        e.preventDefault();
        onArrowRef.current(e.key === "ArrowLeft" ? -1 : 1);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) {
        e.preventDefault();
        container?.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;
      if (e.shiftKey && (current === first || !container?.contains(current))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (current === last || !container?.contains(current))) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus?.();
    };
  }, [active, containerRef]);
}
