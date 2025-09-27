const metaModules = import.meta.glob("/src/content/posts/*.mdx", {
  eager: true,
}) as Record<string, any>;
import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import PostCard, { type PostMeta } from "@/components/PostCard";
import { useMemo, useState } from "react";

function toMeta(mod: any, slug: string): PostMeta {
  const fm = mod.frontmatter || {};
  return {
    slug,
    title: fm.title ?? slug,
    date: fm.date ?? new Date().toISOString(),
    summary: fm.summary ?? "",
    tags: fm.tags ?? [],
  };
}

const posts: PostMeta[] = Object.entries(metaModules)
  .map(([path, mod]) => {
    const slug = path.split("/").pop()!.replace(".mdx", "");
    return toMeta(mod, slug);
  })
  .sort((a, b) => +new Date(b.date) - +new Date(a.date));

export default function Blog() {
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      posts.filter((p) =>
        (p.title + p.summary + p.tags?.join(" "))
          .toLowerCase()
          .includes(q.toLowerCase())
      ),
    [q]
  );
  return (
    <div>
      <Helmet>
        <title>Blog · MSI</title>
        <meta
          name="description"
          content="Posts on MERN, GovTech, and web engineering."
        />
      </Helmet>
      <Section title="Blog" subtitle="Thoughts and notes">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search posts..."
          className="w-full md:w-80 rounded border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2"
          aria-label="Search posts"
        />
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>
    </div>
  );
}
