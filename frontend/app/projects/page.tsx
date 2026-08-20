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
    tags: ["OPNsense", "WireGuard", "Zabbix", "Grafana", "Ansible"],
    link: "https://nangman.cloud",
    linkLabel: "Website",
  },
  {
    id: 4,
    title: "클라우드스퀘어 현장실습 (NCP 인프라)",
    description:
      "클라우드스퀘어 현장실습에서 Naver Cloud Platform(NCP) 기반 클라우드 인프라를 설계·구축했습니다. 3-Tier 아키텍처로 서비스를 구현하고, 나라장터 공공 RFP를 분석해 요구사항에 맞는 LMS 인프라까지 구축했습니다.",
    tags: ["NCP", "3-Tier", "Linux", "MySQL", "Prometheus", "Grafana"],
    link: "https://velog.io/@iamtaekjun/클라우드스퀘어-현장실습-2차-과제",
    linkLabel: "velog",
  },
  {
    id: 5,
    title: "Budgetly",
    description:
      "Azure Document Intelligence OCR로 영수증을 자동 인식해 조직 예산을 관리하는 PWA입니다. 백엔드 개발을 맡아 FastAPI 기반 REST API, OCR·PDF 리포트 연동, Firebase 데이터 연동을 구현했습니다. 국립한밭대학교 오픈소스 활용SW 경진대회 1등 수상작입니다.",
    tags: ["FastAPI", "Vue.js", "Firebase", "Azure OCR", "PWA", "AWS EC2"],
    link: "https://github.com/iamtaekjun/ossw-competition25-yee",
    linkLabel: "GitHub",
  },
  {
    id: 6,
    title: "SmartCoolParasol (SP!ED2025)",
    description:
      "한·중·일 학생이 모인 국제 캡스톤디자인 프로젝트입니다. 재생에너지 기반 스마트 파라솔로, 폭염 시 그늘과 물 분사로 주변 기온을 낮추고 강우 감지 시 각도를 높여 빗물을 수집합니다. 2인 소프트웨어 팀에서 Arduino/C++ 임베디드 제어(강우 감지 로직, 모드별 서보 제어, 센서 통합)를 담당했습니다. Gold Award(2등) 수상작입니다.",
    tags: ["Arduino", "C++", "IoT", "임베디드", "국제 캡스톤"],
    link: "https://github.com/iamtaekjun/SPEID2025_SmartCoolParasol",
    linkLabel: "GitHub",
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
