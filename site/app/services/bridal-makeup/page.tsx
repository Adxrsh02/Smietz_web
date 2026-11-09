import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/content/business";
import { bridalCopy } from "@/content/copy/pages";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { WhatsAppButton } from "@/components/ui/Button";
import { Badge, SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";

const b = bridalCopy;

export const metadata: Metadata = {
  title: "Bridal & Makeup",
  description: b.hero.intro,
};

export default function BridalPage() {
  return (
    <>
      <PageHero
        eyebrow={b.hero.eyebrow}
        title={b.hero.title}
        intro={b.hero.intro}
        image={b.hero.image}
        crumbs={[{ label: "Services", href: "/services" }, { label: "Bridal & Makeup" }]}
        actions={
          <WhatsAppButton size="lg" service="bridal and pre-bridal packages">
            {b.hero.cta}
          </WhatsAppButton>
        }
      >
        <ul className="mt-7 flex flex-wrap gap-2">
          <li><Badge icon="award" tone="green">{business.experience.label}</Badge></li>
          <li><Badge icon="gem" tone="green">Bridal & Pre-Bridal Packages</Badge></li>
          <li><Badge icon="heart" tone="green">{business.consultation}</Badge></li>
        </ul>
      </PageHero>

      <section className="section-y" aria-labelledby="packages-heading">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl rounded-lg border border-line bg-surface-container-lowest p-8 text-center ring-1 ring-gold/30 md:p-12">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-surface text-primary ring-1 ring-gold/50">
              <Icon name="gem" size={26} />
            </span>
            <p className="type-eyebrow mt-5 text-primary">{b.packages.eyebrow}</p>
            <h2 id="packages-heading" className="type-h2 mt-3 text-on-surface">
              {b.packages.title}
            </h2>
            <p className="type-lead mt-4 text-on-surface-variant">{b.packages.text}</p>
            <WhatsAppButton service="bridal and pre-bridal packages" size="lg" className="mt-7">
              {b.packages.cta}
            </WhatsAppButton>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface-container-low" aria-labelledby="prep-heading">
        <div className="container-site">
          <SectionHeading id="prep-heading" eyebrow={b.prep.eyebrow} title={b.prep.title} intro={b.prep.intro} />
          <ul className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {b.prep.items.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 90} className="h-full">
                  <Link
                    href={item.href}
                    className="card-lift group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface-container-lowest"
                  >
                    <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                      <SiteImage name={item.image} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 33vw, 92vw" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="type-h3 text-on-surface">{item.title}</h3>
                      <p className="type-body mt-1.5 flex-1 text-on-surface-variant">{item.text}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 type-label text-primary">
                        Explore
                        <Icon name="arrow-right" size={16} className="transition-transform motion-safe:group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y" aria-labelledby="bridal-gallery-heading">
        <div className="container-site">
          <SectionHeading id="bridal-gallery-heading" eyebrow={b.gallery.eyebrow} title={b.gallery.title} />
          <div className="mt-10">
            <GalleryGrid
              columns="four"
              items={b.gallery.items.map((i) => ({ ...i, categoryLabel: "Bridal" }))}
            />
          </div>
        </div>
      </section>

      <CtaBand title={b.cta.title} text={b.cta.text} label={b.cta.label} service="a bridal consultation" />
    </>
  );
}
