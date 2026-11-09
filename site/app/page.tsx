import type { Metadata } from "next";
import { business } from "@/content/business";
import { homeCopy } from "@/content/copy/home";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import {
  BridalBanner,
  ExperienceSection,
  FeaturedServices,
  GalleryTeaser,
  HomeHero,
  ReviewsTeaser,
  SignatureTreatments,
  UspStrip,
  WhyChooseUs,
} from "@/components/sections/HomeSections";

export const metadata: Metadata = {
  title: { absolute: `${business.name} | ${business.tagline}` },
  description: homeCopy.hero.text,
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <UspStrip />
      <ExperienceSection />
      <FeaturedServices />
      <SignatureTreatments />
      <WhyChooseUs />
      <BridalBanner />
      <GalleryTeaser />
      <ReviewsTeaser />
      <FaqSection eyebrow={homeCopy.faq.eyebrow} title={homeCopy.faq.title} />
      <CtaBand title={homeCopy.finalCta.title} text={homeCopy.finalCta.text} label="Book Your Appointment" />
    </>
  );
}
