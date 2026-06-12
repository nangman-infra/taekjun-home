import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Navigation } from "@/components/navigation";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Navigation", () => {
  it("주요 페이지로 가는 링크를 렌더링한다", () => {
    render(<Navigation />);

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "href",
      "/blog",
    );
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "href",
      "/resume",
    );
  });

  it("모바일 메뉴 버튼을 누르면 메뉴가 열리고 닫힌다", () => {
    render(<Navigation />);
    const toggle = screen.getByRole("button", { name: "메뉴 열기" });

    fireEvent.click(toggle);
    expect(screen.getAllByRole("link", { name: "Home" })).toHaveLength(2);

    fireEvent.click(toggle);
    expect(screen.getAllByRole("link", { name: "Home" })).toHaveLength(1);
  });

  it("모바일 메뉴에서 링크를 누르면 메뉴가 닫힌다", () => {
    render(<Navigation />);

    fireEvent.click(screen.getByRole("button", { name: "메뉴 열기" }));
    fireEvent.click(screen.getAllByRole("link", { name: "About" })[1]);

    expect(screen.getAllByRole("link", { name: "About" })).toHaveLength(1);
  });
});
