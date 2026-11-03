"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ParallaxImage from "@/components/motion/ParallaxImage";
import SplitHeading, { type HeadingPart } from "@/components/motion/SplitHeading";
import Container from "./Container";
import Kicker from "./Kicker";
import type { HeroImage } from "@/content/images";
import { easeOut } from "@/lib/motion";

type PageHeroProps = {
  image: HeroImage;
  label: string;
  title: HeadingPart[];
  intro?: string;
  /** Breadcrumb trail after Home */
  crumbs?: { href?: string; label: string }[];
};

/** Centred photo banner at the top of every inner page. */
export default function PageHero({ image, label, title, intro, crumbs = [] }: PageHeroProps) {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: easeOut },
  });
  const trail = [{ href: "/", label: "Home" }, ...crumbs];

  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden bg-ink pb-24 pt-44 text-white md:min-h-[78vh] md:pt-48">
      <ParallaxImage src={image.src} alt={image.alt} priority className={image.position} />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,22,31,.55)_0%,rgba(19,22,31,.78)_70%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/80 to-transparent" />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-7 text-center">
          <motion.nav aria-label="Breadcrumb" {...rise(0.45)}>
            <ol className="m-0 flex list-none items-center gap-2 p-0 text-[13px] text-white/70">
              {trail.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {c.href && i < trail.length - 1 ? (
                    <Link href={c.href} className="link-draw hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
          <motion.div {...rise(0.55)}>
            <Kicker center className="text-gold">
              {label}
            </Kicker>
          </motion.div>
          <SplitHeading
            as="h1"
            parts={title}
            trigger="mount"
            delay={0.65}
            accentStyle="gradient"
            className="font-display text-display-1 font-extrabold uppercase md:text-[clamp(3.5rem,7.4vw,7rem)]"
          />
          {intro && (
            <motion.p {...rise(1)} className="m-0 max-w-2xl text-lg text-white/85 md:text-xl">
              {intro}
            </motion.p>
          )}
        </div>
      </Container>
    </section>
  );
}
