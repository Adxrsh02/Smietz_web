import type { Metadata } from "next";
import { skinCopy } from "@/content/copy/pages";
import { describe } from "@/content/copy/services";
import { getCategory } from "@/content/services";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionNav } from "@/components/sections/SectionNav";
import { BleachAreaSelector } from "@/components/services/BleachAreaSelector";
import { HandFootSection } from "@/components/services/HandFootSection";
import { FeatureCard, ServiceGrid } from "@/components/services/ServiceCards";
import { WhatsAppButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

const s = skinCopy;

export const metadata: Metadata = {
  title: "Skin Care & Facials",
  description: s.hero.intro,
};

export default function SkinCarePage() {
  const skin = getCategory("skin-care");
  const [bleach, cleanUps] = skin.groups;
  const facials = getCategory("facials").groups[0].items;
  const featured = facials.filter((f) => s.featuredFacials.includes(f.name));
  const rest = facials.filter((f) => !s.featuredFacials.includes(f.name));

  return (
    <>
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        intro={s.hero.intro}
        image={s.hero.image}
        crumbs={[{ label: "Services", href: "/services" }, { label: "Skin Care & Facials" }]}
      />
      <SectionNav
        label="Skin care sections"
        links={[
          { label: "Bleach & D-Tan", href: "#bleach-dtan" },
          { label: "Clean-Ups", href: "#clean-ups" },
          { label: "Facials", href: "#facials" },
          { label: "Hand & Foot Care", href: "#hand-foot-care" },
        ]}
      />

      <div id="skin-care">
        <section id="bleach-dtan" aria-labelledby="bleach-heading" className="section-y">
          <div className="container-site grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="type-eyebrow text-primary">Skin Care</p>
              <h2 id="bleach-heading" className="type-h2 mt-3 text-on-surface">
                Bleach & D-Tan
              </h2>
              <p className="type-lead mt-3 text-on-surface-variant">
                Bleach and D-Tan are offered for six areas. Choose one to enquire.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <BleachAreaSelector
                areas={bleach.items.map((i) => i.name)}
                description={describe("Bleach / D-Tan")}
              />
            </Reveal>
          </div>
        </section>

        <section id="clean-ups" aria-labelledby="cleanups-heading" className="section-y bg-surface-container-low">
          <div className="container-site">
            <Reveal>
              <p className="type-eyebrow text-primary">Skin Care</p>
              <h2 id="cleanups-heading" className="type-h2 mt-3 text-on-surface">
                Clean-Ups
              </h2>
              <p className="type-lead mt-2 max-w-2xl text-on-surface-variant">Five clean-ups to choose from.</p>
            </Reveal>
            <ServiceGrid names={cleanUps.items} className="mt-8" />
          </div>
        </section>
      </div>

      <section id="facials" aria-labelledby="facials-heading" className="section-y">
        <div className="container-site">
          <Reveal>
            <p className="type-eyebrow text-primary">Facials</p>
            <h2 id="facials-heading" className="type-h2 mt-3 text-on-surface">
              Facials
            </h2>
            <p className="type-lead mt-2 max-w-2xl text-on-surface-variant">Ten facials, from Tan Clean to Smietz Signature.</p>
          </Reveal>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6">
            {featured.map((f) => (
              <li key={f.name}>
                <FeatureCard
                  image={f.name === "Smietz Signature Facial" ? "home-signature-facial" : "service-facials"}
                  name={f.name}
                  tag={f.tag}
                  description={describe(f.name)}
                  service={f.tag ? `${f.name} (${f.tag})` : f.name}
                />
              </li>
            ))}
          </ul>
          <ServiceGrid names={rest} className="mt-6" />

          <Reveal className="mt-10 flex flex-col items-center gap-5 rounded-lg bg-primary-dark p-8 text-center text-white ring-1 ring-gold/40 md:flex-row md:text-left">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-gold/50">
              <Icon name="heart" size={26} className="text-primary-fixed" />
            </span>
            <div className="flex-1">
              <h3 className="type-h3 text-white">Free Skin Consultation</h3>
              <p className="type-body mt-1 text-white/85">
                A free skin consultation is part of what we offer. Message us on WhatsApp to arrange yours.
              </p>
            </div>
            <WhatsAppButton
              message="Hello Smietz Beauty Hub, I would like to book a Free Skin Consultation."
              className="w-full md:w-auto"
            >
              Book Free Consultation
            </WhatsAppButton>
          </Reveal>
        </div>
      </section>

      <section id="hand-foot-care" aria-labelledby="handfoot-heading" className="section-y bg-surface-container-low">
        <div className="container-site">
          <Reveal>
            <p className="type-eyebrow text-primary">Hand & Foot Care</p>
            <h2 id="handfoot-heading" className="type-h2 mt-3 text-on-surface">
              Hand & Foot Care
            </h2>
            <p className="type-lead mt-2 max-w-2xl text-on-surface-variant">
              Manicure and pedicure in four variants, and foot reflexology.
            </p>
          </Reveal>
          <div className="mt-8">
            <HandFootSection />
          </div>
        </div>
      </section>

      <CtaBand title={s.cta.title} text={s.cta.text} label={s.cta.label} service="a skin care appointment" />
    </>
  );
}
