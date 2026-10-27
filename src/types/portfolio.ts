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

export interface ExperienceTask {
  no: number;
  title: string;
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

export type ProjectStatus = "preparing" | "done";

export interface Project {
  title: string;
  description: string;
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
