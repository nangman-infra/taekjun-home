import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ProjectsPage from "@/app/projects/page";

describe("Projects page", () => {
  it("프로젝트 카드들을 렌더링한다", () => {
    render(<ProjectsPage />);

    expect(screen.getByText("NCP-UNIV")).toBeInTheDocument();
    expect(screen.getByText("PublicIs-MOA")).toBeInTheDocument();
    expect(screen.getByText("낭만인프라 (Nangman Infra)")).toBeInTheDocument();
  });

  it("낭만인프라 카드는 팀 홈페이지로 연결된다", () => {
    render(<ProjectsPage />);

    expect(screen.getByRole("link", { name: /Website/ })).toHaveAttribute(
      "href",
      "https://nangman.cloud",
    );
  });
});
