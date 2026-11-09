// Only questions that can be answered from reference/business-info.md.

import { business, mapsDirectionsUrl } from "./business";
import { serviceCategories } from "./services";

export type Faq = {
  id: string;
  question: string;
  /** Plain-text answer (rendered as a paragraph). */
  answer: string;
  /** Optional link appended after the answer. */
  link?: { label: string; href: string; external?: boolean };
};

export const faqs: Faq[] = [
  {
    id: "booking",
    question: "How do I book an appointment?",
    answer: `Message us on WhatsApp or call ${business.phone.display}. Please call or WhatsApp us for timings.`,
    link: { label: "Book on WhatsApp", href: business.whatsapp.url, external: true },
  },
  {
    id: "consultation",
    question: "Is the skin consultation free?",
    answer: "Yes. A free skin consultation is part of what we offer.",
  },
  {
    id: "services",
    question: "What services do you offer?",
    answer: `We offer ${serviceCategories.length} service categories: ${serviceCategories
      .map((c) => c.name)
      .join(", ")}.`,
    link: { label: "View all services", href: "/services" },
  },
  {
    id: "location",
    question: "Where is Smietz Beauty Hub located?",
    answer: `${business.address.oneLine}.`,
    link: { label: "Get directions", href: mapsDirectionsUrl, external: true },
  },
  {
    id: "stylists",
    question: "Are junior and senior stylists available?",
    answer: "Yes, junior and senior stylists are available for hair services.",
    link: { label: "Hair services", href: "/services/hair-care" },
  },
  {
    id: "bridal",
    question: "Do you offer bridal packages?",
    answer:
      "Yes, bridal and pre-bridal packages are available. Message us on WhatsApp to talk through what you need.",
    link: { label: "Bridal & Makeup", href: "/services/bridal-makeup" },
  },
];
