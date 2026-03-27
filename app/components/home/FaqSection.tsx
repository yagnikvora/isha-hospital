"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { faqItems, faqSection } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";

const sectionBackgroundImage =
    "/images/common/Footer_and_Faq_and_Why_Choose_Us_background_Image.webp";

export default function FaqSection() {
    const [openItemId, setOpenItemId] = useState<number | null>(faqItems[0]?.id ?? null);

    const handleToggle = (id: number) => {
        setOpenItemId((currentId) => (currentId === id ? null : id));
    };

    return (
        <section className="relative overflow-hidden bg-accent py-12 sm:py-16 lg:py-20">
            <Image
                src={sectionBackgroundImage}
                alt=""
                aria-hidden="true"
                fill
                className="w-full scale-x-[-1] object-cover object-left opacity-100%"
                sizes="100vw"
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.24fr] lg:gap-16 lg:px-8">
                <FadeIn className="lg:pt-12">
                    <p className="text-[16px] font-semibold uppercase tracking-wide text-topbar-text">
                        {faqSection.subtitle}
                    </p>
                    <h2 className="mt-3 text-[30px] font-bold text-text-primary sm:text-[38px]">
                        {faqSection.title}
                    </h2>
                    <p className="mt-5 max-w-[54ch] text-[15px] leading-[1.9] text-text-secondary">
                        {faqSection.description}
                    </p>
                </FadeIn>

                <FadeIn className="space-y-3.5 min-h-[20rem] sm:space-y-4 sm:min-h-[25rem] lg:min-h-[23rem]">
                    {faqItems.map((item, index) => {
                        const isOpen = openItemId === item.id;

                        return (
                            <article
                                key={item.id}
                                className="overflow-hidden rounded-[12px]"
                            >
                                <button
                                    type="button"
                                    onClick={() => handleToggle(item.id)}
                                    aria-expanded={isOpen}
                                    className={`flex w-full items-center justify-between px-4 py-[15px] text-left transition-colors duration-300 sm:px-6 sm:py-[17px] ${isOpen ? "bg-primary text-text-light" : "bg-secondary text-text-primary"
                                        }`}
                                >
                                    <span className="pr-3 text-[14px] font-bold sm:text-[15px]">
                                        {index + 1}. {item.question}
                                    </span>
                                    <span
                                        className={`relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] transition-colors duration-300 sm:h-10 sm:w-10 ${isOpen ? "bg-topbar-text" : "bg-primary"
                                            }`}
                                        aria-hidden="true"
                                    >
                                        <span className="absolute h-[2px] w-5 rounded-full bg-text-light" />
                                        <span
                                            className={`absolute h-5 w-[2px] rounded-full bg-text-light transition-all duration-300 ${isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
                                                }`}
                                        />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.32, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-4 py-5 sm:px-6 sm:py-6">
                                                <p className="text-[14px] leading-[1.9] text-text-secondary">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </article>
                        );
                    })}
                </FadeIn>
            </div>
        </section>
    );
}
