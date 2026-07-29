import { useState } from "react";
import { HiCalendarDays, HiArrowRight, HiXMark } from "react-icons/hi2";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { IMAGES, NEWS } from "../data/schoolData";

export default function News() {
  const [openArticle, setOpenArticle] = useState<(typeof NEWS)[number] | null>(null);

  return (
    <>
      <PageHero
        image={IMAGES.heroNews}
        breadcrumb="News & Events"
        title="News & Announcements"
        subtitle="Stay up to date with the latest happenings, achievements, and upcoming events at our school."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {NEWS.map((item, idx) => (
              <Reveal key={item.id} delay={(idx % 3) * 100}>
                <article className="hover-lift flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-brand-navy">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                      <HiCalendarDays className="h-4 w-4" /> {item.date}
                    </p>
                    <h3 className="mt-3 font-heading text-lg font-bold text-brand-navy">{item.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{item.excerpt}</p>
                    <button
                      onClick={() => setOpenArticle(item)}
                      className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-bold text-brand-red hover:text-red-700"
                    >
                      Read More <HiArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {openArticle && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpenArticle(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenArticle(null)}
              aria-label="Close article"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow"
            >
              <HiXMark className="h-5 w-5" />
            </button>
            <img src={openArticle.image} alt={openArticle.title} className="h-64 w-full object-cover" />
            <div className="p-7">
              <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-brand-navy">
                {openArticle.category}
              </span>
              <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <HiCalendarDays className="h-4 w-4" /> {openArticle.date}
              </p>
              <h2 className="mt-2 font-heading text-2xl font-extrabold text-brand-navy">
                {openArticle.title}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">{openArticle.excerpt}</p>
              <p className="mt-4 leading-relaxed text-slate-600">
                For more information about this announcement, please contact our school office or
                visit us in person at Suswa Town, opposite Healing River Church.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
