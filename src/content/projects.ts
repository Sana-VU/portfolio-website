import type { Project } from "@/components/ProjectCard";

export const featuredProjects: Project[] = [
  {
    title: "Pakistan Job Portal (MERN)",
    summary:
      "JWT auth, admin/user dashboards, job posting & apply, MongoDB + Mongoose.",
    stack: ["React", "Node", "Express", "MongoDB", "JWT"],
    repo: "https://github.com/you/job-portal",
    demo: "https://your-demo.example",
    highlights: ["Role-based access", "Search/filters", "Cloudinary uploads"],
    image: "/images/projects/job-portal.jpg",
  },
  {
    title: "Estate Office ERP Modules",
    summary: "Case tracking, e-Office integrations, reporting dashboards.",
    stack: ["Node", "Express", "MySQL", "Bootstrap"],
    repo: "#",
    demo: "#",
    highlights: ["Govt workflows", "Secure auth", "CSV/PDF exports"],
    image: "/images/projects/erp.jpg",
  },
  {
    title: "e-Office Integrations",
    summary: "Bridging legacy systems with modern REST services.",
    stack: ["Node", "Express", "JWT"],
    repo: "#",
    demo: "#",
    image: "/images/projects/integration.jpg",
  },
  {
    title: "Dashboard UI Kit",
    summary: "Tailwind components for admin dashboards.",
    stack: ["React", "Tailwind"],
    repo: "#",
    demo: "#",
    image: "/images/projects/ui-kit.jpg",
  },
  {
    title: "Gov Data Explorer",
    summary: "Open data visualizations with charts and filters.",
    stack: ["React", "TypeScript"],
    repo: "#",
    demo: "#",
    image: "/images/projects/data.jpg",
  },
  {
    title: "Forms & Auth Boilerplate",
    summary: "Reusable auth and forms with validation.",
    stack: ["React", "Node"],
    repo: "#",
    demo: "#",
    image: "/images/projects/forms.jpg",
  },
];
