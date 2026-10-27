import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-xl border border-border p-5 sm:p-6">
            <h3 className="font-semibold">{group.title}</h3>
            {group.note && <p className="mt-1 text-sm text-muted">{group.note}</p>}
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
