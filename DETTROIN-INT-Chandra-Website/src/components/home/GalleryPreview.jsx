import { motion } from "framer-motion";

import g1 from "../../assets/images/gallery/gallery1.jpeg";
import g2 from "../../assets/images/gallery/gallery2.jpeg";
import g3 from "../../assets/images/gallery/gallery3.jpeg";
import g4 from "../../assets/images/gallery/gallery4.jpeg";
import g5 from "../../assets/images/gallery/gallery5.jpeg";
import g6 from "../../assets/images/gallery/gallery6.jpeg";

const images = [g1, g2, g3, g4, g5, g6];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-blue-600 font-semibold">
            Campus Life
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Experience Learning Beyond Books
          </h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
            Discover a vibrant campus where academics, creativity,
            sports and innovation come together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >

              <img
                src={image}
                alt="Campus"
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}