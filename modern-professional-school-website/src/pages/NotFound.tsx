import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { SCHOOL } from "../data/schoolData";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[#f5f8ff] px-6 text-center">
      <img src={SCHOOL.logo} alt={`${SCHOOL.name} logo`} className="h-24 w-24 rounded-full object-contain" />
      <p className="mt-6 font-heading text-7xl font-extrabold text-brand-blue">404</p>
      <h1 className="mt-3 font-heading text-2xl font-bold text-brand-navy">Page Not Found</h1>
      <p className="mt-2 max-w-md text-slate-600">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="mt-8 flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-brand-navy"
      >
        <HiHome className="h-5 w-5" /> Back to Home
      </Link>
    </section>
  );
}
