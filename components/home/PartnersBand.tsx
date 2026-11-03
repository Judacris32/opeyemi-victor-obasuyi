import Marquee from "@/components/motion/Marquee";
import { craftWords, productions } from "@/content/site";

/** Sunset band: productions and teams on one row, craft on the other, moving in opposite directions. */
export default function PartnersBand() {
  return (
    <section aria-label="Productions and teams I've worked with" className="relative overflow-hidden bg-sun py-10 text-ink md:py-12">
      <p className="sr-only">Productions and teams I&apos;ve worked with: {productions.join(", ")}.</p>
      <p aria-hidden="true" className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.24em]">
        Productions &amp; teams I&apos;ve worked with
      </p>
      <div className="flex flex-col gap-3">
        <Marquee
          items={productions}
          duration={42}
          itemClassName="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold uppercase leading-none tracking-[0.02em]"
          separatorClassName="text-ink"
        />
        <Marquee
          items={craftWords}
          reverse
          duration={48}
          itemClassName="font-serif text-[clamp(1.5rem,3vw,2.5rem)] italic leading-none"
          separatorClassName="text-ink/50"
        />
      </div>
    </section>
  );
}
