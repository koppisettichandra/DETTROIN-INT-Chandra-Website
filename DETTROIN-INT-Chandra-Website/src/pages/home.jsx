import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-blue-900">

        <div className="text-center text-white px-6">

          <h1 className="text-6xl font-bold">
            Excellence in Education
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Nurturing curious minds, inspiring innovation, and empowering
            future leaders through world-class education.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Explore Campus
            </button>

            <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Apply Now
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}