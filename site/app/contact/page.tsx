import type { Metadata } from "next";
import { business, mapsDirectionsUrl } from "@/content/business";
import { contactCopy } from "@/content/copy/pages";
import { whatsappUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/layout/PageHero";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { Card } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";

const c = contactCopy;

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: c.hero.intro,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        intro={c.hero.intro}
        crumbs={[{ label: "Contact & Booking" }]}
      />

      <section className="pb-14 md:pb-20" aria-label="Contact details and booking form">
        <div className="container-site grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Quick contact */}
          <div className="space-y-5 lg:col-start-1 lg:row-start-1">
            <Reveal className="relative overflow-hidden rounded-lg bg-primary-dark p-6 text-white ring-1 ring-gold/40 md:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 size-52 rounded-full bg-primary/60 blur-2xl"
              />
              <div className="relative">
                <span className="flex size-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-gold/50">
                  <WhatsAppIcon size={26} className="text-primary-fixed" />
                </span>
                <p className="type-eyebrow mt-5 text-primary-fixed">{c.whatsapp.eyebrow}</p>
                <h2 className="type-h2 mt-2 text-white">{c.whatsapp.title}</h2>
                <p className="type-body mt-2 text-white/85">{c.whatsapp.text}</p>
                <WhatsAppButton full size="lg" className="mt-6">
                  Message {business.phone.display}
                </WhatsAppButton>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal>
                <Card lift className="h-full p-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Icon name="phone" size={22} />
                  </span>
                  <h3 className="type-h3 mt-3 text-on-surface">Call</h3>
                  <p className="type-body mt-1 text-on-surface-variant">{business.phone.display}</p>
                  <a
                    href={business.phone.href}
                    className="mt-3 inline-flex min-h-11 items-center gap-1.5 type-label text-primary hover:text-primary-dark"
                  >
                    Call now
                    <Icon name="arrow-up-right" size={16} />
                  </a>
                </Card>
              </Reveal>
              <Reveal delay={80}>
                <Card lift className="h-full p-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Icon name="instagram" size={22} />
                  </span>
                  <h3 className="type-h3 mt-3 text-on-surface">Instagram</h3>
                  <p className="type-body mt-1 text-on-surface-variant">{business.instagram.handle}</p>
                  <a
                    href={business.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 items-center gap-1.5 type-label text-primary hover:text-primary-dark"
                  >
                    View profile
                    <Icon name="arrow-up-right" size={16} />
                  </a>
                </Card>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <Reveal className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <AppointmentForm />
          </Reveal>

          {/* Visit */}
          <div className="space-y-5 lg:col-start-1 lg:row-start-2">
            <Reveal>
              <Card className="p-6">
                <p className="type-eyebrow text-primary">{c.address.eyebrow}</p>
                <h2 className="type-h3 mt-2 text-on-surface">{c.address.title}</h2>
                <address className="type-body mt-3 text-on-surface-variant not-italic">
                  {business.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <ButtonLink href={mapsDirectionsUrl} variant="ghost" size="sm" icon="map" className="mt-4">
                  Get directions
                </ButtonLink>
              </Card>
            </Reveal>

            <Reveal>
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[16/10] overflow-hidden rounded-card ring-1 ring-gold/40"
                aria-label="Open the salon location in Google Maps"
              >
                <SiteImage name="contact-map" fill sizes="(min-width: 1024px) 560px, 92vw" />
                <span className="absolute inset-0 bg-gradient-to-t from-inverse-surface/75 via-transparent to-transparent" />
                <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 text-white">
                  <span className="flex items-center gap-2 type-label">
                    <Icon name="pin" size={20} />
                    {business.location.area}, {business.location.city}
                  </span>
                  <span className="rounded-full bg-white px-4 py-2 type-label text-on-surface">Open Map</span>
                </span>
              </a>
            </Reveal>

            <Reveal>
              <Card className="p-6">
                <p className="type-eyebrow text-primary">{c.hours.eyebrow}</p>
                <h2 className="type-h3 mt-2 text-on-surface">{c.hours.title}</h2>
                <p className="type-body mt-2 flex items-start gap-2.5 text-on-surface-variant">
                  <Icon name="clock" size={20} className="mt-0.5 shrink-0 text-primary" />
                  {business.hours.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <ButtonLink href={business.phone.href} variant="ghost" size="sm" icon="phone">
                    Call
                  </ButtonLink>
                  <a
                    href={whatsappUrl({ message: "Hello Smietz Beauty Hub, could you please share your timings?" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-cta px-5 type-label text-on-cta hover:bg-cta-hover"
                  >
                    <WhatsAppIcon size={18} />
                    WhatsApp
                  </a>
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-4 rounded-card bg-primary-dark p-6 text-white ring-1 ring-gold/40">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-gold/50">
                  <Icon name="heart" size={22} className="text-primary-fixed" />
                </span>
                <div>
                  <h2 className="type-h3 text-white">{c.consult.title}</h2>
                  <p className="type-body mt-1 text-white/85">{c.consult.text}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection eyebrow="Good to Know" title="Frequently Asked Questions" />
      <CtaBand title="Prefer to chat?" text="Message us on WhatsApp and we will take it from there." label="Book on WhatsApp" />
    </>
  );
}
