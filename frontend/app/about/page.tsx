export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">About Me</h1>
        <p className="text-lg text-muted-foreground">
          한밭대학교 컴퓨터공학과 학부생으로, 클라우드 인프라와 DevOps에 관심이 많습니다.
        </p>
      </div>

      {/* 관심 분야 */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">관심 분야</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-6">
            <div className="mb-2 text-2xl">☁️</div>
            <h3 className="mb-2 font-semibold">Cloud Infrastructure</h3>
            <p className="text-sm text-muted-foreground">
              AWS, Naver Cloud Platform을 활용한 클라우드 인프라 구축
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="mb-2 text-2xl">🐳</div>
            <h3 className="mb-2 font-semibold">Container & DevOps</h3>
            <p className="text-sm text-muted-foreground">
              Docker를 활용한 컨테이너 기반 애플리케이션 배포
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="mb-2 text-2xl">🔄</div>
            <h3 className="mb-2 font-semibold">CI/CD Automation</h3>
            <p className="text-sm text-muted-foreground">
              자동화된 배포 파이프라인 구축 및 운영
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="mb-2 text-2xl">💻</div>
            <h3 className="mb-2 font-semibold">Backend Development</h3>
            <p className="text-sm text-muted-foreground">
              Python, Java 기반 백엔드 서비스 개발
            </p>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">기술 스택</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Cloud Platforms</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                AWS
              </span>
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                Naver Cloud Platform
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
                Docker
              </span>
              <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                GitHub Actions
              </span>
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                Nginx
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                Python
              </span>
              <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-200">
                Java
              </span>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                JavaScript/TypeScript
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Backend Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                Node.js
              </span>
              <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                NestJS
              </span>
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                Spring Boot
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Database</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                PostgreSQL
              </span>
              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
                MySQL
              </span>
              <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-200">
                Redis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 학습 중 / 관심 기술 */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">학습 중 / 관심 기술</h2>
        <div className="rounded-lg border bg-muted/50 p-6">
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
                <span className="font-medium">Terraform</span>
                <p className="text-sm text-muted-foreground">
                  Infrastructure as Code (IaC) 도구 학습 예정
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎯</span>
              <div>
                <span className="font-medium">CI/CD Pipeline</span>
                <p className="text-sm text-muted-foreground">
                  Jenkins, ArgoCD를 활용한 파이프라인 구축 학습 예정
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
