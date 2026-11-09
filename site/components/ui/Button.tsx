import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/whatsapp";
import { business } from "@/content/business";
import { Icon, WhatsAppIcon, type IconName } from "./icons";

export type ButtonVariant = "cta" | "primary" | "ghost" | "light" | "ghost-light";
type Size = "md" | "lg" | "sm";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full text-center font-semibold select-none transition-all duration-200 motion-safe:hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  // Saffron CTA with dark ink text (white fails contrast on #F47721).
  cta: "bg-cta text-on-cta hover:bg-cta-hover hover:shadow-cta",
  primary: "bg-primary text-on-primary hover:bg-primary-dark hover:shadow-float",
  ghost:
    "border-[1.5px] border-primary text-primary bg-transparent hover:bg-primary hover:text-on-primary",
  light: "bg-white text-on-surface hover:bg-surface-container-low hover:shadow-float",
  "ghost-light":
    "border-[1.5px] border-white/70 text-white bg-transparent hover:bg-white hover:text-primary-dark",
};

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-5 py-2 type-label",
  md: "min-h-12 px-6 py-2.5 text-base",
  lg: "min-h-14 px-7 py-3 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: Size;
  icon?: IconName | "whatsapp";
  iconAfter?: IconName;
  full?: boolean;
  children: ReactNode;
  className?: string;
};

function Inner({
  icon,
  iconAfter,
  children,
}: Pick<CommonProps, "icon" | "iconAfter" | "children">) {
  return (
    <>
      {icon === "whatsapp" ? (
        <WhatsAppIcon size={20} />
      ) : icon ? (
        <Icon name={icon} size={20} />
      ) : null}
      <span>{children}</span>
      {iconAfter ? <Icon name={iconAfter} size={18} /> : null}
    </>
  );
}

type LinkProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps | "href"> & {
    href: string;
    external?: boolean;
  };

/** Link styled as a button. Internal hrefs use next/link; external open in a new tab. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  full,
  external,
  href,
  className,
  children,
  ...rest
}: LinkProps) {
  const classes = cn(base, variants[variant], sizes[size], full && "w-full", className);
  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);
  if (isExternal) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        <Inner icon={icon} iconAfter={iconAfter}>
          {children}
        </Inner>
      </a>
    );
  }
  return (
    <Link prefetch={false} href={href} className={classes} {...rest}>
      <Inner icon={icon} iconAfter={iconAfter}>
        {children}
      </Inner>
    </Link>
  );
}

type ButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps>;

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  full,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], full && "w-full", className)}
      {...rest}
    >
      <Inner icon={icon} iconAfter={iconAfter}>
        {children}
      </Inner>
    </button>
  );
}

type WhatsAppButtonProps = Omit<LinkProps, "href" | "icon" | "external"> & {
  /** Prefills the chat with an enquiry about this service. */
  service?: string;
  message?: string;
};

/** Every appointment CTA on the site goes through this. */
export function WhatsAppButton({
  service,
  message,
  variant = "cta",
  children,
  ...rest
}: WhatsAppButtonProps) {
  return (
    <ButtonLink
      href={whatsappUrl({ service, message })}
      variant={variant}
      icon="whatsapp"
      external
      {...rest}
    >
      {children}
    </ButtonLink>
  );
}

export function CallButton({
  children = `Call ${business.phone.display}`,
  variant = "ghost",
  ...rest
}: Omit<LinkProps, "href" | "children" | "icon"> & { children?: ReactNode }) {
  return (
    <ButtonLink href={business.phone.href} variant={variant} icon="phone" {...rest}>
      {children}
    </ButtonLink>
  );
}

/** Small text link with a trailing arrow ("Enquire on WhatsApp →"). */
export function TextLink({
  href,
  children,
  className,
  external,
  ...rest
}: Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  external?: boolean;
}) {
  const classes = cn(
    "group/link inline-flex items-center gap-1.5 type-label text-primary hover:text-primary-dark",
    className,
  );
  const arrow = (
    <Icon
      name="arrow-right"
      size={16}
      className="transition-transform motion-safe:group-hover/link:translate-x-0.5"
    />
  );
  if (external ?? /^(https?:|tel:)/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link prefetch={false} href={href} className={classes} {...rest}>
      {children}
      {arrow}
    </Link>
  );
}
