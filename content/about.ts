import { education } from "./site";

const [ma, ba] = education;

import skillCamera from "@/assets/images/skills/camera-prep.jpg";
import skillLenses from "@/assets/images/skills/lenses.jpg";
import skillMovement from "@/assets/images/skills/movement.jpg";
import skillSlate from "@/assets/images/skills/slate.jpg";
import skillLighting from "@/assets/images/skills/lighting.jpg";
import skillComms from "@/assets/images/skills/communication.jpg";
import skillEditing from "@/assets/images/skills/editing.jpg";

export const stats = [
  { value: 8, suffix: "+", label: "Years on professional sets" },
  { value: 3, suffix: "", label: "Feature credits on IMDb" },
  { value: 2, suffix: "", label: "AMVCA-recognised films" },
  { value: 2, suffix: "", label: "Titles on Prime Video" },
];

/** What he brings to a production. Kept to work he has done on set. */
export const skills = [
  {
    image: skillCamera,
    alt: "Hands adjusting the follow focus on a rigged ARRI cinema camera",
    title: "Camera prep & builds",
    text: "Bodies, lenses, monitors, wireless video and power: built, tested and ready before call time.",
  },
  {
    image: skillLenses,
    alt: "A set of cinema prime lenses in a padded case with a lens blower and cloth",
    title: "Lenses & focus support",
    text: "Lens changes, cleaning and marks, working closely with the focus puller so every frame lands sharp.",
  },
  {
    image: skillMovement,
    alt: "A camera dolly with an ARRI camera on track laid across a location",
    title: "Camera movement",
    text: "Dolly, slider and track set-ups, laid and levelled so moves are smooth and easy to repeat.",
  },
  {
    image: skillEditing,
    alt: "An editing timeline open on a laptop at the end of a shoot day",
    title: "Editing & post-production",
    text: "With an MA in Editing for TV, Film & Digital Media, I know what the edit needs from set: usable coverage, accurate logs and media that's ready to cut.",
  },
  {
    image: skillSlate,
    alt: "A clapperboard held up in front of a cinema camera on set",
    title: "Slate, media & reports",
    text: "Clean slates, organised media and accurate camera reports that make life easier in the edit.",
  },
  {
    image: skillLighting,
    alt: "An LED film light with barn doors on a stand at an outdoor location",
    title: "Lighting & rigging support",
    text: "A reliable extra pair of hands for the lighting and grip teams when the schedule gets tight.",
  },
  {
    image: skillComms,
    alt: "Headphones, a walkie-talkie and a call sheet on a flight case while the crew talks on set",
    title: "Calm set communication",
    text: "Clear, quiet communication with the DP, director and crew, even on the busiest shooting days.",
  },
];

export const principles = [
  {
    title: "Ready before call time",
    text: "The camera is built, checked and labelled before anyone asks. Preparation is the part of the job no one sees, and the part everyone relies on.",
  },
  {
    title: "Calm when it counts",
    text: "Sets move fast and plans change. I keep a level head, keep the kit organised and keep the department moving with the day.",
  },
  {
    title: "Camera is a team sport",
    text: "Great images come from people who trust each other. I listen closely, communicate clearly and look after the people around me.",
  },
];

export const story = [
  "I came into the camera department in 2018 as a trainee at Cardoso Imagery in Lagos. Within months I was on set for God Calling, learning how a professional camera team moves, communicates and protects the shot.",
  "Since then I've worked on Breath of Life, which won Best Movie at the 2024 Africa Magic Viewers' Choice Awards, and KM17, now streaming on Prime Video. Every production has taught me the same lesson: the best camera work starts long before anyone calls action.",
  `Today I take on productions across Nigeria, Africa and internationally, and I'm always ready to travel. My master's in editing at the University of Salford taught me where every shot ends up, and I carry that into how I work on set. I bring the pace and discipline of Nollywood sets, and a calm, organised way of working, to every production I join.`,
];

export type Milestone = {
  year: string;
  title: string;
  text: string;
  tag?: string;
  href?: string;
};

export const milestones: Milestone[] = [
  {
    year: ba.year,
    title: ba.school,
    text: `Graduated with a ${ba.degree}, before finding my way into film.`,
    tag: ba.place,
  },
  {
    year: "2018",
    title: "Trainee, Cardoso Imagery",
    text: "My first steps in the camera department, learning the craft under one of Lagos's most respected cinematographers.",
    tag: "Lagos",
  },
  {
    year: "2018",
    title: "God Calling",
    text: "My first feature film. It went on to lead the 2020 AMVCA nominations with 11 nods.",
    tag: "Assistant Camera",
    href: "/work/god-calling",
  },
  {
    year: "2023",
    title: "Breath of Life",
    text: "A Prime Video original that won Best Movie and four more awards at the 2024 AMVCAs.",
    tag: "2nd Assistant Camera",
    href: "/work/breath-of-life",
  },
  {
    year: "2024",
    title: "KM17",
    text: "A Trino Motion Pictures feature, released on Prime Video.",
    tag: "2nd Assistant Camera",
    href: "/work/km17",
  },
  {
    year: ma.year,
    title: ma.school,
    text: `Graduated with an ${ma.degree}, adding a second craft to years of experience on set.`,
    tag: ma.place,
  },
];
