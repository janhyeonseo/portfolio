import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.title} className="flex flex-col rounded-xl border border-border p-5 sm:p-6">
            {project.status === "upcoming" && (
              <span className="mb-3 self-start rounded-full border border-accent px-2.5 py-0.5 text-xs font-semibold text-accent">
                업데이트 예정
              </span>
            )}
            {project.meta && <p className="mb-2 text-xs font-medium text-muted">{project.meta}</p>}
            <h3 className="font-semibold leading-snug">{project.title}</h3>
            {project.description && <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>}
            {project.items && (
              <ul className="mt-3 space-y-2.5">
                {project.items.map((item) => (
                  <li key={item.title} className="text-sm leading-relaxed">
                    <span className="font-medium">{item.title}</span>
                    <span className="block text-muted">{item.description}</span>
                  </li>
                ))}
              </ul>
            )}
            {project.role && (
              <p className="mt-3 text-sm">
                <span className="font-medium">담당</span> · {project.role}
              </p>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-start text-sm font-medium text-accent hover:underline"
              >
                GitHub 저장소 →
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
