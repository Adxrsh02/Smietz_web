import { getCategory } from "@/content/services";
import { describe } from "@/content/copy/services";
import { whatsappUrl } from "@/lib/whatsapp";
import { Card } from "../ui/primitives";
import { WhatsAppIcon } from "../ui/icons";
import { ServiceCard } from "./ServiceCards";

/** Manicure / Pedicure variants and the two foot massages. */
export function HandFootSection() {
  const cat = getCategory("hand-foot-care");
  const [manicure, pedicure, reflexology] = cat.groups;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {[manicure, pedicure].map((group) => (
          <Card key={group.title} lift className="p-5 md:p-6">
            <h3 className="type-h3 text-on-surface">{group.title}</h3>
            <p className="type-body mt-2 text-on-surface-variant">{describe(group.title!)}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const service = `${item.name} ${group.title}`;
                return (
                  <li key={item.name}>
                    <a
                      href={whatsappUrl({ service })}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire on WhatsApp: ${service}`}
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 type-label text-on-surface transition-colors hover:border-primary hover:text-primary"
                    >
                      <WhatsAppIcon size={16} className="text-primary" />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Card>
        ))}
      </div>

      <div>
        <h3 className="type-eyebrow mb-3 text-primary">{reflexology.title}</h3>
        <ul className="grid gap-4 md:grid-cols-2">
          {reflexology.items.map((item) => (
            <li key={item.name}>
              <ServiceCard name={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
