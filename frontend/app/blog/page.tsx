import Link from "next/link";

const BLOG_POSTS = [
  {
    id: 1,
    title: "블로그 포스트 제목 1",
    description: "블로그 포스트 설명이 들어갈 자리입니다.",
    date: "2024.12.13",
    tags: ["AWS", "DevOps"],
  },
  {
    id: 2,
    title: "블로그 포스트 제목 2",
    description: "블로그 포스트 설명이 들어갈 자리입니다.",
    date: "2024.12.10",
    tags: ["Docker", "Kubernetes"],
  },
  {
    id: 3,
    title: "블로그 포스트 제목 3",
    description: "블로그 포스트 설명이 들어갈 자리입니다.",
    date: "2024.12.05",
    tags: ["Python", "Backend"],
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="text-lg text-muted-foreground">
          개발 경험과 학습 내용을 기록합니다.
        </p>
      </div>

      {/* Blog Posts List */}
      <div className="space-y-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="group rounded-lg border p-6 transition-all hover:shadow-md"
          >
            <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
              <time>{post.date}</time>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link href={`/blog/${post.id}`} className="block">
              <h2 className="mb-2 text-2xl font-semibold group-hover:text-primary">
                {post.title}
              </h2>
              <p className="text-muted-foreground">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
