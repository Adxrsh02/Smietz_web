"use client";

import { useCallback, useEffect, useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./icons";

export type AccordionItem = {
  /** Stable id. Also used as the URL hash target (e.g. #hair-spa). */
  id: string;
  title: ReactNode;
  /** Small leading content (icon, count). */
  lead?: ReactNode;
  content: ReactNode;
};

type Props = {
  items: AccordionItem[];
  /** Only one panel open at a time (default). */
  single?: boolean;
  defaultOpen?: string[];
  /** Open (and scroll to) the item matching location.hash on load / hash change. */
  hashOpen?: boolean;
  /** Visual style: `card` for FAQ rows, `catalogue` for large category rows. */
  variant?: "card" | "catalogue";
  className?: string;
};

/** The one accordion used across the site (FAQs and the services catalogue). */
export function Accordion({
  items,
  single = true,
  defaultOpen = [],
  hashOpen = false,
  variant = "card",
  className,
}: Props) {
  const uid = useId();
  const [open, setOpen] = useState<string[]>(defaultOpen);

  const toggle = useCallback(
    (id: string) => {
      setOpen((cur) =>
        cur.includes(id)
          ? cur.filter((x) => x !== id)
          : single
            ? [id]
            : [...cur, id],
      );
    },
    [single],
  );

  useEffect(() => {
    if (!hashOpen) return;
    const apply = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (hash && items.some((i) => i.id === hash)) {
        setOpen((cur) => (cur.includes(hash) ? cur : single ? [hash] : [...cur, hash]));
        requestAnimationFrame(() =>
          document.getElementById(hash)?.scrollIntoView({ block: "start" }),
        );
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [hashOpen, items, single]);

  return (
    <div className={cn("flex flex-col", variant === "card" ? "gap-3" : "gap-4", className)}>
      {items.map((item) => {
        const isOpen = open.includes(item.id);
        const panelId = `${uid}-${item.id}-panel`;
        const buttonId = `${uid}-${item.id}-button`;
        return (
          <div
            key={item.id}
            id={item.id}
            className={cn(
              "overflow-hidden border border-line bg-surface-container-lowest transition-colors",
              variant === "card" ? "rounded-tile" : "rounded-card",
              isOpen && "border-gold/60",
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className={cn(
                  "flex w-full items-center gap-4 text-left",
                  variant === "card" ? "px-5 py-4 md:px-6" : "px-5 py-5 md:px-7",
                )}
              >
                {item.lead ? <span className="shrink-0">{item.lead}</span> : null}
                <span
                  className={cn(
                    "flex-1 text-on-surface",
                    variant === "card" ? "type-title" : "type-h3",
                  )}
                >
                  {item.title}
                </span>
                <Icon
                  name="chevron-down"
                  size={22}
                  className={cn(
                    "shrink-0 text-primary transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div
                  className={cn(
                    "border-t border-line/70",
                    variant === "card" ? "px-5 py-4 md:px-6" : "px-5 py-5 md:px-7",
                  )}
                >
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
