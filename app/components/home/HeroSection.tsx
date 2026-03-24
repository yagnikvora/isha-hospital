import Image from "next/image";
import { heroData, contactInfo } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";
import SlideIn from "../animations/SlideIn";
import Navbar from "../layout/Navbar";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary mx-5 sm:mx-8 lg:mx-5 mt-2 rounded-[1.25rem] lg:rounded-[1.5rem]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 rounded-[1.25rem] lg:rounded-[1.5rem] overflow-hidden">
        <Image
          src="/images/common/Homepage(Hero Section Background).png"
          alt="Hospital Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 hero-overlay-home" />

      <div className="relative z-10">
        <Navbar embedded />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 xl:gap-12 items-center pt-7 pb-0 lg:pt-10 lg:pb-0 min-h-[620px] lg:min-h-[670px] xl:min-h-[700px]">
          {/* Left Content */}
          <div className="relative z-10 space-y-7 lg:space-y-10">
            <FadeIn>
              <div className="flex items-center gap-3">
                <span className="text-secondary text-sm lg:text-base font-bold tracking-[0.25em] uppercase">
                  {heroData.subtitle}
                </span>
              </div>
            </FadeIn>

            <SlideIn direction="left" delay={0.2}>
              <h1 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[3.25rem] xl:text-[3.55rem] font-bold text-secondary leading-[1.15] max-w-[17.5ch] lg:max-w-none xl:max-w-none">
                <span className="lg:hidden">{heroData.title}</span>
                <span className="hidden lg:block">
                  <span className="block whitespace-nowrap">We Are A Full Service</span>
                  <span className="block whitespace-nowrap">Clinic With Modern</span>
                  <span className="block whitespace-nowrap">Technology</span>
                </span>
              </h1>
            </SlideIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-10 h-10 rounded-full bg-topbar-text flex items-center justify-center shrink-0 shadow-[0_8px_24px_rgba(227,30,37,0.35)]">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-5 sm:gap-7 text-secondary">
                  <div>
                    <p className="text-xs sm:text-sm text-secondary/80 mb-1">Emergency Call</p>
                    <p className="text-[1.12rem] sm:text-[1.3rem] font-bold leading-tight">{contactInfo.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-secondary/80 mb-1">Mobile No.</p>
                    <p className="text-[1.12rem] sm:text-[1.3rem] font-bold leading-tight">{contactInfo.mobile}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Working Hours Card */}
            <FadeIn delay={0.4}>
              <div className="mt-4 lg:mt-6 bg-white rounded-3xl p-6 lg:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.12)] max-w-[360px] border border-gray-100">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-5">
                  Working Hours
                </h3>
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium text-sm sm:text-base">Morning:</span>
                    <span className="text-topbar-text font-bold text-sm sm:text-base">
                      {contactInfo.workingHours.morning}
                    </span>
                  </div>
                  <div className="h-[1px] bg-gray-200" />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium text-sm sm:text-base">Evening:</span>
                    <span className="text-topbar-text font-bold text-sm sm:text-base">
                      {contactInfo.workingHours.evening}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Doctor Image */}
          <SlideIn direction="right" delay={0.3} className="relative h-full flex items-end justify-center lg:justify-end lg:self-end">
            <div className="relative w-full h-full max-w-[450px] lg:max-w-[490px] xl:max-w-[540px] flex items-end">
              {/* Doctor Image */}
              <div className="relative w-full h-[470px] sm:h-[520px] lg:h-[590px] xl:h-[640px] ml-4 lg:ml-8">
                <Image
                  src="/images/common/Homepage(HeroSection).png"
                  alt="Doctor at Isha Hospital"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="(max-width: 768px) 480px, (max-width: 1024px) 520px, 580px"
                />
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
