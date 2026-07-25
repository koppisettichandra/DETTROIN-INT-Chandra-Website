import {
  FaFileAlt,
  FaUserCheck,
  FaClipboardCheck,
  FaGraduationCap,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Submit Application",
    desc: "Complete the online admission application form.",
  },

  {
    icon: <FaClipboardCheck />,
    title: "Document Verification",
    desc: "Our admissions team verifies submitted documents.",
  },

  {
    icon: <FaUserCheck />,
    title: "Interaction",
    desc: "Students and parents attend a friendly interaction session.",
  },

  {
    icon: <FaGraduationCap />,
    title: "Confirmation",
    desc: "Receive confirmation and begin your learning journey.",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#9E0E21] font-semibold">
            Admission Process
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Four Simple Steps
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-8 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="bg-slate-50 rounded-3xl p-8 shadow hover:-translate-y-2 transition"
            >

              <div className="w-12 h-12 rounded-full bg-[#9E0E21] text-white flex items-center justify-center font-bold mb-6">
                {index + 1}
              </div>

              <div className="text-4xl text-[#9E0E21]">

                {step.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {step.title}

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                {step.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}