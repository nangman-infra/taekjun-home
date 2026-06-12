import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AboutPage from "@/app/about/page";

describe("About page", () => {
  it("SRE 지향 소개와 관심 분야를 렌더링한다", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "About Me" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/SRE\(Site Reliability Engineer\)/)).toBeInTheDocument();
    expect(screen.getByText("Incident Response")).toBeInTheDocument();
  });

  it("낭만인프라 활동 하이라이트를 렌더링한다", () => {
    render(<AboutPage />);

    expect(screen.getByText("낭만인프라 활동")).toBeInTheDocument();
    expect(screen.getByText("모니터링 파이프라인 구축")).toBeInTheDocument();
    expect(screen.getByText("장애 분석 & 트러블슈팅")).toBeInTheDocument();
  });

  it("기술 스택과 학습 중 항목을 렌더링한다", () => {
    render(<AboutPage />);

    expect(screen.getByText("Prometheus")).toBeInTheDocument();
    expect(screen.getByText("OPNsense")).toBeInTheDocument();
    expect(screen.getByText("SLO/SLI 기반 신뢰성 운영")).toBeInTheDocument();
  });
});
