const programs = [
  {
    title: "Primary School",
    description: "Building strong academic foundations through exploration and creativity.",
  },
  {
    title: "Middle School",
    description: "Developing analytical thinking, leadership and teamwork.",
  },
  {
    title: "Senior School",
    description: "Preparing students for university and future careers.",
  },
];

export default function Programs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Academic Programs
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {programs.map((program) => (

            <div
              key={program.title}
              className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 hover:scale-105 transition"
            >

              <h3 className="text-3xl font-bold">
                {program.title}
              </h3>

              <p className="mt-6 text-blue-100">
                {program.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}