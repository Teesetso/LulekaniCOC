import Link from "next/link";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Blog & News</h1>
      <div className="grid gap-4">
        {blogPosts.map((post) => (
          <article key={post.slug} className="glass-card p-5">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-slate-300">{post.publishedAt} • {post.author}</p>
            <p className="mt-2">{post.excerpt}</p>
            <Link className="mt-3 inline-block text-cyan-300 underline" href={`/blog/${post.slug}`}>
              Read Article
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
