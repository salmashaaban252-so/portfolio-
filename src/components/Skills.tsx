import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import {
  SiCplusplus,
  SiSharp,
  SiPython,
  SiGit,
  SiCanva,
  SiTensorflow,
} from "react-icons/si";

const categories = [
  {
    id: "web",
    title: "Web Development",
    icon: FaHtml5,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Front-End Development",
    ],
  },
  {
    id: "programming",
    title: "Programming",
    icon: SiCplusplus,
    items: ["C++", "C#", "Python", "Problem Solving"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: SiGit,
    items: ["Git", "GitHub", "Canva"],
  },
  {
    id: "ai",
    title: "AI & Cybersecurity",
    icon: SiTensorflow,
    items: ["AI Fundamentals", "Cybersecurity Fundamentals"],
  },
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-soft backdrop-blur-xl">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.45em] text-blue-300/80">
            Skills
          </p>
          <h2 className="section-title mt-3">
            Professional technical skillset.
          </h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                whileHover={{ scale: 1.03 }}
                className="skill-card rounded-2xl border border-white/6 bg-gradient-to-br from-slate-900/70 to-slate-900/50 p-6 shadow-soft transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="skill-icon flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900/60 text-blue-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {cat.items.length} skills
                    </p>
                  </div>
                </div>

                <ul className="mt-5 grid gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/6 bg-slate-900/50 px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-900/70 hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
