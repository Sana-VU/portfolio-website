import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const modules = import.meta.glob("/src/content/posts/*.mdx");
const metas = import.meta.glob("/src/content/posts/*.mdx", {
  eager: true,
  import: "frontmatter",
}) as Record<string, any>;

function readingTime(text: string) {
  const words = text.split(/\s+/).filter(Boolean).length;
  const min = Math.max(1, Math.round(words / 200));
  return `${min} min read`;
}

export default function Post() {
  const { slug } = useParams();
  const matchPath = useMemo(() => {
    const key = Object.keys(metas).find((p) => p.includes(`/${slug}.mdx`));
    return key;
  }, [slug]);

  if (!matchPath) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  const meta = metas[matchPath] || {};
  const MDXComp = modules[matchPath] as any;

  return (
    <article className="prose-custom">
      <Helmet>
        <title>{meta.title} · Blog</title>
        <meta name="description" content={meta.summary} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.summary} />
        <meta property="og:image" content="/og.png" />
        <link rel="canonical" href={`/blog/${slug}`} />
      </Helmet>
      <h1>{meta.title}</h1>
      <p className="text-sm text-slate-500">
        {new Date(meta.date).toLocaleDateString()} •{" "}
        {readingTime(String(meta.summary || ""))}
      </p>
      {/* @ts-ignore */}
      <MDXComp />
    </article>
  );
}
