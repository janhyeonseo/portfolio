import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-5 py-20 sm:py-28">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-12">
        {/* TODO: public/profile.jpg 준비 후 next/image로 교체 */}
        <div aria-hidden="true" className="size-28 shrink-0 rounded-full bg-zinc-300 sm:size-36 dark:bg-zinc-700" />
        <div>
          <p className="text-sm font-semibold text-accent">{profile.role}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-1 text-muted">{profile.nameEn}</p>
          <p className="mt-5 max-w-xl leading-relaxed">
            {profile.intro.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-4 py-2 text-white transition-opacity hover:opacity-90 dark:text-zinc-950"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-border px-4 py-2 transition-colors hover:border-accent hover:text-accent"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
