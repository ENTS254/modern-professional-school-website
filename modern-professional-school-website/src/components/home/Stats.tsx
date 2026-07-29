import { HiUserGroup, HiAcademicCap, HiCalendarDays, HiTrophy } from "react-icons/hi2";
import Counter from "../ui/Counter";
import Reveal from "../ui/Reveal";
import { IMAGES, STATS } from "../../data/schoolData";

const ICONS = [HiUserGroup, HiAcademicCap, HiCalendarDays, HiTrophy];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-24">
      <img
        src={IMAGES.aboutMission}
        alt="Teacher and students in classroom"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-navy/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-14 max-w-xl text-center text-white">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">Our Impact in Numbers</h2>
          <p className="mt-3 text-blue-100">
            A growing community proud of its academic achievement and student success.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat, idx) => {
            const Icon = ICONS[idx];
            return (
              <Reveal key={stat.label} delay={idx * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white backdrop-blur">
                  <Icon className="mx-auto h-9 w-9 text-brand-yellow" />
                  <p className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-blue-100">{stat.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
