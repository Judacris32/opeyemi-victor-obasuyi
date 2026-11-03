"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { easeInOut } from "@/lib/motion";

type ImageRevealProps = {
  src: StaticImageData | string;
  alt: string;
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  delay?: number;
};

/**
 * Image that wipes open from the bottom while settling from a slight zoom,
 * then zooms gently on hover. The parent decides the size via className.
 * The outer element watches the viewport; the clip-path lives on an inner layer,
 * because a fully clipped element never registers as "in view".
 */
export default function ImageReveal({ src, alt, sizes, className, imgClassName, priority, delay = 0 }: ImageRevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={cn("group relative overflow-hidden", className)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <motion.div
        className="absolute inset-0"
        variants={{
          hidden: { clipPath: reduce ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" },
          show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.1, delay, ease: easeInOut } },
        }}
      >
        <motion.div
          className="absolute inset-0"
          variants={{ hidden: { scale: reduce ? 1 : 1.25 }, show: { scale: 1, transition: { duration: 1.4, delay, ease: easeInOut } } }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            placeholder={typeof src === "string" ? "empty" : "blur"}
            className={cn(
              "object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]",
              imgClassName,
            )}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
