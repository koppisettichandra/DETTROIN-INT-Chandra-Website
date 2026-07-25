import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AboutHero from "../components/about/AboutHero";
import Story from "../components/about/Story";
import MissionVision from "../components/about/MissionVision";
import Values from "../components/about/Values";
import Leadership from "../components/about/Leadership";
import CTA from "../components/home/CTA";

export default function About() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <Story />

      <MissionVision />

      <Values />

      <Leadership />

      <CTA />

      <Footer />
    </>
  );
}