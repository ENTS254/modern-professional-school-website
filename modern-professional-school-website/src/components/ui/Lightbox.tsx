import { useEffect, useCallback } from "react";
import { HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const total = images.length;

  const goPrev = useCallback(() => onNavigate((index - 1 + total) % total), [index, total, onNavigate]);
  const goNext = useCallback(() => onNavigate((index + 1) % total), [index, total, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [goPrev, goNext, onClose]);

  const current = images[index];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-red"
      >
        <HiXMark className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-navy sm:left-6"
      >
        <HiChevronLeft className="h-7 w-7" />
      </button>

      <figure
        className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={current.src} alt={current.alt} className="max-h-[85vh] w-full object-contain" />
        <figcaption className="bg-black/70 px-4 py-3 text-center text-sm text-white">
          {current.alt} — <span className="text-brand-yellow">{index + 1}</span> / {total}
        </figcaption>
      </figure>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next image"
        className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-navy sm:right-6"
      >
        <HiChevronRight className="h-7 w-7" />
      </button>
    </div>
  );
}
