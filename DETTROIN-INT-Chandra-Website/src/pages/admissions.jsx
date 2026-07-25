import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AdmissionsHero from "../components/admissions/AdmissionsHero";
import AdmissionProcess from "../components/admissions/AdmissionProcess";
import Documents from "../components/admissions/Documents";
import CTA from "../components/home/CTA";

export default function Admissions() {
  return (
    <>
      <Navbar />

      <AdmissionsHero />

      <AdmissionProcess />

      <Documents />

      <CTA />

      <Footer />
    </>
  );
}