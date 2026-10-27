import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { experiences } from "@/data/experience";
import type { ExperienceTask } from "@/types/portfolio";

interface TaskItemProps {
  task: ExperienceTask;
  no: number;
}

function TaskItem({ task, no }: TaskItemProps) {
  const isCore = task.tier === "core";
  const padding = isCore ? "p-5 sm:p-6" : "p-4 sm:p-5";
  const tone = task.featured ? "border-2 border-accent bg-accent-soft" : "border border-border";

  return (
    <li className={`rounded-xl ${padding} ${tone}`}>
      <div className="flex items-start gap-3">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white dark:text-zinc-950">
          {no}
        </span>
        <div className="min-w-0 flex-1">
          {task.featured && (
            <span className="mb-1.5 inline-block rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-white dark:text-zinc-950">
              ★ 핵심
            </span>
          )}
          <h4 className={`font-semibold leading-snug ${isCore ? "sm:text-lg" : ""}`}>{task.title}</h4>

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
      {experiences.map((experience) => {
        const coreTasks = experience.tasks.filter((task) => task.tier === "core");
        const moreTasks = experience.tasks.filter((task) => task.tier === "more");

        return (
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
              {coreTasks.map((task, index) => (
                <TaskItem key={task.title} task={task} no={index + 1} />
              ))}
            </ol>

            {moreTasks.length > 0 && (
              // <details>: JS 없이 브라우저 기본 기능으로 펼침/접힘, 키보드·스크린리더 지원
              <details className="group mt-4">
                <summary className="flex cursor-pointer list-none items-center justify-center gap-1.5 rounded-lg border border-border py-3 text-sm font-medium text-muted transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                  <span className="group-open:hidden">더 보기 ({moreTasks.length})</span>
                  <span className="hidden group-open:inline">접기</span>
                  <svg className="size-4 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <ol className="mt-4 space-y-3">
                  {moreTasks.map((task, index) => (
                    <TaskItem key={task.title} task={task} no={coreTasks.length + index + 1} />
                  ))}
                </ol>
              </details>
            )}
          </article>
        );
      })}
    </Section>
  );
}
