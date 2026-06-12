import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ResumePage from "@/app/resume/page";

describe("Resume page", () => {
  it("학력과 활동 섹션을 렌더링한다", () => {
    render(<ResumePage />);

    expect(screen.getByText("한밭대학교")).toBeInTheDocument();
    expect(screen.getByText("낭만인프라")).toBeInTheDocument();
    expect(
      screen.getByText(/OPNsense 방화벽 운영 및 Suricata 기반 IDS\/IPS 구성/),
    ).toBeInTheDocument();
  });

  it("연락처에 이메일과 GitHub 링크를 렌더링한다", () => {
    render(<ResumePage />);

    expect(
      screen.getByRole("link", { name: "taekjunnnn@nangman.cloud" }),
    ).toHaveAttribute("href", "mailto:taekjunnnn@nangman.cloud");
    expect(
      screen.getByRole("link", { name: "github.com/iamtaekjun" }),
    ).toBeInTheDocument();
  });
});
