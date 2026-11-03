import HomeHero from "@/components/home/HomeHero";
import PartnersBand from "@/components/home/PartnersBand";
import Intro from "@/components/home/Intro";
import SelectedWork from "@/components/home/SelectedWork";
import Skills from "@/components/about/Skills";
import BtsTeaser from "@/components/home/BtsTeaser";
import Process from "@/components/home/Process";
import PressTeaser from "@/components/home/PressTeaser";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PartnersBand />
      <Intro />
      <SelectedWork />
      <Skills />
      <BtsTeaser />
      <Process />
      <PressTeaser />
    </>
  );
}
