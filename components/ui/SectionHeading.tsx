import SplitHeading, { type AccentStyle, type HeadingPart } from "@/components/motion/SplitHeading";
import Reveal from "@/components/motion/Reveal";
import Kicker from "./Kicker";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  kicker: string;
  title: HeadingPart[];
  intro?: string;
  accentStyle?: AccentStyle;
  /** Colour classes so the heading works on light and dark sections */
  kickerClass?: string;
  introClass?: string;
  align?: "center" | "left" | "split";
  action?: React.ReactNode;
  className?: string;
  titleClass?: string;
};

/** Kicker + animated heading + optional intro and action. Centred by default. */
export default function SectionHeading({
  kicker,
  title,
  intro,
  accentStyle = "marker",
  kickerClass = "text-ember",
  introClass = "text-muted",
  align = "center",
  action,
  className,
  titleClass,
}: SectionHeadingProps) {
  const center = align === "center";
  const split = align === "split";

  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-6 md:mb-20",
        center && "mx-auto max-w-3xl items-center text-center",
        split && "lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-5", center && "items-center")}>
        <Reveal y={14}>
          <Kicker center={center} className={kickerClass}>
            {kicker}
          </Kicker>
        </Reveal>
        <SplitHeading
          parts={title}
          accentStyle={accentStyle}
          className={cn("font-display text-display-1 font-extrabold uppercase", !center && "max-w-[15ch]", titleClass)}
        />
      </div>
      {(intro || action) && (
        <Reveal delay={0.2} className={cn("flex flex-col gap-7", center ? "max-w-xl items-center" : "max-w-md")}>
          {intro && <p className={cn("m-0 text-lg leading-relaxed", introClass)}>{intro}</p>}
          {action}
        </Reveal>
      )}
    </div>
  );
}
