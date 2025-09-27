import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { author } from "@/content/site";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>{author.name} · Portfolio</title>
        <meta name="description" content={author.bio} />
        <meta property="og:title" content={`${author.name} · Portfolio`} />
        <meta property="og:description" content={author.bio} />
        <meta property="og:image" content="/og.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: author.name,
            jobTitle: author.tagline,
            url: author.social.website,
            sameAs: [
              author.social.github,
              author.social.linkedin,
              author.social.twitter,
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Islamabad",
              addressCountry: "PK",
            },
          })}
        </script>
      </Helmet>
      <section className="relative overflow-hidden bg-gradient-to-b from-base to-light dark:from-dark dark:to-slate-900">
        <div className="container py-16 md:py-24">
          <p className="text-sm uppercase tracking-wider text-secondary">
            Assistant Director (Programmer) · Islamabad
          </p>
          <h1 className="mt-3 font-heading text-4xl md:text-5xl text-primary dark:text-white">
            {author.name}
          </h1>
          <p className="mt-4 max-w-2xl text-secondary">
            Govt IT officer building ERP/e-Office systems and modern web apps.
            Focused on secure backends, scalable frontends, and digital
            governance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => (location.href = "/projects")}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (location.href = "/contact")}
            >
              Contact
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => (location.href = "/cv")}
            >
              Download CV
            </Button>
          </div>
        </div>
      </section>

      <Section title="Featured Projects" className="mt-10">
        <a href="/projects" className="text-sm text-accent hover:underline">
          View all projects →
        </a>
      </Section>
    </div>
  );
}
