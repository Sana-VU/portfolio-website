import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/content/projects";

export default function Projects() {
  return (
    <div>
      <Helmet>
        <title>Projects · MSI</title>
        <meta
          name="description"
          content="Featured projects by Muhammad Shahid Imtiaz."
        />
      </Helmet>
      <Section title="Projects" subtitle="Selected work">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.slice(0, 6).map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>
    </div>
  );
}
