import type { Metadata } from "next";
import { hairCopy } from "@/content/copy/pages";
import { categorySummaries } from "@/content/copy/services";
import { getCategory } from "@/content/services";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionNav } from "@/components/sections/SectionNav";
import { ServiceGrid } from "@/components/services/ServiceCards";
import { Icon, type IconName } from "@/components/ui/icons";
import { Badge } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const h = hairCopy;

export const metadata: Metadata = {
  title: "Hair Care & Styling",
  description: h.hero.intro,
};

const sections: { id: string; icon: IconName }[] = [
  { id: "hair-services", icon: "scissors" },
  { id: "hair-spa", icon: "leaf" },
  { id: "hair-colour", icon: "sparkle" },
];

export default function HairCarePage() {
  return (
    <>
      <PageHero
        eyebrow={h.hero.eyebrow}
        title={h.hero.title}
        intro={h.hero.intro}
        image={h.hero.image}
        crumbs={[{ label: "Services", href: "/services" }, { label: "Hair Care" }]}
      />
      <SectionNav
        label="Hair care sections"
        links={sections.map((s) => ({ label: getCategory(s.id).name, href: `#${s.id}` }))}
      />

      {sections.map((s, idx) => {
        const cat = getCategory(s.id);
        const names = cat.groups.flatMap((g) => g.items);
        return (
          <section
            key={s.id}
            id={s.id}
            aria-labelledby={`${s.id}-heading`}
            className={idx % 2 === 1 ? "section-y bg-surface-container-low" : "section-y"}
          >
            <div className="container-site">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <p className="type-eyebrow text-primary">Hair Care</p>
                </div>
                <h2 id={`${s.id}-heading`} className="type-h2 mt-3 text-on-surface">
                  {cat.name}
                </h2>
                <p className="type-lead mt-2 max-w-2xl text-on-surface-variant">{categorySummaries[s.id]}</p>

                {cat.notes?.map((note) => (
                  <p
                    key={note}
                    className="mt-5 inline-flex items-center gap-2.5 rounded-tile bg-primary-soft px-4 py-3 type-body text-primary-dark"
                  >
                    <Icon name="check" size={18} className="shrink-0" />
                    {note}
                  </p>
                ))}
                {s.id === "hair-spa" ? (
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Available hair lengths">
                    {["Shoulder", "Mid", "Waist"].map((len) => (
                      <li key={len}>
                        <Badge tone="green">{len} length</Badge>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
              <ServiceGrid names={names} className="mt-8" />
            </div>
          </section>
        );
      })}

      <CtaBand title={h.cta.title} text={h.cta.text} label={h.cta.label} service="a hair appointment" />
    </>
  );
}
