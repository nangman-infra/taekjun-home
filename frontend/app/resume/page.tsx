import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Resume</h1>
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

        {/* 경력 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">경력</h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-6">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-xl font-semibold">프로젝트 경험</h3>
                <span className="text-sm text-muted-foreground">
                  2024.01 - 현재
                </span>
              </div>
              <p className="mb-2 text-muted-foreground">
                클라우드 인프라 및 DevOps 프로젝트
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>AWS 기반 인프라 구축</li>
                <li>Docker 컨테이너화</li>
                <li>CI/CD 파이프라인 구성</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">기술 스택</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-3 font-semibold">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  AWS
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                  Naver Cloud Platform
                </span>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
                  Docker
                </span>
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  Python
                </span>
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-200">
                  Java
                </span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  JavaScript/TypeScript
                </span>
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
                  href="mailto:jtj72272503@gmail.com"
                  className="text-primary hover:underline"
                >
                  jtj72272503@gmail.com
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
