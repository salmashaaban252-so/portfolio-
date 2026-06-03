import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const certificates = [
  {
    id: "c1",
    title: "Introduction to Programming with C++ – Level 1",
    category: "Programming",
    description: "Foundational C++ programming concepts and problem solving.",
  },
  {
    id: "c2",
    title: "Introduction to Programming with C++ – Level 2",
    category: "Programming",
    description: "Advanced C++ topics and practical implementations.",
  },
  {
    id: "c3",
    title: "C# – Level 1",
    category: "Programming",
    description: "Basics of C# and object-oriented programming.",
  },
  {
    id: "c4",
    title: "Programming Foundations",
    category: "Programming",
    description: "Core programming principles and algorithms.",
  },
  {
    id: "c5",
    title: "Algorithms & Problem Solving",
    category: "Programming",
    description: "Algorithmic thinking and efficient solutions.",
  },
  {
    id: "c6",
    title: "Build with AI: Masr Edition",
    category: "AI & Security",
    description: "Practical AI project experience and applications.",
  },
  {
    id: "c7",
    title: "AI-Driven Security (Sentinel Agent)",
    category: "AI & Security",
    description: "Applied AI techniques in security contexts.",
  },
  {
    id: "c8",
    title: "Innovation Camp",
    category: "Events & Camps",
    description: "Collaborative product design and prototyping.",
  },
  {
    id: "c9",
    title: "Front-End Web Development",
    category: "Web Development",
    description: "Modern front-end development practices and tooling.",
  },
];

const categories = [
  "All",
  "Programming",
  "Web Development",
  "AI & Security",
  "Events & Camps",
];

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState<string | null>(
    null,
  );
  const [filter, setFilter] = useState("All");

  const filtered = certificates.filter((c) =>
    filter === "All" ? true : c.category === filter,
  );

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-soft backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.45em] text-blue-300/80">
            Certificates
          </p>
          <h2 className="section-title mt-3">Achievements & Certifications</h2>
        </div>
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm ${filter === cat ? "bg-primary text-white" : "bg-slate-900/60 text-slate-300 border border-white/6"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((cert) => (
          <motion.button
            key={cert.id}
            type="button"
            onClick={() => setActiveCertificate(cert.id)}
            className="glass-card rounded-[28px] border border-white/8 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-accent"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-100">
                {cert.title}
              </h3>
              <span className="text-xs text-slate-400">{cert.category}</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">{cert.description}</p>
          </motion.button>
        ))}
      </div>

      {activeCertificate && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full max-w-2xl rounded-[20px] border border-white/10 bg-slate-900/95 p-6 shadow-soft">
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActiveCertificate(null)}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-800/80 p-2 text-slate-200"
            >
              <FiX />
            </button>
            {(() => {
              const cert = certificates.find(
                (c) => c.id === activeCertificate,
              )!;
              return (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-100">
                    {cert.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.35em] text-blue-300/80">
                    {cert.category}
                  </p>
                  <p className="mt-2 text-slate-300">{cert.description}</p>
                </div>
              );
            })()}
          </div>
        </motion.div>
      )}
    </div>
  );
}
