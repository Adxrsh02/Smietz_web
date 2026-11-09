import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./icons";

/* ---------- GoldDivider: hairline rule with a centred diamond ---------- */
export function GoldDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-3 text-gold", className)}
    >
      <span className="gold-rule w-16 md:w-24" />
      <span className="block size-1.5 rotate-45 bg-gold" />
      <span className="gold-rule w-16 md:w-24" />
    </div>
  );
}

/* ---------- Eyebrow ---------- */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("type-eyebrow text-primary", className)}>{children}</p>;
}

/* ---------- SectionHeading ---------- */
type HeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  /** Heading level to render. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
  id?: string;
  tone?: "default" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: Tag = "h2",
  id,
  tone = "default",
  className,
}: HeadingProps) {
  const center = align === "center";
  const light = tone === "light";
  return (
    <div
      className={cn(
        "max-w-2xl",
        center ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("type-eyebrow", light ? "text-primary-fixed" : "text-primary")}>
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={cn("type-h2 mt-3", light ? "text-white" : "text-on-surface")}
      >
        {title}
      </Tag>
      <div className={cn("mt-4", center ? "" : "max-w-[10rem]")}>
        {center ? (
          <GoldDivider />
        ) : (
          <div aria-hidden="true" className="gold-rule w-24 [background:linear-gradient(to_right,var(--color-gold),transparent)]" />
        )}
      </div>
      {intro ? (
        <p
          className={cn(
            "type-lead mt-5",
            light ? "text-white/85" : "text-on-surface-variant",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/* ---------- Badge: gold-ringed pill, ink text (gold is never text) ---------- */
export function Badge({
  children,
  icon,
  className,
  tone = "gold",
}: {
  children: ReactNode;
  icon?: IconName;
  className?: string;
  tone?: "gold" | "green" | "light";
}) {
  const tones = {
    gold: "bg-gold/15 text-on-surface ring-1 ring-gold/40",
    green: "bg-primary-soft text-primary-dark ring-1 ring-primary/20",
    light: "bg-white/90 text-on-surface ring-1 ring-gold/30",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 type-label-sm",
        tones[tone],
        className,
      )}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      {children}
    </span>
  );
}

/* ---------- Chip: filter / anchor pill ---------- */
const chipBase =
  "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full px-4 h-11 type-label whitespace-nowrap transition-colors duration-200 border";
const chipOn = "bg-primary text-on-primary border-primary";
const chipOff =
  "bg-surface-container-lowest text-on-surface border-line hover:border-primary/50 hover:text-primary";

export function Chip({
  active,
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"button"> & { active?: boolean }) {
  return (
    <button
      type="button"
      className={cn(chipBase, active ? chipOn : chipOff, className)}
      {...rest}
    >
      {active ? <Icon name="check" size={16} /> : null}
      {children}
    </button>
  );
}

export function ChipLink({
  href,
  active,
  className,
  children,
}: {
  href: string;
  active?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const classes = cn(chipBase, active ? chipOn : chipOff, className);
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/* ---------- Card: white surface, hairline border, optional hover lift ---------- */
export function Card<T extends ElementType = "div">({
  as,
  lift,
  className,
  children,
  ...rest
}: {
  as?: T;
  lift?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={cn(
        "rounded-card border border-line bg-surface-container-lowest",
        lift && "card-lift",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------- IconTile: USP tile with icon in an ivory well ---------- */
export function IconTile({
  icon,
  title,
  text,
  className,
}: {
  icon: IconName;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <Card lift className={cn("p-6 ring-1 ring-gold/20", className)}>
      <span className="flex size-12 items-center justify-center rounded-full bg-surface text-primary ring-1 ring-gold/30">
        <Icon name={icon} size={24} />
      </span>
      <h3 className="type-title mt-4 text-on-surface">{title}</h3>
      {text ? <p className="type-body mt-1.5 text-on-surface-variant">{text}</p> : null}
    </Card>
  );
}
