import { HiMusicalNote, HiPaintBrush, HiUserGroup, HiSparkles } from "react-icons/hi2";
import { GiSoccerBall } from "react-icons/gi";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionTag from "../components/ui/SectionTag";
import { IMAGES, SCHOOL } from "../data/schoolData";

const ACTIVITIES = [
  { title: "Football & Athletics", desc: "Weekly training and inter-class competitions building teamwork and fitness.", icon: GiSoccerBall, image: IMAGES.sports },
  { title: "Music & Drama Club", desc: "Learners express creativity through song, dance, and theatrical performances.", icon: HiMusicalNote, image: "https://images.pexels.com/photos/12374479/pexels-photo-12374479.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000" },
  { title: "Art & Creativity", desc: "Painting, drawing, and craft sessions that nurture imagination and fine motor skills.", icon: HiPaintBrush, image: "https://images.pexels.com/photos/34708262/pexels-photo-34708262.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000" },
  { title: "Clubs & Societies", desc: "Debate, environmental, and leadership clubs that build confidence and civic values.", icon: HiUserGroup, image: "https://images.pexels.com/photos/35250395/pexels-photo-35250395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000" },
];

const EVENTS = [
  { title: "Annual Sports Day", desc: "A thrilling day of athletics and games bringing the whole community together." },
  { title: "Cultural Day", desc: "Celebrating Kenya's rich heritage through traditional song, dance and attire." },
  { title: "Graduation Ceremony", desc: "Honoring our PP2 and Grade 6 learners as they transition to the next milestone." },
  { title: "Parents' Meet & Greet", desc: "An open day for parents to tour the school and connect with teachers." },
];

export default function SchoolLife() {
  return (
    <>
      <PageHero
        image={IMAGES.heroSchoolLife}
        breadcrumb="School Life"
        title="Life at Our School"
        subtitle="Beyond academics — a vibrant community of sports, arts, friendship, and unforgettable memories."
      />

      {/* Intro */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <SectionTag>Our Community</SectionTag>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              A Well-Rounded School Experience
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              At {SCHOOL.shortName}, learning extends beyond the classroom. Our co-curricular
              programme nurtures talent, builds friendships, and instills discipline, teamwork, and
              confidence in every learner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-[#f5f8ff] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {ACTIVITIES.map((activity, idx) => (
              <Reveal key={activity.title} delay={idx * 100}>
                <div className="hover-lift group relative h-72 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-brand-navy">
                      <activity.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-3 font-heading text-xl font-bold">{activity.title}</h3>
                    <p className="mt-1.5 text-sm text-blue-50/90">{activity.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Buses / transport strip */}
      <section className="relative overflow-hidden py-24">
        <img
          src={IMAGES.schoolBus}
          alt="School bus for safe transport"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 img-overlay-blue" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <Reveal>
            <HiSparkles className="mx-auto h-10 w-10 text-brand-yellow" />
            <h2 className="mt-4 font-heading text-3xl font-extrabold sm:text-4xl">
              Safe & Reliable School Transport
            </h2>
            <p className="mt-4 text-blue-50/90">
              We provide dependable transportation so parents have peace of mind while learners
              travel safely to and from school every day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Yearly events */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTag>Annual Highlights</SectionTag>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              Celebrations & Milestones
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {EVENTS.map((event, idx) => (
              <Reveal key={event.title} delay={idx * 90}>
                <div className="hover-lift h-full rounded-2xl border-t-4 border-brand-yellow bg-[#f5f8ff] p-7 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-brand-navy">{event.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{event.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
