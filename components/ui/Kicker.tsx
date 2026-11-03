import { cn } from "@/lib/cn";

/** Small label above headings, framed by short rules. */
export default function Kicker({ children, className, center = false }: { children: React.ReactNode; className?: string; center?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em]", className)}>
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
      {children}
      {center && <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />}
    </span>
  );
}
