"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { services } from "@/app/data/siteData";
import StaggerChildren, { staggerItem } from "../animations/StaggerChildren";

export default function ServicesCards() {
  return (
    <section id="services" className="py-10">
      <div className="px-4">
        <div className="rounded-[1rem] bg-accent p-5 md:p-8 lg:px-60 lg:py-30">
          <div className="text-center">
            <p className="text-topbar-text text-[16px] sm:text-sm font-semibold uppercase">
              Services
            </p>
            <h2 className="mt-3 text-[33px] font-bold text-text-primary">
              Our Medical Treatments
            </h2>
          </div>

          <StaggerChildren className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((service) => (
              <motion.article
                key={service.id}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group rounded-2xl bg-secondary border border-border overflow-hidden shadow-[0_14px_35px_var(--color-contact-shadow)]"
              >
                <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="relative px-10 pb-6 pt-20 text-center">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-[85%] rounded-xl bg-primary px-3 py-7 text-center text-text-light font-semibold shadow-[0_12px_20px_var(--color-contact-shadow)] transition-colors duration-300 group-hover:bg-topbar-text">
                    {service.title}
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
