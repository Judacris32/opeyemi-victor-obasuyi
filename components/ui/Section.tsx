import { cn } from "@/lib/cn";

export const tones = {
  paper: "bg-paper text-ink",
  peach: "bg-peach text-ink",
  aqua: "bg-aqua text-ink",
  gold: "bg-gold text-ink",
  sun: "bg-sun text-ink",
  teal: "bg-teal text-white",
  ink: "bg-ink text-paper",
} as const;

export type Tone = keyof typeof tones;
export const isDark = (tone: Tone) => tone === "teal" || tone === "ink";

type SectionProps = {
  children: React.ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/** Consistent vertical rhythm and background tone for every section. */
export default function Section({ children, tone = "paper", id, className, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32", tones[tone], className)} {...rest}>
      {children}
    </section>
  );
}
