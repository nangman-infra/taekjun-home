import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Github,
  Mail,
  Shield,
  Siren,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

const TECH_STACK = [
  "Prometheus",
  "Grafana",
  "Zabbix",
  "OPNsense",
  "WireGuard",
  "Docker",
  "Ansible",
  "AWS",
  "NCP",
] as const;

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center text-center">
        {/* 배경 글로우 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-1/4 top-1/4 size-72 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 size-72 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="space-y-8">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span className="sm:hidden">OPEN TO WORK · SRE</span>
            <span className="hidden sm:inline">
              OPEN TO WORK · SITE RELIABILITY ENGINEERING
            </span>
          </div>

          <h1
            className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            인프라에 낭만을
            <br />
            더하는 개발자, <span className="text-gradient">정택준</span>
          </h1>

          <p
            className="animate-fade-up mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            한밭대학교 컴퓨터공학과 학부생이고, SRE를 지향합니다.
            <br className="hidden sm:block" />
            서비스를 관측하고, 장애의 원인을 끝까지 추적하고, 운영을
            자동화하는 일을 좋아합니다.
          </p>

          <div
            className="animate-fade-up flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Button asChild size="lg" className="rounded-full">
              <Link href="/projects">
                프로젝트 보기
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/#contact">
                <Mail />
                이메일 보내기
              </Link>
            </Button>
          </div>

          <div
            className="animate-fade-up flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground/70"
            style={{ animationDelay: "400ms" }}
          >
            {TECH_STACK.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-16">
        <p className="mb-3 font-mono text-sm text-primary">{"// what i do"}</p>
        <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          이런 걸 합니다
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-border/60 bg-card/30 p-7 backdrop-blur-sm transition-colors hover:border-primary/40">
            <Activity className="mb-4 size-8 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">
              Monitoring &amp; Observability
            </h3>
            <p className="text-sm text-muted-foreground">
              Netdata → Prometheus → Grafana로 이어지는 메트릭 파이프라인과
              알림 체계를 설계하고 운영합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/30 p-7 backdrop-blur-sm transition-colors hover:border-primary/40">
            <Siren className="mb-4 size-8 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">Incident Response</h3>
            <p className="text-sm text-muted-foreground">
              장애가 나면 로그로 원인을 끝까지 추적하고, 같은 장애가 반복되지
              않도록 기록을 남깁니다.
            </p>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/30 p-7 backdrop-blur-sm transition-colors hover:border-primary/40">
            <Shield className="mb-4 size-8 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">Network &amp; Security</h3>
            <p className="text-sm text-muted-foreground">
              방화벽·VPN·IDS/IPS를 운영하며 팀의 사설 네트워크를 안전하게
              유지합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/30 p-7 backdrop-blur-sm transition-colors hover:border-primary/40 md:col-span-2">
            <Terminal className="mb-4 size-8 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">
              이 홈페이지도 셀프호스팅 인프라에서 돌아갑니다
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              지금 보고 계신 이 사이트는 낭만인프라 팀이 함께 구축한 셀프호스팅
              인프라 위에서 돌아갑니다. main 브랜치에 push하면 빌드부터
              배포까지 자동으로 이어집니다.
            </p>
            <p className="font-mono text-xs text-muted-foreground/70">
              git push → Jenkins → Harbor → Watchtower → 배포 완료
            </p>
          </div>

          <Link
            href="https://github.com/iamtaekjun"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-3xl border border-border/60 bg-card/30 p-7 backdrop-blur-sm transition-colors hover:border-primary/40"
          >
            <Github className="size-8 text-primary" />
            <div>
              <div className="mb-1 flex items-center gap-1 text-lg font-semibold">
                GitHub
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="text-sm text-muted-foreground">@iamtaekjun</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 py-16 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-sm text-primary">{"// contact"}</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              같이 일해보고 싶다면,
              <br />
              편하게 연락주세요.
            </h2>
            <p className="mb-8 text-muted-foreground">
              프로젝트 제안, 채용, 스터디, 커피챗 모두 환영합니다. 폼을 작성해
              보내시면 제 메일함으로 바로 도착합니다.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:taekjunnnn@nangman.cloud"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                taekjunnnn@nangman.cloud
              </a>
              <a
                href="https://github.com/iamtaekjun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4 text-primary" />
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
