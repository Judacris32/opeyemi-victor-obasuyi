import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import PosterCard from "@/components/work/PosterCard";
import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { additionalCredits, featuredCredits } from "@/content/credits";
import { heroes } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected film, television, documentary and music video credits for cinematographer Opeyemi Victor Obasuyi.",
};

const recognition = [
  { value: 5, label: "AMVCA wins for Breath of Life, including Best Movie", slug: "breath-of-life", film: "Breath of Life" },
  { value: 11, label: "AMVCA nominations for God Calling, with 2 wins", slug: "god-calling", film: "God Calling" },
  { value: 2, label: "Films now streaming on Prime Video", slug: "km17", film: "KM17 & Breath of Life" },
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        image={heroes.work}
        label="Work"
        crumbs={[{ label: "Work" }]}
        title={["Projects I've", { accent: "worked on" }]}
        intro="Feature films, television, documentaries, music videos and short films. Explore the projects and the different roles behind them."
      />

      <Section tone="paper" aria-label="Credits">
        <Container>
          <SectionHeading
            kicker="Feature film credits"
            title={["On screen", { accent: "now" }]}
            intro="A selection of feature films, with credits and production details. The awards belong to the films and the people who won them, and I'm proud to have contributed to each production."
            action={
              <Button href={site.imdb} external variant="outline">
                View my IMDb
              </Button>
            }
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCredits.map((c, i) => (
              <StaggerItem key={c.slug}>
                <PosterCard credit={c} priority={i === 0} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="peach" aria-label="Additional projects">
        <Container>
          <SectionHeading
            kicker="Beyond feature films"
            title={["More projects,", { accent: "different roles" }]}
            intro="From television and documentary work to music videos and short films, these projects reflect the range of roles I've taken on across screen production."
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalCredits.map((c) => (
              <StaggerItem key={c.slug}>
                <PosterCard credit={c} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="teal" aria-label="Recognition">
        <Container>
          <SectionHeading
            kicker="Recognition"
            title={["Films the industry", { accent: "noticed" }]}
            accentStyle="gold"
            kickerClass="text-peach"
            introClass="text-white/80"
            intro="Two of the productions I've worked on were among the most celebrated films at the Africa Magic Viewers' Choice Awards."
          />
          <StaggerGroup className="grid gap-5 md:grid-cols-3">
            {recognition.map((r) => (
              <StaggerItem key={r.label}>
                <Link
                  href={`/work/${r.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-card border border-white/10 bg-white/[0.06] p-8 transition-colors duration-500 hover:border-gold/50 hover:bg-white/[0.1]"
                >
                  <span className="font-display text-[clamp(4rem,7vw,6rem)] font-extrabold leading-none text-gold">
                    <Counter value={r.value} />
                  </span>
                  <p className="m-0 text-lg text-white/90">{r.label}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[15px] font-semibold text-peach">
                    {r.film}
                    <Icon name="arrow" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="peach" aria-label="Where to watch">
        <Container className="flex flex-col items-center gap-8 text-center">
          <Reveal className="flex h-20 w-20 items-center justify-center rounded-full bg-sun text-ink shadow-glow">
            <Icon name="play" className="h-8 w-8" />
          </Reveal>
          <SectionHeading
            className="!mb-0"
            kicker="Watch"
            title={["Stream them", { accent: "tonight" }]}
            intro="Breath of Life and KM17 are both available on Prime Video. God Calling played in Nigerian cinemas in 2018."
          />
        </Container>
      </Section>
    </>
  );
}
