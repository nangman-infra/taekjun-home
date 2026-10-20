// 히어로 하단의 장식용 메트릭 그래프 선. 실제 데이터가 아닌 모티프다.
const METRIC_PATH =
  "M0 40 L120 40 L135 37 L150 40 L230 40 L240 18 L250 52 L260 32 L270 40 L380 40 L392 35 L404 40 L470 40 L478 24 L486 47 L494 40 L600 40";

export function MetricPulse() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 60"
      preserveAspectRatio="none"
      className="h-12 w-full overflow-visible print:hidden"
    >
      <path
        d={METRIC_PATH}
        pathLength={1000}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
        className="text-foreground/15"
      />
      <path
        d={METRIC_PATH}
        pathLength={1000}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeDasharray="80 2000"
        vectorEffect="non-scaling-stroke"
        className="animate-pulse-travel text-foreground drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
      />
    </svg>
  );
}
