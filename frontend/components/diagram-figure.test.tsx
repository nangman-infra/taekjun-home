import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { DiagramFigure } from "@/components/diagram-figure";

const diagram = {
  src: "/diagrams/test.webp",
  alt: "테스트 아키텍처",
  width: 800,
  height: 400,
  caption: "테스트 캡션",
};

describe("DiagramFigure", () => {
  it("다이어그램과 캡션을 렌더링한다", () => {
    render(<DiagramFigure diagram={diagram} />);

    expect(screen.getAllByAltText("테스트 아키텍처").length).toBeGreaterThan(0);
    expect(screen.getByText("테스트 캡션")).toBeInTheDocument();
  });

  it("썸네일을 누르면 확대 dialog를 연다", () => {
    // jsdom은 HTMLDialogElement.showModal을 구현하지 않는다
    const showModal = vi.fn();
    HTMLDialogElement.prototype.showModal = showModal;
    render(<DiagramFigure diagram={diagram} />);

    fireEvent.click(
      screen.getByRole("button", { name: "테스트 아키텍처 크게 보기" }),
    );

    expect(showModal).toHaveBeenCalled();
  });

  it("닫기 버튼을 누르면 dialog를 닫는다", () => {
    const close = vi.fn();
    HTMLDialogElement.prototype.close = close;
    render(<DiagramFigure diagram={diagram} />);

    fireEvent.click(screen.getByRole("button", { name: "닫기", hidden: true }));

    expect(close).toHaveBeenCalled();
  });
});
