const stats = [
  { number: "1500+", label: "Students" },
  { number: "120+", label: "Faculty" },
  { number: "25+", label: "Years of Excellence" },
  { number: "98%", label: "Success Rate" },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-8 gap-8">
        {stats.map((item) => (
          <div
            key={item.label}
            className="text-center p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-4xl font-bold text-blue-600">{item.number}</h2>
            <p className="mt-2 text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}