import Link from "next/link";
import { business } from "@/content/business";
import { homeCopy } from "@/content/copy/home";
import { describe } from "@/content/copy/services";
import { whatsappUrl } from "@/lib/whatsapp";
import { ButtonLink, TextLink, WhatsAppButton } from "../ui/Button";
import { Icon, WhatsAppIcon, isIconName } from "../ui/icons";
import { Badge, Card, IconTile, SectionHeading } from "../ui/primitives";
import { Reveal } from "../ui/Reveal";
import { SiteImage } from "../ui/SiteImage";
import { EnquireLink } from "../services/ServiceCards";

const c = homeCopy;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-container-low via-background to-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-primary-soft blur-3xl"
      />
      <div className="container-site relative grid items-center gap-10 pt-8 pb-14 md:pt-12 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-16 lg:pb-24">
        <div>
          <Badge icon="pin" tone="light">
            {c.hero.eyebrow}
          </Badge>
          <h1 className="type-display mt-5 text-primary-dark">{c.hero.title}</h1>
          <div aria-hidden="true" className="gold-rule mt-6 w-32 [background:linear-gradient(to_right,var(--color-gold),transparent)]" />
          <p className="type-lead mt-6 max-w-xl text-on-surface-variant">{c.hero.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton size="lg">{c.hero.primaryCta}</WhatsAppButton>
            <ButtonLink href="/services" variant="ghost" size="lg" iconAfter="arrow-right">
              {c.hero.secondaryCta}
            </ButtonLink>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-gold/30 rounded-card border border-line bg-surface-container-lowest/80 py-4">
            {c.hero.highlights.map((h) => (
              <div key={h.small} className="px-3 text-center sm:px-5">
                <dt className="type-h3 text-primary-dark">{h.big}</dt>
                <dd className="type-small mt-0.5 text-on-surface-variant">{h.small}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-gold/40 shadow-float">
            <SiteImage
              name={c.hero.image}
              fill
              priority
              sizes="(min-width: 1024px) 540px, 92vw"
            />
            <div className="pointer-events-none absolute inset-3 rounded-[calc(var(--radius-lg)-0.75rem)] ring-1 ring-white/50" />
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-full bg-surface-container-lowest px-5 py-3 shadow-float ring-1 ring-gold/40 md:left-8">
            <Icon name="award" size={22} className="text-primary" />
            <span className="type-label text-on-surface">{business.experience.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function UspStrip() {
  return (
    <section aria-label="Highlights" className="border-y border-gold/25 bg-surface-container-low">
      <ul className="container-site grid grid-cols-2 gap-x-4 gap-y-6 py-8 lg:grid-cols-4">
        {c.usps.map((u) => (
          <li key={u.title} className="flex items-center gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-surface-container-lowest text-primary ring-1 ring-gold/40">
              <Icon name={isIconName(u.icon) ? u.icon : "sparkle"} size={24} />
            </span>
            <span>
              <span className="type-title block text-on-surface">{u.title}</span>
              <span className="type-small block text-on-surface-variant">{u.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ExperienceSection() {
  const e = c.experience;
  return (
    <section className="section-y">
      <div className="container-site grid items-center gap-10 md:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-gold/40 shadow-float">
            <SiteImage name={e.image} fill sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 92vw" />
          </div>
          <div className="absolute -right-2 -bottom-6 flex size-28 flex-col items-center justify-center rounded-full bg-primary-dark text-center text-white ring-4 ring-background md:-right-6 md:size-32">
            <span className="type-h1 leading-none">35</span>
            <span className="type-label-sm mt-1">Years</span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="type-eyebrow text-primary">{e.eyebrow}</p>
          <h2 className="type-h2 mt-3 text-on-surface">{e.title}</h2>
          <blockquote className="mt-6 border-l-2 border-gold pl-5 font-display text-xl leading-8 text-primary-dark italic">
            {e.quote}
          </blockquote>
          {e.paragraphs.map((p) => (
            <p key={p} className="type-body mt-5 text-on-surface-variant">
              {p}
            </p>
          ))}
          <div className="mt-7">
            <ButtonLink href="/about" variant="ghost" iconAfter="arrow-right">
              {e.cta}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FeaturedServices() {
  const f = c.featured;
  return (
    <section className="section-y bg-surface-container-low" aria-labelledby="featured-heading">
      <div className="container-site">
        <SectionHeading id="featured-heading" eyebrow={f.eyebrow} title={f.title} intro={f.intro} />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {f.items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <Link
                  href={item.href}
                  className="card-lift group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface-container-lowest"
                >
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                    <SiteImage name={item.image} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 92vw" />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="type-h3 text-on-surface">{item.title}</h3>
                    <p className="type-body mt-2 flex-1 text-on-surface-variant">{item.text}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 type-label text-primary">
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
  );
}

export function SignatureTreatments() {
  const s = c.signature;
  return (
    <section className="section-y" aria-labelledby="treatments-heading">
      <div className="container-site">
        <SectionHeading id="treatments-heading" eyebrow={s.eyebrow} title={s.title} />
        <ul className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {s.items.map((item, i) => {
            return (
              <li key={item.name}>
                <Reveal delay={i * 90} className="h-full">
                  <Card lift className="group flex h-full flex-col overflow-hidden">
                    <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                      <SiteImage name={item.image} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 33vw, 92vw" />
                    </div>
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <h3 className="type-h3 text-on-surface">{item.name}</h3>
                      <p className="type-body mt-2 flex-1 text-on-surface-variant">{describe(item.name)}</p>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <EnquireLink service={item.name} label="Enquire on WhatsApp" />
                        <TextLink href={item.href}>View</TextLink>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const w = c.why;
  return (
    <section className="section-y bg-surface-container-low" aria-labelledby="why-heading">
      <div className="container-site">
        <SectionHeading id="why-heading" eyebrow={w.eyebrow} title={w.title} />
        <ul className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {w.items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 3) * 80} className="h-full">
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
  );
}

export function BridalBanner() {
  const b = c.bridal;
  return (
    <section className="section-y">
      <div className="container-site">
        <Reveal className="relative isolate overflow-hidden rounded-lg ring-1 ring-gold/40">
          <SiteImage name={b.image} fill sizes="(min-width: 1280px) 1170px, 92vw" className="-z-10" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-inverse-surface/90 via-inverse-surface/70 to-inverse-surface/20" />
          <div className="max-w-xl px-6 py-14 text-white md:px-12 md:py-20">
            <p className="type-eyebrow text-primary-fixed">{b.eyebrow}</p>
            <h2 className="type-h1 mt-3 text-white">{b.title}</h2>
            <p className="type-lead mt-4 text-white/90">{b.text}</p>
            <div className="mt-7">
              <ButtonLink href="/services/bridal-makeup" variant="cta" size="lg" iconAfter="arrow-right">
                {b.cta}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function GalleryTeaser() {
  const g = c.gallery;
  return (
    <section className="section-y bg-surface-container-low" aria-labelledby="gallery-heading">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading id="gallery-heading" eyebrow={g.eyebrow} title={g.title} align="left" />
          <ButtonLink href="/gallery" variant="ghost" iconAfter="arrow-right">
            {g.cta}
          </ButtonLink>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {g.images.map((img, i) => (
            <li key={img}>
              <Reveal delay={(i % 3) * 70}>
                <Link
                  href="/gallery"
                  className="img-zoom group relative block aspect-square overflow-hidden rounded-card ring-1 ring-gold/25 md:aspect-[4/3]"
                  aria-label="Open the gallery"
                >
                  <SiteImage name={img} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 33vw, 50vw" />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2.5 type-label text-primary hover:text-primary-dark"
          >
            <Icon name="instagram" size={22} />
            Follow {business.instagram.handle} on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export function ReviewsTeaser() {
  const r = c.reviews;
  return (
    <section className="section-y" aria-labelledby="reviews-heading">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl rounded-card border border-line bg-surface-container-lowest p-8 text-center ring-1 ring-gold/25 md:p-12">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-surface text-primary ring-1 ring-gold/50">
            <Icon name="quote" size={26} />
          </span>
          <p className="type-eyebrow mt-5 text-primary">{r.eyebrow}</p>
          <h2 id="reviews-heading" className="type-h2 mt-3 text-on-surface">
            {r.title}
          </h2>
          <p className="type-body mt-4 text-on-surface-variant">{r.text}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/testimonials" variant="ghost">
              {r.cta}
            </ButtonLink>
            <a
              href={whatsappUrl({ message: "Hello Smietz Beauty Hub, I would like to share feedback about my visit." })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 type-label text-primary hover:text-primary-dark"
            >
              <WhatsAppIcon size={18} />
              Share feedback on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
