import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const FOCUS_AREAS = [
  {
    title: "Monitoring",
    description: "Zabbix로 수집하고 Grafana로 시각화·알림합니다.",
  },
  {
    title: "Incident Response",
    description: "로그로 원인을 추적하고 포스트모템으로 남깁니다.",
  },
  {
    title: "Automation",
    description: "Ansible/AWX로 서버 운영을 자동화합니다.",
  },
  {
    title: "Network",
    description: "WireGuard 피어로 서버를 사설 오버레이에 연결합니다.",
  },
] as const;

const NANGMAN_METRICS = "32 hosts · ~3,000 metrics · 85 alert rules";

export default function Home() {
  return (
    <div className="container mx-auto max-w-3xl px-4">
      {/* Hero Section */}
      <section className="flex min-h-[60vh] flex-col justify-center py-16">
        <p className="animate-fade-up mb-6 font-mono text-xs text-muted-foreground">
          site reliability engineer, in progress
        </p>

        <h1
          className="animate-fade-up mb-6 text-4xl font-semibold tracking-tight sm:text-5xl"
          style={{ animationDelay: "100ms" }}
        >
          정택준
        </h1>

        <p
          className="animate-fade-up mb-10 max-w-xl text-muted-foreground"
          style={{ animationDelay: "200ms" }}
        >
          관측하고, 원인을 끝까지 추적하고, 운영을 자동화합니다.
        </p>

        <div
          className="animate-fade-up flex flex-wrap items-center gap-6 text-sm"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
          >
            프로젝트 보기
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/#contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            이메일 보내기
          </Link>
        </div>
      </section>

      {/* What I Do */}
      <section className="border-t border-border/60 py-16">
        <p className="mb-8 font-mono text-xs text-muted-foreground">
          {"// what i do"}
        </p>

        <dl className="divide-y divide-border/60">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.title}
              className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-4"
            >
              <dt className="text-sm font-medium">{area.title}</dt>
              <dd className="text-sm text-muted-foreground">
                {area.description}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 space-y-2 font-mono text-xs text-muted-foreground">
          <p>nangman infra — {NANGMAN_METRICS}</p>
          <p>this site runs on self-hosted infra · git push → jenkins → harbor → watchtower</p>
        </div>

        <Link
          href="https://github.com/iamtaekjun"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>@iamtaekjun</span>
          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 border-t border-border/60 py-16 pb-24">
        <div className="grid gap-12">
          <div>
            <p className="mb-8 font-mono text-xs text-muted-foreground">
              {"// contact"}
            </p>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight">
              편하게 연락주세요.
            </h2>
            <p className="mb-8 text-sm text-muted-foreground">
              채용, 스터디, 커피챗 모두 환영합니다.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:taekjunnnn@nangman.cloud"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                taekjunnnn@nangman.cloud
              </a>
              <a
                href="https://github.com/iamtaekjun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" />
                github.com/iamtaekjun
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
