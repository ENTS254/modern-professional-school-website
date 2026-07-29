import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa";
import Reveal from "../ui/Reveal";
import SectionTag from "../ui/SectionTag";
import { TESTIMONIALS } from "../../data/schoolData";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const goNext = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            What Parents & Students Say
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg ring-1 ring-slate-100 sm:p-12">
            <FaQuoteLeft className="h-10 w-10 text-brand-yellow" />
            <p className="mt-6 min-h-[110px] text-lg font-medium leading-relaxed text-slate-700 sm:text-xl">
              "{TESTIMONIALS[active].quote}"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue font-heading text-lg font-bold text-white">
                {TESTIMONIALS[active].name.charAt(0)}
              </div>
              <div>
                <p className="font-heading font-bold text-brand-navy">{TESTIMONIALS[active].name}</p>
                <p className="text-sm text-slate-500">{TESTIMONIALS[active].role}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              <HiChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === active ? "w-8 bg-brand-red" : "w-2.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              <HiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
