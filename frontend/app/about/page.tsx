import Link from "next/link";
import { FEATURED_ACTIVITIES } from "@/lib/activities";

const FOCUS_AREAS = [
  {
    title: "Monitoring & Observability",
    description: "메트릭 수집·시각화와 오탐 없는 알림 체계 설계",
  },
  {
    title: "Incident Response",
    description: "로그 기반 장애 원인 추적과 포스트모템 기록",
  },
  {
    title: "Network & Security",
    description: "WireGuard·OPNsense 기반 사설 VPN 오버레이 네트워크 구성·운영",
  },
  {
    title: "Automation",
    description: "Ansible 기반 운영 자동화로 toil 감소",
  },
] as const;

const SKILL_CATEGORIES = [
  {
    title: "Monitoring",
    skills: ["Prometheus", "Grafana", "Netdata", "Zabbix"],
  },
  {
    title: "Network & Security",
    skills: ["OPNsense", "WireGuard"],
  },
  {
    title: "Cloud",
    skills: ["AWS", "Naver Cloud Platform"],
  },
  {
    title: "Automation",
    skills: ["Docker", "Ansible", "Nginx"],
  },
  {
    title: "Languages",
    skills: ["Python", "JavaScript/TypeScript", "Java"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "Redis"],
  },
] as const;

const LEARNING = [
  "Kubernetes",
  "SLO/SLI 기반 신뢰성 운영",
  "ArgoCD",
] as const;

function SectionLabel({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </h2>
  );
}

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <header className="mb-14">
        <p className="mb-3 font-mono text-sm text-primary">{"// about"}</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          About Me
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          한밭대학교 컴퓨터공학과 학부생이고, SRE(Site Reliability Engineer)를
          지향합니다. 서비스를 안정적으로 관측하고, 장애 원인을 추적하고, 운영을
          자동화하는 일을 합니다.
        </p>
      </header>

      {/* 관심 분야 */}
      <section className="mb-14">
        <SectionLabel>관심 분야</SectionLabel>
        <div className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {FOCUS_AREAS.map((area) => (
            <div key={area.title}>
              <h3 className="mb-1 font-semibold">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 낭만인프라 활동 */}
      <section className="mb-14">
        <div className="flex items-baseline justify-between gap-4">
          <SectionLabel>낭만인프라 활동</SectionLabel>
          <Link
            href="/activities"
            className="shrink-0 text-sm font-medium text-primary hover:underline"
          >
            전체 보기 →
          </Link>
        </div>
        <div className="mt-5 space-y-3">
          {FEATURED_ACTIVITIES.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/60 bg-card/30 p-5"
            >
              <h3 className="font-semibold">{item.title}</h3>
              {item.impact && (
                <p className="mt-1.5 text-sm text-primary">{item.impact}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="mb-14">
        <SectionLabel>기술 스택</SectionLabel>
        <div className="mt-5 space-y-4">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="grid gap-2 sm:grid-cols-[160px_1fr] sm:items-baseline sm:gap-4"
            >
              <h3 className="text-sm font-medium text-muted-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border/60 bg-card/40 px-2.5 py-1 text-xs font-medium"
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
        <SectionLabel>학습 중 / 관심 기술</SectionLabel>
        <div className="mt-5 flex flex-wrap gap-2">
          {LEARNING.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
