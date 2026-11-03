/**
 * Global site settings. Everything marked TODO must be filled in before launch.
 */
export const site = {
  name: "Opeyemi Victor Obasuyi",
  shortName: "Obasuyi",
  firstName: "Opeyemi",
  title: "Camera Department, Film & TV",
  base: "Lagos, Nigeria",
  availability: "Available across Nigeria, Africa and internationally",
  url: "https://obasuyi.com", // TODO: replace with the live domain
  email: "obasuyiopeyemi28@gmail.com",
  instagram: { handle: "@thegiftedhand", href: "https://www.instagram.com/thegiftedhand/" },
  imdb: "https://www.imdb.com/name/nm13006968/",
} as const;

/** Degrees, most recent first. */
export const education = [
  {
    degree: "MA Editing for Television, Film & Digital Media",
    short: "MA, University of Salford",
    school: "University of Salford",
    place: "Salford, UK",
    year: "2024",
  },
  {
    degree: "BA History & International Studies",
    short: "BA, Ajayi Crowther University",
    school: "Ajayi Crowther University",
    place: "Oyo, Nigeria",
    year: "2015",
  },
];

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/behind-the-scenes", label: "Behind the scenes" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
] as const;

/** Productions and teams named in the partner strip. Only real, verifiable associations. */
export const productions = [
  "Breath of Life",
  "Trino Motion Pictures",
  "KM17",
  "FilmOne Entertainment",
  "God Calling",
  "Cardoso Imagery",
];

/** Where he takes bookings. Shown as chips in the footer, menu and contact page. */
export const regions = ["Nigeria", "Africa", "International"];

export const craftWords = ["Camera prep", "Lenses & focus", "Camera movement", "Slate & media", "Lighting support", "Set etiquette"];
