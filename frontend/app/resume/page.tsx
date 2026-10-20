import Link from "next/link";
import { PrintResumeButton } from "@/components/print-resume-button";
import { NANGMAN_ACTIVITIES } from "@/lib/activities";

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 print:mb-8">
        <div>
          <p className="mb-3 font-mono text-xs text-muted-foreground print:hidden">{"// resume"}</p>
          <h1 className="text-3xl font-semibold tracking-tight print:text-3xl">
            Resume
          </h1>
          {/* 인쇄본에만 이름 표기 */}
          <p className="mt-2 hidden text-lg font-medium print:block">
            정택준 · Jeong Taekjun
          </p>
        </div>
        <div className="print:hidden">
          <PrintResumeButton />
        </div>
      </div>

      {/* Resume Content */}
      <div className="space-y-12 print:space-y-8">
        {/* 학력 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">학력</h2>
          <div className="space-y-4">
            <div className="break-inside-avoid rounded-lg border p-6">
              <h3 className="mb-2 text-xl font-semibold">한밭대학교</h3>
              <p className="mb-1 text-muted-foreground">컴퓨터공학과</p>
              <p className="text-sm text-muted-foreground">재학 중</p>
            </div>
          </div>
        </section>

        {/* 활동 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">활동</h2>
          <div className="space-y-4">
            <div className="break-inside-avoid rounded-lg border p-6">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-xl font-semibold">낭만인프라</h3>
                <span className="text-sm text-muted-foreground">활동 중</span>
              </div>
              <p className="mb-2 text-muted-foreground">
                온프레미스·AWS 하이브리드 셀프호스팅 인프라 구축 및 운영 팀
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {NANGMAN_ACTIVITIES.map((activity) => (
                  <li key={activity.title}>
                    {activity.title}
                    {activity.period && (
                      <span className="ml-2 text-xs text-muted-foreground/70">
                        ({activity.period})
                      </span>
                    )}
                    {activity.impact && (
                      <span className="mt-0.5 block pl-5 text-xs font-medium text-primary">
                        {activity.impact}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/activities"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline print:hidden"
              >
                전체 활동 보기 →
              </Link>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">기술 스택</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-3 font-semibold">Network & Monitoring</h3>
              <div className="flex flex-wrap gap-2">
                {["OPNsense", "WireGuard", "Zabbix", "Grafana"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/60 bg-card/50 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">Cloud & Automation</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Naver Cloud Platform", "Docker", "Ansible"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/60 bg-card/50 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "JavaScript/TypeScript"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/60 bg-card/50 px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 연락처 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">연락처</h2>
          <div className="break-inside-avoid rounded-lg border p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="mb-1 font-semibold">Email</h3>
                <a
                  href="mailto:taekjunnnn@nangman.cloud"
                  className="text-primary hover:underline"
                >
                  taekjunnnn@nangman.cloud
                </a>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">GitHub</h3>
                <a
                  href="https://github.com/iamtaekjun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/iamtaekjun
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
