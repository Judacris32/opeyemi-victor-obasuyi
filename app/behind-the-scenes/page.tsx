import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Gallery from "@/components/gallery/Gallery";
import CameraAnatomy from "@/components/craft/CameraAnatomy";
import DayOnSet from "@/components/craft/DayOnSet";
import { heroes } from "@/content/images";
import { shots } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Behind the scenes",
  description: "Photos from set, a look inside a cinema camera build, and how Opeyemi runs a shoot day in the camera department.",
};

export default function BehindTheScenesPage() {
  return (
    <>
      <PageHero
        image={heroes.behindTheScenes}
        label="Behind the scenes"
        crumbs={[{ label: "Behind the scenes" }]}
        title={["Life", { accent: "behind" }, "the lens"]}
        intro="The early calls, the heavy kit and the quiet moments between takes. This is what the camera department looks like from the inside."
      />

      <Section tone="paper" aria-label="Photos from set">
        <Container>
          <SectionHeading
            kicker="On set"
            title={["Moments from", { accent: "set" }]}
            intro="Real days on real productions. Tap any photo to see it full size."
          />
          <Gallery shots={shots} />
        </Container>
      </Section>

      <CameraAnatomy />
      <DayOnSet />
    </>
  );
}
