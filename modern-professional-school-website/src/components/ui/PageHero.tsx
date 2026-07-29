import type { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  children?: ReactNode;
  small?: boolean;
}

/**
 * Generic hero/banner used at the top of interior pages, with a large
 * background image and a dark-blue overlay so text remains readable.
 */
export default function PageHero({ image, title, subtitle, breadcrumb, children, small }: PageHeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        small ? "min-h-[42vh]" : "min-h-[56vh]"
      }`}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 img-overlay-blue" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.35),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center text-white">
        {breadcrumb && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-yellow">
            {breadcrumb}
          </p>
        )}
        <h1 className="font-heading text-4xl font-extrabold leading-tight drop-shadow-lg sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base text-blue-50/90 sm:text-lg">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
