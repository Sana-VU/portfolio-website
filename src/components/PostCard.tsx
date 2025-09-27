import Card from "./Card";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
};

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Card>
      <a
        href={`/blog/${post.slug}`}
        className="block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
      >
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="text-xs text-slate-500 mt-1">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
          {post.summary}
        </p>
        {post.tags && (
          <div className="mt-3 flex gap-2 flex-wrap">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </a>
    </Card>
  );
}
