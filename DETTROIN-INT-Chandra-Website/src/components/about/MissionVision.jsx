import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#9E0E21] font-semibold">
            Our Purpose
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold mt-4">
            Mission & Vision
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition">

            <FaBullseye className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#9E0E21]" />

            <h3 className="text-3xl font-bold mt-6">
              Our Mission
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              To empower every student through academic excellence,
              innovation, leadership, and holistic development in a
              safe and inclusive learning environment.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition">

            <FaEye className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#9E0E21]" />

            <h3 className="text-3xl font-bold mt-6">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              To become a leading institution that inspires lifelong
              learners and responsible global citizens prepared for
              tomorrow's challenges.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}