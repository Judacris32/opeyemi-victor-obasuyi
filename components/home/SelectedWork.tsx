import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PosterCard from "@/components/work/PosterCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import Reveal from "@/components/motion/Reveal";
import { credits } from "@/content/credits";

export default function SelectedWork() {
  return (
    <Section tone="peach" aria-label="Selected work">
      <Container>
        <SectionHeading
          kicker="Selected work"
          title={["Films I've", { accent: "worked on" }]}
          intro="Feature films for cinema and streaming, including two titles recognised at the Africa Magic Viewers' Choice Awards."
        />
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {credits.map((c, i) => (
            <StaggerItem key={c.slug} className={i === 2 ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:mx-0 lg:w-auto" : ""}>
              <PosterCard credit={c} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-14 flex justify-center">
          <Button href="/work" variant="dark">
            See all work
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
