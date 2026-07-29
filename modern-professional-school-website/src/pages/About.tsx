import { HiCheckCircle, HiEye, HiFlag, HiHeart } from "react-icons/hi2";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionTag from "../components/ui/SectionTag";
import { IMAGES, SCHOOL } from "../data/schoolData";

const VALUES = [
  { title: "Excellence", desc: "We pursue the highest standard in academics, character, and talent development.", icon: HiFlag },
  { title: "Integrity", desc: "We nurture honesty, discipline, and strong moral values in every learner.", icon: HiHeart },
  { title: "Innovation", desc: "We embrace modern, CBC-aligned teaching methods and digital learning tools.", icon: HiEye },
  { title: "Community", desc: "We build a warm, inclusive family that supports every child's growth.", icon: HiCheckCircle },
];

const TEAM = [
  { name: "Mrs. Naisiae Ole Sein", role: "Head Teacher" },
  { name: "Mr. Daniel Mwangi", role: "Deputy Head Teacher" },
  { name: "Ms. Faith Nasirian", role: "Director of Studies" },
  { name: "Mr. James Kiplangat", role: "Games & Co-curricular Coordinator" },
];

export default function About() {
  return (
    <>
      <PageHero
        image={IMAGES.heroAbout}
        breadcrumb="About Us"
        title={`About ${SCHOOL.name}`}
        subtitle={`"${SCHOOL.motto}" — discover our story, mission, and the people behind our success.`}
      />

      {/* Our Story */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <SectionTag>Our Story</SectionTag>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              A Journey Rooted in Community & Purpose
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              {SCHOOL.name} was founded in Suswa Town with a simple but powerful conviction: every
              child, regardless of background, deserves access to quality, affordable education.
              What began as a small community initiative has grown into a trusted centre of
              learning for Play-Group through Junior School learners.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Today, we continue to grow our facilities — including a new computer laboratory —
              while staying true to our founding motto: "{SCHOOL.motto}." Every sunrise brings a
              renewed commitment to unlocking the potential within each learner who walks through
              our doors.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-blue-50 p-5">
                <p className="font-heading text-3xl font-extrabold text-brand-blue">2018</p>
                <p className="text-sm text-slate-600">Year Founded</p>
              </div>
              <div className="rounded-2xl bg-yellow-50 p-5">
                <p className="font-heading text-3xl font-extrabold text-brand-red">350+</p>
                <p className="text-sm text-slate-600">Learners Enrolled</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={IMAGES.aboutStory}
              alt="Students engaged in reading at Enkakenya Ng'ejuk Testimony School"
              loading="lazy"
              className="h-[420px] w-full rounded-3xl object-cover shadow-2xl sm:h-[500px]"
            />
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <img
          src={IMAGES.aboutMission}
          alt="Teacher engaging with students"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 img-overlay-blue" />
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-white/95 p-9 shadow-xl backdrop-blur">
              <h3 className="font-heading text-2xl font-extrabold text-brand-navy">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                To provide holistic, quality, and affordable education that nurtures academic
                excellence, strong character, and lifelong skills — preparing every learner to
                thrive in a changing world.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-white/95 p-9 shadow-xl backdrop-blur">
              <h3 className="font-heading text-2xl font-extrabold text-brand-navy">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                To be a leading centre of academic and moral excellence in the region, raising
                confident, disciplined, and innovative leaders of tomorrow.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#f5f8ff] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTag>Our Core Values</SectionTag>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              What Guides Everything We Do
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, idx) => (
              <Reveal key={v.title} delay={idx * 90}>
                <div className="hover-lift h-full rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-100">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow/20 text-brand-navy">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-brand-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTag>Our Team</SectionTag>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              Meet Our Dedicated Leadership
            </h2>
            <p className="mt-4 text-slate-600">
              A team of passionate, qualified educators committed to every learner's success.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, idx) => (
              <Reveal key={member.name} delay={idx * 90}>
                <div className="hover-lift overflow-hidden rounded-2xl bg-[#f5f8ff] text-center shadow-sm ring-1 ring-slate-100">
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-brand-blue to-brand-navy text-4xl font-heading font-extrabold text-white">
                    {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-brand-navy">{member.name}</h3>
                    <p className="mt-1 text-sm text-brand-red">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
