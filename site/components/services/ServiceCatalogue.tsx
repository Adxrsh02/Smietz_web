import { Accordion, type AccordionItem } from "../ui/Accordion";
import { WhatsAppButton } from "../ui/Button";
import { Icon, type IconName } from "../ui/icons";
import { serviceCategories } from "@/content/services";
import { describe } from "@/content/copy/services";
import { CatalogueGroups } from "./ServiceCards";

const icons: Record<string, IconName> = {
  "hair-services": "scissors",
  "hair-spa": "leaf",
  "hair-colour": "sparkle",
  "hand-foot-care": "heart",
  "skin-care": "leaf",
  facials: "sparkle",
  "advanced-skin-care": "shield",
  "bridal-makeup": "gem",
  "laser-hair-reduction": "sparkle",
};

/** Complete catalogue: all nine categories with exact service names. */
export function ServiceCatalogue() {
  const items: AccordionItem[] = serviceCategories.map((cat) => ({
    id: cat.id,
    title: cat.name,
    lead: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary">
        <Icon name={icons[cat.id] ?? "sparkle"} size={20} />
      </span>
    ),
    content:
      cat.groups.length > 0 ? (
        <CatalogueGroups groups={cat.groups} notes={cat.notes} />
      ) : (
        <div className="flex flex-col items-start gap-4">
          <p className="type-body text-on-surface-variant">
            {describe(cat.name)} Message us on WhatsApp for details.
          </p>
          <WhatsAppButton size="md" service={cat.name}>
            Enquire about {cat.name}
          </WhatsAppButton>
        </div>
      ),
  }));

  return <Accordion items={items} variant="catalogue" hashOpen defaultOpen={["hair-services"]} />;
}
