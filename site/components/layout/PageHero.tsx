import type { ReactNode } from "react";
import type { ImageKey } from "@/content/images";
import { cn } from "@/lib/cn";
import { SiteImage } from "../ui/SiteImage";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: ImageKey;
  crumbs?: Crumb[];
  actions?: ReactNode;
  /** Extra content under the actions (e.g. in-page chips). */
  children?: ReactNode;
};

/** Inner-page hero: text left, framed image right on tablet and up; stacked on mobile. */
export function PageHero({ eyebrow, title, intro, image, crumbs, actions, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-container-low to-background">
      <div className="container-site pt-6 pb-10 md:pb-14 lg:pb-16">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        <div
          className={cn(
            "mt-6 grid items-center gap-8 md:mt-10 md:gap-10",
            image && "md:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16",
          )}
        >
          <div className={cn(!image && "max-w-3xl")}>
            {eyebrow ? <p className="type-eyebrow text-primary">{eyebrow}</p> : null}
            <h1 className="type-h1 mt-3 text-primary-dark lg:text-[3rem] lg:leading-[3.75rem]">
              {title}
            </h1>
            <div aria-hidden="true" className="gold-rule mt-5 w-28 [background:linear-gradient(to_right,var(--color-gold),transparent)]" />
            {intro ? (
              <p className="type-lead mt-5 max-w-xl text-on-surface-variant">{intro}</p>
            ) : null}
            {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
            {children}
          </div>
          {image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-gold/40 shadow-float md:aspect-[5/4]">
              <SiteImage
                name={image}
                fill
                priority
                sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 92vw"
              />
              <div className="pointer-events-none absolute inset-2.5 rounded-[calc(var(--radius-lg)-0.625rem)] ring-1 ring-white/50" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
