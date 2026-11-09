import Link from "next/link";
import { business, mapsDirectionsUrl } from "@/content/business";
import { footerCompany, serviceNav } from "@/content/navigation";
import { whatsappUrl } from "@/lib/whatsapp";
import { Icon, WhatsAppIcon } from "../ui/icons";
import { GoldDivider } from "../ui/primitives";
import { Logo } from "./Logo";

const linkClass =
  "inline-block py-1.5 type-body text-on-surface-variant transition-colors hover:text-primary";

export function SiteFooter() {
  return (
    <footer className="mt-0 border-t border-gold/25 bg-surface-container-low">
      <div className="container-site section-y">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link prefetch={false} href="/" aria-label={`${business.name} home`} className="inline-block">
              <Logo size="lg" />
            </Link>
            <p className="type-h3 mt-5 text-primary-dark">{business.tagline}</p>
            <p className="type-body mt-3 text-on-surface-variant">
              {business.experience.label} in {business.location.area}, {business.location.city}.
            </p>
            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 type-label text-primary hover:text-primary-dark"
            >
              <Icon name="instagram" size={22} />
              {business.instagram.handle}
            </a>
          </div>

          {/* Company */}
          <nav aria-label="Footer: company">
            <h2 className="type-eyebrow text-primary">Explore</h2>
            <ul className="mt-4">
              {footerCompany.map((l) => (
                <li key={l.href}>
                  <Link prefetch={false} href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer: services">
            <h2 className="type-eyebrow text-primary">Services</h2>
            <ul className="mt-4">
              {serviceNav.map((l) => (
                <li key={l.href}>
                  <Link prefetch={false} href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit */}
          <div>
            <h2 className="type-eyebrow text-primary">Visit & Contact</h2>
            <ul className="mt-4 space-y-4 type-body text-on-surface-variant">
              <li className="flex gap-3">
                <Icon name="pin" size={20} className="mt-0.5 shrink-0 text-primary" />
                <address className="not-italic">
                  {business.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <a
                    href={mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-block type-label text-primary hover:text-primary-dark"
                  >
                    Get directions
                  </a>
                </address>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" size={20} className="mt-0.5 shrink-0 text-primary" />
                <a href={business.phone.href} className="hover:text-primary">
                  {business.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon size={20} className="mt-0.5 shrink-0 text-primary" />
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" size={20} className="mt-0.5 shrink-0 text-primary" />
                <span>{business.hours.label}</span>
              </li>
            </ul>
          </div>
        </div>

        <GoldDivider className="mt-12" />
        <p className="type-small mt-6 text-center text-on-surface-variant">
          © {new Date().getFullYear()} {business.name}. {business.location.area}, {business.location.city}.
        </p>
      </div>
    </footer>
  );
}
