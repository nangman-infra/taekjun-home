import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    title: "NCP-UNIV",
    description: "ncp professional 과정에서 서비스 아키텍처 설계 및 구현 프로젝트를 진행했습니다.",
    tags: ["NCP", "Kubernetes", "Docker", "Grafana"],
    link: "https://github.com/iamtaekjun/HA_UNIV.git",
    linkLabel: "GitHub",
  },
  {
    id: 2,
    title: "PublicIs-MOA",
    description: "대전시에서 진행한 퍼블릭이즈 프로젝트입니다. 치매인식 개선을 위한 웹/앱 서비스 구현을 진행했습니다.",
    tags: ["Docker", "Next.js", "FastAPI", "PostgreSQL"],
    link: "https://github.com/PublicIsDJ/moa-app",
    linkLabel: "GitHub",
  },
  {
    id: 3,
    title: "낭만인프라 (Nangman Infra)",
    description:
      "팀원들과 온프레미스 서버와 AWS를 하이브리드로 연결해 운영하는 셀프호스팅 인프라 팀입니다. 방화벽·VPN·모니터링·CI/CD를 직접 구축하고, 장애 분석과 운영 자동화까지 담당하고 있습니다.",
    tags: ["OPNsense", "WireGuard", "Prometheus", "Grafana", "Ansible"],
    link: "https://nangman.cloud",
    linkLabel: "Website",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="mb-3 font-mono text-sm text-primary">{"// projects"}</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground">
          진행한 프로젝트들을 소개합니다.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
          >
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* External Link */}
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                {project.linkLabel} →
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
