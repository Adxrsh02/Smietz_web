"use client";

import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { business } from "@/content/business";
import { drawerNav, isActive } from "@/content/navigation";
import { cn } from "@/lib/cn";
import { useModal } from "@/lib/useModal";
import { CallButton, WhatsAppButton } from "../ui/Button";
import { Icon } from "../ui/icons";
import { Logo } from "./Logo";

type Props = {
  open: boolean;
  onClose: () => void;
};

/** Accessible slide-in menu: focus trap, Escape, aria-modal, body scroll lock. */
export function MobileDrawer({ open, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useModal({ active: open, containerRef: ref, onClose });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-inverse-surface/50 backdrop-blur-[2px]"
      />
      <div
        ref={ref}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}
        className="absolute inset-y-0 right-0 flex w-[min(24rem,92vw)] flex-col bg-background shadow-float outline-none motion-safe:animate-drawer-in"
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-gold/20 px-5">
          <Link prefetch={false} href="/" onClick={onClose} aria-label={`${business.name} home`}>
            <Logo size="md" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            data-autofocus
            aria-label="Close menu"
            className="flex size-11 items-center justify-center rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high"
          >
            <Icon name="close" size={22} />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-3">
          <ul>
            {drawerNav.map((item) => {
              const active = isActive(pathname, item.href);
              const isSub = item.href.startsWith("/services/");
              return (
                <li key={item.href}>
                  <Link prefetch={false}
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center justify-between rounded-tile px-4 py-3 type-title transition-colors",
                      isSub && "ml-4 type-body font-medium",
                      active
                        ? "bg-primary-soft text-primary-dark"
                        : "text-on-surface hover:bg-surface-container-low",
                    )}
                  >
                    {item.label}
                    <Icon name="chevron-right" size={18} className="text-outline" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-gold/20 p-5">
          <WhatsAppButton full onClick={onClose}>
            Book Appointment
          </WhatsAppButton>
          <CallButton full />
          <p className="type-small pt-1 text-center text-on-surface-variant">
            {business.experience.label} · {business.location.area}
          </p>
        </div>
      </div>
    </div>
  );
}
