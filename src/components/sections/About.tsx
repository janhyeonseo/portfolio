import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 leading-relaxed text-foreground">
        {profile.about.map((sentence) => (
          <p key={sentence}>{sentence}</p>
        ))}
      </div>
    </Section>
  );
}
