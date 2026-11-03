"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import type { PressItem } from "@/content/press";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

/** Press feature card. `wide` lays the image beside the text on large screens. */
export default function PressCard({ item, wide = false }: { item: PressItem; wide?: boolean }) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className={cn(
        "group grid h-full overflow-hidden rounded-card bg-white text-ink shadow-card transition-shadow duration-500 hover:shadow-lift",
        wide && "lg:grid-cols-[1.1fr_1fr]",
      )}
    >
      <div className={cn("relative overflow-hidden", wide ? "h-64 lg:h-full lg:min-h-[380px]" : "h-60 md:h-64")}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 600px, 100vw"
          className={cn("object-cover transition-transform duration-[1200ms] group-hover:scale-105", item.focus)}
        />
      </div>
      <div className="flex flex-col gap-5 p-7 md:p-9">
        <span className="self-start rounded-full bg-peach px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-ember">
          {item.outlet} · {item.date}
        </span>
        <h3 className="m-0 font-display text-[28px] font-extrabold uppercase leading-[1.02] md:text-[34px]">{item.title}</h3>
        <p className="m-0 text-[16px] leading-relaxed text-muted">{item.summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[15px] font-semibold text-ember">
          Read on {item.outlet}
          <Icon name="arrow" className="h-4 w-4 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
          <span className="sr-only">(opens in a new tab)</span>
        </span>
      </div>
    </motion.a>
  );
}
