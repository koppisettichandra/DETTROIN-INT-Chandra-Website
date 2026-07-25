import campus from "../../assets/images/image-vasant.png";

export default function Story() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <img
            src={campus}
            alt="Campus"
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
              Our Story
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bold mt-4">
              A Legacy of Learning
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              For over two decades, our school has been committed to nurturing
              curious minds, developing confident leaders, and preparing
              students to thrive in an ever-changing world.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Through innovative teaching methods, dedicated educators, and a
              vibrant learning environment, we empower every student to achieve
              academic excellence while growing into responsible global
              citizens.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}