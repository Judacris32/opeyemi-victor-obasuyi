"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

type ParallaxImageProps = {
  src: StaticImageData | string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** How far the image drifts, in percent of its height */
  strength?: number;
};

/** Full-cover background image that drifts slower than the page as you scroll, after a slow zoom-in on load. */
export default function ParallaxImage({ src, alt, priority, className, sizes = "100vw", strength = 16 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : `${strength}%`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y }}
        initial={{ scale: reduce ? 1.06 : 1.2 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          placeholder={typeof src === "string" ? "empty" : "blur"}
          className={cn("object-cover", className)}
        />
      </motion.div>
    </div>
  );
}
