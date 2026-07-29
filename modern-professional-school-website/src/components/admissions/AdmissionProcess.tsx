import { HiMapPin, HiDocumentText, HiUserGroup, HiCheckBadge } from "react-icons/hi2";
import Reveal from "../ui/Reveal";
import SectionTag from "../ui/SectionTag";
import { ADMISSION_STEPS } from "../../data/schoolData";

const ICONS: Record<string, React.ElementType> = {
  tour: HiMapPin,
  form: HiDocumentText,
  handshake: HiUserGroup,
  check: HiCheckBadge,
};

export default function AdmissionProcess() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>How It Works</SectionTag>
          <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Our Simple 4-Step Admission Process
          </h2>
          <p className="mt-4 text-slate-600">
            Enrolling your child at {ADMISSION_STEPS.length > 0 ? "our school" : ""} is quick and
            straightforward. Here's what to expect.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting timeline line (desktop) */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-red lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {ADMISSION_STEPS.map((step, idx) => {
              const Icon = ICONS[step.icon] ?? HiCheckBadge;
              return (
                <Reveal key={step.step} delay={idx * 120}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-brand-blue text-white shadow-xl">
                      <Icon className="h-9 w-9" />
                      <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-xs font-extrabold text-brand-navy shadow">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-bold text-brand-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
