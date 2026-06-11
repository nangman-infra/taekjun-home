"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "sending" | "success" | "error";

const FIELD_CLASS =
  "w-full rounded-xl border border-border/60 bg-card/50 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring/40";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error ?? "메일 전송에 실패했습니다.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-border/60 bg-card/30 p-6 backdrop-blur-sm sm:p-8"
    >
      {/* 스팸 봇 차단용 honeypot — 사람에게는 보이지 않는 필드 */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
            이름
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="홍길동"
            className={FIELD_CLASS}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
            답장 받을 이메일
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={200}
            placeholder="you@example.com"
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
          메시지
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          placeholder="프로젝트 제안, 채용, 커피챗 등 어떤 이야기든 환영해요."
          className={`${FIELD_CLASS} resize-none`}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="w-full rounded-full"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="animate-spin" />
            전송 중...
          </>
        ) : (
          <>
            <Send />
            메일 보내기
          </>
        )}
      </Button>

      {status === "success" && (
        <p className="text-center text-sm text-primary" role="status">
          메일이 전송되었습니다. 빠르게 답변드릴게요!
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
