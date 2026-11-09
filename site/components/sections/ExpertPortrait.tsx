import { business } from "@/content/business";
import { cn } from "@/lib/cn";
import { PortraitReveal } from "../ui/PortraitReveal";
import { SiteImage } from "../ui/SiteImage";

const EYEBROW = "The Expertise Behind Smietz";

type Props = {
  /**
   * overlay: glass name card overlapping the bottom of the portrait (Home).
   * plain: portrait and badge only; the name treatment sits in the text column (About).
   */
  variant: "overlay" | "plain";
  className?: string;
};

/**
 * Sushama's portrait in a rounded frame with the "35 Years" badge.
 * The frame uses the image's native 3:4 ratio, so it is never cropped and never shifts layout.
 */
export function ExpertPortrait({ variant, className }: Props) {
  const overlay = variant === "overlay";
  return (
    <PortraitReveal className={cn("relative mx-auto w-full max-w-md md:max-w-none", overlay && "md:mb-12", className)}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-float ring-1 ring-gold/40">
        <div className="portrait-media absolute inset-0">
          <SiteImage
            name="sushama-portrait"
            fill
            sizes="(min-width: 1280px) 540px, (min-width: 768px) 45vw, (min-width: 448px) 448px, 92vw"
          />
        </div>
      </div>

      {/* "35 Years" badge: top-right, over the plants, clear of her face */}
      <div className="portrait-caption absolute -top-4 -right-2 flex size-24 flex-col items-center justify-center rounded-full bg-primary-dark text-center text-white ring-4 ring-background md:-top-5 md:-right-5 md:size-28">
        <span className="font-display text-3xl leading-none font-medium md:text-4xl">35</span>
        <span className="type-label-sm mt-1">Years</span>
      </div>

      {overlay ? (
        <div
          className={cn(
            "portrait-caption relative z-10 mx-3 -mt-10 rounded-card border border-gold/60 bg-background/85 px-5 py-4 text-center shadow-float backdrop-blur-md",
            "md:absolute md:inset-x-6 md:-bottom-10 md:mx-0 md:mt-0 md:px-7 md:py-5",
          )}
        >
          {/* Bronze (not brand gold) so the small caps text passes contrast */}
          <p className="type-eyebrow text-secondary">{EYEBROW}</p>
          <p className="font-display mt-1.5 text-4xl leading-tight font-medium text-primary-dark italic md:text-5xl">
            Sushama
          </p>
          <p className="type-body mt-1 text-on-surface-variant">{business.experience.label}</p>
        </div>
      ) : null}
    </PortraitReveal>
  );
}

/** Name treatment for text columns: eyebrow, large italic serif name, gold rule, experience line. */
export function ExpertName({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="type-eyebrow text-secondary">{EYEBROW}</p>
      <h2 className="font-display mt-3 text-5xl leading-tight font-medium text-primary-dark italic md:text-6xl">
        Sushama
      </h2>
      <div
        aria-hidden="true"
        className="gold-rule mt-4 w-32 [background:linear-gradient(to_right,var(--color-gold),transparent)]"
      />
      <p className="type-title mt-4 text-on-surface">{business.experience.label}</p>
    </div>
  );
}
