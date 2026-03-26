import type { Metadata } from "next";
import PageHeroBanner from "../components/shared/PageHeroBanner";
import HomeAboutSection from "../components/home/HomeAboutSection";
import VisionMissionSection from "../components/home/VisionMissionSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import OurValuesSection from "../components/about/OurValuesSection";
import TestimonialsSection from "../components/about/TestimonialsSection";
import HomeHelpCtaSection from "../components/home/HomeHelpCtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Isha Hospital's commitment to compassionate care, medical excellence, and our vision for transforming healthcare.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroBanner
        title="About Us"
        description="Providing exceptional medical care with compassion, innovation, and a commitment to better health."
      />
      <HomeAboutSection />
      <VisionMissionSection />
      <WhyChooseUsSection />
      <OurValuesSection />
      <TestimonialsSection />
      <HomeHelpCtaSection />
      
    </>
  );
}
