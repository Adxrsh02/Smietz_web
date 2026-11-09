import type { Metadata } from "next";
import Link from "next/link";
import { notFoundCopy } from "@/content/copy/pages";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/icons";
import { GoldDivider } from "@/components/ui/primitives";
import { SiteImage } from "@/components/ui/SiteImage";

const n = notFoundCopy;

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

const pathways: { label: string; href: string; icon: IconName }[] = [
  { label: "Skin Care & Facials", href: "/services/skin-care-facials", icon: "leaf" },
  { label: "Hair Care & Styling", href: "/services/hair-care", icon: "scissors" },
  { label: "Advanced Skin Care", href: "/services/advanced-skin-care", icon: "shield" },
  { label: "Bridal & Makeup", href: "/services/bridal-makeup", icon: "gem" },
  { label: "Contact & Booking", href: "/contact", icon: "pin" },
];

export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-surface-container-low to-background">
      <div className="container-site section-y mx-auto max-w-3xl text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-surface-container-lowest text-primary shadow-soft ring-1 ring-gold/50">
          <Icon name="leaf" size={30} />
        </span>
        <p className="type-display mt-6 text-primary-dark">{n.eyebrow}</p>
        <GoldDivider className="mt-4" />
        <h1 className="type-h1 mt-6 text-on-surface">{n.title}</h1>
        <p className="type-lead mx-auto mt-4 max-w-xl text-on-surface-variant">{n.text}</p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" variant="primary" size="lg" icon="home">
            Return to Home
          </ButtonLink>
          <ButtonLink href="/services" variant="ghost" size="lg">
            Explore Our Services
          </ButtonLink>
        </div>
        <div className="mt-4 flex justify-center">
          <WhatsAppButton variant="cta" size="md">
            Need help? Message us on WhatsApp
          </WhatsAppButton>
        </div>

        <div className="relative mt-12 aspect-[16/7] overflow-hidden rounded-lg ring-1 ring-gold/40">
          <SiteImage name={n.image} fill sizes="(min-width: 768px) 720px, 92vw" />
        </div>

        <h2 className="type-eyebrow mt-12 text-primary">Suggested Pathways</h2>
        <ul className="mx-auto mt-4 grid max-w-xl gap-3 text-left">
          {pathways.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="card-lift flex min-h-14 items-center gap-4 rounded-tile border border-line bg-surface-container-lowest px-4 py-3"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Icon name={p.icon} size={20} />
                </span>
                <span className="type-title flex-1 text-on-surface">{p.label}</span>
                <Icon name="arrow-up-right" size={18} className="text-primary" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
