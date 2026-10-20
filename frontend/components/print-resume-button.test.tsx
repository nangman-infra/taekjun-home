import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PrintResumeButton } from "@/components/print-resume-button";

describe("PrintResumeButton", () => {
  it("누르면 브라우저 인쇄 창을 연다", () => {
    const print = vi.spyOn(window, "print").mockImplementation(() => {});
    render(<PrintResumeButton />);

    fireEvent.click(screen.getByRole("button", { name: /이력서 출력/ }));

    expect(print).toHaveBeenCalledOnce();
    print.mockRestore();
  });
});
