import Image from "next/image";
import { homeVisionMissionSection } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";
import SlideIn from "../animations/SlideIn";

export default function VisionMissionSection() {
  return (
    <section className="pt-0 pb-12 sm:pb-14 lg:pb-33">
      <div className="relative mx-3 w-auto rounded-t-2xl bg-primary px-6 py-14 sm:px-10 lg:pl-28 lg:pr-20 lg:py-16 xl:pl-65 xl:pr-24">
        <FadeIn className="text-text-light lg:pr-[58%]">
          <p className="text-sm font-semibold tracking-wide text-text-light/90">
            {homeVisionMissionSection.subtitle}
          </p>
          <h2 className="mt-4 max-w-[24ch] text-3xl font-bold leading-tight sm:text-4xl">
            {homeVisionMissionSection.title}
          </h2>
        </FadeIn>

        <SlideIn
          direction="right"
          className="border-x border-b border-primary/35 bg-surface-soft p-7 sm:px-8 lg:absolute lg:top-0 lg:right-50 lg:mt-0 lg:w-[30%] lg:rounded-b-2xl"
        >
          <article>
            <div className="flex items-start gap-4">
                <Image
                  src="/vision.svg"
                  alt=""
                  aria-hidden="true"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />                
              <div>
                <h3 className="text-3xl font-bold leading-none text-text-primary">
                  {homeVisionMissionSection.visionTitle}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  {homeVisionMissionSection.vision}
                </p>
              </div>
            </div>
          </article>

          <div className="my-6 border-t border-border" />
          <article>
            <div className="flex items-start gap-4">
              <Image
                src="/mission.svg"
                alt=""
                aria-hidden="true"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <div>
                <h3 className="text-3xl font-bold leading-none text-text-primary">
                  {homeVisionMissionSection.missionTitle}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  {homeVisionMissionSection.mission}
                </p>
              </div>
            </div>
          </article>
        </SlideIn>
      </div>
    </section>
  );
}
