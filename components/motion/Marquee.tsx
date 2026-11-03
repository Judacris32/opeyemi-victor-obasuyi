"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  duration?: number;
  itemClassName?: string;
  separatorClassName?: string;
};

/** One endlessly scrolling row of words with small aperture marks between them. */
export default function Marquee({ items, reverse = false, duration = 40, itemClassName, separatorClassName }: MarqueeProps) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden" aria-hidden="true">
      <motion.div
        className="flex w-max items-center"
        animate={reduce ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {row.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className={cn("whitespace-nowrap px-6 md:px-8", itemClassName)}>{item}</span>
                <Aperture className={separatorClassName} />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Aperture({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5 flex-none md:h-6 md:w-6", className)} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <path d="M14.3 2.3 8.6 12M21 9.5H9.7M17 20.4 11.4 11M9.7 21.7 15.4 12M3 14.5h11.3M7 3.6l5.6 9.4" />
    </svg>
  );
}
