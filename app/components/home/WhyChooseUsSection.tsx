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
  "/images/common/Footer_and_Faq_and_Why_Choose_Us_background_Image.png";
const leftFeatures = whyChooseUsFeatures.filter((feature) => feature.side === "left");
const rightFeatures = whyChooseUsFeatures.filter(
  (feature) => feature.side === "right"
);

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-accent pt-10 pb-0 md:pt-14 md:pb-0 lg:pt-16 lg:pb-0">
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
          <h2 className="mx-auto mt-3 text-[30px] font-bold text-text-primary">
            {whyChooseUsSection.title}
          </h2>
        </FadeIn>

        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_390px_minmax(0,1fr)] lg:items-center lg:gap-8">
          <StaggerChildren className="space-y-7 lg:max-w-[360px] lg:justify-self-end">
            {leftFeatures.map((feature) => (
              <FeatureRow key={feature.id} feature={feature} align="right" />
            ))}
          </StaggerChildren>

          <FadeIn className="relative z-10 mx-auto flex h-[340px] w-full max-w-[280px] items-end justify-center sm:h-[410px] sm:max-w-[340px] lg:h-[500px] lg:max-w-[390px] lg:justify-self-center">
            <div className="relative h-full w-full">
              <Image
                src="/images/common/Homepage_HeroSection.png"
                alt="Doctor standing confidently to represent trusted family healthcare"
                fill
                priority={false}
                className="object-contain object-center"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 390px"
              />
            </div>
          </FadeIn>

          <StaggerChildren className="space-y-7 lg:max-w-[360px]">
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
      className={`items-center gap-x-4 ${isLeft ? "grid grid-cols-[54px_1fr] text-left" : "grid grid-cols-[1fr_54px] text-right"}`}
    >
      {!isLeft && (
        <>
          <FeatureContent
            title={feature.title}
            description={feature.description}
            align={align}
            />
          <div className="relative h-[54px] w-[50px] ms-3">
            <Image src={feature.icon} alt="" aria-hidden="true" fill className="object-contain" sizes="54px" />
          </div>
        </>
      )}

      {isLeft && (
        <>
        <div className="relative h-[54px] w-[50px]">
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
    <div className={align === "left" ? "max-w-[280px] ms-3" : "max-w-[280px] ml-auto"}>
      <h3 className="text-[18px] font-bold text-text-primary">{title}</h3>
      <p className="mt-2 text-[13px] text-text-secondary">{description}</p>
    </div>
  );
}
