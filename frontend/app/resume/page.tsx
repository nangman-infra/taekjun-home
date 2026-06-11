import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="mb-3 font-mono text-sm text-primary">{"// resume"}</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Resume
        </h1>
        <p className="text-lg text-muted-foreground">
          이력서를 다운로드하거나 온라인으로 확인할 수 있습니다.
        </p>
      </div>

      {/* Download Section */}
      <div className="mb-12 rounded-lg border bg-muted/50 p-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold">이력서 다운로드</h2>
        <p className="mb-6 text-muted-foreground">
          PDF 형식의 이력서를 다운로드할 수 있습니다.
        </p>
        <Button size="lg">이력서 다운로드 (PDF)</Button>
      </div>

      {/* Resume Content */}
      <div className="space-y-12">
        {/* 학력 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">학력</h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-6">
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
            <div className="rounded-lg border p-6">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-xl font-semibold">낭만인프라</h3>
                <span className="text-sm text-muted-foreground">활동 중</span>
              </div>
              <p className="mb-2 text-muted-foreground">
                온프레미스·AWS 하이브리드 셀프호스팅 인프라 구축 및 운영 팀
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>OPNsense 방화벽 운영 및 Suricata 기반 IDS/IPS 구성</li>
                <li>
                  WireGuard·IPsec으로 팀원 서버 30여 대와 AWS VPC를 단일 사설
                  네트워크로 연결
                </li>
                <li>
                  Netdata → Prometheus → Grafana 모니터링 파이프라인 구축 및
                  Zabbix 연동
                </li>
                <li>Grafana 알림 템플릿 개선 (NoData 상황 분기 처리)</li>
                <li>
                  서버 장애 로그 분석 및 트러블슈팅, Ansible 기반 운영 자동화
                </li>
              </ul>
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
                {["OPNsense", "WireGuard", "Prometheus", "Grafana", "Zabbix"].map(
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
          <div className="rounded-lg border p-6">
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
