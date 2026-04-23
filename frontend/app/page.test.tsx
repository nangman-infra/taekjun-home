import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("taekjun home", () => {
  it("renders intro and contact links", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("정택준");
    expect(screen.getByRole("link", { name: "프로젝트 보기" })).toHaveAttribute("href", "/projects");
    expect(screen.getByText("@iamtaekjun")).toBeInTheDocument();
  });
});
