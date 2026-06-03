import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const stats = [
  { label: "Projects Completed", max: 3 },
  { label: "Certificates Earned", max: 9 },
  { label: "Technical Skills", max: 10 },
];

function CountCard({ label, max }: { label: string; max: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = window.setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= max) window.clearInterval(interval);
    }, 120);

    return () => window.clearInterval(interval);
  }, [max]);

  return (
    <div className="glass-card rounded-3xl p-6 text-center">
      <p className="text-4xl font-semibold text-slate-100">{count}+</p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}

export default function About() {
  const details = useMemo(
    () => [
      "I am a Computer Science student at Lotus University with a strong passion for Web Development, Artificial Intelligence, and Cybersecurity.",
      "I enjoy transforming ideas into responsive and user-friendly web applications while continuously improving my technical skills through hands-on projects, certifications, and self-learning.",
      "My goal is to grow as a software engineer and contribute to innovative digital solutions that create real value and meaningful user experiences.",
    ],
    [],
  );

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-soft backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-blue-300/80">
              About Me
            </p>
            <h2 className="section-title mt-3">
              I build futuristic web experiences.
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr]">
          <div className="space-y-5">
            {details.map((text, index) => (
              <p key={index} className="text-slate-300 leading-relaxed">
                {text}
              </p>
            ))}
          </div>

          <div className="grid gap-4">
            {stats.map((stat) => (
              <CountCard key={stat.label} label={stat.label} max={stat.max} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
