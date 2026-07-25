import classroom from "../../assets/images/academics/classroom.jpeg";
import lab from "../../assets/images/academics/lab.jpeg";
import library from "../../assets/images/academics/library.jpeg";
import sports from "../../assets/images/academics/sports.jpg";

import {
  FaFlask,
  FaLaptop,
  FaBook,
  FaBasketballBall,
} from "react-icons/fa";

const facilities = [
  {
    title: "Smart Classrooms",
    description:
      "Interactive classrooms equipped with digital boards and modern teaching technology.",
    image: classroom,
    icon: <FaLaptop />,
  },

  {
    title: "Science Laboratories",
    description:
      "Well-equipped Physics, Chemistry, and Biology labs encouraging hands-on learning.",
    image: library,
    icon: <FaFlask />,
  },

  {
    title: "Learning Resource Centre",
    description:
      "A spacious library offering books, journals, and digital resources for every learner.",
    image: lab,
    icon: <FaBook />,
  },

  {
    title: "Sports Facilities",
    description:
      "Indoor and outdoor sports infrastructure promoting teamwork, discipline, and fitness.",
    image: sports,
    icon: <FaBasketballBall />,
  },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#9E0E21] font-semibold">
            Campus Facilities
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Inspiring Spaces for Learning
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Our campus is thoughtfully designed to encourage innovation,
            collaboration, and holistic development.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {facilities.map((facility) => (

            <div
              key={facility.title}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-7">

                <div className="text-4xl text-[#9E0E21]">

                  {facility.icon}

                </div>

                <h3 className="text-2xl font-bold mt-5">

                  {facility.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-7">

                  {facility.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}