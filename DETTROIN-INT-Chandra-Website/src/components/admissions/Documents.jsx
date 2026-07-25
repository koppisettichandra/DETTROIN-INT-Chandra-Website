import { FaCheckCircle } from "react-icons/fa";

const docs = [
  "Birth Certificate",
  "Previous Academic Records",
  "Passport-size Photographs",
  "Government-issued ID",
  "Transfer Certificate (if applicable)",
  "Medical Certificate",
];

export default function Documents() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#9E0E21] font-semibold">
            Required Documents
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Keep These Ready
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          {docs.map((doc) => (

            <div
              key={doc}
              className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow"
            >

              <FaCheckCircle className="text-[#9E0E21] text-2xl" />

              <span className="font-medium">

                {doc}

              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}