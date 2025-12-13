import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    title: "프로젝트 1",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    tags: ["AWS", "Docker", "Python"],
    github: "https://github.com/iamtaekjun",
  },
  {
    id: 2,
    title: "프로젝트 2",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    tags: ["Node.js", "NestJS", "PostgreSQL"],
    github: "https://github.com/iamtaekjun",
  },
  {
    id: 3,
    title: "프로젝트 3",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    tags: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/iamtaekjun",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
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

            {/* GitHub Link */}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                GitHub →
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
