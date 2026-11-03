"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/cn";

type Segment = string | { strong: string };

/**
 * A paragraph whose words light up one by one as it scrolls through the viewport.
 * Pass { strong: "..." } for phrases that should land in the accent colour.
 */
export default function ScrollWords({ segments, className }: { segments: Segment[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 50%"] });

  const words = segments.flatMap((s) =>
    typeof s === "string"
      ? s.split(" ").filter(Boolean).map((w) => ({ w, strong: false }))
      : s.strong.split(" ").map((w) => ({ w, strong: true })),
  );

  return (
    <p ref={ref} className={cn("m-0", className)}>
      {words.map((x, i) => (
        <Word key={`${x.w}-${i}`} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} strong={x.strong} still={!!reduce}>
          {x.w}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  strong,
  still,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  strong: boolean;
  still: boolean;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <>
      <motion.span style={{ opacity: still ? 1 : opacity }} className={cn(strong && "font-serif font-normal italic normal-case tracking-normal text-ember")}>
        {children}
      </motion.span>{" "}
    </>
  );
}
