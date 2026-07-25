import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaFlask,
  FaUsers,
} from "react-icons/fa";

const approaches = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Interactive Learning",
    description:
      "Student-centered classrooms that encourage participation, collaboration, and curiosity.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Technology Enabled",
    description:
      "Smart classrooms and digital tools make learning engaging and future-ready.",
  },
  {
    icon: <FaFlask />,
    title: "Hands-on Experience",
    description:
      "Modern science and computer labs help students learn through practical application.",
  },
  {
    icon: <FaUsers />,
    title: "Holistic Growth",
    description:
      "We focus equally on academics, leadership, sports, and creativity.",
  },
];

export default function LearningApproach() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#9E0E21] font-semibold">
            Learning Approach
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Education Beyond Books
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            We combine innovation, collaboration, and practical experiences
            to create meaningful learning opportunities.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {approaches.map((item) => (

            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl text-[#9E0E21]">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}