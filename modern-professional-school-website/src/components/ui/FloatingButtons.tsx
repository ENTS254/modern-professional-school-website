import { FaWhatsapp } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { SCHOOL } from "../../data/schoolData";

/**
 * Persistent floating call + WhatsApp buttons for quick mobile access
 * to the admissions office.
 */
export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      <a
        href={SCHOOL.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-green-500 p-3.5 text-white shadow-xl shadow-green-500/40 transition hover:scale-110"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
      <a
        href={`tel:${SCHOOL.phoneRaw}`}
        aria-label="Call the school"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-brand-red p-3.5 text-white shadow-xl shadow-red-500/40 transition hover:scale-110 animate-pulse-soft"
      >
        <HiPhone className="h-6 w-6" />
      </a>
    </div>
  );
}
