import { faqs } from "@/content/faqs";
import { Accordion, type AccordionItem } from "../ui/Accordion";
import { TextLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/primitives";

export function FaqSection({ eyebrow, title }: { eyebrow?: string; title: string }) {
  const items: AccordionItem[] = faqs.map((f) => ({
    id: f.id,
    title: f.question,
    content: (
      <div className="space-y-3">
        <p className="type-body text-on-surface-variant">{f.answer}</p>
        {f.link ? (
          <TextLink href={f.link.href} external={f.link.external}>
            {f.link.label}
          </TextLink>
        ) : null}
      </div>
    ),
  }));

  return (
    <section className="section-y" aria-labelledby="faq-heading">
      <div className="container-site">
        <SectionHeading id="faq-heading" eyebrow={eyebrow} title={title} />
        <Reveal className="mx-auto mt-10 max-w-3xl">
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
