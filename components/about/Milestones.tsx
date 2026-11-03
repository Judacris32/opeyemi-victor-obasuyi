"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Icon from "@/components/ui/Icon";
import type { Milestone } from "@/content/about";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

/** Perforations down both edges of the spine, like a strip of 35mm film. */
const sprockets: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(to bottom, #FBF8F2 0 8px, transparent 8px 16px), repeating-linear-gradient(to bottom, #FBF8F2 0 8px, transparent 8px 16px)",
  backgroundSize: "5px 100%, 5px 100%",
  backgroundPosition: "4px 0, calc(100% - 4px) 0",
  backgroundRepeat: "no-repeat",
};

/**
 * Timeline drawn as a strip of film: it "develops" in sunset colours as you scroll,
 * with milestone cards alternating either side on desktop.
 */
export default function Milestones({ items }: { items: Milestone[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0, 1]);

  return (
    <ol ref={ref} className="relative m-0 list-none p-0">
      {/* Film-strip spine */}
      <div aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-[30px] -translate-x-1/2 overflow-hidden rounded-md bg-ink lg:left-1/2">
        <motion.div style={{ scaleY }} className="absolute inset-0 origin-top bg-gradient-to-b from-sun via-sun-soft to-gold" />
        <div className="absolute inset-0 opacity-90" style={sprockets} />
      </div>

      {items.map((m, i) => {
        const left = i % 2 === 0;
        return (
          <li key={`${m.year}-${m.title}`} className="relative grid gap-4 pb-14 pl-14 last:pb-0 lg:grid-cols-2 lg:gap-0 lg:pl-0">
            {/* Node on the spine */}
            <motion.span
              aria-hidden="true"
              className="absolute left-5 top-8 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-[5px] border-sun bg-paper shadow-glow lg:left-1/2"
              initial={{ scale: reduce ? 1 : 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, ease: easeOut }}
            />

            {/* Big year on the opposite side (desktop) */}
            <motion.div
              className={cn("hidden items-start pt-2 lg:flex", left ? "order-2 justify-start pl-20" : "order-1 justify-end pr-20")}
              initial={{ opacity: 0, x: reduce ? 0 : left ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: easeOut }}
            >
              <span className="font-display text-[clamp(5rem,9vw,8rem)] font-extrabold leading-none text-ember/70">{m.year}</span>
            </motion.div>

            {/* Card */}
            <motion.div
              className={cn(left ? "lg:order-1 lg:pr-20" : "lg:order-2 lg:pl-20")}
              initial={{ opacity: 0, x: reduce ? 0 : left ? -50 : 50, y: reduce ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: easeOut }}
            >
              <div className="group flex flex-col gap-4 rounded-card bg-white p-7 shadow-card transition-shadow duration-500 hover:shadow-lift md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-3xl font-extrabold leading-none text-ember lg:hidden">{m.year}</span>
                  {m.tag && <span className="rounded-full bg-aqua px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-teal">{m.tag}</span>}
                </div>
                <h3 className="m-0 font-display text-display-3 font-extrabold uppercase">{m.title}</h3>
                <p className="m-0 leading-relaxed text-muted">{m.text}</p>
                {m.href && (
                  <Link href={m.href} className="inline-flex items-center gap-2 self-start text-[15px] font-semibold text-ember">
                    View the film
                    <Icon name="arrow" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </motion.div>
          </li>
        );
      })}

      {/* What's next */}
      <li className="relative pl-14 pt-14 lg:pl-0">
        <span aria-hidden="true" className="absolute left-5 top-16 z-10 h-6 w-6 -translate-x-1/2 rounded-full bg-gold ring-8 ring-gold/30 lg:left-1/2" />
        <Reveal>
          <Link
            href="/contact"
            className="group mx-auto flex max-w-xl flex-col items-start gap-3 rounded-card bg-gold p-8 text-ink shadow-card transition-shadow duration-500 hover:shadow-lift lg:mt-10 lg:items-center lg:text-center"
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.24em]">What&apos;s next</span>
            <span className="font-display text-display-2 font-extrabold uppercase">Your production</span>
            <span className="inline-flex items-center gap-2 font-semibold">
              Let&apos;s talk <Icon name="arrow" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      </li>
    </ol>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
