import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "실무에서 사용",
    skills: [
      "React",
      "JavaScript(ES6+)",
      "AG Grid",
      "React.lazy / memo",
      "Java",
      "Spring Boot",
      "MyBatis",
      "Oracle",
      "Git",
    ],
  },
  {
    title: "학습 중",
    note: "이 포트폴리오를 TypeScript로 제작하고 있습니다.",
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase"],
  },
  {
    title: "AI · 데이터 (학부 연구)",
    skills: ["Python", "YOLOv5", "Stable Diffusion"],
  },
];
