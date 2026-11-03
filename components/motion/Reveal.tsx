"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { easeOut } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

/** Fades and lifts content into place the first time it scrolls into view. */
export default function Reveal({ children, delay = 0, y = 40, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
