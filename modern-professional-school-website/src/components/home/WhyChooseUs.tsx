import {
  HiAcademicCap,
  HiBuildingLibrary,
  HiComputerDesktop,
  HiShieldCheck,
} from "react-icons/hi2";
import { GiSoccerBall, GiLaurelsTrophy } from "react-icons/gi";
import Reveal from "../ui/Reveal";
import SectionTag from "../ui/SectionTag";
import { WHY_CHOOSE_US } from "../../data/schoolData";

const ICONS: Record<string, React.ElementType> = {
  teacher: HiAcademicCap,
  building: HiBuildingLibrary,
  computer: HiComputerDesktop,
  ball: GiSoccerBall,
  medal: GiLaurelsTrophy,
  shield: HiShieldCheck,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f5f8ff] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>Why Choose Us</SectionTag>
          <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            A School Built For Your Child's Success
          </h2>
          <p className="mt-4 text-slate-600">
            We combine qualified teaching, modern facilities, and a safe environment to give your
            child every opportunity to thrive.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = ICONS[item.icon] ?? HiAcademicCap;
            return (
              <Reveal key={item.title} delay={idx * 80}>
                <div className="hover-lift group h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-yellow group-hover:text-brand-navy">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
