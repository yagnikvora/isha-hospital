"use client";

import { motion } from "motion/react";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "none";
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  direction = "up",
}: FadeInProps) {
  const yOffset = direction === "up" ? 30 : direction === "down" ? -30 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
