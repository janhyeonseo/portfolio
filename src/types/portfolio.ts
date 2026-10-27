// 사이트 문구 데이터(src/data)의 모양을 정의한다. 모든 값은 docs/profile.md 기준.

export type SectionId =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "awards"
  | "guestbook"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Profile {
  name: string;
  nameEn: string;
  role: string;
  intro: string[];
  about: string[];
  email: string;
  github: string;
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
  note?: string;
}

// core: 처음부터 크게 보이는 업무 / more: "더 보기"로 펼치는 업무
export type TaskTier = "core" | "more";

export interface ExperienceTask {
  title: string;
  tier: TaskTier;
  points: string[];
  featured?: boolean;
  metric?: Metric;
}

export interface Experience {
  category: string;
  title: string;
  period: string;
  duration: string;
  position: string;
  summary: string;
  stack: string[];
  tasks: ExperienceTask[];
}

export type ProjectStatus = "upcoming" | "done";

export interface DemoItem {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description?: string;
  items?: DemoItem[];
  status: ProjectStatus;
  meta?: string;
  role?: string;
  github?: string;
}

export interface SkillGroup {
  title: string;
  note?: string;
  skills: string[];
}

export interface TimelineItem {
  date: string;
  title: string;
  detail?: string;
}

export interface Certification {
  name: string;
  detail?: string;
}
