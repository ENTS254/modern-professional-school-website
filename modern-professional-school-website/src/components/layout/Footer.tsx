import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiClock,
  HiArrowRight,
} from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SCHOOL } from "../../data/schoolData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-brand-navy text-blue-100">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white/5 p-6 sm:p-8 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                Subscribe to our Newsletter
              </h3>
              <p className="mt-1 text-sm text-blue-200">
                Get the latest school news, events, and admissions updates straight to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-blue-200 focus:border-brand-yellow focus:outline-none"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-sm font-bold text-brand-navy transition hover:bg-yellow-400"
              >
                Subscribe <HiArrowRight />
              </button>
            </form>
          </div>
          {subscribed && (
            <p className="mt-3 text-center text-sm font-semibold text-brand-yellow">
              🎉 Thank you for subscribing! Watch your inbox for updates.
            </p>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div>
          <div className="flex items-center gap-3">
            <img src={SCHOOL.logo} alt={`${SCHOOL.name} logo`} className="h-14 w-14 rounded-full bg-white object-contain p-0.5" />
            <div>
              <p className="font-heading text-base font-extrabold text-white">Enkakenya Ng'ejuk</p>
              <p className="font-heading text-sm font-bold text-brand-yellow">Testimony School</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-blue-200">
            "{SCHOOL.motto}" — Shaping tomorrow's leaders through quality, faith-driven, and holistic
            education in Suswa Town.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: FaFacebookF, href: SCHOOL.socials.facebook, label: "Facebook" },
              { icon: FaInstagram, href: SCHOOL.socials.instagram, label: "Instagram" },
              { icon: FaTwitter, href: SCHOOL.socials.twitter, label: "Twitter" },
              { icon: FaYoutube, href: SCHOOL.socials.youtube, label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-navy"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-base font-bold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { label: "About Us", to: "/about" },
              { label: "Academics", to: "/academics" },
              { label: "School Life", to: "/school-life" },
              { label: "Gallery", to: "/gallery" },
              { label: "News & Events", to: "/news" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-blue-200 transition hover:text-brand-yellow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Admissions */}
        <div>
          <h4 className="font-heading text-base font-bold text-white">Admissions</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { label: "Admissions Overview", to: "/admissions" },
              { label: "Admission Process", to: "/admissions#process" },
              { label: "Required Documents", to: "/admissions#documents" },
              { label: "Apply Online", to: "/admissions#apply" },
              { label: "Contact Admissions", to: "/admissions#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.to} className="text-blue-200 transition hover:text-brand-yellow">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-base font-bold text-white">Contact Details</h4>
          <ul className="mt-4 space-y-3 text-sm text-blue-200">
            <li className="flex items-start gap-2.5">
              <HiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
              {SCHOOL.address}
            </li>
            <li className="flex items-center gap-2.5">
              <HiPhone className="h-4 w-4 shrink-0 text-brand-yellow" />
              <a href={`tel:${SCHOOL.phoneRaw}`} className="hover:text-white">
                {SCHOOL.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <FaWhatsapp className="h-4 w-4 shrink-0 text-brand-yellow" />
              <a href={SCHOOL.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <HiEnvelope className="h-4 w-4 shrink-0 text-brand-yellow" />
              <a href={`mailto:${SCHOOL.email}`} className="hover:text-white">
                {SCHOOL.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <HiClock className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
              {SCHOOL.officeHours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="px-6 text-center text-xs text-blue-300">
          © {new Date().getFullYear()} {SCHOOL.name}. All rights reserved. Built with care for our
          learners' future.
        </p>
      </div>
    </footer>
  );
}
