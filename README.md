# 낭만 개인 홈페이지

포트폴리오용 개인 홈페이지 프로젝트

## 기술 스택

### Frontend
- **Framework**: Next.js 15.x (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: shadcn/ui
- **Package Manager**: pnpm

## 주요 기능

- 자기소개 페이지
- 프로젝트 소개
- 블로그 (MDX 기반)
- 이력서 다운로드

## 시작하기

```bash
# 의존성 설치
cd frontend
pnpm install

# 개발 서버 실행 (http://localhost:3000)
pnpm dev

# 빌드
pnpm build

# 프로덕션 실행
pnpm start
```

## 프로젝트 구조

```
nangman-homepage/
├── frontend/                    # Next.js 프론트엔드
│   ├── app/                    # App Router 페이지
│   ├── components/             # 공통 UI 컴포넌트
│   ├── domains/                # Feature별 도메인 구조
│   │   ├── about/             # 자기소개 페이지
│   │   ├── projects/          # 프로젝트 소개
│   │   ├── blog/              # 블로그 (MDX)
│   │   │   └── posts/         # 블로그 포스트
│   │   └── resume/            # 이력서
│   ├── lib/                    # 유틸리티 함수
│   ├── public/                 # 정적 파일
│   │   ├── images/            # 이미지
│   │   └── files/             # 다운로드 파일 (이력서 등)
│   ├── .env.example            # 환경변수 템플릿
│   └── package.json
├── .claude/                    # Claude Code 설정
│   └── instructions            # AI 가이드라인
├── .gitignore
├── README.md
└── pnpm-workspace.yaml         # pnpm monorepo 설정
```
