import { HiBeaker, HiBookOpen, HiComputerDesktop, HiTruck } from "react-icons/hi2";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionTag from "../components/ui/SectionTag";
import { ACADEMIC_PROGRAMS, FACILITIES, IMAGES, SCHOOL } from "../data/schoolData";

const FACILITY_ICONS = [HiBeaker, HiComputerDesktop, HiBookOpen, HiTruck];

export default function Academics() {
  return (
    <>
      <PageHero
        image={IMAGES.heroAcademics}
        breadcrumb="Academics"
        title="Our Academic Programs"
        subtitle="A Competency-Based Curriculum (CBC) designed to develop confident, well-rounded learners at every stage."
      />

      {/* Curriculum overview */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTag>Our Curriculum</SectionTag>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              A Learning Journey for Every Stage
            </h2>
            <p className="mt-4 text-slate-600">
              From Play-Group to Junior School, {SCHOOL.shortName} follows Kenya's Competency-Based
              Curriculum, blending academics, life skills, creativity, and values.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {ACADEMIC_PROGRAMS.map((program, idx) => (
              <Reveal key={program.title} delay={idx * 100}>
                <div className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 sm:flex-row">
                  <div className="h-52 w-full overflow-hidden sm:h-auto sm:w-2/5">
                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-7">
                    <h3 className="font-heading text-lg font-bold text-brand-navy">{program.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{program.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-[#f5f8ff] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTag>Our Facilities</SectionTag>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              Modern Facilities That Support Learning
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {FACILITIES.map((facility, idx) => {
              const Icon = FACILITY_ICONS[idx] ?? HiBeaker;
              return (
                <Reveal key={facility.title} delay={idx * 90}>
                  <div className="hover-lift group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brand-navy/20" />
                      <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-brand-navy shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-brand-navy">{facility.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{facility.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <img
              src={IMAGES.scienceLab}
              alt="Students conducting a science experiment"
              loading="lazy"
              className="h-[420px] w-full rounded-3xl object-cover shadow-2xl"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionTag>Our Teaching Approach</SectionTag>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              Hands-On, Learner-Centered Education
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Our teachers use interactive, hands-on methods that encourage curiosity and critical
              thinking. Small class sizes ensure personalized attention, while regular assessments
              track each learner's growth and celebrate their progress.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Individualized attention with small class sizes",
                "Continuous assessment aligned with CBC standards",
                "Integration of digital literacy from an early age",
                "Strong emphasis on reading, numeracy, and life skills",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
