"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CopyEmail from "@/components/ui/CopyEmail";
import Kicker from "@/components/ui/Kicker";
import Magnetic from "@/components/motion/Magnetic";
import SplitHeading from "@/components/motion/SplitHeading";
import { heroes } from "@/content/images";
import { site } from "@/content/site";
import { easeOut } from "@/lib/motion";

/** Centred, contained banner before the footer on every page except Contact. */
export default function CtaBanner() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  if (pathname === "/contact") return null;

  return (
    <section aria-label="Work with me" className="bg-paper py-24 md:py-32">
      <Container>
        <motion.div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-banner bg-ink px-6 py-20 text-center text-white shadow-lift sm:px-12 md:py-28"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.9, y: reduce ? 0 : 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: easeOut }}
        >
          <Image src={heroes.banner.src} alt="" fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,22,31,.62)_0%,rgba(19,22,31,.85)_75%)]" />

          {/* Viewfinder frame lines */}
          {["left-6 top-6 border-l-2 border-t-2", "right-6 top-6 border-r-2 border-t-2", "bottom-6 left-6 border-b-2 border-l-2", "bottom-6 right-6 border-b-2 border-r-2"].map((c) => (
            <span key={c} aria-hidden="true" className={`absolute h-8 w-8 border-white/60 ${c}`} />
          ))}

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7">
            <Kicker center className="text-gold">
              Let&apos;s work together
            </Kicker>
            <SplitHeading
              parts={["Have a", { accent: "shoot" }, "coming up?"]}
              accentStyle="gradient"
              className="font-display text-display-1 font-extrabold uppercase"
            />
            <p className="m-0 max-w-lg text-lg text-white/85">
              I&apos;m taking bookings for features, series, documentaries and commercials across Nigeria, Africa and internationally,
              and I&apos;m always ready to travel. Tell me about your production.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Magnetic>
                <Button href="/contact">Start a conversation</Button>
              </Magnetic>
              <CopyEmail email={site.email} dark />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
