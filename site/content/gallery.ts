import type { ImageKey } from "./images";

export type GalleryCategory = "interiors" | "hair" | "skin" | "bridal" | "hand-foot";

export const galleryFilters: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "interiors", label: "Salon Interiors" },
  { id: "hair", label: "Hair" },
  { id: "skin", label: "Skin & Facials" },
  { id: "bridal", label: "Bridal" },
  { id: "hand-foot", label: "Hand & Foot" },
];

export const categoryLabels: Record<GalleryCategory, string> = {
  interiors: "Salon Interiors",
  hair: "Hair",
  skin: "Skin & Facials",
  bridal: "Bridal",
  "hand-foot": "Hand & Foot",
};

export type GalleryItem = {
  image: ImageKey;
  title: string;
  category: GalleryCategory;
};

export const galleryItems: GalleryItem[] = [
  { image: "salon-interior-1", title: "Reception desk", category: "interiors" },
  { image: "gallery-bridal-hair", title: "Bridal hair with jasmine", category: "bridal" },
  { image: "gallery-facial-suite", title: "Facial room", category: "interiors" },
  { image: "gallery-balayage", title: "Balayage hair colour", category: "hair" },
  { image: "gallery-hydra-facial", title: "Facial treatment", category: "skin" },
  { image: "gallery-foot-soak", title: "Flower petal bowl", category: "hand-foot" },
  { image: "gallery-styling-floor", title: "Styling floor", category: "interiors" },
  { image: "gallery-bride-portrait", title: "Bridal portrait", category: "bridal" },
  { image: "gallery-consultation", title: "Consultation desk", category: "skin" },
];

export const instagramStrip: ImageKey[] = [
  "instagram-bridal-dupatta",
  "instagram-facial-cream",
  "instagram-hair-shears",
  "instagram-bangles-mehendi",
  "instagram-botanical-steam",
  "instagram-bride-mirror",
];
