"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import type { Credit } from "@/content/credits";
import { easeOut } from "@/lib/motion";

/** Poster-led card for one film: hover lifts the card, zooms the poster and reveals a "View film" label. */
export default function PosterCard({ credit, priority }: { credit: Credit; priority?: boolean }) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.5, ease: easeOut }} className="h-full">
      <Link
        href={`/work/${credit.slug}`}
        className="group flex h-full flex-col gap-5 rounded-card bg-white p-3 shadow-card transition-shadow duration-500 hover:shadow-lift"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink">
          <Image src={credit.poster} alt="" fill aria-hidden="true" sizes="400px" className="scale-125 object-cover opacity-50 blur-2xl" />
          <Image
            src={credit.poster}
            alt={`${credit.title} poster`}
            fill
            priority={priority}
            placeholder="blur"
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
          />
          {credit.highlight && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[12px] font-semibold text-ink shadow-card">
              <Icon name="award" className="h-3.5 w-3.5" />
              {credit.highlight}
            </span>
          )}
          <span className="absolute inset-0 flex items-center justify-center bg-ink/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="inline-flex translate-y-3 items-center gap-2 rounded-full bg-paper px-5 py-3 text-[14px] font-semibold text-ink transition-transform duration-500 group-hover:translate-y-0">
              View film <Icon name="arrow" className="h-4 w-4" />
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-2 px-3 pb-3">
          <span className="text-[13px] font-medium text-muted">
            {credit.year} · {credit.format}
          </span>
          <h3 className="m-0 font-display text-display-3 font-extrabold uppercase transition-colors duration-500 group-hover:text-ember">
            {credit.title}
          </h3>
          <span className="text-[14px] text-muted">{credit.role}</span>
        </div>
      </Link>
    </motion.div>
  );
}
