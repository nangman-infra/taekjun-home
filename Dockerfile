FROM node:22-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.26.1 --activate

FROM base AS deps
WORKDIR /app

COPY pnpm-workspace.yaml ./
COPY frontend/package.json ./frontend/
COPY pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile --filter frontend

FROM base AS builder
WORKDIR /app

COPY pnpm-workspace.yaml ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/pnpm-lock.yaml* ./
COPY frontend/ ./frontend/

# pnpm install을 다시 실행하여 frontend의 node_modules 심볼릭 링크 생성
RUN pnpm install --frozen-lockfile --filter frontend

WORKDIR /app/frontend

ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/frontend/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/frontend/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/frontend/.next/static ./frontend/.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

WORKDIR /app
CMD ["node", "frontend/server.js"]

