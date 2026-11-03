import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CopyEmail from "@/components/ui/CopyEmail";
import Icon from "@/components/ui/Icon";
import ImdbLogo from "@/components/ui/ImdbLogo";
import Kicker from "@/components/ui/Kicker";
import Magnetic from "@/components/motion/Magnetic";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { heroes } from "@/content/images";
import { regions, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book Opeyemi Obasuyi for camera department work on features, series, documentaries and commercials across Nigeria, Africa and internationally.",
};

const checklist = [
  { title: "Your production", text: "Feature, series, documentary or commercial, and a line about the project." },
  { title: "Dates", text: "Prep, shoot and wrap days, even if they're still provisional." },
  { title: "Location", text: "Where you're shooting, and whether travel is involved." },
  { title: "Camera package", text: "The camera and lenses you're planning to use, if you know them yet." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={heroes.contact}
        label="Contact"
        crumbs={[{ label: "Contact" }]}
        title={["Let's", { accent: "make something" }, "together"]}
        intro="Booking a camera team, or just want to talk through a project? Email is the quickest way to reach me."
      />

      {/* Email-first contact */}
      <Section tone="paper" aria-label="Email">
        <Container className="flex flex-col items-center text-center">
          <Reveal y={14}>
            <Kicker center className="text-ember">
              Bookings & enquiries
            </Kicker>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 w-full">
            <a
              href={`mailto:${site.email}`}
              className="group relative inline-block max-w-full break-words font-display text-[clamp(2.4rem,8vw,7.5rem)] font-extrabold leading-none text-ink transition-colors duration-500 hover:text-ember"
            >
              {site.email}
              <span className="absolute -bottom-3 left-0 h-[6px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-sun to-gold transition-transform duration-700 group-hover:scale-x-100" />
            </a>
          </Reveal>
          <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <Button href={`mailto:${site.email}`}>Write to me</Button>
            </Magnetic>
            <CopyEmail email={site.email} />
          </Reveal>
        </Container>

        <Container className="mt-24">
          <StaggerGroup className="grid gap-5 md:grid-cols-3">
            <StaggerItem>
              <a
                href={site.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-6 rounded-card bg-peach p-8 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-ink">
                  <Icon name="instagram" className="h-6 w-6" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-ember">Instagram</span>
                  <span className="font-display text-3xl font-extrabold uppercase">{site.instagram.handle}</span>
                  <span className="text-muted">Daily life on set</span>
                </span>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a
                href={site.imdb}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-6 rounded-card bg-aqua p-8 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-14 items-center">
                  <ImdbLogo className="h-11 w-auto drop-shadow-sm" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-teal">Credits</span>
                  <span className="font-display text-3xl font-extrabold uppercase">Opeyemi Obasuyi</span>
                  <span className="text-muted">Full credit list</span>
                </span>
              </a>
            </StaggerItem>
            <StaggerItem className="flex h-full flex-col gap-6 rounded-card bg-ink p-8 text-paper">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-ink">
                <Icon name="pin" className="h-6 w-6" />
              </span>
              <span className="flex flex-col gap-3">
                <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">Where I work</span>
                <span className="font-display text-3xl font-extrabold uppercase">Anywhere the shoot is</span>
                <span className="text-mist">Based in {site.base}. Open to travel.</span>
                <span className="flex flex-wrap gap-2">
                  {regions.map((r) => (
                    <span key={r} className="rounded-full border border-white/20 px-3 py-1 text-[13px]">
                      {r}
                    </span>
                  ))}
                </span>
              </span>
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </Section>

      {/* What to include */}
      <Section tone="teal" aria-label="What to include">
        <Container>
          <SectionHeading
            kicker="Before you write"
            title={["What to", { accent: "include" }]}
            accentStyle="gold"
            kickerClass="text-peach"
            introClass="text-white/80"
            intro="A few details up front help me give you a quick, useful answer."
          />
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {checklist.map((c) => (
              <StaggerItem key={c.title} className="flex flex-col gap-4 rounded-card border border-white/10 bg-white/[0.06] p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <h3 className="m-0 font-display text-[26px] font-extrabold uppercase leading-none">{c.title}</h3>
                <p className="m-0 text-white/80">{c.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>
    </>
  );
}
