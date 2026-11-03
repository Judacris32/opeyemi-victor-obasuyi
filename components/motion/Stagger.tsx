"use client";

import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import { easeOut } from "@/lib/motion";

type GroupProps = HTMLMotionProps<"div"> & { stagger?: number; delay?: number; as?: "div" | "ul" | "ol" };

/** Parent that reveals its <StaggerItem> children one after another when scrolled into view. */
export function StaggerGroup({ children, stagger = 0.1, delay = 0, as = "div", ...rest }: GroupProps) {
  const variants: Variants = { hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } };
  const Comp = as === "ul" ? motion.ul : as === "ol" ? motion.ol : motion.div;
  return (
    <Comp variants={variants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} {...(rest as object)}>
      {children}
    </Comp>
  );
}

type ItemProps = HTMLMotionProps<"div"> & { as?: "div" | "li" };

export function StaggerItem({ children, as = "div", ...rest }: ItemProps) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easeOut } },
  };
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp variants={variants} {...(rest as object)}>
      {children}
    </Comp>
  );
}
