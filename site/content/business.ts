// Single source of business facts. Everything here comes from
// reference/business-info.md. Never hard-code these values in components.

export const business = {
  name: "Smietz Beauty Hub",
  shortName: "Smietz",
  descriptor: "Beauty Hub",
  tagline: "Luxury Beauty Starts Here.",
  category: "Women's Beauty, Skin & Hair Care Salon",
  location: {
    area: "Mulund West",
    city: "Mumbai",
    region: "Maharashtra",
    country: "India",
  },
  experience: {
    years: 35,
    label: "35 Years of Beauty Expertise",
    associatedWith: "Sushama",
  },
  phone: {
    display: "+91 96045 23931",
    tel: "+919604523931",
    href: "tel:+919604523931",
  },
  whatsapp: {
    number: "919604523931",
    url: "https://wa.me/919604523931",
  },
  instagram: {
    handle: "@smietzbeautyhub",
    url: "https://www.instagram.com/smietzbeautyhub/",
  },
  address: {
    // PENDING OWNER VERIFICATION. Displayed normally on the site, by decision.
    pending: true,
    lines: [
      "Shop No. 2, BPS Plaza",
      "Estate Devidayal Road",
      "Mulund West, Mumbai",
      "Maharashtra – 400080",
    ],
    oneLine:
      "Shop No. 2, BPS Plaza, Estate Devidayal Road, Mulund West, Mumbai, Maharashtra – 400080",
  },
  hours: {
    // PENDING OWNER CONFIRMATION. No hours are published; visitors are sent to call or WhatsApp.
    pending: true,
    label: "Call or WhatsApp us for timings",
  },
  // PENDING: replace with the salon's real Google review link (Business Profile "Get more reviews" URL).
  // Until then this opens a Google Maps search for the business.
  googleReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Smietz+Beauty+Hub+Mulund+West+Mumbai",
  consultation: "Free Skin Consultation",
} as const;

export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.address.oneLine,
)}`;

export const brandIntro = [
  "Smietz Beauty Hub is a women's beauty destination in Mulund West, Mumbai, offering a comprehensive range of hair care, skin care, facial treatments, bridal beauty and advanced skin care services.",
  "With 35 years of beauty expertise associated with Sushama, Smietz Beauty Hub focuses on personalised beauty care, premium products, professional attention and a comfortable salon experience.",
  "The salon brings traditional beauty expertise together with modern beauty treatments, helping women feel confident, refreshed and beautiful.",
] as const;

export const usps = [
  "35 years of beauty expertise associated with Sushama",
  "Free skin consultation",
  "Personalised beauty advice",
  "Premium products",
  "Hygienic environment",
  "Bridal and pre-bridal packages",
  "Hair, skin and facial services under one roof",
  "Advanced skin care treatments",
  "Convenient appointment booking through WhatsApp",
] as const;
