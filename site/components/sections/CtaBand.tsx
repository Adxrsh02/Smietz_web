import type { ReactNode } from "react";
import { Icon } from "../ui/icons";
import { CallButton, WhatsAppButton } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

type Props = {
  title: string;
  text?: string;
  eyebrow?: string;
  /** WhatsApp button label. */
  label?: string;
  /** Prefill the WhatsApp chat with an enquiry about this service. */
  service?: string;
  showCall?: boolean;
  extra?: ReactNode;
};

/** Closing call-to-action panel used on every page. Deep green with a gold hairline. */
export function CtaBand({
  title,
  text,
  eyebrow,
  label = "Book on WhatsApp",
  service,
  showCall = true,
  extra,
}: Props) {
  return (
    <section className="section-y">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-lg bg-primary-dark px-6 py-12 text-center text-white ring-1 ring-gold/40 md:px-12 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/60 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-gold/50">
              <Icon name="leaf" size={24} className="text-primary-fixed" />
            </span>
            {eyebrow ? (
              <p className="type-eyebrow mt-5 text-primary-fixed">{eyebrow}</p>
            ) : null}
            <h2 className="type-h2 mt-4 text-white">{title}</h2>
            {text ? <p className="type-lead mt-4 text-white/85">{text}</p> : null}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton service={service} size="lg" className="w-full sm:w-auto">
                {label}
              </WhatsAppButton>
              {showCall ? (
                <CallButton variant="ghost-light" size="lg" className="w-full sm:w-auto" />
              ) : null}
            </div>
            {extra}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
