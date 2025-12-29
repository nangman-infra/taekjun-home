import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      {/* Hero Section */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            안녕하세요,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              정택준
            </span>
            입니다.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            한밭대학교 컴퓨터공학과 학부생
            <br />
            클라우드 인프라와 네트워크 기술에 관심이 많습니다.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">프로젝트 보기</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">자기소개</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="border-t py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-semibold">Email</h3>
            <a
              href="mailto:jtj72272503@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              jtj72272503@gmail.com
            </a>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">GitHub</h3>
            <a
              href="https://github.com/iamtaekjun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              @iamtaekjun
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
