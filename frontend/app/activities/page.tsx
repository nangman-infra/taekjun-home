import { NANGMAN_ACTIVITIES } from "@/lib/activities";

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="mb-3 font-mono text-sm text-primary">{"// activities"}</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Activities
        </h1>
        <p className="text-lg text-muted-foreground">
          낭만인프라에서 직접 수행한 인프라·신뢰성 활동을 최신순으로 정리했습니다.
          각 활동은 문제 → 해결 → 결과(임팩트) 순으로 기록합니다.
        </p>
      </div>

      {/* Activity list */}
      <div className="space-y-6">
        {NANGMAN_ACTIVITIES.map((activity) => (
          <article
            key={activity.title}
            className="rounded-2xl border border-border/60 bg-card/30 p-6 sm:p-8"
          >
            <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
              <h2 className="text-xl font-semibold">{activity.title}</h2>
              {activity.period && (
                <span className="shrink-0 rounded-full border border-border/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                  {activity.period}
                </span>
              )}
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {activity.description}
            </p>

            {activity.impact && (
              <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3">
                <p className="mb-1 font-mono text-xs uppercase tracking-wide text-primary">
                  Impact
                </p>
                <p className="text-sm font-medium text-foreground">
                  {activity.impact}
                </p>
              </div>
            )}

            {activity.stack && activity.stack.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {activity.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
