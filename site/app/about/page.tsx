import type { Metadata } from "next";
import { aboutCopy } from "@/content/copy/about";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
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

      <section className="section-y">
        <div className="container-site grid items-center gap-10 md:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-gold/40 shadow-float">
              <SiteImage name={a.story.image} fill sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 92vw" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="type-eyebrow text-primary">{a.story.eyebrow}</p>
            <h2 className="type-h2 mt-3 text-on-surface">{a.story.title}</h2>
            <blockquote className="mt-6 border-l-2 border-gold pl-5 font-display text-xl leading-8 text-primary-dark italic">
              {a.story.quote}
            </blockquote>
            {a.story.paragraphs.map((p) => (
              <p key={p} className="type-body mt-5 text-on-surface-variant">
                {p}
              </p>
            ))}
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

      <section className="section-y bg-surface-container-low" aria-labelledby="corners-heading">
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

      <CtaBand
        eyebrow={a.cta.eyebrow}
        title={a.cta.title}
        text={a.cta.text}
        label="Book on WhatsApp"
      />
    </>
  );
}
