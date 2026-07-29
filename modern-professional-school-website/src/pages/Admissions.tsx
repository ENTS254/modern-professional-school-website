import { Link } from "react-router-dom";
import { HiArrowRight, HiPhone } from "react-icons/hi2";
import { IMAGES, SCHOOL } from "../data/schoolData";
import Reveal from "../components/ui/Reveal";
import AdmissionProcess from "../components/admissions/AdmissionProcess";
import RequiredDocuments from "../components/admissions/RequiredDocuments";
import AdmissionForm from "../components/admissions/AdmissionForm";
import AdmissionsContact from "../components/admissions/AdmissionsContact";

export default function Admissions() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <img
          src={IMAGES.heroAdmissions}
          alt="Children happily playing at school"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 img-overlay-dark" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-yellow">
            Admissions
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Ready to Enroll?
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-lg font-semibold text-brand-yellow">
            We hope to meet you soon.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-50/90">
            Join us now and unlock new opportunities for learning, growth, and success. Don't miss
            out — secure your spot today and start your journey at {SCHOOL.shortName}!
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#apply"
              className="flex items-center gap-2 rounded-full bg-brand-red px-9 py-4 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-red-600"
            >
              Apply Now <HiArrowRight />
            </a>
            <a
              href={`tel:${SCHOOL.phoneRaw}`}
              className="flex items-center gap-2 rounded-full bg-white/10 px-9 py-4 text-base font-bold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white hover:text-brand-navy"
            >
              <HiPhone className="h-5 w-5" /> {SCHOOL.phone}
            </a>
          </div>
        </div>
      </section>

      <AdmissionProcess />
      <RequiredDocuments />

      {/* Application form section */}
      <section className="relative overflow-hidden bg-[#f5f8ff] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-brand-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" /> Apply Online
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              Online Admissions Application Form
            </h2>
            <p className="mt-4 text-slate-600">
              Fill in the form below to begin your child's application. Our admissions team will
              reach out to guide you through the next steps.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <AdmissionForm />
          </Reveal>
        </div>
      </section>

      <AdmissionsContact />

      {/* Closing CTA */}
      <section className="bg-white py-16 text-center">
        <Reveal>
          <p className="mx-auto max-w-xl text-slate-600">
            Prefer a more detailed look at what we offer before applying?
          </p>
          <Link
            to="/academics"
            className="mt-5 inline-flex items-center gap-2 font-bold text-brand-blue hover:text-brand-navy"
          >
            Explore Our Academic Programs <HiArrowRight />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
