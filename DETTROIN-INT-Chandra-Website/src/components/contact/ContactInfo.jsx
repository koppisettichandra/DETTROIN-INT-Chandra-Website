import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-8 gap-8">

          <div className="bg-slate-50 rounded-3xl p-8 text-center shadow">

            <FaPhoneAlt className="text-4xl text-[#9E0E21] mx-auto" />

            <h3 className="font-bold text-2xl mt-6">
              Call
            </h3>

            <p className="mt-3 text-gray-600">
              +91 98765 43210
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl p-8 text-center shadow">

            <FaEnvelope className="text-4xl text-[#9E0E21] mx-auto" />

            <h3 className="font-bold text-2xl mt-6">
              Email
            </h3>

            <p className="mt-3 text-gray-600">
              admissions@school.edu
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl p-8 text-center shadow">

            <FaMapMarkerAlt className="text-4xl text-[#9E0E21] mx-auto" />

            <h3 className="font-bold text-2xl mt-6">
              Address
            </h3>

            <p className="mt-3 text-gray-600">
              New Delhi, India
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl p-8 text-center shadow">

            <FaClock className="text-4xl text-[#9E0E21] mx-auto" />

            <h3 className="font-bold text-2xl mt-6">
              Office Hours
            </h3>

            <p className="mt-3 text-gray-600">
              Mon–Fri • 8 AM – 4 PM
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}