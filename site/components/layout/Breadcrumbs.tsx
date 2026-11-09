import Link from "next/link";
import { Icon } from "../ui/icons";

export type Crumb = { label: string; href?: string };

/** Last crumb is the current page. "Home" is added automatically. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 type-small text-on-surface-variant">
        {all.map((crumb, i) => {
          const last = i === all.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 ? <Icon name="chevron-right" size={14} className="text-outline" /> : null}
              {last || !crumb.href ? (
                <span aria-current={last ? "page" : undefined} className="font-semibold text-on-surface">
                  {crumb.label}
                </span>
              ) : (
                <Link prefetch={false} href={crumb.href} className="hover:text-primary">
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
