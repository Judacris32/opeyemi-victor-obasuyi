import Image from "next/image";
import Container from "@/components/ui/Container";
import Kicker from "@/components/ui/Kicker";
import Button from "@/components/ui/Button";
import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import ScrollWords from "@/components/motion/ScrollWords";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import portrait from "@/assets/images/portrait-camera.jpg";
import { stats } from "@/content/about";

/** Centred introduction: a scroll-lit statement, a portrait chip, and animated numbers. */
export default function Intro() {
  return (
    <section id="intro" className="scroll-mt-24 bg-paper py-24 md:py-36">
      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Reveal className="mb-10 flex items-center gap-4 rounded-full bg-white py-2 pl-2 pr-6 shadow-card">
            <span className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src={portrait} alt="Opeyemi Obasuyi" fill sizes="48px" className="object-cover object-[center_25%]" />
            </span>
            <Kicker className="text-ember">Hello, I&apos;m Opeyemi</Kicker>
          </Reveal>

          <ScrollWords
            className="font-display text-[clamp(2rem,4.6vw,4.25rem)] font-extrabold uppercase leading-[1.02]"
            segments={[
              "For eight years I've worked in the camera department on Nigerian feature films. I",
              { strong: "prepare the camera," },
              { strong: "protect the shot" },
              "and keep the set moving, so directors and cinematographers can focus on the story.",
            ]}
          />

          <Reveal delay={0.1} className="mt-12">
            <Button href="/about" variant="outline">
              More about me
            </Button>
          </Reveal>
        </div>

        <StaggerGroup className="mt-20 grid grid-cols-2 gap-y-10 border-t border-line pt-14 md:mt-28 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem key={s.label} className={`flex flex-col items-center gap-2 px-4 text-center ${i > 0 ? "lg:border-l lg:border-line" : ""}`}>
              <span className="font-display text-[clamp(3.5rem,7vw,6rem)] font-extrabold leading-none text-ink">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="max-w-[16ch] text-[15px] text-muted">{s.label}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
