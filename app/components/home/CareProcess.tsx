"use client";

import { motion } from "motion/react";
import { careSteps } from "@/app/data/siteData";
import SectionHeading from "../shared/SectionHeading";
import StaggerChildren, { staggerItem } from "../animations/StaggerChildren";

export default function CareProcess() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          subtitle="How It Works"
          title="New Exciting For Your Health with Our Simple Care Process"
          description="Getting quality healthcare has never been easier. Follow these simple steps to begin your journey to better health."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careSteps.map((step) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="relative text-center group"
            >
              {/* Step number */}
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                  {String(step.step).padStart(2, "0")}
                </span>
              </div>

              {/* Connector line (hidden on last item and mobile) */}
              {step.step < careSteps.length && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-primary/20" />
              )}

              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
