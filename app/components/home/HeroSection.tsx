import Image from "next/image";
import { heroData, contactInfo } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";
import SlideIn from "../animations/SlideIn";
import Navbar from "../layout/Navbar";

export default function HeroSection() {
  return (
    <section className="relative mt-2 mx-2 overflow-hidden rounded-[1.1rem] bg-primary sm:mx-8 sm:rounded-[1.25rem] lg:mx-5 lg:rounded-[1.5rem]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-[1.1rem] sm:rounded-[1.25rem] lg:rounded-[1.5rem]">
        <Image
          src="/images/common/Homepage_Hero_Section_Background.webp"
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

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-7">
        <div className="grid min-h-[560px] grid-cols-1 items-center gap-7 pt-5 pb-0 lg:min-h-[670px] lg:grid-cols-2 lg:gap-10 lg:pt-10 lg:pb-0 xl:min-h-[700px] xl:gap-12">
          {/* Left Content */}
          <div className="relative z-10 space-y-6 lg:space-y-10">
            <FadeIn>
              <div className="flex items-center gap-3">
                <span className="text-secondary text-sm lg:text-base font-bold tracking-[0.25em] uppercase">
                  {heroData.subtitle}
                </span>
              </div>
            </FadeIn>

            <SlideIn direction="left" delay={0.2}>
              <h1 className="max-w-[17.5ch] text-[1.85rem] leading-[1.15] font-bold text-secondary sm:text-[2.7rem] lg:max-w-none lg:text-[3.25rem] xl:max-w-none xl:text-[3.55rem]">
                <span className="lg:hidden">{heroData.title}</span>
                <span className="hidden lg:block">
                  <span className="block whitespace-nowrap">We Are A Full Service</span>
                  <span className="block whitespace-nowrap">Clinic With Modern</span>
                  <span className="block whitespace-nowrap">Technology</span>
                </span>
              </h1>
            </SlideIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
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
                <div className="grid w-full grid-cols-1 gap-4 text-secondary sm:w-auto sm:grid-cols-2 sm:gap-7">
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
              <div className="mt-4 max-w-[360px] rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] lg:mt-6 lg:p-7">
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
          <SlideIn direction="right" delay={0.3} className="relative flex h-full items-end justify-center pt-1 lg:justify-end lg:self-end">
            <div className="relative flex h-full w-full max-w-[450px] items-end lg:max-w-[490px] xl:max-w-[540px]">
              {/* Doctor Image */}
              <div className="relative ml-0 h-[390px] w-full sm:h-[520px] lg:ml-8 lg:h-[590px] xl:h-[640px]">
                <Image
                  src="/images/common/Homepage_HeroSection.webp"
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
