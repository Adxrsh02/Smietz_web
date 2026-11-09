"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { getImage, type ImageKey } from "@/content/images";
import { whatsappUrl } from "@/lib/whatsapp";
import { useModal } from "@/lib/useModal";
import { Badge } from "../ui/primitives";
import { Icon, WhatsAppIcon } from "../ui/icons";

export type LightboxItem = {
  image: ImageKey;
  title: string;
  category?: string;
};

type Props = {
  items: LightboxItem[];
  /** Index of the open item, or null when closed. */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

/** Accessible lightbox: focus trap, Escape, arrow keys, swipe, real image and alt text. */
export function Lightbox({ items, index, onClose, onIndexChange }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const open = index !== null;
  const count = items.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      if (index === null || count === 0) return;
      onIndexChange((index + dir + count) % count);
    },
    [index, count, onIndexChange],
  );

  useModal({ active: open, containerRef: ref, onClose, onArrow: go });

  if (index === null || !items[index]) return null;
  const item = items[index];
  const img = getImage(item.image);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-inverse-surface/90 backdrop-blur-sm"
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={`${item.title}, image ${index + 1} of ${count}`}
        tabIndex={-1}
        onTouchStart={(e) => {
          touchStart.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStart.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStart.current;
          touchStart.current = null;
          if (Math.abs(dx) > 50) go(dx > 0 ? -1 : 1);
        }}
        className="relative flex max-h-[100dvh] w-full max-w-5xl flex-col gap-4 p-4 outline-none md:p-8"
      >
        <div className="flex items-center justify-between gap-3 text-white">
          <p className="type-label" aria-live="polite">
            {index + 1} of {count}
          </p>
          <button
            type="button"
            onClick={onClose}
            data-autofocus
            aria-label="Close image viewer"
            className="flex size-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
          >
            <Icon name="close" size={22} />
          </button>
        </div>

        <div className="relative min-h-0 flex-1">
          <div className="relative mx-auto h-[52dvh] w-full md:h-[62dvh]">
            <Image
              key={item.image}
              src={img.src}
              alt={img.alt}
              fill
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              className="rounded-card object-contain"
            />
          </div>
          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="absolute top-1/2 left-1 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-on-surface shadow-float transition-colors hover:bg-white md:-left-2"
              >
                <Icon name="chevron-left" size={24} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute top-1/2 right-1 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-on-surface shadow-float transition-colors hover:bg-white md:-right-2"
              >
                <Icon name="chevron-right" size={24} />
              </button>
            </>
          ) : null}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 rounded-card bg-surface p-4 sm:flex-row sm:items-center md:p-5">
          <div>
            {item.category ? <Badge>{item.category}</Badge> : null}
            <p className="type-h3 mt-1.5 text-on-surface">{item.title}</p>
          </div>
          <a
            href={whatsappUrl({
              message: `Hello Smietz Beauty Hub, I am enquiring about the "${item.title}" look from your gallery.`,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center gap-2.5 rounded-full bg-cta px-6 font-semibold text-on-cta transition-colors hover:bg-cta-hover"
          >
            <WhatsAppIcon size={20} />
            Enquire About This Look
          </a>
        </div>
      </div>
    </div>
  );
}
