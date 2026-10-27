import type { DemoItem, Project } from "@/types/portfolio";

// 데모가 완성되면 각 항목을 별도 Project 카드로 분리한다.
export const demoItems: DemoItem[] = [
  {
    title: "4뎁스 메가메뉴",
    description: "경로 문자열을 트리로 가공해 4뎁스 서브메뉴를 우측으로 전개",
  },
  {
    title: "HOME 바로가기 카드",
    description: "권한별 메뉴 분류, 메뉴명 높이 실측 기반 페이지 분할",
  },
  {
    title: "3-그리드 연동 화면",
    description: "프로세스 → Task → 하위 프로세스, 3개 그리드가 연결된 계층 편집",
  },
];

export const projects: Project[] = [
  {
    title: "인터랙티브 데모",
    status: "upcoming",
    items: demoItems,
  },
  {
    title: "GAN·CNN 활용 관광지 추천 서비스",
    description:
      "Stable Diffusion으로 사용자 텍스트 → 관광지 이미지를 생성하고, BiT 전이학습으로 분류(정확도 89.266%, 6,421장)해 웹으로 추천 제공",
    status: "done",
    meta: "대학 프로젝트 · 2023 · 7인 팀",
    role: "AI 데이터 정제·모델 학습 + 웹 일부",
    github: "https://github.com/janhyeonseo/yANUs1_travel_project",
  },
];
