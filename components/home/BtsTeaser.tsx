import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImageReveal from "@/components/motion/ImageReveal";
import Reveal from "@/components/motion/Reveal";
import { shots } from "@/content/gallery";

export default function BtsTeaser() {
  const [a, b, c, d] = [shots[0], shots[1], shots[2], shots[4]];
  const caption = "pointer-events-none absolute bottom-4 left-4 rounded-full bg-paper/90 px-4 py-2 text-[13px] font-medium text-ink backdrop-blur";

  return (
    <Section tone="paper" aria-label="Behind the scenes">
      <Container>
        <SectionHeading
          kicker="Behind the scenes"
          title={["Life", { accent: "behind" }, "the lens"]}
          intro="Long days, early calls and a lot of kit. A few moments from set, away from the final cut."
        />
        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-[300px_300px] md:gap-5 lg:grid-rows-[340px_340px]">
          <figure className="relative m-0 h-[320px] md:col-span-2 md:h-auto">
            <ImageReveal src={a.src} alt={a.alt} sizes="(min-width: 768px) 50vw, 100vw" className="h-full rounded-card" />
            <figcaption className={caption}>{a.caption}</figcaption>
          </figure>
          <figure className="relative m-0 h-[440px] md:row-span-2 md:h-auto">
            <ImageReveal src={b.src} alt={b.alt} sizes="(min-width: 768px) 25vw, 100vw" className="h-full rounded-card" delay={0.1} />
            <figcaption className={caption}>{b.caption}</figcaption>
          </figure>
          <figure className="relative m-0 h-[440px] md:row-span-2 md:h-auto">
            <ImageReveal src={d.src} alt={d.alt} sizes="(min-width: 768px) 25vw, 100vw" className="h-full rounded-card" delay={0.2} />
            <figcaption className={caption}>{d.caption}</figcaption>
          </figure>
          <figure className="relative m-0 h-[300px] md:col-span-2 md:h-auto">
            <ImageReveal src={c.src} alt={c.alt} sizes="(min-width: 768px) 50vw, 100vw" className="h-full rounded-card" imgClassName="object-[center_40%]" delay={0.1} />
            <figcaption className={caption}>{c.caption}</figcaption>
          </figure>
        </div>
        <Reveal className="mt-14 flex justify-center">
          <Button href="/behind-the-scenes" variant="outline">
            Explore behind the scenes
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
