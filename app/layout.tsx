import type { Metadata, Viewport } from "next";

import "@fontsource/big-shoulders-display/700";
import "@fontsource/big-shoulders-display/800";
import "@fontsource/instrument-serif/400";
import "@fontsource/instrument-serif/400-italic";
import "@fontsource-variable/dm-sans";
import "@fontsource/ibm-plex-mono/400";
import "@fontsource/ibm-plex-mono/500";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CtaBanner from "@/components/layout/CtaBanner";
import { site } from "@/content/site";

const description =
  "Opeyemi Victor Obasuyi works in the camera department on feature films and series. Based in Lagos, Nigeria and available to work internationally. Credits include Breath of Life (Best Movie, AMVCA 2024), KM17 and God Calling.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "Opeyemi Obasuyi",
    "Opeyemi Victor Obasuyi",
    "camera department",
    "camera crew",
    "camera assistant",
    "2nd AC",
    "clapper loader",
    "Nollywood",
    "film crew Lagos",
    "film crew Nigeria",
    "camera crew Africa",
    "film crew UK",
  ],
  openGraph: {
    type: "website",
    title: `${site.name} | ${site.title}`,
    description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#13161F",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: "Opeyemi Obasuyi",
  jobTitle: "Camera Department, Film & Television",
  url: site.url,
  sameAs: [site.imdb, site.instagram.href],
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Salford" },
  knowsAbout: ["Cinematography", "Camera assistance", "Film production", "Camera department"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <noscript>
          <style>{".page-curtain{display:none!important}.page-content{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-paper focus:px-5 focus:py-3 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <CtaBanner />
        <Footer />
      </body>
    </html>
  );
}
