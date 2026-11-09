"use client";

import { useMemo, useState } from "react";
import { Lightbox, type LightboxItem } from "./Lightbox";
import { SiteImage } from "../ui/SiteImage";
import { Chip } from "../ui/primitives";
import { Icon } from "../ui/icons";
import type { ImageKey } from "@/content/images";
import { cn } from "@/lib/cn";

export type GridItem = {
  image: ImageKey;
  title: string;
  /** Filter id (must match one of `filters`). */
  category?: string;
  /** Label shown on the thumbnail and in the lightbox. */
  categoryLabel?: string;
};

type Props = {
  items: GridItem[];
  filters?: { id: string; label: string }[];
  columns?: "three" | "four";
};

/** Photo grid with optional category filters and an accessible lightbox. */
export function GalleryGrid({ items, filters, columns = "three" }: Props) {
  const [filter, setFilter] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );
  const lightboxItems: LightboxItem[] = visible.map((i) => ({
    image: i.image,
    title: i.title,
    category: i.categoryLabel,
  }));

  return (
    <div>
      {filters ? (
        <div role="group" aria-label="Filter gallery" className="rail -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:flex-wrap md:justify-center">
          {filters.map((f) => (
            <Chip
              key={f.id}
              active={filter === f.id}
              aria-pressed={filter === f.id}
              onClick={() => {
                setFilter(f.id);
                setOpenIndex(null);
              }}
            >
              {f.label}
            </Chip>
          ))}
        </div>
      ) : null}

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "photo" : "photos"}
      </p>

      <ul
        className={cn(
          "grid grid-cols-2 gap-3 md:gap-5",
          filters && "mt-8",
          columns === "four" ? "md:grid-cols-3 lg:grid-cols-4" : "md:grid-cols-3",
        )}
      >
        {visible.map((item, i) => (
          <li key={`${item.image}-${item.title}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View larger: ${item.title}`}
              aria-haspopup="dialog"
              className="card-lift group block w-full overflow-hidden rounded-card border border-line bg-surface-container-lowest text-left"
            >
              <span className="img-zoom relative block aspect-square overflow-hidden md:aspect-[4/3]">
                <SiteImage
                  name={item.image}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 33vw, 50vw"
                />
                <span className="absolute right-2.5 bottom-2.5 flex size-10 items-center justify-center rounded-full bg-white/90 text-primary ring-1 ring-gold/30">
                  <Icon name="zoom" size={20} />
                </span>
              </span>
              <span className="block p-3.5 md:p-4">
                <span className="type-title block text-on-surface">{item.title}</span>
                {item.categoryLabel ? (
                  <span className="type-small mt-0.5 block text-on-surface-variant">
                    {item.categoryLabel}
                  </span>
                ) : null}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        items={lightboxItems}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </div>
  );
}
