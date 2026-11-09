// Home page copy. Headline, supporting text, CTAs, section headings and the
// "why choose us" labels are taken verbatim from reference/business-info.md §9.

import { business, brandIntro } from "../business";
import type { ImageKey } from "../images";

export const homeCopy = {
  hero: {
    eyebrow: `${business.location.area}, ${business.location.city}`,
    title: business.tagline,
    text: "Discover a more beautiful you with personalised hair, skin and beauty care at Smietz Beauty Hub, Mulund West. Experience 35 years of beauty expertise and treatments designed around your individual needs.",
    primaryCta: "Book Your Appointment",
    secondaryCta: "Explore Our Services",
    image: "home-hero" as ImageKey,
    highlights: [
      { big: "35", small: "Years of beauty expertise" },
      { big: "Free", small: "Skin consultation" },
      { big: "One", small: "Roof for hair, skin & facials" },
    ],
  },
  usps: [
    { icon: "award", title: "35 Years", text: "Of beauty expertise" },
    { icon: "heart", title: "Free Skin Consultation", text: "Before you choose" },
    { icon: "sparkle", title: "Premium Products", text: "In every service" },
    { icon: "shield", title: "Hygienic Environment", text: "A comfortable salon" },
  ],
  experience: {
    eyebrow: "Our Experience",
    title: "35 Years of Beauty Expertise",
    quote:
      "A legacy of beauty, care and personalised attention associated with Sushama.",
    paragraphs: [brandIntro[1], brandIntro[2]],
    cta: "Discover Our Story",
    image: "salon-interior-1" as ImageKey,
  },
  featured: {
    eyebrow: "Our Services",
    title: "Featured Services",
    intro: "Hair, skin and facial services under one roof.",
    items: [
      {
        title: "Hair Care & Styling",
        text: "Hair styling, hair wash and hair care services.",
        href: "/services/hair-care#hair-services",
        image: "home-hair-care" as ImageKey,
      },
      {
        title: "Hair Spa & Colour",
        text: "Hair spa services and hair colouring.",
        href: "/services/hair-care#hair-spa",
        image: "home-hair-spa-colour" as ImageKey,
      },
      {
        title: "Skin Care & Facials",
        text: "Clean-ups, facials, bleach and D-Tan.",
        href: "/services/skin-care-facials",
        image: "home-skin-care" as ImageKey,
      },
      {
        title: "Advanced Skin Treatments",
        text: "Microdermabrasion, RF, HIFU, Hydra Facial and more.",
        href: "/services/advanced-skin-care",
        image: "home-advanced-skin" as ImageKey,
      },
      {
        title: "Bridal & Pre-Bridal Beauty",
        text: "Bridal and pre-bridal packages.",
        href: "/services/bridal-makeup",
        image: "home-bridal" as ImageKey,
      },
      {
        title: "Hand & Foot Care",
        text: "Manicure, pedicure and foot reflexology.",
        href: "/services/skin-care-facials#hand-foot-care",
        image: "home-hand-foot" as ImageKey,
      },
    ],
  },
  signature: {
    eyebrow: "Treatments",
    title: "Featured Treatments",
    // Names must match content/services.ts exactly.
    items: [
      { name: "Smietz Signature Facial", image: "home-signature-facial" as ImageKey, href: "/services/skin-care-facials#facials" },
      { name: "HIFU Face Lift (Non-Surgical Face Lift)", image: "home-hifu" as ImageKey, href: "/services/advanced-skin-care" },
      { name: "Hydra Facial Treatment", image: "home-hydra-facial" as ImageKey, href: "/services/advanced-skin-care" },
    ],
  },
  why: {
    eyebrow: "Why Smietz",
    title: "Why Choose Us",
    items: [
      { icon: "heart", title: "Free Skin Consultation", text: "Talk through your skin before you choose a service." },
      { icon: "chat", title: "Personalised Beauty Advice", text: "Advice shaped around you." },
      { icon: "sparkle", title: "Premium Products", text: "A focus on premium products." },
      { icon: "shield", title: "Hygienic Environment", text: "A hygienic, comfortable salon." },
      { icon: "gem", title: "Bridal & Pre-Bridal Packages", text: "Packages for brides and wedding preparation." },
      { icon: "award", title: "35 Years of Beauty Expertise", text: "Experience associated with Sushama." },
    ],
  },
  bridal: {
    eyebrow: "Bridal & Pre-Bridal Beauty",
    title: "Bridal & Pre-Bridal Beauty",
    text: "Bridal and pre-bridal packages are available at Smietz Beauty Hub.",
    cta: "Explore Bridal",
    image: "bridal-hero" as ImageKey,
  },
  gallery: {
    eyebrow: "Inside the Salon",
    title: "A Glimpse of Smietz",
    cta: "View the Gallery",
    images: [
      "home-gallery-interior",
      "home-gallery-bridal-hair",
      "home-gallery-facial-serum",
      "home-gallery-balayage",
      "home-gallery-product-bar",
      "home-gallery-manicure",
    ] as ImageKey[],
  },
  reviews: {
    eyebrow: "Client Reviews",
    title: "Reviews Coming Soon",
    text: "Genuine customer reviews will appear here. In the meantime, we'd love to hear from you.",
    cta: "Visit Testimonials",
  },
  faq: {
    eyebrow: "Good to Know",
    title: "Frequently Asked Questions",
  },
  finalCta: {
    title: "Your Beauty Journey Begins Here.",
    text: "Book your appointment and experience personalised beauty care at Smietz Beauty Hub.",
  },
};
