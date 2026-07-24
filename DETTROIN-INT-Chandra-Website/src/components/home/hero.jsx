import { motion } from "framer-motion";
import heroCampus from "../../assets/images/image-vasant.png";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-indigo-500/20 blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">

                <div className="grid gap-16 lg:grid-cols-2 items-center">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <p className="uppercase tracking-[5px] text-blue-300 font-semibold">
                            Excellence in Deed
                        </p>

                        <h1 className="mt-6 text-6xl font-extrabold leading-tight">

                            Vasant Valley School

                        </h1>

                        <p className="mt-8 max-w-xl text-lg text-slate-300 leading-8">

                            The school day comprises academic and nonacademic Learning Experiences and is planned with special focus on the developmental needs of our students. The entire Campus is a “Classroom” and learning is continuous.

                        </p>

                        <div className="mt-10 flex gap-5 flex-wrap">

                            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg transition hover:scale-105 hover:bg-blue-700">

                                Explore Campus

                            </button>

                            <button className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black">

                                Admissions Open

                            </button>

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div

                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}

                        className="relative flex justify-center"

                    >

                        <div className="relative h-[580px] w-[430px] overflow-hidden rounded-[35px] mt-10 shadow-2xl">

                            <img

                                src={heroCampus}

                                alt="Campus"

                                className="h-full w-full object-cover"

                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"></div>

                        </div>

                        {/* Students */}

                        <motion.div

                            animate={{ y: [0, -12, 0] }}

                            transition={{

                                duration: 3,

                                repeat: Infinity,

                            }}

                            className="absolute left-0 top-14 rounded-2xl bg-white p-5 shadow-2xl"

                        >

                            <h2 className="text-3xl font-bold text-blue-600">

                                1500+

                            </h2>

                            <p className="text-gray-600">

                                Students

                            </p>

                        </motion.div>

                        {/* Faculty */}

                        <motion.div

                            animate={{ y: [0, 12, 0] }}

                            transition={{

                                duration: 4,

                                repeat: Infinity,

                            }}

                            className="absolute -right-2 bottom-24 rounded-2xl bg-white p-5 shadow-2xl"

                        >

                            <h2 className="text-3xl font-bold text-green-600">

                                120+

                            </h2>

                            <p className="text-gray-600">

                                Faculty

                            </p>

                        </motion.div>

                        {/* Badge */}

                        <motion.div

                            animate={{ scale: [1, 1.05, 1] }}

                            transition={{

                                duration: 3,

                                repeat: Infinity,

                            }}

                            className="absolute bottom-8 left-10 rounded-full bg-blue-600 px-6 py-3 font-semibold shadow-xl"

                        >

                            ⭐ 25+ Years of Excellence

                        </motion.div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}