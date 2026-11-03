import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { crewRoles } from "@/content/about";

/** The camera department, explained, for producers and anyone curious about how a set works. */
export default function CrewRoles() {
  return (
    <Section tone="aqua" aria-label="The camera team">
      <Container>
        <SectionHeading
          kicker="The camera team"
          title={["Who does what", { accent: "on set" }]}
          kickerClass="text-teal"
          intro="A camera department is a small team with a clear chain of roles. Here's how it fits together on most productions."
        />
        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {crewRoles.map((r) => (
            <StaggerItem
              key={r.role}
              className="group flex flex-col gap-4 rounded-card bg-white p-7 shadow-card transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-lift md:p-8"
            >
              <span className="self-start rounded-full bg-teal px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white">{r.short}</span>
              <h3 className="m-0 font-display text-[30px] font-extrabold uppercase leading-none">{r.role}</h3>
              <p className="m-0 leading-relaxed text-muted">{r.text}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
