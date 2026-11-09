import Link from "next/link";
import { WhatsAppIcon, Icon } from "../ui/icons";
import { Badge, Card } from "../ui/primitives";
import { SiteImage } from "../ui/SiteImage";
import { enquiryName, serviceCategories, type ServiceGroup } from "@/content/services";
import { categorySummaries, describe } from "@/content/copy/services";
import { whatsappUrl } from "@/lib/whatsapp";
import type { ImageKey } from "@/content/images";
import { cn } from "@/lib/cn";

/** Text-only enquiry link, always to WhatsApp. */
export function EnquireLink({
  service,
  label = "Enquire on WhatsApp",
  className,
}: {
  service: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl({ service })}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${service}`}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 type-label text-primary hover:text-primary-dark",
        className,
      )}
    >
      <WhatsAppIcon size={18} />
      {label}
    </a>
  );
}

/** One service: exact name, neutral one-liner, WhatsApp enquiry. */
export function ServiceCard({
  name,
  tag,
  description,
  className,
}: {
  name: string;
  tag?: string;
  description?: string;
  className?: string;
}) {
  const text = description ?? describe(name);
  const enquiry = tag ? `${name} (${tag})` : name;
  return (
    <Card lift className={cn("flex h-full flex-col p-5 md:p-6", className)}>
      <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
        <h3 className="type-title text-on-surface">{name}</h3>
        {tag ? <Badge>{tag}</Badge> : null}
      </div>
      {text ? <p className="type-body mt-2 flex-1 text-on-surface-variant">{text}</p> : null}
      <div className="mt-3">
        <EnquireLink service={enquiry} />
      </div>
    </Card>
  );
}

export function ServiceGrid({
  names,
  className,
}: {
  names: { name: string; tag?: string }[];
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {names.map((n) => (
        <li key={n.name}>
          <ServiceCard name={n.name} tag={n.tag} />
        </li>
      ))}
    </ul>
  );
}

/** Category tile with image: used on /services. */
export function CategoryTile({
  id,
  index,
}: {
  id: string;
  index: number;
}) {
  const cat = serviceCategories.find((c) => c.id === id)!;
  return (
    <Link
      href={`/services#${cat.id}`}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface-container-lowest"
    >
      <div className="img-zoom relative aspect-[4/3] overflow-hidden">
        <SiteImage
          name={cat.image}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 92vw"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 type-label-sm text-on-surface ring-1 ring-gold/30">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 items-start justify-between gap-3 p-5">
        <div>
          <h3 className="type-h3 text-on-surface">{cat.name}</h3>
          <p className="type-body mt-1.5 text-on-surface-variant">
            {categorySummaries[cat.id]}
          </p>
        </div>
        <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
          <Icon name="chevron-down" size={18} />
        </span>
      </div>
    </Link>
  );
}

/** Feature card with an image: used for featured facials / treatments. */
export function FeatureCard({
  image,
  name,
  tag,
  description,
  service,
}: {
  image: ImageKey;
  name: string;
  tag?: string;
  description: string;
  service: string;
}) {
  return (
    <Card lift className="group flex h-full flex-col overflow-hidden">
      <div className="img-zoom relative aspect-[4/3] overflow-hidden">
        <SiteImage name={image} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 92vw" />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="type-h3 text-on-surface">{name}</h3>
          {tag ? <Badge>{tag}</Badge> : null}
        </div>
        <p className="type-body mt-2 flex-1 text-on-surface-variant">{description}</p>
        <div className="mt-3">
          <EnquireLink service={service} />
        </div>
      </div>
    </Card>
  );
}

/** Lists a category's groups as compact rows (used inside the catalogue accordion). */
export function CatalogueGroups({ groups, notes }: { groups: ServiceGroup[]; notes?: string[] }) {
  return (
    <div className="space-y-6">
      {notes?.map((note) => (
        <p
          key={note}
          className="flex items-start gap-2.5 rounded-tile bg-primary-soft px-4 py-3 type-body text-primary-dark"
        >
          <Icon name="check" size={18} className="mt-1 shrink-0" />
          {note}
        </p>
      ))}
      {groups.map((group, gi) => (
        <div key={group.title ?? gi}>
          {group.title ? (
            <h4 className="type-eyebrow mb-2 text-primary">{group.title}</h4>
          ) : null}
          <ul className="divide-y divide-line/70">
            {group.items.map((item) => (
              <li
                key={item.name}
                className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2.5"
              >
                <span className="type-body text-on-surface">
                  {item.name}
                  {item.tag ? <Badge className="ml-2">{item.tag}</Badge> : null}
                </span>
                <EnquireLink
                  service={enquiryName(group, item)}
                  label="Enquire"
                  className="shrink-0"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
