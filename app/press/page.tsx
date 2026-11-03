import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CopyEmail from "@/components/ui/CopyEmail";
import PressCard from "@/components/press/PressCard";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { heroes } from "@/content/images";
import { press } from "@/content/press";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Press",
  description: "Press coverage of Opeyemi Obasuyi and the camera team behind Breath of Life.",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        image={heroes.press}
        label="Press"
        crumbs={[{ label: "Press" }]}
        title={["In the", { accent: "press" }]}
        intro="Coverage of the camera team behind Breath of Life, and of my own path into the camera department."
      />

      <Section tone="aqua" aria-label="Articles">
        <Container>
          <SectionHeading kicker="Features" title={["Read the", { accent: "stories" }]} kickerClass="text-teal" />
          <StaggerGroup className="flex flex-col gap-8">
            {press.map((p) => (
              <StaggerItem key={p.href}>
                <PressCard item={p} wide />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="paper" aria-label="Press enquiries">
        <Container className="flex flex-col items-center text-center">
          <SectionHeading
            className="!mb-10"
            kicker="Press enquiries"
            title={["Writing about", { accent: "the work?" }]}
            intro="For interviews, features or production stills, get in touch by email and I'll reply as soon as I can."
          />
          <Reveal className="flex flex-wrap justify-center gap-3">
            <Button href={`mailto:${site.email}`}>Email me</Button>
            <CopyEmail email={site.email} />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
