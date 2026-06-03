import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

const projects = [
  {
    title: "To Do List",
    description:
      "A responsive task management application that allows users to create, edit, organize, and delete tasks through a clean and intuitive user interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://salmashaaban252-so.github.io/to-do-list/",
    github: "https://github.com/salmashaaban252-so/to-do-list",
    features: ["Add tasks", "Edit tasks", "Delete tasks", "Responsive design"],
  },
  {
    title: "Contact Us",
    description:
      "A modern and responsive contact page designed to provide a seamless user experience with clean design principles and form validation.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://salmashaaban252-so.github.io/contact-us/",
    github: "https://github.com/salmashaaban252-so/contact-us",
    features: [
      "Modern UI",
      "Form validation",
      "Responsive layout",
      "Mobile-friendly design",
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing skills, projects, certifications, and technical journey.",
    tech: ["React", "Tailwind", "Three.js"],
    live: "#",
    github: "#",
    features: ["Coming soon"],
  },
];

export default function Projects() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-soft backdrop-blur-xl">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.45em] text-blue-300/80">
            Projects
          </p>
          <h2 className="section-title mt-3">
            Selected work with polished interactions.
          </h2>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="glass-card overflow-hidden rounded-[28px] border border-white/10 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-2 hover:shadow-glow"
            whileHover={{ y: -6 }}
          >
            <div className="relative mb-6 h-44 overflow-hidden rounded-3xl bg-blue-500/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_35%)]" />
              <div className="absolute inset-0 flex items-center justify-center text-sm uppercase tracking-[0.45em] text-slate-500">
                Screenshot Placeholder
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  {project.title}
                </h3>
                <p className="mt-3 text-slate-400">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700/90 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                {project.features.map((feature) => (
                  <p key={feature} className="text-sm text-slate-400">
                    • {feature}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
                >
                  <FaGlobe className="mr-2" /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
