import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_TO = process.env.CONTACT_TO ?? "taekjunnnn@nangman.cloud";
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const { name, email, message, company } = body;

  // honeypot 필드가 채워져 있으면 봇으로 간주하고 조용히 무시
  if (typeof company === "string" && company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    name.trim().length === 0 ||
    name.length > MAX_NAME_LENGTH
  ) {
    return NextResponse.json({ error: "이름을 입력해주세요." }, { status: 400 });
  }
  if (
    typeof email !== "string" ||
    email.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(email)
  ) {
    return NextResponse.json(
      { error: "올바른 이메일 주소를 입력해주세요." },
      { status: 400 },
    );
  }
  if (
    typeof message !== "string" ||
    message.trim().length === 0 ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return NextResponse.json(
      { error: "메시지를 입력해주세요." },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { error: "메일 서버가 아직 설정되지 않았습니다. 잠시 후 다시 시도해주세요." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: SMTP_FROM ?? SMTP_USER,
      to: CONTACT_TO,
      replyTo: email,
      subject: `[포트폴리오 문의] ${name.trim()}님의 메시지`,
      text: `이름: ${name.trim()}\n이메일: ${email}\n\n${message.trim()}`,
    });
  } catch (error) {
    console.error("contact mail send failed:", error);
    return NextResponse.json(
      { error: "메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
