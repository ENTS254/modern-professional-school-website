import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiBars3, HiXMark, HiChevronDown, HiPhone } from "react-icons/hi2";
import { SCHOOL } from "../../data/schoolData";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics" },
  {
    label: "Admissions",
    to: "/admissions",
    dropdown: [
      { label: "Admissions Overview", to: "/admissions" },
      { label: "Admission Process", to: "/admissions#process" },
      { label: "Required Documents", to: "/admissions#documents" },
      { label: "Apply Online", to: "/admissions#apply" },
    ],
  },
  { label: "School Life", to: "/school-life" },
  { label: "Gallery", to: "/gallery" },
  { label: "News & Events", to: "/news" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAdmissionsOpen, setMobileAdmissionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileAdmissionsOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/97 shadow-lg backdrop-blur" : "bg-white/90 backdrop-blur"
      }`}
    >
      {/* Top strip */}
      <div className="hidden bg-brand-navy text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <p className="font-medium tracking-wide">{SCHOOL.tagline}</p>
          <a
            href={`tel:${SCHOOL.phoneRaw}`}
            className="flex items-center gap-1.5 font-semibold text-brand-yellow hover:text-white"
          >
            <HiPhone className="h-3.5 w-3.5" /> {SCHOOL.phone}
          </a>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={SCHOOL.logo}
            alt={`${SCHOOL.name} logo`}
            className="h-14 w-14 rounded-full object-contain drop-shadow"
          />
          <div className="leading-tight">
            <p className="font-heading text-base font-extrabold text-brand-navy sm:text-lg">
              Enkakenya Ng'ejuk
            </p>
            <p className="font-heading text-sm font-bold text-brand-blue-light sm:text-base">
              Testimony School
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="group relative">
              {link.dropdown ? (
                <>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                        isActive ? "text-brand-blue" : "text-slate-700 hover:text-brand-blue"
                      }`
                    }
                  >
                    {link.label}
                    <HiChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </NavLink>
                  <div className="invisible absolute left-0 top-full z-20 w-64 translate-y-2 rounded-xl border border-slate-100 bg-white p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.to}
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-brand-blue"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive ? "text-brand-blue" : "text-slate-700 hover:text-brand-blue"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/admissions#apply"
            className="rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-red-200 transition-all hover:scale-105 hover:bg-red-600"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-brand-navy lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <HiXMark className="h-7 w-7" /> : <HiBars3 className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-slate-100 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.dropdown ? (
                <div>
                  <button
                    className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm font-semibold text-slate-700"
                    onClick={() => setMobileAdmissionsOpen((v) => !v)}
                  >
                    {link.label}
                    <HiChevronDown
                      className={`h-4 w-4 transition-transform ${mobileAdmissionsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileAdmissionsOpen && (
                    <div className="ml-3 flex flex-col gap-1 border-l-2 border-brand-yellow pl-3">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.to}
                          className="rounded-lg px-2 py-2 text-sm font-medium text-slate-600 hover:text-brand-blue"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-2 py-2.5 text-sm font-semibold ${
                      isActive ? "text-brand-blue" : "text-slate-700"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/admissions#apply"
              className="block rounded-full bg-brand-red px-6 py-3 text-center text-sm font-bold text-white"
            >
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
