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
 */
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
};

export const NANGMAN_ACTIVITIES: Activity[] = [
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
    title: "모니터링 파이프라인 구축",
    description:
      "Netdata(실시간 수집) → Prometheus(중앙 저장) → Grafana(시각화)로 이어지는 모니터링 계층을 설계·구축했습니다. Zabbix 에이전트 연동과 NoData 상황을 구분하는 Grafana 알림 템플릿도 직접 구현해 잘못된 알림이 오던 문제를 해결했습니다.",
    impact:
      "NoData 분기 처리로 잘못 울리던 알림(오탐)을 사실상 제거해 알림 신뢰도 확보",
    stack: ["Netdata", "Prometheus", "Grafana", "Zabbix"],
    featured: true,
  },
  {
    title: "장애 분석 & 트러블슈팅",
    description:
      "서버가 새벽마다 내려가는 장애를 journalctl 로그 기반으로 추적해 원인 후보(백신 스캔, 자동 업데이트 재부팅, 크래시 루프)를 좁혀가며 해결했습니다. 미러 서버 동기화 문제로 인한 Ansible 업데이트 실패도 분석·해결하고, 과정과 한계점을 문서로 남깁니다.",
    stack: ["journalctl", "Ansible"],
    featured: true,
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
