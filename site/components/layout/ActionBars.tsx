import { business } from "@/content/business";
import { whatsappUrl } from "@/lib/whatsapp";
import { Icon, WhatsAppIcon } from "../ui/icons";

/** Fixed Call + WhatsApp bar. Mobile only (below md). */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="glass fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-gold/25 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <a
        href={business.phone.href}
        className="flex h-12 items-center justify-center gap-2 rounded-full border-[1.5px] border-primary type-label text-primary active:bg-primary-soft"
      >
        <Icon name="phone" size={20} />
        Call
      </a>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-cta type-label text-on-cta active:bg-cta-hover"
      >
        <WhatsAppIcon size={20} />
        WhatsApp
      </a>
    </nav>
  );
}

/** Floating WhatsApp button with a muted gold pulse. Hidden on mobile (the bar covers it). */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-float transition-transform hover:scale-105 motion-safe:animate-pulse-gold md:flex"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
