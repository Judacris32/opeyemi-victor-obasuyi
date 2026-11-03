import { cn } from "@/lib/cn";

/** The one place side spacing is defined: 20px on phones, 32px on tablets, 48px on desktop, 1280px max. */
export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}
