"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { process } from "@/content/craft";
import { heroes } from "@/content/images";
import { easeInOut, easeOut } from "@/lib/motion";

/**
 * "How a shot comes together": four photo-led steps joined by a line
 * that draws across on scroll, with a node for each step.
 */
export default function Process() {
  const reduce = useReducedMotion();
  return (
    <section aria-label="How a shot comes together" className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <Image src={heroes.process.src} alt="" fill sizes="100vw" className="object-cover opacity-[0.12]" />
      <Container className="relative">
        <SectionHeading
          kicker="The process"
          title={["How a shot comes", { accent: "together" }]}
          accentStyle="gradient"
          kickerClass="text-sun"
          introClass="text-mist"
          intro="Every take on screen starts hours earlier. This is how the camera department gets a set-up from the truck to the edit."
        />

        <div className="relative">
          {/* Connecting line through the step nodes (desktop) */}
          <motion.span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[14px] hidden h-px origin-left bg-gradient-to-r from-sun to-gold lg:block"
            initial={{ scaleX: reduce ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, ease: easeInOut }}
          />

          <StaggerGroup as="ol" stagger={0.18} className="relative m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {process.map((p, i) => (
              <StaggerItem as="li" key={p.title} className="flex flex-col items-center gap-6">
                <motion.span
                  aria-hidden="true"
                  className="relative hidden h-7 w-7 rounded-full bg-sun shadow-glow ring-[6px] ring-ink lg:block"
                  initial={{ scale: reduce ? 1 : 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.35, ease: easeOut }}
                />
                <div className="group flex h-full w-full flex-col overflow-hidden rounded-card border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-sun/50 hover:shadow-[0_24px_50px_rgba(0,0,0,.35)]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-4 px-6 pb-8 pt-7 text-center">
                    <h3 className="m-0 font-display text-[34px] font-extrabold uppercase leading-none">{p.title}</h3>
                    <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-sun transition-all duration-500 group-hover:w-14" />
                    <p className="m-0 text-[15px] leading-relaxed text-mist">{p.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
