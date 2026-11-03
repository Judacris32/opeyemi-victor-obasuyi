import type { StaticImageData } from "next/image";

import pressThisday from "@/assets/images/press-thisday.jpg";
import pressNollywire from "@/assets/images/press-nollywire.jpg";

export type PressItem = {
  outlet: string;
  date: string;
  title: string;
  summary: string;
  href: string;
  image: StaticImageData;
  alt: string;
  /** Tailwind object-position class for the thumbnail crop */
  focus: string;
};

export const press: PressItem[] = [
  {
    outlet: "THISDAY",
    date: "5 June 2024",
    title: "Behind the Frames of Breath of Life: The Camera Team Behind Nollywood's AMVCA-Winning Film",
    summary:
      "A look at the camera and electrical team behind Breath of Life, the crew that worked under cinematographer Ola Cardoso on the year's Best Movie.",
    href: "https://thisdaylive.com/2024/06/05/behind-the-frames-of-breath-of-life-the-camera-team-behind-nollywoods-amvca-winning-film/",
    image: pressThisday,
    alt: "THISDAY article page: Behind the Frames of Breath of Life",
    focus: "object-[center_75%]",
  },
  {
    outlet: "Nollywire",
    date: "3 February 2025",
    title: "Opeyemi Obasuyi: Building a Career Behind the Camera in Nollywood",
    summary:
      "A profile of my path from trainee at Cardoso Imagery to the camera teams on God Calling, Breath of Life and KM17.",
    href: "https://nollywire.com/news/opeyemi-obasuyi-nollywood-film-career",
    image: pressNollywire,
    alt: "Nollywire article page: Opeyemi Obasuyi, Building a Career Behind the Camera in Nollywood",
    focus: "object-bottom",
  },
];
