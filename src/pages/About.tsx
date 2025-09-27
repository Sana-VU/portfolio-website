import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import { author, skills, services } from "@/content/site";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About · MSI</title>
      </Helmet>
      <Section title="About">
        <p className="max-w-3xl">{author.bio}</p>
      </Section>
      <Section title="Skills">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {skills.map((s) => (
            <li
              key={s}
              className="px-3 py-2 rounded border border-slate-200 dark:border-slate-800"
            >
              {s}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Services">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="card p-5">
              <h3 className="font-semibold">{s.title}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
