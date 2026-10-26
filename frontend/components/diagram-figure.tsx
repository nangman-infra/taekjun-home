"use client";

import Image from "next/image";
import { useRef } from "react";
import { Maximize2, X } from "lucide-react";

export type Diagram = {
  /** public/ 기준 경로. 예: "/diagrams/psi-pipeline.webp" */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** 그림 아래 한 줄 설명 */
  caption?: string;
};

/**
 * 아키텍처 다이어그램 썸네일. 클릭하면 전체 화면(dialog)으로 확대해 본다.
 * 원본 다이어그램이 흰 배경이라 다크 테마에서도 종이처럼 보이도록 흰 프레임에 담는다.
 */
export function DiagramFigure({ diagram }: { diagram: Diagram }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <figure className="mt-5">
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`${diagram.alt} 크게 보기`}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border/60 bg-white p-3 transition-[border-color,box-shadow] duration-300 hover:border-border hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] sm:p-4"
      >
        <Image
          src={diagram.src}
          alt={diagram.alt}
          width={diagram.width}
          height={diagram.height}
          sizes="(min-width: 768px) 720px, 100vw"
          className="h-auto max-h-80 w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
        />
        <span className="absolute right-2 bottom-2 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[11px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="size-3" aria-hidden />
          확대
        </span>
      </button>
      {diagram.caption && (
        <figcaption className="mt-2 font-mono text-xs text-muted-foreground">
          {diagram.caption}
        </figcaption>
      )}

      <dialog
        ref={dialogRef}
        aria-label={diagram.alt}
        onClick={(e) => {
          // 그림 바깥(backdrop) 클릭 시 닫기
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="m-auto max-h-[92vh] max-w-[min(1200px,94vw)] overflow-auto rounded-2xl bg-white p-4 backdrop:bg-black/80 backdrop:backdrop-blur-sm open:animate-zoom-in"
      >
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="닫기"
          className="sticky top-0 ml-auto flex size-8 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
        >
          <X className="size-4" aria-hidden />
        </button>
        <Image
          src={diagram.src}
          alt={diagram.alt}
          width={diagram.width}
          height={diagram.height}
          sizes="94vw"
          className="h-auto w-full"
        />
      </dialog>
    </figure>
  );
}
