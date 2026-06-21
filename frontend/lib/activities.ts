/**
 * 낭만인프라 활동 태스크 로그 (단일 진실 소스).
 *
 * 태스크가 하나 끝날 때마다 이 배열에 객체를 하나 추가하면 된다.
 * 이력서(/resume)의 "활동" 섹션이 이 데이터를 렌더링한다.
 *
 * summary 만 필수. 나머지는 있는 경우에만 채운다 (없는 값, 특히 수치를
 * 억지로 지어내지 말 것 — 실제 측정값만).
 *
 * SRE 취준 관점에서 가장 중요한 건 impact 다. "무엇을 했다"보다
 * "이만큼 개선했다"(MTTR 단축, 오탐 감소, SLO 달성 등 정량 결과)가
 * 차별점이 된다. detail 은 문제 → 행동 흐름으로 적으면 좋다.
 */
export type Activity = {
  /** 이력서에 한 줄로 표시되는 요약 (불릿 텍스트) */
  summary: string;
  /** 진행 시기. 예: "2026-05", "운영 중". 모르면 생략 */
  period?: string;
  /** 문제 → 행동 흐름의 상세 설명. 있으면 요약 아래에 작게 표시된다 */
  detail?: string;
  /** 정량적 결과·임팩트. 예: "장애 복구 시간 40분 → 8분". 측정값만 적을 것 */
  impact?: string;
  /** 관련 기술 스택 */
  stack?: string[];
  /** 관련 링크 (트러블슈팅 문서, PR 등) */
  link?: string;
};

export const NANGMAN_ACTIVITIES: Activity[] = [
  {
    summary:
      "AWX 정기 패치 작업의 Ansible become 타임아웃 인시던트 대응 (Ubuntu 26.04 sudo-rs)",
    period: "2026-06",
    detail:
      "신규 Ubuntu 26.04 서버 2대만 Gathering Facts 단계에서 become 타임아웃. 정상/실패 서버를 비교해 26.04 기본 sudo의 sudo-rs 전환이 Ansible become 프롬프트 미인식을 유발함을 규명하고, update-alternatives로 C 구현 sudo로 전환해 해결.",
    impact:
      "3일간 패치 자동화가 실패하던 신규 서버 2대(16대 중) 복구, 26.04 표준 셋업 절차에 sudo 전환 단계 반영해 재발 방지",
    stack: ["AWX", "Ansible", "Ubuntu 26.04", "sudo-rs"],
  },
  { summary: "OPNsense 방화벽 운영 및 Suricata 기반 IDS/IPS 구성" },
  {
    summary:
      "WireGuard·IPsec으로 팀원 서버 30여 대와 AWS VPC를 단일 사설 네트워크로 연결",
  },
  {
    summary:
      "Netdata → Prometheus → Grafana 모니터링 파이프라인 구축 및 Zabbix 연동",
  },
  { summary: "Grafana 알림 템플릿 개선 (NoData 상황 분기 처리)" },
  {
    summary: "서버 장애 로그 분석 및 트러블슈팅, Ansible 기반 운영 자동화",
    detail:
      "taekjun-ubuntu-server의 주기적 Ansible 업데이트 실패를 미러 서버 동기화 문제로 원인 규명·해결",
  },
];
