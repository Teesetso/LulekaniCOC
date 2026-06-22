import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="glass-card space-y-3 p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-slate-300">{post.publishedAt} • {post.author}</p>
      <p>{post.content}</p>
    </article>
  );
}
