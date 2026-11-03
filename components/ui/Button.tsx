import Link from "next/link";
import Icon from "./Icon";
import { cn } from "@/lib/cn";

const base =
  "group/btn inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full pl-6 pr-2 text-[15px] font-semibold tracking-[0.01em] transition-[background-color,color,border-color,box-shadow] duration-500 ease-[cubic-bezier(.22,1,.36,1)]";

const variants = {
  /** Sunset button with ink text; turns ink on hover */
  primary: { btn: "bg-sun text-ink hover:bg-ink hover:text-paper hover:shadow-lift", dot: "bg-ink text-paper group-hover/btn:bg-sun group-hover/btn:text-ink" },
  /** Ink button; turns sunset on hover */
  dark: { btn: "bg-ink text-paper hover:bg-sun hover:text-ink hover:shadow-glow", dot: "bg-sun text-ink group-hover/btn:bg-ink group-hover/btn:text-paper" },
  /** Glass button for photos and dark sections */
  ghost: { btn: "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white hover:bg-white hover:text-ink", dot: "bg-white text-ink group-hover/btn:bg-ink group-hover/btn:text-white" },
  /** Outline button for light sections */
  outline: { btn: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper", dot: "bg-ink text-paper group-hover/btn:bg-sun group-hover/btn:text-ink" },
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
};

/** Pill button with a round arrow badge that turns on hover. */
export default function Button({ href, children, variant = "primary", className, external }: ButtonProps) {
  const v = variants[variant];
  const cls = cn(base, v.btn, className);
  const inner = (
    <>
      <span>{children}</span>
      <span className={cn("flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500", v.dot)}>
        <Icon name="arrow" className="h-4 w-4 -rotate-45 transition-transform duration-500 group-hover/btn:rotate-0" />
      </span>
    </>
  );

  if (external || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
