"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrintResumeButton() {
  return (
    <Button variant="outline" onClick={() => globalThis.print()}>
      <Printer />
      이력서 출력 / PDF 저장
    </Button>
  );
}
