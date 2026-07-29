import { useMemo, useState } from "react";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import Lightbox from "../components/ui/Lightbox";
import { GALLERY_CATEGORIES, GALLERY_IMAGES, IMAGES } from "../data/schoolData";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHero
        image={IMAGES.heroGallery}
        breadcrumb="Gallery"
        title="Moments Worth Remembering"
        subtitle="A visual journey through classrooms, sports, events, and everyday life at our school."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filters */}
          <Reveal className="flex flex-wrap justify-center gap-3">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  activeCategory === category
                    ? "bg-brand-blue text-white shadow-md shadow-blue-200"
                    : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-brand-blue"
                }`}
              >
                {category}
              </button>
            ))}
          </Reveal>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((img, idx) => (
              <Reveal key={img.id} delay={(idx % 6) * 60}>
                <button
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative block h-72 w-full overflow-hidden rounded-2xl shadow-md"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-navy/85 via-brand-navy/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-brand-navy">
                      {img.category}
                    </span>
                    <p className="text-sm font-semibold text-white">{img.alt}</p>
                  </div>
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-brand-navy opacity-0 transition-opacity group-hover:opacity-100">
                    <HiMagnifyingGlassPlus className="h-5 w-5" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <p className="mt-16 text-center text-slate-500">No images found in this category yet.</p>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages.map((img) => ({ src: img.src, alt: img.alt }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
