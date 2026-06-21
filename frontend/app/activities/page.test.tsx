import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ActivitiesPage from "@/app/activities/page";

describe("Activities page", () => {
  it("제목과 활동 목록을 렌더링한다", () => {
    render(<ActivitiesPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Activities" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Ansible become 타임아웃 인시던트 대응 (Ubuntu 26.04 sudo-rs)",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("모니터링 파이프라인 구축")).toBeInTheDocument();
  });

  it("임팩트와 기술 스택을 렌더링한다", () => {
    render(<ActivitiesPage />);

    expect(screen.getByText(/3일간 패치 자동화가 실패하던/)).toBeInTheDocument();
    expect(screen.getAllByText("Impact").length).toBeGreaterThan(0);
    expect(screen.getByText("sudo-rs")).toBeInTheDocument();
  });
});
