import {
  FaLightbulb,
  FaHandshake,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";

const values = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    text: "Encouraging creativity and critical thinking.",
  },
  {
    icon: <FaHandshake />,
    title: "Integrity",
    text: "Building character through honesty and respect.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    text: "Teaching responsibility toward our environment.",
  },
  {
    icon: <FaUsers />,
    title: "Community",
    text: "Creating an inclusive and supportive culture.",
  },
];

export default function Values() {
  return (
    <section className="py-16 md:py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#9E0E21] font-semibold">
            Core Values
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold-5xl font-bold mt-4">
            What Defines Us
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-8 gap-8 mt-16">

          {values.map((value) => (

            <div
              key={value.title}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >

              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#9E0E21]">

                {value.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {value.title}

              </h3>

              <p className="text-gray-600 mt-4">

                {value.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}