import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

import { news } from "../../data/news";

export default function News() {
  return (
    <section className="py-24 bg-slate-50">

      <Container>

        <SectionTitle
          eyebrow="Latest Updates"
          title="News & Events"
          subtitle="Stay informed about the latest happenings at our school."
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {news.map((item) => (

            <Card key={item.title}>

              <span className="text-sm text-[#9E0E21] font-semibold">

                {item.date}

              </span>

              <h3 className="text-2xl font-bold mt-4">

                {item.title}

              </h3>

              <p className="text-gray-600 mt-5">

                {item.description}

              </p>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}