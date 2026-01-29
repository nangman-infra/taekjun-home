import Link from "next/link";

interface VelogPost {
  title: string;
  description: string;
  date: string;
  tags: string[];
  link: string;
}

async function fetchVelogPosts(): Promise<VelogPost[]> {
  const res = await fetch("https://v2.velog.io/rss/@iamtaekjun", {
    next: { revalidate: 3600 },
  });

  const xml = await res.text();

  const items: VelogPost[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];

    const title =
      itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ?? "";
    const link = itemXml.match(/<link>(.*?)<\/link>/)?.[1] ?? "";
    const pubDate = itemXml.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";
    const desc =
      itemXml.match(
        /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/
      )?.[1] ?? "";

    const tags: string[] = [];
    const catRegex = /<category><!\[CDATA\[(.*?)\]\]><\/category>/g;
    let catMatch;
    while ((catMatch = catRegex.exec(itemXml)) !== null) {
      tags.push(catMatch[1]);
    }

    // 날짜 포맷팅
    const dateObj = new Date(pubDate);
    const date = `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, "0")}.${String(dateObj.getDate()).padStart(2, "0")}`;

    // description에서 HTML 태그 제거 후 150자로 자르기
    const cleanDesc = desc.replace(/<[^>]*>/g, "").slice(0, 150);

    items.push({
      title,
      description: cleanDesc ? cleanDesc + "..." : "",
      date,
      tags,
      link,
    });
  }

  return items;
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
            key={post.link}
            className="group rounded-lg border p-6 transition-all hover:shadow-md"
          >
            <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
              <time>{post.date}</time>
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
            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
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
