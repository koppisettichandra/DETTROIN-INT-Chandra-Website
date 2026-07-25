import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[4px] text-[#9E0E21] font-semibold">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Send Us A Message
          </h2>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-10 space-y-6"
        >

          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#9E0E21]"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#9E0E21]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#9E0E21]"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#9E0E21]"
          />

          <button
            className="bg-[#9E0E21] hover:bg-[#7d0b1a] text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 font-semibold">
              ✅ Thank you! Your message has been received.
            </p>
          )}

        </form>

      </div>
    </section>
  );
}