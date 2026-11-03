"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Container from "@/components/ui/Container";
import ViewfinderLogo from "@/components/ui/ViewfinderLogo";
import Icon from "@/components/ui/Icon";
import { navLinks, regions, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { easeInOut, easeOut } from "@/lib/motion";

/**
 * Floating "island" navbar:
 * - glass over the hero, solid paper once you scroll
 * - a pill that glides between links on hover, and a sunset dot on the current page
 * - hides when scrolling down, returns when scrolling up
 * - scroll progress line along the very top of the window
 */
export default function Header() {
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > prev && y > 320 && !open);
  });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const solid = scrolled && !open;

  return (
    <>
      <motion.div aria-hidden="true" style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-sun via-sun-soft to-gold" />

      <motion.header
        className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4"
        animate={{ y: hidden ? "-130%" : "0%" }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <Container>
          <nav
            aria-label="Main"
            className={cn(
              "flex h-[68px] items-center justify-between gap-4 rounded-full border pl-5 pr-2 transition-[background-color,border-color,box-shadow,color] duration-500 sm:pl-6",
              solid
                ? "border-ink/10 bg-paper/85 text-ink shadow-[0_14px_40px_rgba(19,22,31,.12)] backdrop-blur-xl"
                : open
                  ? "border-white/15 bg-white/[0.06] text-white"
                  : "border-white/20 bg-ink/25 text-white backdrop-blur-md",
            )}
          >
            <Link href="/" aria-label={`${site.name}, home`} className="relative z-10">
              <ViewfinderLogo text={site.shortName} />
            </Link>

            <ul className="m-0 hidden list-none items-center gap-1 p-0 lg:flex" onMouseLeave={() => setHovered(null)}>
              {navLinks.map((l) => {
                const active = isActive(l.href);
                return (
                  <li key={l.href} className="relative" onMouseEnter={() => setHovered(l.href)}>
                    {hovered === l.href && (
                      <motion.span
                        layoutId="nav-hover"
                        className={cn("absolute inset-0 rounded-full", solid ? "bg-ink/[0.06]" : "bg-white/15")}
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className="relative z-10 flex items-center gap-2 px-4 py-2.5 text-[15px] font-medium"
                    >
                      {active && <motion.span layoutId="nav-active" className="h-1.5 w-1.5 rounded-full bg-sun" />}
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="group hidden h-[52px] items-center gap-3 rounded-full bg-sun pl-5 pr-1.5 text-[15px] font-semibold text-ink transition-colors duration-500 hover:bg-ink hover:text-paper sm:inline-flex"
              >
                Let&apos;s talk
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper transition-colors duration-500 group-hover:bg-sun group-hover:text-ink">
                  <Icon name="arrow" className="h-4 w-4 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                </span>
              </Link>

              <button
                type="button"
                className={cn(
                  "relative flex h-[52px] items-center gap-3 rounded-full px-5 text-[15px] font-semibold transition-colors lg:hidden",
                  solid ? "bg-ink text-paper" : "bg-white text-ink",
                )}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
              >
                <span>{open ? "Close" : "Menu"}</span>
                <span className="relative h-3 w-5" aria-hidden="true">
                  <motion.span className="absolute left-0 h-[1.5px] w-5 bg-current" animate={open ? { top: 5, rotate: 45 } : { top: 1, rotate: 0 }} transition={{ duration: 0.35 }} />
                  <motion.span className="absolute left-0 h-[1.5px] w-5 bg-current" animate={open ? { top: 5, rotate: -45 } : { top: 9, rotate: 0 }} transition={{ duration: 0.35 }} />
                </span>
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink text-paper lg:hidden"
            initial={{ clipPath: "circle(0% at 90% 6%)" }}
            animate={{ clipPath: "circle(150% at 90% 6%)" }}
            exit={{ clipPath: "circle(0% at 90% 6%)" }}
            transition={{ duration: 0.75, ease: easeInOut }}
          >
            <Container className="flex flex-1 flex-col justify-between gap-12 pb-10 pt-32">
              <ul className="m-0 flex list-none flex-col p-0">
                {[{ href: "/", label: "Home" }, ...navLinks, { href: "/contact", label: "Contact" }].map((l, i) => {
                  const active = l.href === "/" ? pathname === "/" : isActive(l.href);
                  return (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.06, ease: easeOut }}
                      className="border-b border-white/10"
                    >
                      <Link
                        href={l.href}
                        className={cn(
                          "group flex items-center justify-between py-4 font-display text-[clamp(2.4rem,9vw,3.5rem)] font-extrabold uppercase leading-none transition-colors",
                          active ? "text-sun" : "text-paper hover:text-sun",
                        )}
                      >
                        {l.label}
                        <Icon name="arrow" className="h-7 w-7 -rotate-45 opacity-50 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                className="grid gap-6 text-[15px] sm:grid-cols-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-mist">Say hello</span>
                  <a href={`mailto:${site.email}`} className="link-draw self-start text-lg">
                    {site.email}
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-mist">Available in</span>
                  <div className="flex flex-wrap gap-2">
                    {regions.map((r) => (
                      <span key={r} className="rounded-full border border-white/20 px-3 py-1 text-[14px] text-gold">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
