export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[4px] text-[#9E0E21] font-semibold">
            Visit Us
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Find Our Campus
          </h2>

        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">

          <iframe
            title="School Location"
            src="https://www.google.com/maps?q=New+Delhi&output=embed"
            width="100%"
            height="500"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
}