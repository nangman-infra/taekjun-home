/**
 * 낭만인프라 활동 — 단일 진실 소스.
 *
 * 이 배열이 /activities(전체), /about(featured 하이라이트), /resume(요약)
 * 세 곳을 모두 채운다. 태스크가 하나 끝날 때마다 여기에 객체를 하나 추가하면
 * 세 페이지에 동시에 반영된다. 배열 순서가 곧 표시 순서다(최신·임팩트 순).
 *
 * SRE 채용 관점 작성 규칙:
 * - impact 가 가장 중요하다. "무엇을 했다"가 아니라 "이만큼 개선했다"
 *   (MTTR 단축, 오탐 감소, 복구 등 정량 결과). 수치는 실제값만, 지어내지 말 것.
 * - description 은 문제 → 행동 → 결과 흐름으로.
 * - featured: true 인 항목이 /about 상단 하이라이트로 노출된다(3개 권장).
 * - diagram 은 /activities 에만 표시된다. 본인이 실제로 구성한 범위만 담을 것.
 */
import type { Diagram } from "@/components/diagram-figure";

export type Activity = {
  /** 카드 제목 */
  title: string;
  /** 본문: 문제 → 행동 → 결과 */
  description: string;
  /** 정량적 결과·임팩트. 예: "복구 시간 40분 → 8분". 측정값만 */
  impact?: string;
  /** 진행 시기. 예: "2026-06", "운영 중". 모르면 생략 */
  period?: string;
  /** 관련 기술 스택 */
  stack?: string[];
  /** 관련 링크 (트러블슈팅 문서, PR 등) */
  link?: string;
  /** /about 하이라이트로 노출할지 여부 */
  featured?: boolean;
  /** 아키텍처 다이어그램 (public/diagrams/) */
  diagram?: Diagram;
};

export const NANGMAN_ACTIVITIES: Activity[] = [
  {
    title: "PHP2Shell 취약점 대응 — 인벤토리 밖 Zabbix web 이미지 패치",
    description:
      "PHP 원격 코드 실행 취약점(PHP2Shell)이 공개된 뒤 영향 자산을 찾았습니다. AWX ad-hoc으로 온프레미스 서버 24대의 호스트·프로세스·컨테이너 내부 PHP를 확인해 해당 없음을 확인했지만, AWS ECS에서 도는 Zabbix web은 AWX 인벤토리 밖이라 따로 확인해야 했습니다. Zabbix 화면의 'Up to date'는 Zabbix 버전만 보는 표시였고, 태스크 정의에 고정된 이미지 다이제스트를 받아 내부를 열어 보니 취약한 PHP 8.5.10이 들어 있었습니다. 패치된 PHP가 담긴 이미지를 확인한 뒤 개발 환경의 Zabbix server와 web을 7.4.16으로 올렸고, 단일 server가 같은 DB에 두 개 붙지 않도록 배포 설정(최소 0%·최대 100%)을 조정했습니다.",
    impact:
      "인벤토리 밖에 있던 취약 컴포넌트를 찾아 확인한 날 바로 교체. 앱 버전과 런타임 버전을 따로 추적해야 한다는 점을 회고로 남김",
    period: "2026-10",
    stack: ["AWX", "Ansible", "AWS ECS", "Zabbix", "Docker"],
  },
  {
    title: "장비 이전 후 Ansible SSH 타임아웃 대응 — 조용히 누락된 서버 찾기",
    description:
      "팀 장비를 다른 장소로 옮긴 뒤 AWX 패키지 업데이트에서 9대 중 5대가 SSH 타임아웃으로 실패했습니다. 실패 목록만 고치지 않고 '성공'한 서버까지 ad-hoc hostname으로 확인해 보니, AWX에 03번으로 등록된 주소가 실제로는 01번 서버여서 03번은 실패로도 잡히지 않은 채 업데이트에서 빠져 있었습니다. 내부 인벤토리 문서와 실제 hostname을 교차 대조해 AWX 호스트를 고치고 다시 실행했습니다.",
    impact:
      "재실행 8대 unreachable 0·failed 0, 누락됐던 서버까지 업데이트하고 8대 hostname이 문서와 일치함을 확인",
    period: "2026-10",
    stack: ["AWX", "Ansible"],
  },
  {
    title: "PSI 기반 메모리 관측 파이프라인 구축 (Zabbix + Ansible + Grafana)",
    description:
      "리눅스는 page cache 때문에 메모리 사용률이 높게 나오는 게 정상이라 사용률만으로는 실제 문제를 판단하기 어렵습니다. 그래서 태스크가 메모리를 기다리며 멈춘 시간의 비율인 PSI(Pressure Stall Information)를 관측·알림 기준에 추가했습니다. Zabbix agent 2의 UserParameter로 /proc/pressure/memory를 수집하고, Ansible/AWX로 아키텍처·OS가 섞인 이기종 fleet에 단계적으로 배포한 뒤, Zabbix Template로 표준화하고 Grafana 대시보드·알림까지 연결했습니다. stress-ng로 실제 메모리 압박을 만들어 알림 발동과 복구까지 검증했습니다. arm64 저장소, 에이전트 미설치, 알림 값 미노출 등 이기종 환경 특유의 함정을 가드와 표현식 재구성으로 해결했습니다.",
    impact:
      "실제 메모리 압박(PSI) 기준 알림 추가, 서버·SBC가 섞인 이기종 fleet에 stat 가드·멱등 방식으로 단계 배포(PSI 미지원 호스트 자동 제외)",
    period: "2026-08",
    stack: ["Zabbix", "Ansible", "AWX", "Grafana", "PSI", "Linux"],
    link: "https://velog.io/@iamtaekjun/PSI-지표-대시보드-구축기",
    featured: true,
    diagram: {
      src: "/diagrams/psi-pipeline.webp",
      alt: "PSI 메모리 관측 파이프라인 아키텍처",
      width: 2000,
      height: 872,
      caption:
        "Host(/proc/pressure/memory) → Zabbix Template → Grafana 대시보드·알림 → Mattermost, 배포는 Ansible → AWX",
    },
  },
  {
    title: "WAN 단절로 사이트 전체가 멈춘 장애 원인 분석 (원격 DNS 의존)",
    description:
      "대전 사이트의 WAN이 약 16분 끊기면서 그 사이트의 서비스가 모두 멈췄습니다. 경로를 WAN, WireGuard 터널, DNS, AWS 인증 서버, 서비스 순으로 짚어 보니 대전 서버들이 게이트웨이와 DNS를 WireGuard 너머 다른 사이트에 의존하고 있어, 회선 하나가 끊기면 이름 해석부터 실패하는 구조였습니다. AI로 정리한 가설을 그대로 쓰지 않고, 같은 구조를 2노드 랩으로 만들어 터널을 끊고 이름 해석이 실패하는 것을 재현한 뒤 포스트모템을 썼습니다.",
    impact:
      "장애 원인을 랩 재현으로 확인, 사이트별 로컬 리졸버 개선안 제안",
    period: "2026-08",
    stack: ["WireGuard", "DNS", "Linux"],
  },
  {
    title: "KREONET 세미나 발표 — 셀프호스팅 인프라 모니터링 구축 사례",
    description:
      "KREONET(국가과학기술연구망) 실무자협의회 오픈소스 워킹그룹 세미나에서 낭만인프라의 Zabbix+Grafana 모니터링 구축·운영 사례를 발표했습니다. 사람이 장애를 감지하던 인프라를 관측 가능하게 만든 과정, 수집이 끊길 때 허위 임계치 알림이 오던 문제를 NoData 분기로 구분한 방법, 실제 새벽 장애를 추적한 사례와 컨테이너 관측의 사각지대·다음 과제(SLO/SLI)까지 공유했습니다.",
    impact:
      "국가과학기술연구망(KREONET) 오픈소스 커뮤니티 대상 외부 기술 발표",
    period: "2026-07",
    stack: ["Zabbix", "Grafana"],
    featured: true,
  },
  {
    title: "Ansible become 타임아웃 인시던트 대응 (Ubuntu 26.04 sudo-rs)",
    description:
      "AWX 정기 APT 패치 작업에서 신규 Ubuntu 26.04 서버 2대만 Gathering Facts 단계의 권한 에스컬레이션(become) 타임아웃으로 실패했습니다. 정상 서버와 환경을 비교해, 26.04부터 기본 sudo가 Rust 재구현(sudo-rs)으로 바뀌며 Ansible이 지정한 become 프롬프트를 인식하지 못한 것이 원인임을 규명하고, update-alternatives로 기존 C 구현 sudo로 전환해 해결했습니다.",
    impact:
      "3일간 패치 자동화가 실패하던 신규 서버 2대(16대 중) 복구, 26.04 표준 셋업 절차에 sudo 전환 단계를 반영해 재발 방지",
    period: "2026-06",
    stack: ["AWX", "Ansible", "Ubuntu 26.04", "sudo-rs"],
    featured: true,
  },
  {
    title: "모니터링 구축·운영 (Zabbix + Grafana)",
    description:
      "Zabbix(수집·저장)와 Grafana(시각화·알림) 기반 모니터링을 구축·운영하며 서버 32대를 모니터링하고 Grafana 알림 규칙 85개를 직접 작성했습니다. Zabbix 수집이 끊기면 실제 사용률은 0%인데 'CPU 90% 초과' 같은 알림이 오던 문제를, 알림 템플릿에 NoData 분기를 넣어 해결했습니다. Netdata·Prometheus도 일부 검증해본 뒤 현재 구성에 정착했습니다.",
    impact:
      "수집 장애를 허위 임계치 알림 대신 '수집 장애 · 인스턴스명'으로 알려, 알림만 보고 수집 장애와 실제 장애를 구분 가능",
    stack: ["Zabbix", "Grafana"],
    link: "https://velog.io/@iamtaekjun/Zabbix-모니터링-알람-체계-개선기",
    diagram: {
      src: "/diagrams/monitoring-hybrid.webp",
      alt: "온프레미스·AWS 하이브리드 모니터링 수집 경로",
      width: 1800,
      height: 1509,
      caption:
        "대전 agent → 석촌 Zabbix proxy → VPN → AWS Zabbix server → Grafana (2026-07 발표 시점 구성)",
    },
  },
  {
    title: "장애 분석 & 트러블슈팅",
    description:
      "서버가 새벽마다 내려가는 장애를 journalctl 로그 기반으로 추적해 원인 후보(백신 스캔, 자동 업데이트 재부팅, 크래시 루프)를 좁혔습니다. 미러 서버 동기화 문제로 인한 Ansible 업데이트 실패도 분석·해결하고, 과정과 한계점을 문서로 남깁니다.",
    stack: ["journalctl", "Ansible"],
  },
  {
    title: "WireGuard 사설 오버레이 네트워크 구성",
    description:
      "OPNsense에 WireGuard 피어를 등록해 팀원들의 서버를 하나의 사설 오버레이 네트워크로 연결했습니다.",
    stack: ["WireGuard", "OPNsense"],
  },
];

/** /about 상단에 노출할 하이라이트 (featured 표시된 항목) */
export const FEATURED_ACTIVITIES = NANGMAN_ACTIVITIES.filter(
  (activity) => activity.featured,
);
