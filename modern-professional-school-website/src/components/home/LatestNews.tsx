import { Link } from "react-router-dom";
import { HiArrowRight, HiCalendarDays } from "react-icons/hi2";
import Reveal from "../ui/Reveal";
import SectionTag from "../ui/SectionTag";
import { NEWS } from "../../data/schoolData";

export default function LatestNews() {
  const latest = NEWS.slice(0, 3);

  return (
    <section className="bg-[#f5f8ff] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <SectionTag>Latest News</SectionTag>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              School Announcements & Updates
            </h2>
          </div>
          <Link
            to="/news"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-brand-blue px-6 py-3 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            View All News
            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {latest.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 100}>
              <Link
                to="/news"
                className="hover-lift group block h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-brand-navy">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    <HiCalendarDays className="h-4 w-4" /> {item.date}
                  </p>
                  <h3 className="mt-3 font-heading text-lg font-bold text-brand-navy group-hover:text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{item.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-red">
                    Read More <HiArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
