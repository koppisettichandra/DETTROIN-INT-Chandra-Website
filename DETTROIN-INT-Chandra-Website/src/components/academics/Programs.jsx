const programs = [
  {
    grade: "Primary School",
    years: "Grades I - V",
    desc: "Building strong academic foundations through engaging learning experiences.",
  },
  {
    grade: "Middle School",
    years: "Grades VI - VIII",
    desc: "Encouraging critical thinking, creativity, and independent learning.",
  },
  {
    grade: "Senior School",
    years: "Grades IX - XII",
    desc: "Preparing students for board examinations, higher education, and future careers.",
  },
];

export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#9E0E21] font-semibold">
            Academic Programs
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Curriculum Designed for Success
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {programs.map((program) => (

            <div
              key={program.grade}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition"
            >

              <h3 className="text-3xl font-bold">

                {program.grade}

              </h3>

              <p className="text-[#9E0E21] font-semibold mt-3">

                {program.years}

              </p>

              <p className="mt-6 text-gray-600 leading-8">

                {program.desc}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}