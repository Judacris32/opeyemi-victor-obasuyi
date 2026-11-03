import type { StaticImageData } from "next/image";

import posterKm17 from "@/assets/images/poster-km17.jpg";
import posterBreathOfLife from "@/assets/images/poster-breath-of-life.jpg";
import posterGodCalling from "@/assets/images/poster-god-calling.jpg";

/**
 * Credits must match Opeyemi's IMDb page exactly.
 * Only add a production once it is listed there or he can show other solid proof.
 * Adding an entry here creates its page at /work/[slug] automatically.
 */
export type Credit = {
  slug: string;
  title: string;
  year: string;
  role: string;
  format: string;
  poster: StaticImageData;
  imdb: string;
  /** Short line shown on cards */
  highlight?: string;
  tagline: string;
  synopsis?: string;
  facts: { label: string; value: string }[];
  awards?: { heading: string; items: string[] };
};

export const credits: Credit[] = [
  {
    slug: "breath-of-life",
    title: "Breath of Life",
    year: "2023",
    role: "2nd Assistant Camera",
    format: "Feature film",
    poster: posterBreathOfLife,
    imdb: "https://www.imdb.com/title/tt21094306/",
    highlight: "Best Movie, AMVCA 2024",
    tagline: "The film that took Best Movie at the 10th Africa Magic Viewers' Choice Awards.",
    synopsis:
      "A drama about a man whose life is upended by personal tragedy, and the unlikely friendship that slowly turns him back toward faith and purpose.",
    facts: [
      { label: "Year", value: "2023" },
      { label: "Credit", value: "2nd Assistant Camera" },
      { label: "Director", value: "BB Sasore" },
      { label: "Cinematographer", value: "Ola Cardoso" },
      { label: "Watch on", value: "Prime Video" },
    ],
    awards: {
      heading: "Five wins at the 10th AMVCAs, May 2024",
      items: [
        "Best Movie",
        "Best Director — BB Sasore",
        "Best Lead Actor — Wale Ojo",
        "Best Supporting Actor — Demola Adedoyin",
        "Best Supporting Actress — Genoveva Umeh",
      ],
    },
  },
  {
    slug: "km17",
    title: "KM17",
    year: "2024",
    role: "2nd Assistant Camera",
    format: "Feature film",
    poster: posterKm17,
    imdb: "https://www.imdb.com/title/tt32909899/",
    highlight: "Streaming on Prime Video",
    tagline: "A Trino Motion Pictures production, released on Prime Video.",
    facts: [
      { label: "Year", value: "2024" },
      { label: "Credit", value: "2nd Assistant Camera" },
      { label: "Production", value: "Trino Motion Pictures" },
      { label: "Distribution", value: "FilmOne Entertainment" },
      { label: "Watch on", value: "Prime Video" },
    ],
  },
  {
    slug: "god-calling",
    title: "God Calling",
    year: "2018",
    role: "Assistant Camera",
    format: "Feature film",
    poster: posterGodCalling,
    imdb: "https://www.imdb.com/title/tt9680512/",
    highlight: "11 AMVCA nominations",
    tagline: "My first feature. It went on to lead the 2020 AMVCA nominations with 11 nods.",
    synopsis:
      "A story of loss and redemption that follows a woman, her family and her faith through an unexpected encounter with God in modern-day Lagos.",
    facts: [
      { label: "Year", value: "2018" },
      { label: "Credit", value: "Assistant Camera" },
      { label: "Director", value: "BB Sasore" },
      { label: "Cinematographer", value: "Ola Cardoso" },
    ],
    awards: {
      heading: "11 nominations and 2 wins at the 7th AMVCAs, 2020",
      items: ["Best Lighting Designer in a Movie or TV Series — Ola Cardoso", "Best Make-Up — Lilian Omozele Paul"],
    },
  },
];

export const getCredit = (slug: string) => credits.find((c) => c.slug === slug);
