import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaGlobeAsia,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGraduationCap size={34} />,
    title: "Academic Excellence",
    description:
      "A balanced curriculum focused on critical thinking, creativity, and lifelong learning.",
  },
  {
    icon: <FaLaptopCode size={34} />,
    title: "Innovation & Technology",
    description:
      "Modern classrooms equipped with digital tools that inspire exploration and collaboration.",
  },
  {
    icon: <FaGlobeAsia size={34} />,
    title: "Global Perspective",
    description:
      "Preparing students to thrive in an interconnected world with confidence and empathy.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-16 md:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Learning Beyond Classrooms
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl">
            We provide a nurturing environment where students discover
            their strengths through academics, innovation,
            leadership and extracurricular excellence.
          </p>
        </motion.div>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}