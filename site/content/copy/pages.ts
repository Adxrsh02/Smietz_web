// Copy for the remaining pages. Page descriptions follow reference/business-info.md §8.

import type { ImageKey } from "../images";

export const servicesCopy = {
  hero: {
    eyebrow: "All Services",
    title: "Our Services",
    intro:
      "The complete service catalogue, across nine categories: hair, skin, facials, hand and foot care, advanced skin care, bridal and more.",
  },
  categories: { eyebrow: "Nine Categories", title: "Browse by Category" },
  consult: {
    eyebrow: "Free Skin Consultation",
    title: "Not sure where to start?",
    text: "A free skin consultation is part of what we offer. Message us on WhatsApp to arrange yours.",
    cta: "Book Free Consultation",
  },
  catalogue: {
    eyebrow: "Complete Catalogue",
    title: "Browse All Treatments",
    intro: "Open a category to see every service, and enquire directly on WhatsApp.",
  },
  cta: {
    title: "Tell us what you have in mind",
    text: "Message our front desk on WhatsApp or give us a call.",
  },
};

export const hairCopy = {
  hero: {
    eyebrow: "Hair Care",
    title: "Hair Care & Styling",
    intro:
      "Hair styling, hair wash, hair spa, hair colouring, hair treatments and hair care services.",
    image: "hair-care-hero" as ImageKey,
  },
  cta: {
    title: "Ready for your hair appointment?",
    text: "Message our front desk on WhatsApp to arrange your visit.",
    label: "Book Hair Appointment",
  },
};

export const skinCopy = {
  hero: {
    eyebrow: "Skin & Facials",
    title: "Skin Care & Facials",
    intro: "Clean-ups, facials, bleach, D-Tan, skin care and beauty treatments.",
    image: "skin-care-facials-hero" as ImageKey,
  },
  featuredFacials: ["Smietz Signature Facial", "Fresh Fruit Facial"],
  cta: {
    title: "Reserve your skin care appointment",
    text: "Message our front desk on WhatsApp to check availability.",
    label: "Book Skin Care Appointment",
  },
};

export const advancedCopy = {
  hero: {
    eyebrow: "Advanced Skin Care",
    title: "Advanced Skin Care",
    intro:
      "Radio Frequency (RF), HIFU, Hydra Facial, Microdermabrasion, Carbon Laser Facial and Micro Needling.",
    image: "advanced-skin-care-hero" as ImageKey,
  },
  laser: {
    eyebrow: "Laser & Hair Reduction",
    title: "Laser & Hair Reduction",
    text: "Laser and hair reduction services are offered at the salon. Message us on WhatsApp and we will share the details with you.",
    cta: "Ask About Laser & Hair Reduction",
    image: "service-laser" as ImageKey,
  },
  consult: {
    eyebrow: "Free Skin Consultation",
    title: "Have a question about your skin?",
    text: "A free skin consultation is part of what we offer. Message us on WhatsApp to arrange yours.",
    cta: "Book Consultation on WhatsApp",
  },
};

export const bridalCopy = {
  hero: {
    eyebrow: "Bridal & Makeup",
    title: "Bridal & Pre-Bridal Beauty",
    intro:
      "Bridal and pre-bridal packages are available. Pre-wedding preparation and bridal beauty experiences at Smietz Beauty Hub, Mulund West.",
    cta: "Plan Your Bridal Look",
    image: "bridal-hero" as ImageKey,
  },
  packages: {
    eyebrow: "Packages",
    title: "Bridal & Pre-Bridal Packages",
    text: "Bridal and pre-bridal packages are available. Message us on WhatsApp to talk through your plans and what you would like to include.",
    cta: "Enquire on WhatsApp",
  },
  prep: {
    eyebrow: "Wedding Preparation",
    title: "Pre-Bridal Beauty Services",
    intro: "Services that many brides combine in the lead-up to a wedding.",
    items: [
      { title: "Facials", text: "Ten facials to choose from.", href: "/services/skin-care-facials#facials", image: "service-facials" as ImageKey },
      { title: "Hair Spa", text: "Four hair spa services.", href: "/services/hair-care#hair-spa", image: "service-hair-spa" as ImageKey },
      { title: "Hand & Foot Care", text: "Manicure and pedicure.", href: "/services/skin-care-facials#hand-foot-care", image: "service-hand-foot" as ImageKey },
    ],
  },
  gallery: {
    eyebrow: "Bridal Gallery",
    title: "Bridal Portfolio",
    items: [
      { image: "bridal-classic-glamour" as ImageKey, title: "Bridal portrait" },
      { image: "bridal-jasmine-gajra" as ImageKey, title: "Bridal hair with jasmine" },
      { image: "bridal-henna-details" as ImageKey, title: "Mehendi details" },
      { image: "bridal-reception-look" as ImageKey, title: "Reception look" },
    ],
  },
  cta: {
    title: "Reserve Your Bridal Consultation",
    text: "Message us on WhatsApp to discuss bridal and pre-bridal packages.",
    label: "Message on WhatsApp",
  },
};

export const galleryCopy = {
  hero: {
    eyebrow: "Gallery",
    title: "Our Gallery",
    intro:
      "Salon interiors, treatments and beauty moments from Smietz Beauty Hub, Mulund West.",
  },
  instagram: {
    eyebrow: "Instagram",
    title: "Follow Our Journey",
    text: "More from the salon on Instagram.",
    cta: "Follow",
  },
  cta: {
    title: "Inspired by what you see?",
    text: "Message us on WhatsApp to talk about a look.",
    label: "Enquire on WhatsApp",
  },
};

export const testimonialsCopy = {
  hero: {
    eyebrow: "Testimonials",
    title: "Client Testimonials",
    intro: "Genuine customer reviews, Google reviews and feedback from our clients.",
  },
  empty: {
    title: "Reviews are coming soon",
    text: "We are gathering genuine reviews from our clients, and they will appear here. If you have visited us, we would love to hear how it went.",
    cta: "Leave us a Google review",
    secondary: "Share feedback on WhatsApp",
  },
  cta: {
    title: "Book your visit",
    text: "Message us on WhatsApp to arrange an appointment.",
  },
};

export const contactCopy = {
  hero: {
    eyebrow: "Contact & Booking",
    title: "Contact & Booking",
    intro:
      "Book on WhatsApp, call us, or fill in the short form below to send your details to us on WhatsApp.",
  },
  whatsapp: {
    eyebrow: "Fastest Way to Book",
    title: "WhatsApp Booking",
    text: "Message us to book an appointment or to ask about a service.",
  },
  hours: { eyebrow: "Opening Hours", title: "Timings" },
  address: { eyebrow: "Visit Us", title: "Find Us" },
  consult: {
    title: "Free Skin Consultation",
    text: "A free skin consultation is part of what we offer. Mention it in your message and we will arrange it.",
  },
  form: {
    eyebrow: "Enquiry Form",
    title: "Send Your Booking Details",
    intro:
      "Fill in your details and we will open WhatsApp with your message ready to send. Nothing is sent until you press send in WhatsApp.",
    submit: "Continue to WhatsApp",
  },
};

export const notFoundCopy = {
  eyebrow: "404",
  title: "Page Not Found",
  text: "The page you are looking for may have moved or no longer exists. Let us guide you back.",
  image: "not-found-spa" as ImageKey,
};
