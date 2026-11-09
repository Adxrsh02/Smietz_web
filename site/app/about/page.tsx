import type { Metadata } from "next";
import { aboutCopy } from "@/content/copy/about";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ExpertName, ExpertPortrait } from "@/components/sections/ExpertPortrait";
import { Icon, isIconName } from "@/components/ui/icons";
import { Card, IconTile, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutCopy.hero.intro,
};

const a = aboutCopy;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        intro={a.hero.intro}
        image={a.hero.image}
        crumbs={[{ label: "About Us" }]}
      />

      {/* Sushama: portrait left, text right on desktop; stacked with the portrait first on mobile */}
      <section className="section-y" aria-labelledby="expert-heading">
        <div className="container-site grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <ExpertPortrait variant="plain" />
          <Reveal delay={120}>
            <ExpertName />
            <span id="expert-heading" className="sr-only">
              Sushama, 35 years of beauty expertise
            </span>
            {a.expert.paragraphs.map((p) => (
              <p key={p} className="type-body mt-6 text-on-surface-variant first-of-type:mt-7">
                {p}
              </p>
            ))}
            {/* Decorative signature only */}
            <p
              aria-hidden="true"
              className="font-script mt-8 -rotate-2 text-6xl leading-none text-primary-dark select-none md:text-7xl"
            >
              Sushama
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface-container-low" aria-labelledby="focus-heading">
        <div className="container-site">
          <SectionHeading id="focus-heading" eyebrow={a.focus.eyebrow} title={a.focus.title} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {a.focus.items.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 80} className="h-full">
                  <IconTile
                    icon={isIconName(item.icon) ? item.icon : "sparkle"}
                    title={item.title}
                    text={item.text}
                    className="h-full"
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <Reveal>
            <Card className="mx-auto flex max-w-3xl flex-col items-center gap-4 p-8 text-center ring-1 ring-gold/25 md:p-12">
              <span className="flex size-14 items-center justify-center rounded-full bg-surface text-primary ring-1 ring-gold/50">
                <Icon name="heart" size={26} />
              </span>
              <p className="type-eyebrow text-primary">{a.consult.eyebrow}</p>
              <h2 className="type-h2 text-on-surface">{a.consult.title}</h2>
              <p className="type-lead text-on-surface-variant">{a.consult.text}</p>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Our Salon: the real reception photo moved here from Home */}
      <section className="section-y bg-surface-container-low" aria-labelledby="salon-heading">
        <div className="container-site grid items-center gap-10 md:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 md:order-1">
            <p className="type-eyebrow text-primary">{a.salon.eyebrow}</p>
            <h2 id="salon-heading" className="type-h2 mt-3 text-on-surface">
              {a.salon.title}
            </h2>
            <div
              aria-hidden="true"
              className="gold-rule mt-4 w-28 [background:linear-gradient(to_right,var(--color-gold),transparent)]"
            />
            <p className="type-body mt-6 text-on-surface-variant">{a.salon.text}</p>
          </Reveal>
          <Reveal delay={100} className="order-1 mx-auto w-full max-w-md md:order-2 md:max-w-none">
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-lg shadow-float ring-1 ring-gold/40">
              <SiteImage
                name={a.salon.image}
                fill
                sizes="(min-width: 1024px) 448px, (min-width: 768px) 45vw, 92vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y" aria-labelledby="corners-heading">
        <div className="container-site">
          <SectionHeading id="corners-heading" eyebrow={a.corners.eyebrow} title={a.corners.title} />
          <ul className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {a.corners.items.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 90}>
                  <figure className="card-lift group overflow-hidden rounded-card border border-line bg-surface-container-lowest">
                    <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                      <SiteImage name={item.image} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 33vw, 92vw" />
                    </div>
                    <figcaption className="type-title p-4 text-on-surface">{item.title}</figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand eyebrow={a.cta.eyebrow} title={a.cta.title} text={a.cta.text} label="Book on WhatsApp" />
    </>
  );
}
