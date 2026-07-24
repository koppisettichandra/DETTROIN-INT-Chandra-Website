import { motion } from "framer-motion";
import heroCampus from "../../assets/images/image-vasant.png"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
            {/* Background circles */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="uppercase tracking-widest text-blue-300 font-semibold">
                        Excellence in Education
                    </p>

                    <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">
                        Vasant Valley School
                    </h1>

                    <p className="mt-6 text-lg text-slate-300 max-w-xl">
                        We encourage students to push the boundaries of current understanding and set benchmarks in the field of education.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                            Explore Campus
                        </button>

                        <button className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
                            Apply Now
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="hidden lg:flex justify-center"
                >
                    <div className="w-[420px] h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 ml-200">
                        <img
                            src={heroCampus}
                            alt="School Campus"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}