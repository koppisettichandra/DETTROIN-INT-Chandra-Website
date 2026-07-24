import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Alumnus",
    quote:
      "The school encouraged me to think independently and pursue my passion for technology.",
  },
  {
    name: "Priya Mehta",
    role: "Parent",
    quote:
      "The teachers genuinely care about every student's growth. We couldn't be happier.",
  },
  {
    name: "Rohan Kapoor",
    role: "Student",
    quote:
      "From sports to academics, every day here is an opportunity to learn something new.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="uppercase tracking-widest text-blue-600 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Voices From Our Community
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl bg-slate-50 p-8 shadow-lg hover:shadow-2xl transition"
            >

              <FaQuoteLeft
                size={35}
                className="text-blue-600"
              />

              <p className="mt-6 leading-8 text-slate-600">
                "{item.quote}"
              </p>

              <h3 className="mt-8 text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-slate-500">
                {item.role}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}