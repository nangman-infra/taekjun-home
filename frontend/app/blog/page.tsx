import Image from "next/image";
import Link from "next/link";

interface VelogPost {
  title: string;
  short_description: string;
  thumbnail: string | null;
  released_at: string;
  tags: string[];
  url_slug: string;
}

async function fetchVelogPosts(): Promise<VelogPost[]> {
  const res = await fetch("https://velog.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          posts(username: "iamtaekjun") {
            title
            short_description
            thumbnail
            released_at
            tags
            url_slug
          }
        }
      `,
    }),
    next: { revalidate: 3600 },
  });

  const json = await res.json();
  return json.data.posts;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export default async function BlogPage() {
  const posts = await fetchVelogPosts();

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
        {posts.map((post) => (
          <article
            key={post.url_slug}
            className="group overflow-hidden rounded-lg border transition-all hover:shadow-md"
          >
            <Link
              href={`https://velog.io/@iamtaekjun/${post.url_slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row"
            >
              {/* Thumbnail */}
              {post.thumbnail && (
                <div className="relative h-48 w-full shrink-0 sm:h-auto sm:w-52">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 208px"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center p-6">
                <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <time>{formatDate(post.released_at)}</time>
                  {post.tags.length > 0 && (
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
                  )}
                </div>
                <h2 className="mb-2 text-2xl font-semibold group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">
                  {post.short_description}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
