import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import { experience } from "@/content/site";

export default function Experience() {
  return (
    <div>
      <Helmet>
        <title>Experience · MSI</title>
      </Helmet>
      <Section title="Experience">
        <ol className="relative ml-5 border-s-2 border-slate-200 dark:border-slate-800">
          {experience.map((item, idx) => (
            <li key={idx} className="mb-10 ms-6">
              <span
                className="absolute -start-3 mt-2 block h-3 w-3 rounded-full border-2 border-accent bg-base"
                aria-hidden
              />
              <h3 className="font-heading text-lg text-primary dark:text-white">
                {item.role} · {item.company}
              </h3>
              <p className="text-xs text-secondary">{item.period}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
