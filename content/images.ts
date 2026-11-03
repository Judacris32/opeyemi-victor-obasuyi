/**
 * Camera-gear photography for page heroes and banners.
 * All photos are from Unsplash and free to use under the Unsplash License
 * (https://unsplash.com/license). Credit isn't required, but it's listed here.
 *
 * To swap one, replace `src` with another images.unsplash.com URL,
 * or import a local file from assets/images and use that instead.
 */
export type HeroImage = {
  src: string;
  alt: string;
  credit: string;
  /** Tailwind object-position class */
  position?: string;
};

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2400&q=80`;

export const heroes = {
  home: {
    src: u("photo-1705107959428-3ef48ff9f79d"),
    alt: "A rigged ARRI Alexa Mini cinema camera on a tripod in a dark film studio",
    credit: "Levi Stute / Unsplash",
    position: "object-center",
  },
  work: {
    src: u("photo-1522054361367-64c3824dcebc"),
    alt: "A black RED cinema camera",
    credit: "Andrej Lišakov / Unsplash",
    position: "object-center",
  },
  behindTheScenes: {
    src: u("photo-1705107959309-ca7d26fbeb08"),
    alt: "A cinema camera rigged for filming in a dark studio",
    credit: "Levi Stute / Unsplash",
    position: "object-center",
  },
  about: {
    src: u("photo-1519799297475-fdcbf5f5953b"),
    alt: "A professional ARRI cinema camera in front of a warm brown wall",
    credit: "ShareGrid / Unsplash",
    position: "object-center",
  },
  press: {
    src: u("photo-1622829118131-27ab20ded438"),
    alt: "A RED cinema camera beside a film light",
    credit: "Logline Filmproduktion / Unsplash",
    position: "object-center",
  },
  contact: {
    src: u("photo-1619473669812-b67f87273a5d"),
    alt: "Close-up of a cinema lens",
    credit: "Billy Freeman / Unsplash",
    position: "object-center",
  },
  banner: {
    src: u("photo-1759417501248-0aa9489dab3f"),
    alt: "A professional movie camera set up in a colourfully lit studio hallway",
    credit: "Phil Hearing / Unsplash",
    position: "object-center",
  },
  process: {
    src: u("photo-1704580104899-e99a78c4804b"),
    alt: "Close-up of a cinema camera in a dark studio",
    credit: "Levi Stute / Unsplash",
    position: "object-center",
  },
} satisfies Record<string, HeroImage>;
