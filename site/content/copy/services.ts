// PENDING OWNER REVIEW
// One neutral, factual one-liner per service describing what the service is.
// Deliberately free of efficacy, medical, safety, duration, "clinical",
// "dermatolog-", "zero downtime", "permanent" and superlative claims.
// Keys are the exact service names from content/services.ts.

export const serviceDescriptions: Record<string, string> = {
  // Hair Services
  "Hair Wash & Blow Dry": "A hair wash followed by a blow dry.",
  "Hair Ironing": "Hair styled straight with a flat iron.",
  "Hair Tong": "Hair styled into curls or waves with tongs.",
  "Hair Wash & Blast Dry": "A hair wash followed by a quick blast dry.",
  "Hair Cut with Wash": "A haircut together with a hair wash.",
  "Dandruff Treatment": "A hair and scalp treatment offered for dandruff concerns.",
  "Hair Oil Massage with Wash": "A scalp massage with hair oil, followed by a hair wash.",

  // Hair Spa
  "L'Oréal Essential Hair Spa": "A hair spa service from the L'Oréal Essential range.",
  "Smietz Special Hair Spa": "The salon's own special hair spa.",
  "Shea Butter Spa": "A hair spa service featuring shea butter.",
  "Kera Spa": "A hair spa service offered under the Kera Spa name.",

  // Hair Colour
  "Crown Colour": "Colour applied to the crown area of the hair.",
  "Root Touch-Up": "Colour applied to the roots of the hair.",
  "Ammonia-Free Root Touch-Up": "A root colour touch-up using an ammonia-free colour.",
  "Global Colour": "Colour applied across the whole head of hair.",
  "Ammonia-Free Global Colour": "All-over hair colour using an ammonia-free colour.",
  "Fashion Highlights": "Highlights added to sections of the hair for a multi-tone look.",

  // Hand & Foot Care
  Manicure: "Hand and nail care, available as Classic, Aroma, D-Tan or Luxury.",
  Pedicure: "Foot and nail care, available as Classic, Aroma, D-Tan or Luxury.",
  "Foot Massage – 20 Minutes": "A foot massage lasting 20 minutes.",
  "Foot Massage – 30 Minutes": "A foot massage lasting 30 minutes.",

  // Skin Care
  "Bleach / D-Tan": "Bleach or D-Tan applied to the area you choose.",
  "Regular Clean-Up": "A standard facial clean-up.",
  "Brightening Clean-Up": "A facial clean-up from the brightening range.",
  "Hydra Clean-Up": "A facial clean-up from the hydra range.",
  "Korean Clean-Up": "A facial clean-up in the Korean style.",
  "Smietz Special Clean-Up": "The salon's own special clean-up.",

  // Facials
  "Tan Clean Facial": "A facial from the Tan Clean range.",
  "Power Oxygen Facial": "A facial from the Power Oxygen range.",
  "Diamond File Facial": "A facial from the Diamond File range.",
  "Whitening Facial": "A facial from the Whitening range.",
  "Gold Facial": "A facial from the Gold range.",
  "Korean Facial": "A facial inspired by Korean skin care.",
  "French Facial": "A facial inspired by French skin care.",
  "O3+ 1, 2 & 3 Facial": "A facial available in O3+ 1, 2 and 3 options.",
  "Smietz Signature Facial": "The salon's own signature facial.",
  "Fresh Fruit Facial": "A facial made with fresh fruit, offered by appointment only.",

  // Advanced Skin Care
  Microdermabrasion: "A skin treatment carried out with a microdermabrasion device.",
  "Radio Frequency (RF) Skin Tightening": "A skin treatment using radio frequency (RF) technology.",
  "Carbon Laser Facial (Hollywood Treatment)": "A facial treatment known as the Hollywood Treatment, using carbon and laser.",
  "Hydra Facial Treatment": "A facial treatment using hydra facial technology.",
  "Micro Needling with Booster": "A micro needling treatment applied together with a booster.",
  "HIFU Face Lift (Non-Surgical Face Lift)": "A non-surgical face lift using HIFU (high-intensity focused ultrasound).",

  // Bridal & Makeup, Laser & Hair Reduction
  "Bridal & Makeup": "Bridal and pre-bridal packages are available.",
  "Laser & Hair Reduction": "Laser and hair reduction services are offered at the salon.",
};

export function describe(name: string): string {
  return serviceDescriptions[name] ?? "";
}

// Category-level one-liners, taken from the page descriptions in business-info §8.
export const categorySummaries: Record<string, string> = {
  "hair-services": "Styling, hair wash, cuts and hair treatments.",
  "hair-spa": "Four hair spa services in shoulder, mid and waist lengths.",
  "hair-colour": "Root, crown and global colour, with ammonia-free options.",
  "hand-foot-care": "Manicure, pedicure and foot reflexology.",
  "skin-care": "Bleach, D-Tan and clean-ups.",
  facials: "Ten facials, from Tan Clean to Smietz Signature.",
  "advanced-skin-care": "Microdermabrasion, RF, HIFU, Hydra Facial and more.",
  "bridal-makeup": "Bridal and pre-bridal packages.",
  "laser-hair-reduction": "Laser and hair reduction services.",
};
