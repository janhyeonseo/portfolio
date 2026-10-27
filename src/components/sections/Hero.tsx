import Image from "next/image";
import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-5 py-20 sm:py-28">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-12">
        {/* 세로 사진(3:4)을 원 안에 비율 유지로 채우고, 얼굴이 가운데 오도록 위쪽 20% 지점을 기준으로 자른다 */}
        <div className="relative size-28 shrink-0 overflow-hidden rounded-full bg-surface sm:size-36">
          <Image
            src="/profile.jpg"
            alt={`${profile.name} 프로필 사진`}
            fill
            sizes="(min-width: 640px) 144px, 112px"
            preload
            className="object-cover object-[center_20%]"
          />
        </div>
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
