import type { StaticImageData } from "next/image";

import posterKm17 from "@/assets/images/poster-km17.jpg";
import posterBreathOfLife from "@/assets/images/poster-breath-of-life.jpg";
import posterGodCalling from "@/assets/images/poster-god-calling.jpg";
import posterKonna from "@/assets/images/poster-konna.jpg";
import posterRedFlag from "@/assets/images/poster-red-flag.jpg";
import posterJourneyOfAnAfricanColony from "@/assets/images/poster-journey-of-an-african-colony.jpg";
import konnaCredit from "@/assets/images/credits/konna-credit.jpg";
import journeyCredit from "@/assets/images/credits/journey-credit.jpg";
import redFlagCredit from "@/assets/images/credits/red-flag-credit.jpg";

/**
 * Verified portfolio credits. Existing IMDb-linked feature films remain grouped
 * separately from additional projects supported by the supplied production links
 * and on-screen credit screenshots. Adding an entry creates /work/[slug].
 */
export type Credit = {
  slug: string;
  title: string;
  year?: string;
  role: string;
  format: string;
  poster?: StaticImageData;
  evidenceImage?: StaticImageData;
  evidenceCaption?: string;
  imdb?: string;
  externalLink?: string;
  linkLabel?: string;
  featured?: boolean;
  contribution?: string;
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
    featured: true,
    contribution: "I worked in the camera department as 2nd Assistant Camera, supporting the camera team through the demands of the production.",
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
    featured: true,
    contribution: "I worked in the camera department as 2nd Assistant Camera, helping the team maintain an organised and efficient camera workflow on set.",
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
    featured: true,
    contribution: "I began my feature-film experience on this production as an Assistant Camera, supporting the camera department during filming.",
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

  {
    slug: "hq-barbers",
    title: "HQ Barbers",
    format: "TV series",
    role: "Camera Assistant",
    externalLink: "https://www.primevideo.com/detail/0P3XM9FZQC81JQAXJTYUACH9H3",
    linkLabel: "Watch on Prime Video",
    tagline: "A Prime Video series on which Opeyemi is credited as Camera Assistant.",
    contribution: "I worked on HQ Barbers as a Camera Assistant, supporting the camera department during production.",
    facts: [
      { label: "Project", value: "HQ Barbers" },
      { label: "Format", value: "TV series" },
      { label: "Credit", value: "Camera Assistant" },
      { label: "Platform", value: "Prime Video" },
    ],
  },
  {
    slug: "konna",
    title: "Konna",
    format: "Music video",
    role: "Colorist",
    poster: posterKonna,
    evidenceImage: konnaCredit,
    evidenceCaption: "Opeyemi Obasuyi named in the music video credits. The Colorist role is supplied in the project information.",
    externalLink: "https://www.youtube.com/watch?v=nr7fOvLd7d8",
    linkLabel: "Watch music video",
    tagline: "A music video by Harrysong featuring Rudeboy.",
    contribution: "I worked on the music video as Colorist, shaping the visual tone and colour treatment of the final images.",
    facts: [
      { label: "Artist", value: "Harrysong" },
      { label: "Featuring", value: "Rudeboy" },
      { label: "Project", value: "Konna" },
      { label: "Credit", value: "Colorist" },
      { label: "Format", value: "Music video" },
    ],
  },
  {
    slug: "journey-of-an-african-colony",
    title: "Journey of an African Colony",
    format: "Documentary",
    role: "Camera Assistant",
    poster: posterJourneyOfAnAfricanColony,
    externalLink: "https://www.youtube.com/results?search_query=journey+of+an+african+colony",
    evidenceImage: journeyCredit,
    evidenceCaption: "On-screen end credits identifying Opeyemi Obasuyi as Camera Assistant.",
    linkLabel: "Watch documentary",
    tagline: "A documentary featuring a Camera Assistant credit on Episode 1, Hope Night from Independence.",
    synopsis: "The supplied credit screenshot identifies Opeyemi Obasuyi as Camera Assistant on Episode 1, Hope Night from Independence.",
    contribution: "I worked on the documentary as a Camera Assistant, supporting the camera department on the production.",
    facts: [
      { label: "Project", value: "Journey of an African Colony" },
      { label: "Episode", value: "Hope Night from Independence" },
      { label: "Credit", value: "Camera Assistant" },
      { label: "Format", value: "Documentary" },
    ],
  },
  {
    slug: "red-flag",
    title: "Red Flag",
    format: "Short film",
    role: "Cinematographer",
    poster: posterRedFlag,
    evidenceImage: redFlagCredit,
    evidenceCaption: "On-screen end credits identifying Opeyemi Obasuyi as Cinematographer.",
    tagline: "A short film directed by Destiny Osagiede and produced by Efomo Sarah Osa-Osadolor.",
    contribution: "I served as Cinematographer on Red Flag, responsible for shaping the visual approach and photographic execution of the film.",
    facts: [
      { label: "Project", value: "Red Flag" },
      { label: "Format", value: "Short film" },
      { label: "Director", value: "Destiny Osagiede" },
      { label: "Producer", value: "Efomo Sarah Osa-Osadolor" },
      { label: "Credit", value: "Cinematographer" },
    ],
  },
];

export const featuredCredits = credits.filter((credit) => credit.featured);
export const additionalCredits = credits.filter((credit) => !credit.featured);

export const getCredit = (slug: string) => credits.find((c) => c.slug === slug);
