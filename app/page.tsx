import HeroSection from "./components/home/HeroSection";
import ServicesCards from "./components/home/ServicesCards";
import TestimonialsSection from "./components/home/TestimonialsSection";
import CareProcess from "./components/home/CareProcess";
import HealthPartnerStats from "./components/shared/HealthPartnerStats";
import AchievementsSection from "./components/home/AchievementsSection";
import DoctorProfile from "./components/home/DoctorProfile";
import CTABanner from "./components/shared/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesCards />
      <TestimonialsSection />
      <CareProcess />
      <HealthPartnerStats />
      <AchievementsSection />
      <DoctorProfile />
      <CTABanner
        heading="Ready to Experience Quality Healthcare?"
        description="Schedule your appointment today and take the first step towards better health with our expert medical team."
        buttonText="Book Appointment"
        buttonHref="/contact"
      />
    </>
  );
}
