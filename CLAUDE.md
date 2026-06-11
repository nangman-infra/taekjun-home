# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

개인 포트폴리오 홈페이지 (nangman.cloud). pnpm 워크스페이스 모노레포이며, 현재 워크스페이스는 `frontend/` (Next.js) 하나뿐이다. 모든 애플리케이션 코드는 `frontend/` 안에 있다.

추가 행동 규칙은 `.claude/instructions`에 있다 — 한국어로 응답할 것, 사용자가 명시적으로 요청하지 않은 코드는 수정하지 말 것, 절대경로 기반으로 CLI를 사용할 것 등이 핵심이다.

## 작업 규칙

작업에 필요한 범위를 넘어서 기능을 추가하거나, 리팩터링하거나, 새로운 추상화를 만들지 마세요. 버그 수정에는 주변 코드 정리가 꼭 필요하지 않고, 한 번만 하는 작업에는 보통 별도의 helper가 필요하지 않습니다. 있을지 없을지 모르는 미래 요구사항을 위해 설계하지 말고, 잘 작동하는 가장 단순한 방법을 선택하세요. 일어날 수 없는 상황을 위한 에러 처리, 대체 경로, 검증을 추가하지 마세요. 검증은 사용자 입력이나 외부 API처럼 시스템 경계에서만 하세요. 코드를 바로 바꿀 수 있다면 feature flag나 하위 호환성용 임시 장치를 만들지 마세요.

## 주요 명령어

모든 명령은 `frontend/` 디렉토리에서 실행한다 (패키지 매니저: pnpm 10.x):

```bash
cd frontend
pnpm install        # 의존성 설치
pnpm dev            # 개발 서버 (http://localhost:3000)
pnpm build          # 프로덕션 빌드
pnpm start          # 프로덕션 서버 실행
pnpm lint           # ESLint (v9 flat config, eslint-config-next)
```

테스트 프레임워크는 없다.

## 기술 스택

- Next.js 16 (App Router, React 19), TypeScript, Tailwind CSS v4 (PostCSS 플러그인 방식, 별도 tailwind.config 없음 — 테마는 `app/globals.css`의 CSS 변수로 정의)
- shadcn/ui (new-york 스타일, `components/ui/`에 생성됨), lucide-react 아이콘
- 경로 별칭: `@/*` → `frontend/` 루트 (예: `@/components/navigation`, `@/lib/utils`)

## 아키텍처

- `frontend/app/` — App Router 페이지: `/`(홈), `/about`, `/projects`, `/blog`, `/resume`. 모두 서버 컴포넌트.
- `frontend/components/` — 공통 컴포넌트 (`navigation.tsx`, `footer.tsx`), `components/ui/`는 shadcn/ui 생성 컴포넌트.
- `frontend/lib/utils.ts` — `cn()` (clsx + tailwind-merge).
- `app/layout.tsx` — 전역 레이아웃: Navigation/Footer 배치, 자체 호스팅 analytics 스크립트(analytics.nangman.cloud) 로드.

### 블로그 (velog 연동)

`app/blog/page.tsx`는 velog의 공개 GraphQL API(`https://velog.io/graphql`, username `iamtaekjun`)에서 포스트 목록을 가져온다 (ISR, `revalidate: 3600`). 로컬 MDX 포스트는 없다. 썸네일 도메인 `velog.velcdn.com`은 `next.config.ts`의 `images.remotePatterns`에 허용되어 있다 — 외부 이미지 도메인을 추가할 때는 이 파일을 수정해야 한다.

### 빌드 / 배포 파이프라인

- `next.config.ts`의 `output: 'standalone'`은 Dockerfile이 의존한다 (`node frontend/server.js`로 실행). 이 설정을 제거하면 Docker 빌드가 깨진다.
- Dockerfile은 멀티스테이지 빌드로, 루트의 `pnpm-workspace.yaml`/`pnpm-lock.yaml`을 기준으로 `--filter frontend` 설치를 한다. `frontend/package.json` 의존성 변경 시 루트 lockfile도 함께 커밋해야 한다.
- CI/CD: GitHub push → (smee webhook) → Jenkins Generic Trigger (`nangman-trigger` 토큰, repo URL이 `home|blog-web` 매칭 시 실행) → Docker Buildx로 amd64/arm64 크로스플랫폼 빌드 → Harbor(harbor.nangman.cloud/library)에 push → Watchtower가 자동 배포. 빌드 결과는 Mattermost로 알림.

## 환경변수

`frontend/.env.example` 참고 — 모두 `NEXT_PUBLIC_*` (앱 이름, 개인 정보, GitHub URL 등). 비밀값은 없으며 빌드 타임에 인라인된다.
