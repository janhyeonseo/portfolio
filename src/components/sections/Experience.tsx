import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { experiences } from "@/data/experience";
import type { ExperienceTask } from "@/types/portfolio";

function TaskItem({ task }: { task: ExperienceTask }) {
  const base = "rounded-xl p-5 sm:p-6";
  const tone = task.featured ? "border-2 border-accent bg-accent-soft" : "border border-border";

  return (
    <li className={`${base} ${tone}`}>
      <div className="flex items-start gap-3">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white dark:text-zinc-950">
          {task.no}
        </span>
        <div className="min-w-0 flex-1">
          {task.featured && (
            <span className="mb-1.5 inline-block rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-white dark:text-zinc-950">
              ★ 핵심
            </span>
          )}
          <h4 className="font-semibold leading-snug">{task.title}</h4>

          {task.metric && (
            <div className="mt-4 rounded-lg bg-background p-4">
              <p className="text-xs font-medium text-muted">{task.metric.label}</p>
              <p className="mt-1 text-4xl font-bold tracking-tight text-accent">{task.metric.value}</p>
              <p className="mt-1 text-sm font-medium">{task.metric.detail}</p>
              {task.metric.note && <p className="mt-1 text-xs text-muted">{task.metric.note}</p>}
            </div>
          )}

          <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted marker:text-border">
            {task.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      {experiences.map((experience) => (
        <article key={experience.title} className="rounded-2xl border border-border p-5 sm:p-8">
          <p className="text-sm font-semibold text-accent">{experience.category}</p>
          <h3 className="mt-1 text-xl font-bold sm:text-2xl">{experience.title}</h3>
          <p className="mt-2 text-sm text-muted">
            {experience.period} · {experience.duration}
          </p>
          <p className="mt-4 leading-relaxed">{experience.summary}</p>
          <p className="mt-1 text-sm text-muted">{experience.position}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.stack.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>

          <ol className="mt-8 space-y-4">
            {experience.tasks.map((task) => (
              <TaskItem key={task.no} task={task} />
            ))}
          </ol>
        </article>
      ))}
    </Section>
  );
}
