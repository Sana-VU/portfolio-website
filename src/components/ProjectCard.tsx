import { motion } from "framer-motion";
import Card from "./Card";
import Badge from "./ui/Badge";

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  repo?: string;
  demo?: string;
  highlights?: string[];
  image?: string;
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article whileHover={{ y: -4 }} className="rounded-xl">
      <Card className="overflow-hidden rounded-xl border border-slate-200/70 bg-base shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-accent/60 dark:border-slate-800 dark:bg-slate-900">
        {p.image && (
          <img
            src={p.image}
            alt={p.title}
            className="h-40 w-full object-cover"
            loading="lazy"
          />
        )}
        <div className="p-5">
          <h3 className="font-heading text-lg text-primary dark:text-white">
            {p.title}
          </h3>
          <p className="mt-1 text-sm text-secondary dark:text-slate-300">
            {p.summary}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            {p.repo && (
              <a
                className="inline-flex h-10 items-center rounded-xl border border-slate-300 px-4 text-sm hover:border-accent hover:text-accent dark:border-slate-700"
                href={p.repo}
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            )}
            {p.demo && (
              <a
                className="inline-flex h-10 items-center rounded-xl bg-accent px-4 text-sm font-medium text-dark hover:bg-accent/90"
                href={p.demo}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
