"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  whyChooseUsFeatures,
  whyChooseUsSection,
} from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";
import StaggerChildren, { staggerItem } from "../animations/StaggerChildren";

const sectionBackgroundImage =
  "/images/common/Footer_and_Faq_and_Why_Choose_Us_background_Image.webp";
const leftFeatures = whyChooseUsFeatures.filter((feature) => feature.side === "left");
const rightFeatures = whyChooseUsFeatures.filter(
  (feature) => feature.side === "right"
);

export default function WhyChooseUsSection() {
  return (
    <section className="relative mx-2 overflow-hidden rounded-t-2xl bg-accent pt-10 pb-5 sm:mx-4 md:pt-14 md:pb-0 lg:pt-16 lg:pb-0">
      <Image
        src={sectionBackgroundImage}
        alt=""
        aria-hidden="true"
        fill
        className="object-cover object-center opacity-100% w-full"
        sizes="100vw"
        />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-[16px] font-semibold uppercase tracking-wide text-topbar-text">
            {whyChooseUsSection.subtitle}
          </p>
          <h2 className="mx-auto mt-3 text-[28px] font-bold text-text-primary sm:text-[30px]">
            {whyChooseUsSection.title}
          </h2>
        </FadeIn>

        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_390px_minmax(0,1fr)] lg:items-center lg:gap-8">
          <StaggerChildren className="space-y-5 sm:space-y-7 lg:max-w-[360px] lg:justify-self-end">
            {leftFeatures.map((feature) => (
              <FeatureRow key={feature.id} feature={feature} align="right" />
            ))}
          </StaggerChildren>

          <FadeIn className="relative z-10 mx-auto flex h-[340px] w-full max-w-[280px] items-end justify-center sm:h-[410px] sm:max-w-[340px] lg:h-[500px] lg:max-w-[390px] lg:justify-self-center">
            <div className="relative h-full w-full">
              <Image
                src="/images/common/Homepage_HeroSection.webp"
                alt="Doctor standing confidently to represent trusted family healthcare"
                fill
                priority={false}
                className="object-contain object-center"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 390px"
              />
            </div>
          </FadeIn>

          <StaggerChildren className="space-y-5 sm:space-y-7 lg:max-w-[360px]">
            {rightFeatures.map((feature) => (
              <FeatureRow key={feature.id} feature={feature} align="left" />
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}

type WhyFeature = (typeof whyChooseUsFeatures)[number];

function FeatureRow({
  feature,
  align,
}: {
  feature: WhyFeature;
  align: "left" | "right";
}) {
  const isLeft = align === "left";

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`items-center gap-x-3 sm:gap-x-4 ${isLeft ? "grid grid-cols-[42px_1fr] text-left sm:grid-cols-[54px_1fr]" : "grid grid-cols-[1fr_42px] text-right sm:grid-cols-[1fr_54px]"}`}
    >
      {!isLeft && (
        <>
          <FeatureContent
            title={feature.title}
            description={feature.description}
            align={align}
            />
          <div className="relative ms-2 h-[42px] w-[40px] sm:ms-3 sm:h-[54px] sm:w-[50px]">
            <Image src={feature.icon} alt="" aria-hidden="true" fill className="object-contain" sizes="54px" />
          </div>
        </>
      )}

      {isLeft && (
        <>
        <div className="relative h-[42px] w-[40px] sm:h-[54px] sm:w-[50px]">
          <Image src={feature.icon} alt="" aria-hidden="true" fill className="object-contain" sizes="54px" />
        </div>
        <FeatureContent
          title={feature.title}
          description={feature.description}
          align={align}
          />
        </>
      )}
    </motion.article>
  );
}

function FeatureContent({
  title,
  description,
  align,
}: {
  title: string;
  description: string;
  align: "left" | "right";
}) {
  return (
    <div className={align === "left" ? "ms-2 max-w-[280px] sm:ms-3" : "ml-auto max-w-[280px]"}>
      <h3 className="text-[16px] font-bold text-text-primary sm:text-[18px]">{title}</h3>
      <p className="mt-1.5 text-[12px] text-text-secondary sm:mt-2 sm:text-[13px]">{description}</p>
    </div>
  );
}
