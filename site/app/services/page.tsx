import type { Metadata } from "next";
import { servicesCopy } from "@/content/copy/pages";
import { serviceCategories } from "@/content/services";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { CategoryTile } from "@/components/services/ServiceCards";
import { ServiceCatalogue } from "@/components/services/ServiceCatalogue";
import { WhatsAppButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const s = servicesCopy;

export const metadata: Metadata = {
  title: "All Services",
  description: s.hero.intro,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        intro={s.hero.intro}
        crumbs={[{ label: "All Services" }]}
      />

      <section className="section-y" aria-labelledby="categories-heading">
        <div className="container-site">
          <SectionHeading id="categories-heading" eyebrow={s.categories.eyebrow} title={s.categories.title} />
          <ul className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <li key={cat.id}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <CategoryTile id={cat.id} index={i} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-site">
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-lg bg-primary-dark p-8 text-center text-white ring-1 ring-gold/40 md:flex-row md:p-10 md:text-left">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-gold/50">
              <Icon name="heart" size={26} className="text-primary-fixed" />
            </span>
            <div className="flex-1">
              <p className="type-eyebrow text-primary-fixed">{s.consult.eyebrow}</p>
              <h2 className="type-h2 mt-2 text-white">{s.consult.title}</h2>
              <p className="type-body mt-2 text-white/85">{s.consult.text}</p>
            </div>
            <WhatsAppButton
              message="Hello Smietz Beauty Hub, I would like to book a Free Skin Consultation."
              className="w-full md:w-auto"
            >
              {s.consult.cta}
            </WhatsAppButton>
          </Reveal>
        </div>
      </section>

      <section className="section-y" aria-labelledby="catalogue-heading">
        <div className="container-site">
          <SectionHeading
            id="catalogue-heading"
            eyebrow={s.catalogue.eyebrow}
            title={s.catalogue.title}
            intro={s.catalogue.intro}
          />
          <div className="mx-auto mt-10 max-w-4xl">
            <ServiceCatalogue />
          </div>
        </div>
      </section>

      <CtaBand title={s.cta.title} text={s.cta.text} label="Chat on WhatsApp" />
    </>
  );
}
