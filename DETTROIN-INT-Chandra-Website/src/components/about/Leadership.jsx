import principal from "../../assets/images/image-vasant.png";

export default function Leadership() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <img
            src={principal}
            alt="Principal"
            className="
w-full
h-64
md:h-96
lg:h-[500px]
object-cover
rounded-3xl
"
          />

          <div>

            <p className="uppercase tracking-[4px] text-[#9E0E21] font-semibold">
              Leadership
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold mt-4">
              Principal's Message
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              We believe that every child possesses unique talents and
              limitless potential. Our commitment is to nurture confident,
              compassionate, and responsible individuals through a balanced
              education that values both academic excellence and personal
              growth.
            </p>

            <h3 className="mt-10 text-2xl font-bold">
              Dr. Ananya Sharma
            </h3>

            <p className="text-gray-500">
              Principal
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}