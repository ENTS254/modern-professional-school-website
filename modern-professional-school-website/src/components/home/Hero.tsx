import { Link } from "react-router-dom";
import { HiArrowRight, HiPlayCircle } from "react-icons/hi2";
import { IMAGES, SCHOOL } from "../../data/schoolData";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <img
        src={IMAGES.heroHome}
        alt="Students learning together in a bright classroom"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 img-overlay-dark" />
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      {/* decorative accents */}
      <div className="pointer-events-none absolute -top-10 right-10 h-64 w-64 rounded-full bg-brand-yellow/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-yellow ring-1 ring-white/20 backdrop-blur">
            {SCHOOL.name}
          </span>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Shaping Tomorrow's <span className="text-gradient-gold">Leaders</span> Through Quality
            Education
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-50/90">
            Give your child a nurturing, disciplined, and innovative learning environment. Enroll
            today at {SCHOOL.shortName} — "{SCHOOL.motto}."
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/admissions#apply"
              className="group flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-900/30 transition-all hover:scale-105 hover:bg-red-600"
            >
              Apply Now
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/school-life"
              className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-bold text-white ring-1 ring-white/40 backdrop-blur transition-all hover:bg-white hover:text-brand-navy"
            >
              <HiPlayCircle className="h-6 w-6" />
              Take a Tour
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-white">
            {[
              ["350+", "Happy Students"],
              ["22+", "Qualified Teachers"],
              ["98%", "Graduation Rate"],
            ].map(([num, label]) => (
              <div key={label} className="border-l-2 border-brand-yellow pl-4">
                <p className="font-heading text-2xl font-extrabold sm:text-3xl">{num}</p>
                <p className="text-xs text-blue-100/80 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
