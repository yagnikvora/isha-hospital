"use client";

import { motion } from "motion/react";

type SlideInProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
};

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.7,
  className = "",
}: SlideInProps) {
  const xOffset = direction === "left" ? -60 : 60;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
