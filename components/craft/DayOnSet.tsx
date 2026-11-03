import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { myDay } from "@/content/craft";

/** "My day on set": his own shoot-day routine, told in the first person. */
export default function DayOnSet() {
  return (
    <Section tone="aqua" aria-label="My day on set">
      <Container>
        <SectionHeading
          kicker="How I work"
          title={["My day", { accent: "on set" }]}
          kickerClass="text-teal"
          intro="No two productions are the same, but my routine is. Here's how I run a shoot day, from the first case opened to the last drive handed over."
        />
        <StaggerGroup as="ol" className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {myDay.map((s) => (
            <StaggerItem
              as="li"
              key={s.stage}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-card bg-white p-7 shadow-card transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-lift md:p-8"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-teal to-sun transition-transform duration-700 group-hover:scale-x-100" />
              <span className="self-start rounded-full bg-aqua px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-teal">
                {s.stage}
              </span>
              <h3 className="m-0 font-display text-[30px] font-extrabold uppercase leading-none">{s.title}</h3>
              <p className="m-0 leading-relaxed text-muted">{s.text}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
