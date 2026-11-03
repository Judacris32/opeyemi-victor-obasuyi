import Link from "next/link";
import Container from "@/components/ui/Container";
import ViewfinderLogo from "@/components/ui/ViewfinderLogo";
import Icon from "@/components/ui/Icon";
import ImdbLogo from "@/components/ui/ImdbLogo";
import { navLinks, regions, site } from "@/content/site";

const heading = "mb-5 block text-[12px] font-semibold uppercase tracking-[0.24em] text-mist";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-paper">
      <Container className="pt-20 md:pt-24">
        <div className="grid gap-12 pb-16 md:grid-cols-12 md:gap-8">
          <div className="flex flex-col gap-6 md:col-span-5">
            <Link href="/" aria-label={`${site.name}, home`} className="self-start">
              <ViewfinderLogo text={site.shortName} />
            </Link>
            <p className="m-0 max-w-sm text-[15px] leading-relaxed text-mist">
              Camera department crew for feature films, series and commercials. Based in {site.base} and available to work anywhere.
            </p>
            <div className="flex gap-3">
              {[
                { href: site.instagram.href, label: "Instagram", icon: "instagram" as const },
                { href: site.imdb, label: "IMDb", icon: "imdb" as const },
                { href: `mailto:${site.email}`, label: "Email", icon: "mail" as const },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-colors duration-500 hover:border-sun hover:bg-sun hover:text-ink"
                >
                  {s.icon === "imdb" ? <ImdbLogo className="h-[18px] w-auto" /> : <Icon name={s.icon} />}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <span className={heading}>Explore</span>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {[{ href: "/", label: "Home" }, ...navLinks, { href: "/contact", label: "Contact" }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-draw text-[15px] text-paper/85 hover:text-sun">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className={heading}>Get in touch</span>
            <a href={`mailto:${site.email}`} className="link-draw text-xl font-medium hover:text-sun md:text-2xl">
              {site.email}
            </a>
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 p-5">
              <span className="flex items-center gap-2.5 text-[15px] font-semibold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ADE80] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
                </span>
                Available for bookings &amp; open to travel
              </span>
              <span className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <span key={r} className="rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[13px] text-gold">
                    {r}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </Container>

      <p
        aria-hidden="true"
        className="pointer-events-none m-0 select-none text-center font-display text-[clamp(5rem,24vw,23rem)] font-extrabold uppercase leading-[0.78] tracking-[0.02em] text-transparent [background-clip:text] [-webkit-background-clip:text] bg-gradient-to-b from-white/[0.14] to-white/0"
      >
        Obasuyi
      </p>

      <Container>
        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-[13px] text-mist sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            Designed &amp; built by <span className="text-paper">@Judacris_Jude</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
