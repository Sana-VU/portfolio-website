import { Helmet } from "react-helmet-async";
import { author, skills, experience } from "@/content/site";

export default function CV() {
  return (
    <div className="mx-auto max-w-3xl bg-white text-slate-900 p-8 print:p-0">
      <Helmet>
        <title>CV · {author.name}</title>
      </Helmet>
      <style>{`@page{ size:A4; margin: 1.2cm; } @media print { .no-print { display:none } }`}</style>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{author.name}</h1>
          <p className="text-sm">{author.tagline}</p>
          <p className="text-sm">
            {author.location} · {author.email}
          </p>
        </div>
        <a
          href="/"
          className="no-print inline-flex h-10 items-center rounded-xl border border-slate-300 px-4 text-sm hover:border-accent hover:text-accent"
        >
          Back
        </a>
      </header>
      <section className="mt-6">
        <h2 className="font-semibold">Skills</h2>
        <p className="text-sm">{skills.join(" · ")}</p>
      </section>
      <section className="mt-4">
        <h2 className="font-semibold">Experience</h2>
        <ul className="text-sm space-y-2">
          {experience.map((e, i) => (
            <li key={i}>
              <strong>{e.role}</strong> — {e.company}{" "}
              <span className="text-slate-500">({e.period})</span>
              <ul className="list-disc pl-5">
                {e.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
