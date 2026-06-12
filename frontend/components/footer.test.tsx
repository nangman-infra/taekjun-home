import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Footer } from "@/components/footer";

describe("Footer", () => {
  it("저작권 문구와 연락 링크를 렌더링한다", () => {
    render(<Footer />);

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} 정택준`)),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/iamtaekjun",
    );
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:taekjunnnn@nangman.cloud",
    );
  });
});
