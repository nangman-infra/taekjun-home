import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { MetricPulse } from "@/components/metric-pulse";

describe("MetricPulse", () => {
  it("스크린리더에서 숨겨진 장식용 그래프 선을 렌더링한다", () => {
    const { container } = render(<MetricPulse />);

    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg?.querySelectorAll("path")).toHaveLength(2);
  });
});
