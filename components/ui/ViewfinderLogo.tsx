import { cn } from "@/lib/cn";

/** The viewfinder wordmark: the name framed by four camera frame-line corners that open on hover. */
export default function ViewfinderLogo({ text, className }: { text: string; className?: string }) {
  const corner = "absolute h-2 w-2 border-current transition-all duration-500";
  return (
    <span className={cn("group/logo relative inline-flex px-3 py-1.5", className)}>
      <span aria-hidden="true" className={cn(corner, "left-0 top-0 border-l-2 border-t-2 group-hover/logo:-left-1 group-hover/logo:-top-1 group-hover/logo:border-sun")} />
      <span aria-hidden="true" className={cn(corner, "right-0 top-0 border-r-2 border-t-2 group-hover/logo:-right-1 group-hover/logo:-top-1 group-hover/logo:border-sun")} />
      <span aria-hidden="true" className={cn(corner, "bottom-0 left-0 border-b-2 border-l-2 group-hover/logo:-bottom-1 group-hover/logo:-left-1 group-hover/logo:border-sun")} />
      <span aria-hidden="true" className={cn(corner, "bottom-0 right-0 border-b-2 border-r-2 group-hover/logo:-bottom-1 group-hover/logo:-right-1 group-hover/logo:border-sun")} />
      <span className="font-display text-[24px] font-extrabold uppercase leading-none tracking-[0.08em]">{text}</span>
    </span>
  );
}
