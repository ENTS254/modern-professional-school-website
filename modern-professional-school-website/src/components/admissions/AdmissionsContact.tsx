import { HiPhone, HiEnvelope, HiBuildingOffice2 } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "../ui/Reveal";
import { SCHOOL } from "../../data/schoolData";

export default function AdmissionsContact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center text-white">
        <Reveal>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow text-brand-navy">
            <HiBuildingOffice2 className="h-8 w-8" />
          </div>
          <h2 className="mt-6 font-heading text-3xl font-extrabold sm:text-4xl">Admissions Office</h2>
          <p className="mt-3 text-blue-100">
            Have questions about enrollment? Our admissions team is ready to help you every step
            of the way.
          </p>

          <a
            href={`tel:${SCHOOL.phoneRaw}`}
            className="mt-8 inline-block font-heading text-3xl font-extrabold tracking-wide text-brand-yellow transition hover:text-yellow-300 sm:text-4xl"
          >
            {SCHOOL.phone}
          </a>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${SCHOOL.phoneRaw}`}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:bg-red-600 sm:w-auto"
            >
              <HiPhone className="h-5 w-5" /> Call Now
            </a>
            <a
              href={SCHOOL.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:bg-green-600 sm:w-auto"
            >
              <FaWhatsapp className="h-5 w-5" /> WhatsApp Us
            </a>
            <a
              href={`mailto:${SCHOOL.email}`}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold text-white ring-1 ring-white/30 transition hover:bg-white hover:text-brand-navy sm:w-auto"
            >
              <HiEnvelope className="h-5 w-5" /> Email Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
