import type { Metadata } from "next";
import { business } from "@/content/business";
import { galleryCopy } from "@/content/copy/pages";
import { categoryLabels, galleryFilters, galleryItems, instagramStrip } from "@/content/gallery";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { Icon } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";

const g = galleryCopy;

export const metadata: Metadata = {
  title: "Gallery",
  description: g.hero.intro,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow={g.hero.eyebrow}
        title={g.hero.title}
        intro={g.hero.intro}
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="pb-14 md:pb-20" aria-label="Photo gallery">
        <div className="container-site">
          <GalleryGrid
            filters={[...galleryFilters]}
            items={galleryItems.map((i) => ({
              image: i.image,
              title: i.title,
              category: i.category,
              categoryLabel: categoryLabels[i.category],
            }))}
          />
        </div>
      </section>

      <section className="section-y bg-surface-container-low" aria-labelledby="instagram-heading">
        <div className="container-site">
          <Reveal className="mx-auto max-w-4xl rounded-lg border border-line bg-surface-container-lowest p-6 ring-1 ring-gold/25 md:p-10">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-full bg-surface text-primary ring-1 ring-gold/50">
                  <Icon name="instagram" size={26} />
                </span>
                <div>
                  <p className="type-eyebrow text-primary">{g.instagram.eyebrow}</p>
                  <h2 id="instagram-heading" className="type-h3 text-on-surface">
                    {business.instagram.handle}
                  </h2>
                </div>
              </div>
              <ButtonLink href={business.instagram.url} variant="primary" size="sm">
                {g.instagram.cta}
              </ButtonLink>
            </div>
            <p className="type-body mt-4 text-on-surface-variant">{g.instagram.text}</p>
            <ul className="mt-6 grid grid-cols-3 gap-2.5 md:gap-4">
              {instagramStrip.map((img) => (
                <li key={img}>
                  <a
                    href={business.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="img-zoom group relative block aspect-square overflow-hidden rounded-tile ring-1 ring-gold/25"
                    aria-label="Open our Instagram profile"
                  >
                    <SiteImage name={img} fill sizes="(min-width: 768px) 240px, 30vw" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand title={g.cta.title} text={g.cta.text} label={g.cta.label} />
    </>
  );
}
