import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      // SonarQube가 저장소 루트 기준으로 분석하므로 lcov 경로도 루트 기준(frontend/...)으로 출력
      reporter: ["text", ["lcov", { projectRoot: ".." }]],
      reportsDirectory: "./coverage",
    },
  },
});
