import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PressCard from "@/components/press/PressCard";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { press } from "@/content/press";

export default function PressTeaser() {
  return (
    <Section tone="aqua" aria-label="Press">
      <Container>
        <SectionHeading
          kicker="Press"
          title={["Featured in", { accent: "the press" }]}
          kickerClass="text-teal"
          intro="Coverage of the camera team behind Breath of Life, and of my own path into the industry."
        />
        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {press.map((p) => (
            <StaggerItem key={p.href}>
              <PressCard item={p} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-14 flex justify-center">
          <Button href="/press" variant="outline">
            All press
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
