"use client";

import { motion } from "motion/react";

type StaggerChildrenProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

const container = {
  hidden: { opacity: 0 },
  visible: (staggerDelay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.15,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
