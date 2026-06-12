import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/contact-form";

function fillAndSubmit() {
  fireEvent.change(screen.getByLabelText("이름"), {
    target: { value: "홍길동" },
  });
  fireEvent.change(screen.getByLabelText("답장 받을 이메일"), {
    target: { value: "hong@example.com" },
  });
  fireEvent.change(screen.getByLabelText("메시지"), {
    target: { value: "안녕하세요, 커피챗 제안드립니다." },
  });
  fireEvent.click(screen.getByRole("button", { name: "메일 보내기" }));
}

describe("ContactForm", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("이름/이메일/메시지 입력 필드와 전송 버튼을 렌더링한다", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText("이름")).toBeInTheDocument();
    expect(screen.getByLabelText("답장 받을 이메일")).toBeInTheDocument();
    expect(screen.getByLabelText("메시지")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "메일 보내기" }),
    ).toBeInTheDocument();
  });

  it("전송에 성공하면 성공 메시지를 보여준다", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: true, json: async () => ({ ok: true }) }),
    );
    render(<ContactForm />);

    fillAndSubmit();

    expect(
      await screen.findByText(/메일이 전송되었습니다/),
    ).toBeInTheDocument();
  });

  it("서버가 에러를 반환하면 해당 에러 메시지를 보여준다", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({ error: "메일 서버가 아직 설정되지 않았습니다." }),
      }),
    );
    render(<ContactForm />);

    fillAndSubmit();

    expect(
      await screen.findByText("메일 서버가 아직 설정되지 않았습니다."),
    ).toBeInTheDocument();
  });

  it("네트워크 오류가 나면 기본 에러 메시지를 보여준다", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new TypeError("Failed to fetch")),
    );
    render(<ContactForm />);

    fillAndSubmit();

    expect(await screen.findByRole("alert")).toBeInTheDocument();
  });
});
