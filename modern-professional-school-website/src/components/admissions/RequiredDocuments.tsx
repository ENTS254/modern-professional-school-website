import { HiIdentification, HiCamera, HiHeart, HiClipboardDocumentCheck } from "react-icons/hi2";
import Reveal from "../ui/Reveal";
import SectionTag from "../ui/SectionTag";
import { REQUIRED_DOCUMENTS } from "../../data/schoolData";

const ICONS: Record<string, React.ElementType> = {
  certificate: HiIdentification,
  photo: HiCamera,
  medical: HiHeart,
  form: HiClipboardDocumentCheck,
};

export default function RequiredDocuments() {
  return (
    <section id="documents" className="scroll-mt-24 bg-[#f5f8ff] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>Enrollment Checklist</SectionTag>
          <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Required Enrollment Documents
          </h2>
          <p className="mt-4 text-slate-600">
            Enroll at our school for a nurturing environment, dedicated educators, and a strong
            focus on academic excellence. Prepare your child for a successful future with us.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {REQUIRED_DOCUMENTS.map((doc, idx) => {
            const Icon = ICONS[doc.icon] ?? HiClipboardDocumentCheck;
            return (
              <Reveal key={doc.title} delay={idx * 90}>
                <div className="hover-lift flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-heading text-base font-bold text-brand-navy">{doc.title}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
