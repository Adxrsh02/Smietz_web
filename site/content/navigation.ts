export type NavLink = { label: string; href: string };

/** Top-level navigation (desktop header). Bridal lives at /services/bridal-makeup. */
export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Bridal", href: "/services/bridal-makeup" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

/** Service sub-pages, shown in the drawer and footer. */
export const serviceNav: NavLink[] = [
  { label: "All Services", href: "/services" },
  { label: "Hair Care", href: "/services/hair-care" },
  { label: "Skin Care & Facials", href: "/services/skin-care-facials" },
  { label: "Advanced Skin Care", href: "/services/advanced-skin-care" },
  { label: "Bridal & Makeup", href: "/services/bridal-makeup" },
];

export const drawerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  ...serviceNav,
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact & Booking", href: "/contact" },
];

export const footerCompany: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact & Booking", href: "/contact" },
];

export function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  // Services is active for /services only; its sub-pages have their own entries.
  if (href === "/services") return pathname === "/services";
  return pathname === href || pathname.startsWith(`${href}/`);
}
