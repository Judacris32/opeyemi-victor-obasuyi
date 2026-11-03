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
  email: "Obasuyiopeyemi28@gmail.com", // TODO: replace with Opeyemi's real email
  instagram: { handle: "@thegiftedhand", href: "https://www.instagram.com/thegiftedhand/" },
  imdb: "https://www.imdb.com/name/nm13006968/",
  salford: { degree: "[DEGREE]", year: "[YEAR]" }, // TODO: fill in
} as const;

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
