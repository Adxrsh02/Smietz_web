import { ChipLink } from "../ui/primitives";

/** Sticky in-page anchor chips (horizontally scrollable on mobile). */
export function SectionNav({
  label,
  links,
}: {
  label: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav
      aria-label={label}
      className="glass sticky top-16 z-30 border-y border-gold/20 py-3"
    >
      <div className="container-site">
        <ul className="rail -mx-1 flex gap-2 overflow-x-auto px-1 py-0.5">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <ChipLink href={l.href}>{l.label}</ChipLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
