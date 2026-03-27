"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { careSteps } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";
import StaggerChildren, { staggerItem } from "../animations/StaggerChildren";

const processCardBackgroundImage =
  "/images/common/Homepage_Process_Section_Card_Background_Image.png";

export default function HomeProcessSection() {
  return (
    <section className="py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.14fr_1fr] lg:gap-8">
          <FadeIn className="flex flex-col">
            <p className="text-[15px] font-semibold uppercase text-topbar-text">
                Process
            </p>
            <h2 className="mt-3 text-[30px] font-bold leading-[1.2] text-text-primary sm:text-[35px]">
              Take Control of Your Health with Our Simple Care Process
            </h2>
            <p className="mt-4 text-[14px] leading-[1.7] text-text-secondary">
              We make your healthcare journey smooth, supportive, and
              stress-free. From your first consultation to recovery planning,
              our team follows a clear and patient-focused process to deliver
              the right care at every step.
            </p>

            <div className="relative mt-7 h-[190px] w-full max-w-[560px] self-center sm:h-[240px] lg:mt-8 lg:h-[265px] lg:self-start">
              <Image
                src="/images/common/Homepage_Contact_Us_Process_Section.png"
                alt="Medical team supporting patient care process"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {careSteps.map((step) => {
              return (
                <motion.article
                  key={step.step}
                  variants={staggerItem}
                  whileHover={{ y: -5, transition: { duration: 0.22 } }}
                  className="group relative min-h-[176px] overflow-hidden rounded-[1rem] border border-border bg-secondary p-4 text-text-primary transition-colors duration-300 hover:border-topbar-text hover:text-text-light sm:p-5 lg:aspect-[1/1] lg:min-h-[220px]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Image
                      src={processCardBackgroundImage}
                      alt=""
                      aria-hidden="true"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-process-card-overlay" />
                  </div>

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[32px] font-bold leading-none text-topbar-text transition-colors duration-300 group-hover:text-text-light/90 sm:text-[38px]">
                        {String(step.step).padStart(2, "0")}
                      </span>
                      <span className="h-[2px] w-12 bg-topbar-text transition-colors duration-300 group-hover:bg-text-light/90" />
                    </div>

                    <h3 className="mt-4 text-[17px] font-bold sm:text-[18px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.65] text-text-secondary transition-colors duration-300 group-hover:text-text-light/90">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
