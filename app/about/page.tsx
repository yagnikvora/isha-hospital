import type { Metadata } from "next";
import PageHeroBanner from "../components/shared/PageHeroBanner";
import AboutContent from "../components/about/AboutContent";
import VisionMission from "../components/about/VisionMission";
import HealthPartnerStats from "../components/shared/HealthPartnerStats";
import DeliverySection from "../components/about/DeliverySection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import BestServices from "../components/about/BestServices";
import CTABanner from "../components/shared/CTABanner";
import CommunityCommitment from "../components/about/CommunityCommitment";

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
      <AboutContent />
      <VisionMission />
      <HealthPartnerStats />
      <DeliverySection />
      <TestimonialsSection />
      <BestServices />
      <CTABanner
        heading="Book Your Care at All Seconds! and Start Your Health Journey"
        description="Don't wait — your path to better health begins with a single step. Connect with our specialists today."
        buttonText="Book Appointment"
        buttonHref="/contact"
      />
      <CommunityCommitment />
    </>
  );
}
