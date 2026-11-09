import { brandIntro } from "../business";
import type { ImageKey } from "../images";

export const aboutCopy = {
  hero: {
    eyebrow: "About Us",
    title: "Our Story",
    intro: "35 years of beauty expertise associated with Sushama, in Mulund West, Mumbai.",
    image: "about-sanctuary" as ImageKey,
  },
  // Text comes only from business-info.md. No title, quote, credential or founding year.
  expert: {
    paragraphs: [brandIntro[1], brandIntro[2]],
  },
  focus: {
    eyebrow: "What We Focus On",
    title: "Our Approach",
    items: [
      { icon: "heart", title: "Personalised Beauty Care", text: "Care shaped around the individual." },
      { icon: "sparkle", title: "Premium Products", text: "A focus on premium products." },
      { icon: "award", title: "Professional Attention", text: "Experienced, attentive service." },
      { icon: "shield", title: "A Comfortable Salon Experience", text: "A hygienic, welcoming environment." },
    ],
  },
  consult: {
    eyebrow: "Where It Begins",
    title: "Free Skin Consultation & Personalised Advice",
    text: "Every visit can begin with a free skin consultation and personalised beauty advice, so you can choose what suits you.",
  },
  salon: {
    eyebrow: "Our Salon",
    title: "Inside Smietz Beauty Hub",
    text: brandIntro[0],
    image: "salon-interior-1" as ImageKey,
  },
  corners: {
    eyebrow: "Inside Smietz",
    title: "Around the Salon",
    items: [
      { image: "about-facial-suite" as ImageKey, title: "Facial room" },
      { image: "about-styling-lounge" as ImageKey, title: "Hair styling area" },
      { image: "about-welcome-lounge" as ImageKey, title: "Welcome lounge" },
    ],
  },
  cta: {
    eyebrow: "Visit Us",
    title: "Begin Your Personalised Journey",
    text: "Message us on WhatsApp or call to talk through what you have in mind.",
  },
};
