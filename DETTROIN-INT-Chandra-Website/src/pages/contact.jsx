import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import MapSection from "../components/contact/MapSection";

export default function Contact() {
  return (
    <>
      <Navbar />

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <MapSection />

      <Footer />
    </>
  );
}