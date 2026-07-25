import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AcademicsHero from "../components/academics/AcademicsHero";
import LearningApproach from "../components/academics/LearningApproach";
import Programs from "../components/academics/Programs";
import Facilities from "../components/academics/Facilities";
import Activities from "../components/academics/Activities";
import CTA from "../components/home/CTA";

export default function Academics() {
  return (
    <>
      <Navbar />

      <AcademicsHero />

      <LearningApproach />

      <Programs />

      <Facilities />

      <Activities />

      <CTA />

      <Footer />
    </>
  );
}