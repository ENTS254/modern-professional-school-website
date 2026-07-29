import { useState, type FormEvent } from "react";
import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiClock,
  HiPaperAirplane,
  HiCheckCircle,
} from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { IMAGES, SCHOOL } from "../data/schoolData";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL: ContactForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(INITIAL);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const newErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email.";
    if (!form.message.trim()) newErrors.message = "Please enter a message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm(INITIAL);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <PageHero
        image={IMAGES.heroContact}
        breadcrumb="Contact Us"
        title="We'd Love to Hear From You"
        subtitle="Reach out with any questions about admissions, academics, or general school inquiries."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-extrabold text-brand-navy">Get in Touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Our team is available to answer your questions during office hours. Feel free to
              call, message, or visit us in person.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue">
                  <HiMapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading font-bold text-brand-navy">School Address</p>
                  <p className="mt-1 text-sm text-slate-600">{SCHOOL.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue">
                  <HiPhone className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading font-bold text-brand-navy">Phone Number</p>
                  <a href={`tel:${SCHOOL.phoneRaw}`} className="mt-1 block text-sm text-slate-600 hover:text-brand-blue">
                    {SCHOOL.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue">
                  <HiEnvelope className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading font-bold text-brand-navy">Email Address</p>
                  <a href={`mailto:${SCHOOL.email}`} className="mt-1 block text-sm text-slate-600 hover:text-brand-blue">
                    {SCHOOL.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue">
                  <HiClock className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading font-bold text-brand-navy">Office Hours</p>
                  <p className="mt-1 text-sm text-slate-600">{SCHOOL.officeHours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {[
                { icon: FaFacebookF, href: SCHOOL.socials.facebook, label: "Facebook" },
                { icon: FaInstagram, href: SCHOOL.socials.instagram, label: "Instagram" },
                { icon: FaTwitter, href: SCHOOL.socials.twitter, label: "Twitter" },
                { icon: FaYoutube, href: SCHOOL.socials.youtube, label: "YouTube" },
                { icon: FaWhatsapp, href: SCHOOL.whatsapp, label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-white transition hover:bg-brand-blue"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={100} className="lg:col-span-3">
            <div className="rounded-3xl bg-[#f5f8ff] p-7 shadow-sm ring-1 ring-slate-100 sm:p-9">
              {sent && (
                <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 p-4 text-green-800 ring-1 ring-green-200">
                  <HiCheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-sm font-semibold">
                    Thank you! Your message has been sent. We'll respond as soon as possible.
                  </p>
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-brand-red">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Email Address <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-brand-red">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="e.g. 0712 345 678"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Message <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="Write your message here..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-brand-red">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-brand-navy sm:w-auto"
                >
                  <HiPaperAirplane className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-[#f5f8ff] pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-100">
              <div className="relative h-[420px] w-full bg-blue-100">
                <iframe
                  title="School location map"
                  src="https://maps.google.com/maps?q=Suswa%2C%20Kenya&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-white px-4 py-3 shadow-lg">
                  <p className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                    <HiMapPin className="h-4 w-4 text-brand-red" /> {SCHOOL.address}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
