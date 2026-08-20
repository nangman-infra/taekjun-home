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
    title: "PSI 기반 메모리 관측 파이프라인 구축 (Zabbix + Ansible + Grafana)",
    description:
      "메모리 사용률 기반 알림은 대부분 page cache로 인한 오탐이라, 실제 태스크 정지 시간을 나타내는 PSI(Pressure Stall Information)로 관측 기준을 전환했습니다. Zabbix agent 2의 UserParameter로 /proc/pressure/memory를 수집하고, Ansible/AWX로 아키텍처·OS가 섞인 이기종 fleet에 단계적으로 배포한 뒤, Zabbix Template로 표준화하고 Grafana 대시보드·알림까지 연결했습니다. arm64 저장소, 에이전트 미설치, 알림 값 미노출 등 이기종 환경 특유의 함정을 가드와 표현식 재구성으로 해결했습니다.",
    impact:
      "메모리 사용률 오탐을 압박(PSI) 기준 알림으로 대체, 이기종 fleet 20여 대(x86/arm64·Ubuntu/Debian)에 stat 가드·멱등 방식으로 자동 배포(PSI 미지원 호스트 자동 제외)",
    period: "2026-08",
    stack: ["Zabbix", "Ansible", "AWX", "Grafana", "PSI", "Linux"],
    link: "https://velog.io/@iamtaekjun/PSI-지표-대시보드-구축기",
    featured: true,
  },
  {
    title: "KREONET 세미나 발표 — 셀프호스팅 인프라 모니터링 구축 사례",
    description:
      "KREONET(국가과학기술연구망) 실무자협의회 오픈소스 워킹그룹 세미나에서 낭만인프라의 Zabbix+Grafana 모니터링 구축·운영 사례를 발표했습니다. 사람이 장애를 감지하던 인프라를 관측 가능하게 만든 과정, NoData 오탐을 걷어내 알림 신뢰도를 확보한 방법, 실제 새벽 장애를 추적한 사례와 컨테이너 관측의 사각지대·다음 과제(SLO/SLI)까지 공유했습니다.",
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
      "Zabbix(수집·저장)와 Grafana(시각화·알림) 기반 모니터링을 구축·운영했습니다. NoData 상황을 구분하는 Grafana 알림 템플릿을 직접 구현해 잘못된 알림이 오던 문제를 해결했습니다. Netdata·Prometheus도 일부 검증해본 뒤 현재 구성에 정착했습니다.",
    impact:
      "NoData 분기 처리로 잘못 울리던 알림(오탐)을 사실상 제거해 알림 신뢰도 확보",
    stack: ["Zabbix", "Grafana"],
    link: "https://velog.io/@iamtaekjun/Zabbix-모니터링-알람-체계-개선기",
  },
  {
    title: "장애 분석 & 트러블슈팅",
    description:
      "서버가 새벽마다 내려가는 장애를 journalctl 로그 기반으로 추적해 원인 후보(백신 스캔, 자동 업데이트 재부팅, 크래시 루프)를 좁혀가며 해결했습니다. 미러 서버 동기화 문제로 인한 Ansible 업데이트 실패도 분석·해결하고, 과정과 한계점을 문서로 남깁니다.",
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
