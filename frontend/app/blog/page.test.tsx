import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import BlogPage from "@/app/blog/page";

const POSTS = [
  {
    title: "OPNsense 방화벽 운영기",
    short_description: "방화벽 운영하면서 배운 것들",
    thumbnail: null,
    released_at: "2026-06-01T00:00:00.000Z",
    tags: ["opnsense", "sre"],
    url_slug: "opnsense-post",
  },
  {
    title: "모니터링 파이프라인 구축기",
    short_description: "Netdata, Prometheus, Grafana",
    thumbnail: null,
    released_at: "2026-05-15T00:00:00.000Z",
    tags: [],
    url_slug: "monitoring-post",
  },
];

describe("Blog page", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("velog 포스트 목록을 렌더링한다", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: async () => ({ data: { posts: POSTS } }),
      }),
    );

    render(await BlogPage());

    expect(screen.getByText("OPNsense 방화벽 운영기")).toBeInTheDocument();
    expect(screen.getByText("2026.06.01")).toBeInTheDocument();
    expect(screen.getByText("opnsense")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /모니터링 파이프라인 구축기/ }),
    ).toHaveAttribute(
      "href",
      "https://velog.io/@iamtaekjun/monitoring-post",
    );
  });
});
