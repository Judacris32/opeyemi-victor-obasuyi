import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { skills } from "@/content/about";

/** "What I bring to set": photo-led skill cards on a deep teal section. */
export default function Skills({ intro }: { intro?: string }) {
  return (
    <Section tone="teal" aria-label="Skills">
      <Container>
        <SectionHeading
          kicker="Skills"
          title={["What I bring", "to", { accent: "set" }]}
          accentStyle="gold"
          kickerClass="text-peach"
          introClass="text-white/80"
          intro={intro ?? "Everything a camera team needs to move quickly and get the shot, done carefully and without fuss."}
        />
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <StaggerItem
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-card border border-white/15 bg-teal-deep/40 transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_24px_50px_rgba(0,0,0,.25)]"
            >
              <div className="relative aspect-[16/8] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
                />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-teal-deep/70 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
                <h3 className="m-0 flex items-center gap-3 font-display text-[28px] font-extrabold uppercase leading-none">
                  <span aria-hidden="true" className="h-6 w-[3px] flex-none rounded-full bg-gold transition-all duration-500 group-hover:h-7" />
                  {s.title}
                </h3>
                <p className="m-0 pl-[15px] text-white/85">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
