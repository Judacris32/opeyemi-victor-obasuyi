"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { glossary } from "@/content/craft";
import { easeOut } from "@/lib/motion";

/** "Set talk, translated": the phrases you hear on every film set. */
export default function Glossary() {
  return (
    <Section tone="peach" aria-label="Set talk">
      <Container>
        <SectionHeading
          kicker="Set talk"
          title={["Film set slang,", { accent: "translated" }]}
          intro="Film sets have a language of their own. Here are a few phrases you'll hear on every shoot, and what they actually mean."
        />
        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {glossary.map((g, i) => (
            <StaggerItem key={g.term}>
              <motion.div
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
                transition={{ duration: 0.4, ease: easeOut }}
                className="flex h-full flex-col gap-3 rounded-card bg-white p-6 shadow-card"
              >
                <span className="font-serif text-[28px] italic leading-tight text-ember">&ldquo;{g.term}&rdquo;</span>
                <p className="m-0 text-[15px] leading-relaxed text-muted">{g.meaning}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
