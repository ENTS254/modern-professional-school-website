import { Link } from "react-router-dom";
import { HiArrowRight, HiPhone } from "react-icons/hi2";
import { IMAGES, SCHOOL } from "../../data/schoolData";
import Reveal from "../ui/Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <img
        src={IMAGES.ctaBg}
        alt="Happy students at school"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-blue/90 to-brand-navy/95" />

      <Reveal className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <span className="inline-block rounded-full bg-brand-yellow px-5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-navy">
          Admissions Open
        </span>
        <h2 className="mt-6 font-heading text-3xl font-extrabold sm:text-4xl md:text-5xl">
          Give Your Child the Best Start Today
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-blue-50/90">
          Spaces are filling fast for Play-Group through Grade 2 at {SCHOOL.shortName}. Don't miss
          the opportunity to enroll your child in a nurturing, quality-driven learning environment.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/admissions#apply"
            className="group flex items-center gap-2 rounded-full bg-brand-red px-9 py-4 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-red-600"
          >
            Apply Today
            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${SCHOOL.phoneRaw}`}
            className="flex items-center gap-2 rounded-full bg-white/10 px-9 py-4 text-base font-bold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white hover:text-brand-navy"
          >
            <HiPhone className="h-5 w-5" />
            {SCHOOL.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
