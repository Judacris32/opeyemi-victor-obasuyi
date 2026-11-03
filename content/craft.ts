/**
 * Educational content about how a camera department works.
 * Hotspot positions are percentages over assets/images/portrait-camera.jpg.
 */
import processPrepare from "@/assets/images/process/prepare.jpg";
import processRehearse from "@/assets/images/process/rehearse.jpg";
import processRoll from "@/assets/images/process/roll.jpg";
import processWrap from "@/assets/images/process/wrap.jpg";

export const cameraParts = [
  { id: "battery", name: "Battery plate", x: 30, y: 57, text: "A high-capacity V-mount battery powers the body and every accessory on the rig. We swap them between takes, never during one." },
  { id: "handle", name: "Top handle", x: 46, y: 47, text: "Lets the crew lift and move a heavy build safely between set-ups, and doubles as a mounting point for accessories." },
  { id: "monitor", name: "On-board monitor", x: 64, y: 44, text: "Gives the operator and focus puller a clear view of the frame right at the camera." },
  { id: "wireless", name: "Wireless video", x: 59, y: 61, text: "Sends a live picture to the director's and DP's monitors without a single cable running across the set." },
  { id: "lens", name: "Cinema lens", x: 79, y: 61, text: "Cinema lenses are built for smooth, precise focus pulls and consistent colour from one lens to the next." },
  { id: "mattebox", name: "Matte box", x: 94, y: 58, text: "Shades the lens from stray light and holds filters that shape exposure and mood." },
  { id: "rods", name: "Baseplate & rods", x: 47, y: 86, text: "The backbone of the build. It balances the camera and carries the follow focus and other accessories." },
  { id: "head", name: "Fluid head & pan bar", x: 13, y: 93, text: "Lets the operator pan and tilt with smooth, steady control." },
];

/** His own shoot-day routine, first person. Stages only: real call times vary by production. */
export const myDay = [
  {
    stage: "Before call",
    title: "Kit check",
    text: "I'm in before the rest of the unit. Cases open, batteries on charge, every piece of kit counted against the list.",
  },
  {
    stage: "Prep",
    title: "Building the camera",
    text: "Body, lenses, monitor, wireless video and power go together. I test everything, label it and have it ready before the first set-up.",
  },
  {
    stage: "Blocking",
    title: "Watching the scene",
    text: "While the director walks the actors through, I watch closely and lay marks so the camera and focus can hit them on every take.",
  },
  {
    stage: "Turnover",
    title: "Rolling",
    text: "Slate in, slate out. I keep lenses, media and reports moving so the team never waits on the camera.",
  },
  {
    stage: "Between set-ups",
    title: "Staying ahead",
    text: "Lens changes, battery swaps and moving the cart. The goal is always to be ready for the next shot before anyone asks.",
  },
  {
    stage: "Wrap",
    title: "Handing over",
    text: "Media secured and handed over, reports finished, kit cleaned and packed so tomorrow starts clean.",
  },
];

export const process = [
  {
    title: "Prepare",
    image: processPrepare,
    alt: "Hands fitting a cinema lens to a rigged ARRI camera",
    text: "The camera is built, tested and labelled. Lenses are cleaned, batteries charged, media ready.",
  },
  {
    title: "Rehearse",
    image: processRehearse,
    alt: "A clapperboard marked Rehearsal held up as the director walks actors through a scene",
    text: "We watch the blocking, lay the track and set marks so the camera can hit them every time.",
  },
  {
    title: "Roll",
    image: processRoll,
    alt: "A camera monitor showing a recording in progress as the operator watches",
    text: "Slate, focus and frame come together. Every take is logged so the edit has what it needs.",
  },
  {
    title: "Wrap",
    image: processWrap,
    alt: "Labelled camera and audio drives beside a laptop and a signed wrap checklist on a flight case",
    text: "Media is secured and handed over, the kit is cleaned and packed, and the reports are signed off.",
  },
];
