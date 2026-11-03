import { cn } from "@/lib/cn";

export type IconName = "camera" | "lens" | "track" | "slate" | "light" | "chat" | "check" | "arrow" | "copy" | "mail" | "instagram" | "pin" | "play" | "award";

const paths: Record<IconName, React.ReactNode> = {
  camera: (
    <>
      <rect x="2.5" y="7" width="13" height="10" rx="2" />
      <path d="m15.5 10.5 6-3v9l-6-3" />
      <circle cx="7" cy="12" r="2.2" />
    </>
  ),
  lens: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  track: (
    <>
      <path d="M3 18h18M3 21h18" />
      <rect x="7" y="9" width="10" height="6" rx="1.5" />
      <path d="M12 9V4M9 4h6" />
    </>
  ),
  slate: (
    <>
      <rect x="3" y="10" width="18" height="11" rx="1.5" />
      <path d="m3.5 6.5 16-3.5.8 3.5-16 3.5zM8 5.5l2 3.5M13 4.4l2 3.5" />
    </>
  ),
  light: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.2 1 2V16h5v-.1c0-.8.4-1.6 1-2A6 6 0 0 0 12 3Z" />
    </>
  ),
  chat: <path d="M4 5h16v11H9l-5 4z" />,
  check: <path d="m4.5 12.5 5 5L20 7" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  copy: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 7 8.5-7" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r=".6" fill="currentColor" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  play: <path d="M7 4.5v15l12-7.5z" />,
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 14 -1.5 7 5-3 5 3-1.5-7" />
    </>
  ),
};

/** Small inline stroke icon set, so icons inherit text colour and need no extra requests. */
export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5 flex-none", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
