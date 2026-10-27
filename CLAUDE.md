@AGENTS.md

# 장현서 포트폴리오 — 작업 규칙

Next.js (App Router) + TypeScript + Tailwind CSS 포트폴리오 사이트. 이후 Supabase(방명록/조회수)와 Vercel 배포를 붙일 예정.

## 콘텐츠
- 사이트의 모든 경력/수치/문구는 `docs/profile.md`만 근거로 한다. 없는 사실을 지어내지 않는다.
- `[확인필요]` 표시된 항목은 사이트에 노출하지 않는다.
- 고객사명과 실제 시스템명은 쓰지 않는다.

## TypeScript
- 사용자는 TypeScript 학습 중이다. 새로운 타입 문법을 쓸 때마다 왜 그렇게 썼는지 한두 줄로 설명한다.
- `any` 타입은 쓰지 않는다.

## 작업 방식
- 한 번에 큰 변경을 하지 말고, 작업 단위마다 무엇을 바꿨는지 요약한다.
- `.env` 파일과 API 키는 절대 커밋하지 않는다.

## 구조
- 컴포넌트는 `src/components`, 사이트 문구 데이터는 `src/data`에 분리한다.
  - 섹션: `src/components/sections`, 헤더 등 레이아웃: `src/components/layout`, 공용 UI: `src/components/ui`
  - 데이터 타입(interface/type)은 `src/types/portfolio.ts`에 모은다.
- 색상은 `globals.css`의 토큰(`background`, `foreground`, `muted`, `border`, `surface`, `accent`)을 쓴다. 포인트 컬러는 `accent` 하나.
- `cacheComponents`가 켜져 있어 `new Date()`, `cookies()` 등을 쓰면 페이지가 정적이 아니게 된다. 다크모드는 localStorage + `<html class="dark">`로 처리한다.
