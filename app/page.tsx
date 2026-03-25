import HeroSection from "./components/home/HeroSection";
import HomeAboutSection from "./components/home/HomeAboutSection";
import ServicesCards from "./components/home/ServicesCards";
import HomeProcessSection from "./components/home/HomeProcessSection";
import WhyChooseUsSection from "./components/home/WhyChooseUsSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import HealthPartnerStats from "./components/shared/HealthPartnerStats";
import AchievementsSection from "./components/home/AchievementsSection";
import DoctorProfile from "./components/home/DoctorProfile";
import CTABanner from "./components/shared/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeAboutSection />
      <ServicesCards />
      <HomeProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
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
