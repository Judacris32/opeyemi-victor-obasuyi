import type { StaticImageData } from "next/image";

import lighting from "@/assets/images/bts-lighting.jpg";
import viewfinder from "@/assets/images/bts-viewfinder.jpg";
import dolly from "@/assets/images/bts-dolly.jpg";
import slider from "@/assets/images/bts-slider.jpg";
import bwCrew from "@/assets/images/bts-bw-crew.jpg";
import streetSet from "@/assets/images/hero-street-set.jpg";
import portraitStreet from "@/assets/images/portrait-street.jpg";

export type Shot = {
  src: StaticImageData;
  alt: string;
  caption: string;
  /** Layout hint for the gallery grid */
  span: "wide" | "tall" | "regular";
};

/** Order matters: it is laid out to fill a 3-column grid without gaps on desktop. */
export const shots: Shot[] = [
  { src: lighting, alt: "Rigging a soft light over an actor on an interior set", caption: "Shaping the light for an interior scene", span: "wide" },
  { src: viewfinder, alt: "Opeyemi checking the monitor on a camera rig during a street shoot", caption: "Checking the frame before a take", span: "tall" },
  { src: dolly, alt: "Opeyemi on a camera dolly with a cinema camera during an outdoor scene", caption: "Setting up a dolly move", span: "wide" },
  { src: slider, alt: "Opeyemi setting up a camera on a slider outside a house as the crew blocks the shot", caption: "Laying the slider", span: "regular" },
  { src: bwCrew, alt: "Black and white photo of the camera team waiting beside a cinema camera on a tripod", caption: "Waiting on the next set-up", span: "tall" },
  { src: portraitStreet, alt: "Opeyemi standing outside a building holding a camera", caption: "Between takes", span: "tall" },
  { src: streetSet, alt: "Camera crew setting up a shot on a busy Lagos street", caption: "A street scene in Lagos", span: "regular" },
];
