import type { Metadata } from "next";
import { advancedCopy } from "@/content/copy/pages";
import { getCategory } from "@/content/services";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionNav } from "@/components/sections/SectionNav";
import { ServiceGrid } from "@/components/services/ServiceCards";
import { WhatsAppButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";

const a = advancedCopy;

export const metadata: Metadata = {
  title: "Advanced Skin Care",
  description: a.hero.intro,
};

export default function AdvancedSkinCarePage() {
  const treatments = getCategory("advanced-skin-care").groups[0].items;

  return (
    <>
      <PageHero
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        intro={a.hero.intro}
        image={a.hero.image}
        crumbs={[{ label: "Services", href: "/services" }, { label: "Advanced Skin Care" }]}
      />
      <SectionNav
        label="Advanced skin care sections"
        links={[
          { label: "Treatments", href: "#treatments" },
          { label: "Laser & Hair Reduction", href: "#laser-hair-reduction" },
          { label: "Free Consultation", href: "#consultation" },
        ]}
      />

      <section id="treatments" aria-labelledby="treatments-heading" className="section-y">
        <div className="container-site">
          <SectionHeading
            id="treatments-heading"
            eyebrow="Advanced Skin Care"
            title="Our Advanced Treatments"
            intro={`${treatments.length} treatments. Message us on WhatsApp to enquire about any of them.`}
          />
          <div className="mt-12">
            <ServiceGrid names={treatments} />
          </div>
        </div>
      </section>

      <section id="laser-hair-reduction" aria-labelledby="laser-heading" className="section-y bg-surface-container-low">
        <div className="container-site grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-gold/40 shadow-float">
            <SiteImage name={a.laser.image} fill sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 92vw" />
          </Reveal>
          <Reveal delay={100}>
            <p className="type-eyebrow text-primary">{a.laser.eyebrow}</p>
            <h2 id="laser-heading" className="type-h2 mt-3 text-on-surface">
              {a.laser.title}
            </h2>
            <p className="type-lead mt-4 text-on-surface-variant">{a.laser.text}</p>
            <WhatsAppButton service="Laser & Hair Reduction" size="lg" className="mt-7">
              {a.laser.cta}
            </WhatsAppButton>
          </Reveal>
        </div>
      </section>

      <div id="consultation">
        <CtaBand
          eyebrow={a.consult.eyebrow}
          title={a.consult.title}
          text={a.consult.text}
          label={a.consult.cta}
          service="a Free Skin Consultation"
        />
      </div>
    </>
  );
}
