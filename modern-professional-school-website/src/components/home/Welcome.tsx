import { Link } from "react-router-dom";
import { HiCheckCircle, HiArrowRight } from "react-icons/hi2";
import Reveal from "../ui/Reveal";
import SectionTag from "../ui/SectionTag";
import { IMAGES, SCHOOL } from "../../data/schoolData";

const POINTS = [
  "Commitment to academic excellence and discipline",
  "Innovative, CBC-aligned teaching methods",
  "Holistic development: mind, character, and talent",
  "A safe, supportive, and affordable environment",
];

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={IMAGES.welcome}
              alt="Young learners engaged in a classroom activity"
              loading="lazy"
              className="h-[420px] w-full rounded-3xl object-cover shadow-2xl sm:h-[480px]"
            />
            <div className="absolute -bottom-8 -right-6 hidden max-w-[240px] rounded-2xl bg-brand-blue p-5 text-white shadow-xl sm:block">
              <p className="font-heading text-3xl font-extrabold text-brand-yellow">8+</p>
              <p className="text-sm text-blue-100">Years nurturing bright futures in Suswa Town</p>
            </div>
            <div className="absolute -top-6 -left-6 hidden h-24 w-24 rounded-2xl border-4 border-brand-yellow sm:block" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionTag>Welcome to our school</SectionTag>
          <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Nurturing Excellence, Discipline & Innovation at {SCHOOL.shortName}
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            At {SCHOOL.name}, we believe every child carries unique potential waiting to be
            unlocked. Guided by our motto, "{SCHOOL.motto}," we are committed to providing a
            holistic education that blends strong academics, character formation, digital
            literacy, and co-curricular growth — all within a safe and caring community.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Our qualified and dedicated teachers work closely with every learner from Play-Group
            through Junior School, ensuring no child is left behind on their journey toward a
            bright, successful future.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                <HiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                {point}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-brand-navy"
          >
            Learn More About Us
            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
