// Service catalogue. Names are EXACTLY as written in reference/business-info.md §5.
// Descriptions live in content/copy/services.ts (pending owner review).

import type { ImageKey } from "./images";

export type ServiceItem = {
  /** Exact service name. */
  name: string;
  /** Optional tag shown beside the name (taken from business-info). */
  tag?: string;
};

export type ServiceGroup = {
  /** Sub-heading inside a category (e.g. "Manicure"). */
  title?: string;
  items: ServiceItem[];
};

export type ServiceCategory = {
  id: string;
  /** Exact category name from business-info §4. */
  name: string;
  /** Route that presents this category in detail. */
  href: string;
  image: ImageKey;
  groups: ServiceGroup[];
  /** Factual notes from business-info. */
  notes?: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair-services",
    name: "Hair Services",
    href: "/services/hair-care#hair-services",
    image: "service-hair",
    notes: ["Junior and senior stylists are available."],
    groups: [
      {
        items: [
          { name: "Hair Wash & Blow Dry" },
          { name: "Hair Ironing" },
          { name: "Hair Tong" },
          { name: "Hair Wash & Blast Dry" },
          { name: "Hair Cut with Wash" },
          { name: "Dandruff Treatment" },
          { name: "Hair Oil Massage with Wash" },
        ],
      },
    ],
  },
  {
    id: "hair-spa",
    name: "Hair Spa",
    href: "/services/hair-care#hair-spa",
    image: "service-hair-spa",
    notes: ["Available hair lengths: Shoulder, Mid and Waist."],
    groups: [
      {
        items: [
          { name: "L'Oréal Essential Hair Spa" },
          { name: "Smietz Special Hair Spa" },
          { name: "Shea Butter Spa" },
          { name: "Kera Spa" },
        ],
      },
    ],
  },
  {
    id: "hair-colour",
    name: "Hair Colour",
    href: "/services/hair-care#hair-colour",
    image: "service-hair-colour",
    groups: [
      {
        items: [
          { name: "Crown Colour" },
          { name: "Root Touch-Up" },
          { name: "Ammonia-Free Root Touch-Up" },
          { name: "Global Colour" },
          { name: "Ammonia-Free Global Colour" },
          { name: "Fashion Highlights" },
        ],
      },
    ],
  },
  {
    id: "hand-foot-care",
    name: "Hand & Foot Care",
    href: "/services/skin-care-facials#hand-foot-care",
    image: "service-hand-foot",
    groups: [
      {
        title: "Manicure",
        items: [
          { name: "Classic" },
          { name: "Aroma" },
          { name: "D-Tan" },
          { name: "Luxury" },
        ],
      },
      {
        title: "Pedicure",
        items: [
          { name: "Classic" },
          { name: "Aroma" },
          { name: "D-Tan" },
          { name: "Luxury" },
        ],
      },
      {
        title: "Foot Reflexology",
        items: [
          { name: "Foot Massage – 20 Minutes" },
          { name: "Foot Massage – 30 Minutes" },
        ],
      },
    ],
  },
  {
    id: "skin-care",
    name: "Skin Care",
    href: "/services/skin-care-facials#skin-care",
    image: "service-skin-care",
    groups: [
      {
        title: "Bleach / D-Tan",
        items: [
          { name: "Face" },
          { name: "Neck" },
          { name: "Full Arms" },
          { name: "Legs" },
          { name: "Full Back" },
          { name: "Stomach" },
        ],
      },
      {
        title: "Clean-Ups",
        items: [
          { name: "Regular Clean-Up" },
          { name: "Brightening Clean-Up" },
          { name: "Hydra Clean-Up" },
          { name: "Korean Clean-Up" },
          { name: "Smietz Special Clean-Up" },
        ],
      },
    ],
  },
  {
    id: "facials",
    name: "Facials",
    href: "/services/skin-care-facials#facials",
    image: "service-facials",
    groups: [
      {
        items: [
          { name: "Tan Clean Facial" },
          { name: "Power Oxygen Facial" },
          { name: "Diamond File Facial" },
          { name: "Whitening Facial" },
          { name: "Gold Facial" },
          { name: "Korean Facial" },
          { name: "French Facial" },
          { name: "O3+ 1, 2 & 3 Facial" },
          { name: "Smietz Signature Facial" },
          { name: "Fresh Fruit Facial", tag: "By Appointment Only" },
        ],
      },
    ],
  },
  {
    id: "advanced-skin-care",
    name: "Advanced Skin Care",
    href: "/services/advanced-skin-care",
    image: "service-advanced-skin",
    groups: [
      {
        items: [
          { name: "Microdermabrasion" },
          { name: "Radio Frequency (RF) Skin Tightening" },
          { name: "Carbon Laser Facial (Hollywood Treatment)" },
          { name: "Hydra Facial Treatment" },
          { name: "Micro Needling with Booster" },
          { name: "HIFU Face Lift (Non-Surgical Face Lift)" },
        ],
      },
    ],
  },
  {
    id: "bridal-makeup",
    name: "Bridal & Makeup",
    href: "/services/bridal-makeup",
    image: "service-bridal",
    notes: ["Bridal and pre-bridal packages are available."],
    groups: [],
  },
  {
    id: "laser-hair-reduction",
    name: "Laser & Hair Reduction",
    href: "/services/advanced-skin-care#laser-hair-reduction",
    image: "service-laser",
    groups: [],
  },
];

export function getCategory(id: string): ServiceCategory {
  const found = serviceCategories.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown service category: ${id}`);
  return found;
}

/** Full enquiry name for WhatsApp messages, including the group title where helpful. */
export function enquiryName(group: ServiceGroup, item: ServiceItem): string {
  if (group.title === "Manicure" || group.title === "Pedicure") {
    return `${item.name} ${group.title}`;
  }
  return item.tag ? `${item.name} (${item.tag})` : item.name;
}
