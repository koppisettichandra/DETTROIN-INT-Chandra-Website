const activities = [
  "Robotics Club",
  "Music & Performing Arts",
  "Debate Society",
  "Environmental Club",
  "Coding Club",
  "Football & Basketball",
  "Community Service",
  "Model United Nations",
];

export default function Activities() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#9E0E21] font-semibold">
            Beyond Academics
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Co-Curricular Activities
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {activities.map((activity) => (

            <div
              key={activity}
              className="bg-white rounded-2xl p-6 text-center shadow hover:bg-[#9E0E21] hover:text-white transition-all duration-300"
            >

              <h3 className="font-semibold text-lg">
                {activity}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}