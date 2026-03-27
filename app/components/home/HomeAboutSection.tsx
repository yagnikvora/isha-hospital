import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import SlideIn from "../animations/SlideIn";
import { homeAboutSection } from "@/app/data/siteData";

type MetricIcon = "patients" | "clock" | "heart";

function MetricSvg({ icon }: { icon: MetricIcon }) {
  const iconSrc =
    icon === "patients"
      ? "/Patients.svg"
      : icon === "clock"
        ? "/Working_hours.svg"
        : "/Heart.svg";

  const iconClassName =
    icon === "patients"
      ? "h-6 w-6 transition duration-300 [filter:brightness(0)_saturate(100%)_invert(18%)_sepia(84%)_saturate(4420%)_hue-rotate(349deg)_brightness(94%)_contrast(95%)] group-hover:[filter:brightness(0)_invert(1)]"
      : "h-6 w-6 transition duration-300 group-hover:brightness-0 group-hover:invert";

  return (
    <Image
      src={iconSrc}
      alt=""
      aria-hidden="true"
      width={24}
      height={24}
      className={iconClassName}
    />
  );
}

export default function HomeAboutSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] bg-secondary p-3 sm:p-4 md:p-6 lg:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-15 items-center">
            <SlideIn direction="left" className="relative">
              <div className="relative h-[320px] sm:h-[380px] lg:h-[430px] rounded-[1.1rem] overflow-hidden">
                <Image
                  src="/images/common/Homepage_AboutUs_Section.webp"
                  alt="Doctor providing compassionate care to a patient"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                />
              </div>

              <div className="absolute right-3 bottom-3 left-3 z-10 rounded-2xl border border-border bg-secondary p-4 shadow-lg sm:right-6 sm:bottom-4 sm:left-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center text-topbar-text sm:h-19 sm:w-13">
                    <Image
                      src="/Meds.svg"
                      alt=""
                      aria-hidden="true"
                      width={24}
                      height={24}
                      className="h-13 w-13"
                    />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-text-primary sm:text-[24px]">{homeAboutSection.feature.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-text-secondary sm:text-[14px]">{homeAboutSection.feature.description}</p>
                  </div>
                </div>
              </div>
            </SlideIn>

            <FadeIn className="pt-8 lg:pt-0">
              <p className="text-topbar-text font-semibold uppercase text-[16px]">
                {homeAboutSection.subtitle}
              </p>
              <h2 className="mt-3 max-w-[25ch] text-[30px] font-bold md:text-[2rem]">
                {homeAboutSection.title}
              </h2>
              <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-text-secondary sm:text-base">
                {homeAboutSection.description}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                {homeAboutSection.metrics.map((metric) => (
                  <div
                    key={metric.title}
                    className="group min-h-40 rounded-2xl border border-border bg-accent p-4 text-text-primary transition duration-300 hover:border-transparent hover:bg-topbar-text hover:text-text-light sm:min-h-45 sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <MetricSvg icon={metric.icon as MetricIcon} />
                    </div>
                    <p className="mt-3 text-2xl font-bold leading-none">{metric.title}</p>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-text-secondary transition duration-300 group-hover:text-text-light/90">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
