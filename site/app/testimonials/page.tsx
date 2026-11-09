import type { Metadata } from "next";
import { business } from "@/content/business";
import { testimonialsCopy } from "@/content/copy/pages";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { GoldDivider } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const t = testimonialsCopy;

export const metadata: Metadata = {
  title: "Testimonials",
  description: t.hero.intro,
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        intro={t.hero.intro}
        crumbs={[{ label: "Testimonials" }]}
      />

      <section className="section-y" aria-labelledby="empty-heading">
        <div className="container-site">
          <Reveal className="relative mx-auto max-w-2xl overflow-hidden rounded-lg border border-line bg-surface-container-lowest p-8 text-center ring-1 ring-gold/30 md:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-primary-soft blur-3xl"
            />
            <div className="relative">
              <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-surface text-primary ring-1 ring-gold/60">
                <Icon name="quote" size={30} />
              </span>
              <GoldDivider className="mt-6" />
              <h2 id="empty-heading" className="type-h2 mt-6 text-on-surface">
                {t.empty.title}
              </h2>
              <p className="type-lead mt-4 text-on-surface-variant">{t.empty.text}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href={business.googleReviewUrl} variant="cta" size="lg" iconAfter="external">
                  {t.empty.cta}
                </ButtonLink>
                <WhatsAppButton
                  variant="ghost"
                  size="lg"
                  message="Hello Smietz Beauty Hub, I would like to share feedback about my visit."
                >
                  {t.empty.secondary}
                </WhatsAppButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title={t.cta.title} text={t.cta.text} label="Book on WhatsApp" />
    </>
  );
}
