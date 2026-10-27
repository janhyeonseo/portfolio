import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    category: "SI 프로젝트",
    title: "반도체 제조사 장비 생애주기 관리 포털",
    period: "2025.04 ~ 현재",
    duration: "1년 7개월",
    position: "풀스택 개발자 (React 화면 개발 + Java/Spring/MyBatis/Oracle API 개발)",
    summary: "반도체 장비 3만여 대의 생애주기(Life Cycle)를 관리하는 사내 포털 신규 구축",
    stack: ["React", "JavaScript(ES6+)", "AG Grid", "Java", "Spring Boot", "MyBatis", "Oracle", "Git"],
    tasks: [
      {
        no: 1,
        title: "레거시 C# 프로그램 → React 이관 (화면 10종 + 팝업 11종 = 21종)",
        points: [
          "레거시 C# 화면의 구조·업무 규칙을 분석해 React + Spring으로 재구현",
          "로직 파악이 어려운 부분은 상급 개발자와 페어링으로 분석·검증",
        ],
      },
      {
        no: 2,
        title: "3-그리드 계층 연동 화면 (표준 프로세스 구성 화면 3종)",
        featured: true,
        points: [
          "프로세스 → Task → 하위 프로세스 3개 그리드 연동: 양방향 선택 이동, 행 순서 변경, 저장 전 변경 감지 확인",
          "행별 CRUD 플래그(I/U/D)를 보낼 수 없는 구조 → 그리드 전체 데이터를 전송하고 서버에서 기존 DB 데이터와 Map-List diff 비교로 INSERT/UPDATE/DELETE 자동 도출",
          "쿼리 재작성 + 불필요한 API 호출 제거로 현업이 사용을 꺼리던 화면을 실사용 가능하게 개선",
        ],
        metric: {
          value: "593ms",
          label: "화면 로딩 시간",
          detail: "레거시 7~9초 → 593ms (약 93% 단축)",
          note: "브라우저 개발자도구 Network 탭 측정",
        },
      },
      {
        no: 3,
        title: "4뎁스 메가메뉴 (프론트+백엔드 전담)",
        points: [
          "3뎁스까지만 지원하던 사내 공통 메뉴 컴포넌트의 한계를 넘어 4뎁스 서브메뉴 우측 전개 구현",
          "계층 쿼리(CONNECT BY / SYS_CONNECT_BY_PATH)로 메뉴 경로를 조회하고, 경로 문자열을 split → 정렬 → 트리로 가공하는 함수 직접 작성",
          "긴 메뉴명 2줄 처리, 권한별 클릭 제어",
        ],
      },
      {
        no: 4,
        title: "HOME 화면 신규 개발",
        points: [
          "메뉴 쿼리를 재사용해 바로가기 카드 4개를 부모-자식/권한별로 분류, 권한 없는 메뉴는 딤 처리",
          "메뉴명 높이 실측(offsetHeight / lineHeight) 기반 동적 페이지 분할",
          "기존 API·쿼리 재사용(조건만 추가)으로 신규 API 없이 결재 현황 요약 표시",
        ],
      },
      {
        no: 5,
        title: "계획구성도 상세 화면 (약 3,700줄, UI 전담)",
        points: [
          "장비 유형별 동적 그리드/팝업 파라미터 분기, 탭·트리·팝업 복합 화면",
          "\"미사용 값 기준 채번\"으로 중간 행 삭제 시 번호 어긋남 해결",
          "임시저장 → 구매검토요청 → 승인/반려 결재 흐름, 버전 간 트리 diff 비교 팝업",
        ],
      },
      {
        no: 6,
        title: "공지사항 · 즐겨찾기 · 공통 화면",
        points: [
          "공지사항 목록·상세·등록·댓글·N-Depth 대댓글·첨부파일·조회수 (계층 쿼리 + 트리 변환)",
          "즐겨찾기 폴더-메뉴 트리, 폴더 CRUD, 사이드바 연동",
          "공통 화면 약 20개 한/영/중 3개 국어 지원, 공통 라우팅 팝업 파라미터 기능 추가",
        ],
      },
      {
        no: 7,
        title: "데이터 구조 개선 제안 (채택)",
        points: [
          "투자·구매요청·발주 등이 혼재된 단일 Task/승인 테이블을 9개 테이블로 분리 설계 제안",
          "팀 결정으로 운영 DB에 반영",
        ],
      },
      {
        no: 8,
        title: "테스트·배포",
        points: [
          "오픈 전 2개월간 크로스체크 단위·화면 테스트",
          "개발 환경 배포 직접 수행",
        ],
      },
    ],
  },
];
