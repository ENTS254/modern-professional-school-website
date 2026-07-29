import type { ReactNode } from "react";

export default function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-brand-blue">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
      {children}
    </span>
  );
}
