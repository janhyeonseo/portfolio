import type { Certification, TimelineItem } from "@/types/portfolio";

export const awards: TimelineItem[] = [
  {
    date: "2023.11",
    title: "한국정보기술학회 대학생 논문경진대회 은상",
    detail: "「수면 품질 개선을 위한 AI 기반 수면 상태 모니터링」 · 1저자, YOLOv5, mAP 0.963",
  },
  {
    date: "2023.11",
    title: "한국정보기술학회 대학생 논문경진대회 금상",
    detail: "「GAN과 CNN을 활용한 관광지 추천 서비스 설계 및 구현」 · 공저",
  },
  {
    date: "2022.09",
    title: "한국공학교육학회 공학교육학술대회 우수발표논문상",
    detail: "「대학생의 SW교육만족과 혁신행동 간의 관계에서 목표지향성의 조절효과」 · 공저",
  },
  {
    date: "2022.09",
    title: "머니투데이 브랜드마케팅 공모전 우수상",
    detail: "SSG닷컴 과제",
  },
];

export const education: TimelineItem[] = [
  {
    date: "2024.02",
    title: "국립안동대학교(현 국립경국대학교) 멀티미디어공학과 졸업",
  },
  {
    date: "2022.07",
    title: "SW융합교육원 「파이썬 기반 데이터 분석 & AI 기초」 120시간 수료",
  },
  {
    date: "2022.06 ~ 09",
    title: "SSG닷컴 실무협업캠프",
    detail: "마케팅팀, 캠페인 기획·콘텐츠 제작",
  },
];

export const certifications: Certification[] = [
  { name: "SQLD" },
  { name: "빅데이터 관리사", detail: "한국품질재단, 2022.04" },
  { name: "정보처리기사", detail: "필기 합격 (실기 결과 대기)" },
];
