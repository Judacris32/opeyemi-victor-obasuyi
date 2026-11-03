"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

export type HeadingPart = string | { accent: string };
export type AccentStyle = "marker" | "gradient" | "gold" | "sun";

type SplitHeadingProps = {
  parts: HeadingPart[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  accentStyle?: AccentStyle;
  /** "mount" animates straight away (page heroes); "view" waits until scrolled into view */
  trigger?: "mount" | "view";
  delay?: number;
};

/**
 * Heading whose words slide up from behind a mask, one after another.
 * Accent words ({ accent: "word" }) are set in italic serif with a highlight.
 */
export default function SplitHeading({
  parts,
  as = "h2",
  className,
  accentStyle = "marker",
  trigger = "view",
  delay = 0,
}: SplitHeadingProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  const words = parts.flatMap((p) =>
    typeof p === "string"
      ? p.split(" ").filter(Boolean).map((w) => ({ w, accent: false }))
      : p.accent.split(" ").map((w) => ({ w, accent: true })),
  );

  const label = words.map((x) => x.w).join(" ");
  const animateProps =
    trigger === "mount"
      ? { initial: "hidden", animate: "show" }
      : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.4 } };

  return (
    <Tag
      aria-label={label}
      className={cn("m-0", className)}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: delay } } }}
      {...animateProps}
    >
      {words.map((x, i) => (
        <span key={`${x.w}-${i}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.1em] pr-[0.04em] align-bottom">
          <motion.span
            className={cn("inline-block", x.accent && `accent accent-${accentStyle}`)}
            variants={{
              hidden: { y: reduce ? 0 : "115%", opacity: reduce ? 0 : 1 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.95, ease: easeOut } },
            }}
          >
            {x.w}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
