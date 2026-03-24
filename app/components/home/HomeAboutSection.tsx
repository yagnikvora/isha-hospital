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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] bg-secondary p-4 md:p-6 lg:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-15 items-center">
            <SlideIn direction="left" className="relative">
              <div className="relative h-[320px] sm:h-[380px] lg:h-[430px] rounded-[1.1rem] overflow-hidden">
                <Image
                  src="/images/common/Homepage(AboutUs Section).png"
                  alt="Doctor providing compassionate care to a patient"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                />
              </div>

              <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 z-10 bg-secondary border border-border rounded-2xl p-7 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-13 h-19 text-topbar-text flex items-center justify-center shrink-0">
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
                    <h3 className="text-[24px] font-bold text-text-primary">{homeAboutSection.feature.title}</h3>
                    <p className="text-[14px] text-text-secondary mt-1.5 leading-relaxed">{homeAboutSection.feature.description}</p>
                  </div>
                </div>
              </div>
            </SlideIn>

            <FadeIn className="pt-8 lg:pt-0">
              <p className="text-topbar-text font-semibold uppercase text-[16px]">
                {homeAboutSection.subtitle}
              </p>
              <h2 className="mt-3 text-[38px] md:text-[2rem] font-bold  max-w-[25ch]">
                {homeAboutSection.title}
              </h2>
              <p className="mt-4 text-[16px] text-text-secondary leading-relaxed sm:text-base max-w-[60ch]">
                {homeAboutSection.description}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {homeAboutSection.metrics.map((metric) => (
                  <div
                    key={metric.title}
                    className="h-45 group rounded-2xl border border-border bg-accent p-4 sm:p-5 text-text-primary transition duration-300 hover:bg-topbar-text hover:text-text-light hover:border-transparent"
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
