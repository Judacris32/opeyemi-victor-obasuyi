import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Kicker from "@/components/ui/Kicker";
import Icon from "@/components/ui/Icon";
import ImageReveal from "@/components/motion/ImageReveal";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import Skills from "@/components/about/Skills";
import Milestones from "@/components/about/Milestones";
import portrait from "@/assets/images/portrait-camera.jpg";
import salford from "@/assets/images/salford.jpg";
import { heroes } from "@/content/images";
import { milestones, principles, story } from "@/content/about";
import { education } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Opeyemi Victor Obasuyi has worked in the camera department on Nigerian feature films since 2018, and is available to work across Nigeria, Africa and internationally.",
};

const facts = [
  { label: "Available", value: "Nigeria, Africa & worldwide" },
  { label: "On set since", value: "2018" },
  { label: "Education", value: "MA, University of Salford" },
  { label: "Latest credit", value: "KM17 (2024)" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={heroes.about}
        label="About"
        crumbs={[{ label: "About" }]}
        title={["The person", { accent: "behind" }, "the camera"]}
        intro="Eight years on Nigerian film sets, from my first days as a trainee to the camera team of an award-winning feature."
      />

      {/* Story */}
      <Section tone="paper" aria-label="My story">
        <Container className="grid items-start gap-14 lg:grid-cols-[5fr_6fr] lg:gap-20">
          <div className="relative lg:sticky lg:top-28">
            <ImageReveal
              src={portrait}
              alt="Opeyemi Obasuyi smiling behind a cinema camera"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-[480px] rounded-banner md:h-[640px]"
              imgClassName="object-[center_30%]"
            />
            <Reveal delay={0.5} y={20} className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-sun px-5 py-4 text-ink shadow-glow md:right-8">
              <Icon name="camera" className="h-6 w-6" />
              <span className="flex flex-col leading-tight">
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em]">On set since</span>
                <span className="font-display text-3xl font-extrabold">2018</span>
              </span>
            </Reveal>
          </div>

          <div className="flex flex-col gap-7 pt-6 lg:pt-0">
            <Reveal y={14}>
              <Kicker className="text-ember">My story</Kicker>
            </Reveal>
            <SplitHeading parts={["Eight years", { accent: "on set" }]} className="font-display text-display-1 font-extrabold uppercase" />
            <Reveal delay={0.1}>
              <p className="m-0 font-serif text-lede">{story[0]}</p>
            </Reveal>
            {story.slice(1).map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.05}>
                <p className="m-0 text-lg leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}
            <StaggerGroup className="mt-4 grid grid-cols-2 gap-3">
              {facts.map((f) => (
                <StaggerItem key={f.label} className="rounded-2xl border border-line bg-white px-5 py-4">
                  <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">{f.label}</span>
                  <span className="text-[17px] font-semibold">{f.value}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Container>
      </Section>

      {/* Statement */}
      <section aria-label="Philosophy" className="bg-gold py-24 text-ink md:py-32">
        <Container className="flex flex-col items-center text-center">
          <Reveal y={14}>
            <Kicker center className="text-ink">
              What I believe
            </Kicker>
          </Reveal>
          <SplitHeading
            parts={["Good camera work goes", { accent: "unnoticed." }, "That's exactly the point."]}
            accentStyle="sun"
            className="mt-7 max-w-5xl font-display text-display-1 font-extrabold uppercase"
          />
          <Reveal delay={0.3}>
            <p className="mx-auto mb-0 mt-7 max-w-2xl text-lg leading-relaxed text-ink/80">
              When the camera team does its job well, nobody thinks about the camera at all. They just see the story. That&apos;s
              the standard I hold myself to on every set.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Principles */}
      <Section tone="peach" aria-label="How I work">
        <Container>
          <SectionHeading kicker="How I work" title={["Three things I", { accent: "bring" }, "to every set"]} />
          <StaggerGroup className="grid gap-5 md:grid-cols-3">
            {principles.map((p) => (
              <StaggerItem
                key={p.title}
                className="group flex flex-col gap-5 rounded-card bg-white p-8 shadow-card transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sun text-ink transition-transform duration-500 group-hover:rotate-12">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <h3 className="m-0 font-display text-[32px] font-extrabold uppercase leading-none">{p.title}</h3>
                <p className="m-0 leading-relaxed text-muted">{p.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Skills />

      {/* Timeline */}
      <Section tone="paper" aria-label="My journey">
        <Container>
          <SectionHeading
            kicker="My journey"
            title={["The story", { accent: "so far" }]}
            intro="From a trainee in Lagos to the camera team of the year's Best Movie, and a master's in the UK along the way."
          />
          <Milestones items={milestones} />
        </Container>
      </Section>

      {/* Education */}
      <section aria-label="Education" className="overflow-hidden bg-ink py-24 text-paper md:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ImageReveal
            src={salford}
            alt="Opeyemi on graduation day at MediaCityUK, Salford"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-[460px] rounded-banner md:h-[560px]"
            imgClassName="object-[center_30%]"
          />
          <div className="flex flex-col gap-7">
            <Reveal y={14}>
              <Kicker className="text-gold">Education</Kicker>
            </Reveal>
            <SplitHeading parts={["Trained on set,", { accent: "schooled" }, "in the edit"]} accentStyle="gradient" className="font-display text-display-1 font-extrabold uppercase" />
            <Reveal delay={0.15}>
              <p className="m-0 text-lg leading-relaxed text-mist">
                In 2024 I completed an MA in Editing for Television, Film and Digital Media at the University of Salford. Learning
                how footage is cut together changed how I work on set: I know what the edit needs, from clean slates and organised
                media to the coverage that makes a scene work. Before film, I earned a BA in History and International Studies at
                Ajayi Crowther University, Oyo, in 2015.
              </p>
            </Reveal>
            <Reveal delay={0.25} className="flex flex-wrap gap-3">
              {education.map((e) => (
                <span key={e.degree} className="flex flex-col rounded-2xl border border-white/20 px-5 py-3">
                  <span className="text-[15px] font-semibold">{e.short}</span>
                  <span className="text-[13px] text-mist">
                    {e.place} · {e.year}
                  </span>
                </span>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
