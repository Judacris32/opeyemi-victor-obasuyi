"use client";

import { motion, useReducedMotion } from "framer-motion";
import ParallaxImage from "@/components/motion/ParallaxImage";
import SplitHeading from "@/components/motion/SplitHeading";
import Magnetic from "@/components/motion/Magnetic";
import Button from "@/components/ui/Button";
import Timecode from "@/components/ui/Timecode";
import { heroes } from "@/content/images";
import { site } from "@/content/site";
import { easeOut } from "@/lib/motion";

const corners = ["left-0 top-0 border-l-2 border-t-2", "right-0 top-0 border-r-2 border-t-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"];

export default function HomeHero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: easeOut },
  });

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink px-5 pb-32 pt-40 text-center text-white sm:px-8 md:min-h-[920px]">
      <ParallaxImage src={heroes.home.src} alt={heroes.home.alt} priority className={heroes.home.position} />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,22,31,.5)_0%,rgba(19,22,31,.82)_75%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* Viewfinder frame */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 bottom-14 top-28 sm:inset-x-8 lg:inset-x-12">
        {corners.map((c, i) => (
          <motion.span
            key={c}
            className={`absolute h-10 w-10 border-white/70 md:h-14 md:w-14 ${c}`}
            initial={{ opacity: 0, scale: reduce ? 1 : 2.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 + i * 0.08, ease: easeOut }}
          />
        ))}
        <motion.div {...rise(1.4)} className="absolute inset-x-16 top-5 hidden items-center justify-between font-mono text-[12px] tracking-[0.16em] sm:flex">
          <span className="flex items-center gap-2.5">
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-sun"
              animate={reduce ? undefined : { opacity: [1, 0.25, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
            REC
          </span>
          <Timecode />
        </motion.div>
      </div>

      <div className="relative flex max-w-6xl flex-col items-center gap-7">
        <motion.p
          {...rise(0.6)}
          className="m-0 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-medium backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ADE80] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ADE80]" />
          </span>
          Available for work worldwide
        </motion.p>

        <SplitHeading as="h1" parts={[site.name]} trigger="mount" delay={0.75} className="font-display text-display-hero font-extrabold uppercase" />

        <SplitHeading
          as="p"
          parts={["Behind the lens of", { accent: "award-winning films" }]}
          trigger="mount"
          delay={1.1}
          accentStyle="gradient"
          className="font-serif text-[clamp(1.6rem,3.2vw,2.75rem)] leading-[1.15]"
        />

        <motion.p {...rise(1.35)} className="m-0 max-w-2xl text-lg text-white/85 md:text-xl">
          Camera department crew on Breath of Life, Best Movie at the 2024 AMVCAs, and KM17 on Prime Video. I keep the camera ready, the
          set moving and every shot on schedule.
        </motion.p>

        <motion.div {...rise(1.5)} className="mt-2 flex flex-wrap justify-center gap-3">
          <Magnetic>
            <Button href="/work">View my work</Button>
          </Magnetic>
          <Magnetic>
            <Button href="/behind-the-scenes" variant="ghost">
              Behind the scenes
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.a
        href="#intro"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 hidden h-12 w-7 -translate-x-1/2 justify-center rounded-full border border-white/50 pt-2 md:flex"
        {...rise(1.8)}
      >
        <motion.span
          className="h-2 w-[2px] rounded-full bg-white"
          animate={reduce ? undefined : { y: [0, 14, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
