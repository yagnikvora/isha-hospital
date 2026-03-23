"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { services } from "@/app/data/siteData";
import SectionHeading from "../shared/SectionHeading";
import StaggerChildren, { staggerItem } from "../animations/StaggerChildren";

export default function ServicesCards() {
  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Care & Trusted Medical Excellence"
          description="We offer a wide range of healthcare services designed to meet all your medical needs under one roof."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
