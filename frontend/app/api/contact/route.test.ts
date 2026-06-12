import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendMail = vi.hoisted(() => vi.fn());

vi.mock("nodemailer", () => ({
  default: { createTransport: vi.fn(() => ({ sendMail })) },
}));

import { POST } from "@/app/api/contact/route";

const VALID_BODY = {
  name: "홍길동",
  email: "hong@example.com",
  message: "안녕하세요, 문의드립니다.",
};

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function stubSmtpEnv() {
  vi.stubEnv("SMTP_HOST", "smtp.example.com");
  vi.stubEnv("SMTP_USER", "user");
  vi.stubEnv("SMTP_PASS", "pass");
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    sendMail.mockReset();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("JSON이 아닌 본문이면 400을 반환한다", async () => {
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      body: "not-json",
    });

    const res = await POST(req);

    expect(res.status).toBe(400);
  });

  it("honeypot 필드가 채워져 있으면 메일을 보내지 않고 정상 응답한다", async () => {
    const res = await POST(makeRequest({ ...VALID_BODY, company: "bot" }));

    expect(res.status).toBe(200);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it.each([
    ["이름이 비어 있으면", { ...VALID_BODY, name: "  " }],
    ["이메일 형식이 잘못되면", { ...VALID_BODY, email: "not-an-email" }],
    ["메시지가 비어 있으면", { ...VALID_BODY, message: "" }],
  ])("%s 400을 반환한다", async (_label, body) => {
    const res = await POST(makeRequest(body));

    expect(res.status).toBe(400);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("SMTP가 설정되지 않았으면 503을 반환한다", async () => {
    vi.stubEnv("SMTP_HOST", "");
    vi.stubEnv("SMTP_USER", "");
    vi.stubEnv("SMTP_PASS", "");

    const res = await POST(makeRequest(VALID_BODY));

    expect(res.status).toBe(503);
  });

  it("정상 요청이면 메일을 보내고 200을 반환한다", async () => {
    stubSmtpEnv();
    sendMail.mockResolvedValue(undefined);

    const res = await POST(makeRequest(VALID_BODY));

    expect(res.status).toBe(200);
    expect(sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        replyTo: "hong@example.com",
        subject: expect.stringContaining("홍길동"),
      }),
    );
  });

  it("메일 발송이 실패하면 502를 반환한다", async () => {
    stubSmtpEnv();
    sendMail.mockRejectedValue(new Error("smtp down"));
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const res = await POST(makeRequest(VALID_BODY));

    expect(res.status).toBe(502);
    consoleError.mockRestore();
  });
});
