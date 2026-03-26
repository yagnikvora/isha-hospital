import HeroSection from "./components/home/HeroSection";
import HomeAboutSection from "./components/home/HomeAboutSection";
import ServicesCards from "./components/home/ServicesCards";
import HomeProcessSection from "./components/home/HomeProcessSection";
import WhyChooseUsSection from "./components/home/WhyChooseUsSection";
import VisionMissionSection from "./components/home/VisionMissionSection";
import DoctorsStaffSection from "./components/home/DoctorsStaffSection";
import FaqSection from "./components/home/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeAboutSection />
      <ServicesCards />
      <HomeProcessSection />
      <WhyChooseUsSection />
      <VisionMissionSection />
      <DoctorsStaffSection />
      <FaqSection />
    </>
  );
}
