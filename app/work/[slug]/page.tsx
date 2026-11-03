import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Kicker from "@/components/ui/Kicker";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { credits, getCredit } from "@/content/credits";
import { press } from "@/content/press";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return credits.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const credit = getCredit(params.slug);
  if (!credit) return {};
  return {
    title: `${credit.title} (${credit.year})`,
    description: `${credit.title} (${credit.year}). ${credit.tagline} Opeyemi Obasuyi is credited as ${credit.role}.`,
  };
}

export default function FilmPage({ params }: Props) {
  const credit = getCredit(params.slug);
  if (!credit) notFound();

  const index = credits.findIndex((c) => c.slug === credit.slug);
  const prev = credits[(index - 1 + credits.length) % credits.length];
  const next = credits[(index + 1) % credits.length];
  const coverage = credit.slug === "breath-of-life" ? press : [];

  return (
    <>
      {/* Header: blurred poster backdrop, poster and key facts */}
      <section className="relative overflow-hidden bg-ink pb-24 pt-40 text-white md:pb-32 md:pt-48">
        <Image src={credit.poster} alt="" fill sizes="100vw" className="scale-125 object-cover opacity-30 blur-3xl" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/50 to-ink" />
        <Container className="relative grid items-center gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
          <Reveal className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-card shadow-[0_40px_80px_rgba(0,0,0,.5)] md:max-w-none">
            <Image src={credit.poster} alt={`${credit.title} poster`} fill priority placeholder="blur" sizes="340px" className="object-cover" />
          </Reveal>
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <Reveal y={14}>
              <Link href="/work" className="inline-flex items-center gap-2 text-[14px] text-white/75 transition-colors hover:text-white">
                <Icon name="arrow" className="h-4 w-4 rotate-180" /> All work
              </Link>
            </Reveal>
            <SplitHeading as="h1" parts={[credit.title]} trigger="mount" delay={0.5} className="font-display text-display-hero font-extrabold uppercase" />
            <Reveal delay={0.2}>
              <p className="m-0 max-w-xl font-serif text-lede italic text-white/90">{credit.tagline}</p>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="rounded-full bg-sun px-4 py-2 text-[13px] font-semibold text-ink">{credit.role}</span>
              <span className="rounded-full border border-white/30 px-4 py-2 text-[13px] font-medium">
                {credit.format} · {credit.year}
              </span>
              {credit.highlight && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-[13px] font-semibold text-ink">
                  <Icon name="award" className="h-4 w-4" />
                  {credit.highlight}
                </span>
              )}
            </Reveal>
          </div>
        </Container>
      </section>

      <Section tone="paper">
        <Container className="grid gap-14 lg:grid-cols-[1fr_380px] lg:gap-20">
          <div className="flex flex-col gap-12">
            {credit.synopsis && (
              <Reveal className="flex flex-col gap-5">
                <Kicker className="text-ember">The film</Kicker>
                <p className="m-0 font-serif text-lede">{credit.synopsis}</p>
              </Reveal>
            )}
            <Reveal delay={0.1} className="flex flex-col gap-5">
              <Kicker className="text-ember">My part</Kicker>
              <p className="m-0 text-lg leading-relaxed text-muted">
                I worked on {credit.title} in the camera department, credited as {credit.role.toLowerCase()}. That meant
                preparing and building the camera, managing lenses, slates and media, and keeping every set-up ready so the
                director and cinematographer could keep shooting.
              </p>
              <div>
                <Button href={credit.imdb} external variant="dark">
                  Full crew on IMDb
                </Button>
              </div>
            </Reveal>

            {credit.awards && (
              <Reveal delay={0.15} className="rounded-banner bg-peach p-7 md:p-10">
                <Kicker className="text-ember">Awards</Kicker>
                <h2 className="mb-6 mt-4 font-display text-display-3 font-extrabold uppercase">{credit.awards.heading}</h2>
                <StaggerGroup as="ul" stagger={0.08} className="m-0 grid list-none gap-3 p-0">
                  {credit.awards.items.map((a) => (
                    <StaggerItem as="li" key={a} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-card">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gold">
                        <Icon name="award" className="h-4 w-4" />
                      </span>
                      <span className="font-medium">{a}</span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
                <p className="mb-0 mt-5 text-[14px] text-muted">These awards went to the film and the named winners.</p>
              </Reveal>
            )}

            {coverage.length > 0 && (
              <Reveal className="flex flex-col gap-5">
                <Kicker className="text-ember">In the press</Kicker>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {coverage.map((p) => (
                    <li key={p.href}>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-white px-6 py-5 transition-[border-color,box-shadow] duration-500 hover:border-sun hover:shadow-card"
                      >
                        <span>
                          <span className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                            {p.outlet} · {p.date}
                          </span>
                          <span className="font-medium">{p.title}</span>
                        </span>
                        <Icon name="arrow" className="h-5 w-5 -rotate-45 text-ember transition-transform duration-500 group-hover:rotate-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.1} className="self-start rounded-banner bg-white p-7 shadow-card md:p-9 lg:sticky lg:top-28">
            <Kicker className="text-ember">Details</Kicker>
            <dl className="m-0 mt-6 flex flex-col">
              {credit.facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-6 border-b border-line py-4 last:border-0">
                  <dt className="text-[14px] text-muted">{f.label}</dt>
                  <dd className="m-0 text-right font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>

        <Container className="mt-24">
          <nav aria-label="More films" className="grid gap-4 border-t border-line pt-12 sm:grid-cols-2">
            {[
              { c: prev, label: "Previous film", alignEnd: false },
              { c: next, label: "Next film", alignEnd: true },
            ].map(({ c, label, alignEnd }) => (
              <Link
                key={label}
                href={`/work/${c.slug}`}
                className={`group flex items-center gap-5 rounded-card bg-peach p-4 transition-colors duration-500 hover:bg-gold ${alignEnd ? "sm:flex-row-reverse sm:text-right" : ""}`}
              >
                <span className="relative h-24 w-[72px] flex-none overflow-hidden rounded-xl">
                  <Image src={c.poster} alt="" fill sizes="72px" className="object-cover" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[13px] font-medium text-muted">{label}</span>
                  <span className="font-display text-display-3 font-extrabold uppercase">{c.title}</span>
                </span>
              </Link>
            ))}
          </nav>
        </Container>
      </Section>
    </>
  );
}
