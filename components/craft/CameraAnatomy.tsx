"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import portrait from "@/assets/images/portrait-camera.jpg";
import { cameraParts } from "@/content/craft";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

/** Interactive breakdown of a cinema camera build, using a real rig from set. */
export default function CameraAnatomy() {
  const [active, setActive] = useState(cameraParts[3].id);
  const part = cameraParts.find((p) => p.id === active)!;

  return (
    <section aria-label="Inside a camera build" className="bg-ink py-24 text-paper md:py-32">
      <Container>
        <SectionHeading
          kicker="Inside the build"
          title={["Anatomy of a", { accent: "cinema camera" }]}
          accentStyle="gradient"
          kickerClass="text-gold"
          introClass="text-mist"
          intro="A camera on a film set is never just a camera. Tap a marker to see what each part of this build does."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal className="relative mx-auto aspect-[9/10] w-full max-w-[620px] overflow-hidden rounded-banner">
            <Image src={portrait} alt="A fully built cinema camera on a tripod, with Opeyemi behind it" fill placeholder="blur" sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-ink/20" />
            {cameraParts.map((p) => {
              const on = p.id === active;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p.id)}
                  aria-label={p.name}
                  aria-pressed={on}
                  className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  {!on && <span className="absolute h-7 w-7 animate-ping rounded-full bg-sun/50" />}
                  <span
                    className={cn(
                      "relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold transition-all duration-300",
                      on ? "scale-125 bg-gold text-ink" : "bg-sun text-ink",
                    )}
                  >
                    +
                  </span>
                </button>
              );
            })}
          </Reveal>

          <div className="flex flex-col gap-8">
            <div className="min-h-[190px] rounded-card bg-white/[0.06] p-7 md:p-9" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={part.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="m-0 font-display text-display-3 font-extrabold uppercase text-gold">{part.name}</h3>
                  <p className="m-0 text-lg leading-relaxed text-paper/90">{part.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {cameraParts.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setActive(p.id)}
                    aria-pressed={p.id === active}
                    className={cn(
                      "rounded-full border px-4 py-2.5 text-[14px] font-medium transition-colors duration-300",
                      p.id === active ? "border-gold bg-gold text-ink" : "border-white/20 text-paper/85 hover:border-white/60 hover:text-white",
                    )}
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
