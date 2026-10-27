import Section from "@/components/ui/Section";
import { awards, certifications, education } from "@/data/awards";
import type { TimelineItem } from "@/types/portfolio";

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-5 border-l border-border pl-5">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span aria-hidden="true" className="absolute -left-[25px] top-1.5 size-2.5 rounded-full bg-accent" />
          <p className="text-xs font-medium text-muted">{item.date}</p>
          <p className="mt-0.5 font-medium leading-snug">{item.title}</p>
          {item.detail && <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>}
        </li>
      ))}
    </ol>
  );
}

export default function AwardsSection() {
  return (
    <Section id="awards" title="Awards & Education">
      <div className="space-y-12">
        <div>
          <h3 className="mb-5 font-semibold">수상 · 논문</h3>
          <Timeline items={awards} />
        </div>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h3 className="mb-5 font-semibold">교육 · 활동</h3>
            <Timeline items={education} />
          </div>
          <div>
            <h3 className="mb-5 font-semibold">자격증</h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="font-medium">{cert.name}</p>
                  {cert.detail && <p className="text-sm text-muted">{cert.detail}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
