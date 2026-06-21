import Link from "next/link";
import { FEATURED_ACTIVITIES } from "@/lib/activities";

const SKILL_CATEGORIES = [
  {
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "Netdata", "Zabbix"],
  },
  {
    title: "Network & Security",
    skills: ["OPNsense", "WireGuard", "IPsec VPN", "Suricata (IDS/IPS)"],
  },
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Naver Cloud Platform"],
  },
  {
    title: "Automation & Tools",
    skills: ["Docker", "Ansible", "Nginx"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript/TypeScript", "Java"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "Redis"],
  },
] as const;

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="mb-3 font-mono text-sm text-primary">{"// about"}</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          About Me
        </h1>
        <p className="text-lg text-muted-foreground">
          한밭대학교 컴퓨터공학과 학부생이고, SRE(Site Reliability Engineer)를
          지향합니다. 서비스가 안정적으로 돌아가도록 관측하고, 장애의 원인을
          추적하고, 운영을 자동화하는 일을 합니다.
        </p>
      </div>

      {/* 관심 분야 */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">관심 분야</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <div className="mb-2 text-2xl">📊</div>
            <h3 className="mb-2 font-semibold">Monitoring & Observability</h3>
            <p className="text-sm text-muted-foreground">
              메트릭 수집 파이프라인 설계와 시각화, 장애 상황을 정확히 구분하는
              알림 체계 구축
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <div className="mb-2 text-2xl">🚨</div>
            <h3 className="mb-2 font-semibold">Incident Response</h3>
            <p className="text-sm text-muted-foreground">
              로그 기반 장애 원인 추적과 재발 방지를 위한 포스트모템 기록
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <div className="mb-2 text-2xl">🔐</div>
            <h3 className="mb-2 font-semibold">Network & Security</h3>
            <p className="text-sm text-muted-foreground">
              방화벽·VPN 운영, IDS/IPS 기반 트래픽 보안, 사설 오버레이 네트워크
              설계
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <div className="mb-2 text-2xl">⚙️</div>
            <h3 className="mb-2 font-semibold">Automation</h3>
            <p className="text-sm text-muted-foreground">
              Ansible 기반 운영 자동화로 반복 작업(toil) 줄이기
            </p>
          </div>
        </div>
      </section>

      {/* 낭만인프라 활동 */}
      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-bold">낭만인프라 활동</h2>
        <p className="mb-6 text-muted-foreground">
          팀원들과 함께 온프레미스 서버와 AWS를 하이브리드로 연결한 셀프호스팅
          인프라를 직접 구축하고 운영하는 팀입니다. 지금 보고 계신 이 홈페이지도
          이 인프라 위에서 돌아갑니다.
        </p>
        <div className="space-y-4">
          {FEATURED_ACTIVITIES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/60 bg-card/30 p-6"
            >
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              {item.impact && (
                <p className="mt-2 text-sm font-medium text-primary">
                  {item.impact}
                </p>
              )}
            </div>
          ))}
        </div>
        <Link
          href="/activities"
          className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          전체 활동 보기 →
        </Link>
      </section>

      {/* 기술 스택 */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">기술 스택</h2>
        <div className="space-y-6">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title}>
              <h3 className="mb-3 text-lg font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 학습 중 / 관심 기술 */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">학습 중 / 관심 기술</h2>
        <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🎯</span>
              <div>
                <span className="font-medium">Kubernetes</span>
                <p className="text-sm text-muted-foreground">
                  컨테이너 오케스트레이션 및 자동화 학습 중
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎯</span>
              <div>
                <span className="font-medium">SLO/SLI 기반 신뢰성 운영</span>
                <p className="text-sm text-muted-foreground">
                  운영 중인 인프라에 서비스 수준 목표를 정의하고 측정하는 것을
                  준비 중
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎯</span>
              <div>
                <span className="font-medium">ArgoCD</span>
                <p className="text-sm text-muted-foreground">
                  GitOps 기반 배포 자동화 학습 예정
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
