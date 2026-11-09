"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { business } from "@/content/business";
import { isActive, mainNav } from "@/content/navigation";
import { cn } from "@/lib/cn";
import { WhatsAppButton } from "../ui/Button";
import { Icon } from "../ui/icons";
import { Logo } from "./Logo";
import { MobileDrawer } from "./MobileDrawer";

/** Glass sticky header: 72px, condenses on scroll. */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "glass fixed inset-x-0 top-0 z-50 border-b border-gold/20 transition-[height,box-shadow] duration-300",
          scrolled ? "h-16 shadow-soft" : "h-[72px]",
        )}
      >
        <div className="container-site flex h-full items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={`${business.name} home`}
            className="flex shrink-0 items-center"
          >
            <Logo
              size="md"
              priority
              className={cn("transition-[height] duration-300", scrolled && "h-12!")}
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-8">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "type-label rounded-sm py-2 transition-colors underline-offset-[10px] decoration-gold decoration-2",
                        active
                          ? "text-primary underline"
                          : "text-on-surface hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={business.phone.href}
              aria-label={`Call ${business.phone.display}`}
              className="flex size-11 items-center justify-center rounded-full bg-surface-container text-primary transition-colors hover:bg-primary hover:text-on-primary xl:hidden"
            >
              <Icon name="phone" size={20} />
            </a>
            <a
              href={business.phone.href}
              className="hidden items-center gap-2 type-label text-on-surface hover:text-primary xl:flex"
            >
              <Icon name="phone" size={18} className="text-primary" />
              {business.phone.display}
            </a>
            <WhatsAppButton size="sm" className="hidden lg:inline-flex">
              Book Appointment
            </WhatsAppButton>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
              className="flex size-11 items-center justify-center rounded-full bg-primary text-on-primary lg:hidden"
            >
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </header>
      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
