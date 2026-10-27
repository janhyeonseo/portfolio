import type { ReactNode } from "react";
import type { SectionId } from "@/types/portfolio";

interface SectionProps {
  id: SectionId;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border py-16 sm:scroll-mt-20 sm:py-20">
      <div className="mx-auto max-w-4xl px-5">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
