"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ImageReveal from "@/components/motion/ImageReveal";
import Icon from "@/components/ui/Icon";
import type { Shot } from "@/content/gallery";
import { easeOut } from "@/lib/motion";

const spanClass: Record<Shot["span"], string> = {
  wide: "h-[300px] md:col-span-2 md:h-auto",
  tall: "h-[460px] md:row-span-2 md:h-auto",
  regular: "h-[300px] md:h-auto",
};

/** Photo grid that opens a full-screen lightbox, with arrow-key and Esc support. */
export default function Gallery({ shots }: { shots: Shot[] }) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);
  const step = useCallback((dir: number) => setActive((i) => (i === null ? i : (i + dir + shots.length) % shots.length)), [shots.length]);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active === null ? null : shots[active];

  return (
    <>
      <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:auto-rows-[300px] md:grid-cols-3 md:gap-5 lg:auto-rows-[340px]">
        {shots.map((s, i) => (
          <li key={s.caption} className={spanClass[s.span]}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group/shot relative block h-full w-full overflow-hidden rounded-card text-left"
              aria-label={`Open photo: ${s.caption}`}
            >
              <ImageReveal src={s.src} alt={s.alt} sizes="(min-width: 768px) 66vw, 100vw" className="h-full w-full" delay={(i % 3) * 0.12} />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent px-5 pb-5 pt-16 text-white">
                <span className="text-[15px] font-medium">{s.caption}</span>
                <span className="flex h-10 w-10 flex-none scale-75 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-all duration-500 group-hover/shot:scale-100 group-hover/shot:opacity-100">
                  <Icon name="arrow" className="h-4 w-4 -rotate-45" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {current && active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            className="fixed inset-0 z-[80] flex flex-col bg-night/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
          >
            <div className="flex items-center justify-between px-5 py-5 text-[14px] text-white sm:px-8">
              <span className="text-white/70">
                {active + 1} of {shots.length}
              </span>
              <button type="button" onClick={close} autoFocus className="rounded-full border border-white/30 px-5 py-2.5 font-semibold transition-colors hover:bg-white hover:text-ink">
                Close
              </button>
            </div>
            <div className="relative flex flex-1 items-center justify-center px-5 pb-4 sm:px-24" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.caption}
                  className="relative h-full max-h-[76vh] w-full max-w-5xl"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: easeOut }}
                >
                  <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
                </motion.div>
              </AnimatePresence>
              {[
                { dir: -1, label: "Previous photo", side: "left-2 sm:left-6", rot: "rotate-180" },
                { dir: 1, label: "Next photo", side: "right-2 sm:right-6", rot: "" },
              ].map((b) => (
                <button
                  key={b.label}
                  type="button"
                  onClick={() => step(b.dir)}
                  aria-label={b.label}
                  className={`absolute top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-sun hover:text-ink sm:flex ${b.side}`}
                >
                  <Icon name="arrow" className={`h-5 w-5 ${b.rot}`} />
                </button>
              ))}
            </div>
            <p className="m-0 px-5 pb-8 text-center font-serif text-2xl italic text-white">{current.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
