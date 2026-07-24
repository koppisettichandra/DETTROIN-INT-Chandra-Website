import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Programs from "../components/home/Programs";
import GalleryPreview from "../components/home/GalleryPreview";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Programs />
      <GalleryPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}