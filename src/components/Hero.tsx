import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import profilePhoto from "../assets/profile.jpg";
import ParticleBackground from "./ParticleBackground";

const stats = [
  { label: "Experience", value: "Web Developer" },
  { label: "Focus", value: "AI & Cybersecurity" },
  { label: "Commitment", value: "Continuous Learning" },
];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const transformStyles = useMemo(
    () => ({
      transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)`,
    }),
    [mouse],
  );

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 p-6 shadow-soft backdrop-blur-xl md:p-10">
      <ParticleBackground />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.45em] text-blue-300/80">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl font-semibold leading-tight text-slate-100 md:text-6xl">
              Salma Shaaban
            </h1>
            <p className="max-w-2xl text-slate-300">
              Computer Science Student | Web Developer
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-blue-400/10 bg-slate-900/70 p-6 shadow-glow">
            <p className="text-slate-300">
              Passionate about building responsive, user-friendly, and
              interactive web applications while exploring Artificial
              Intelligence and Cybersecurity.
            </p>
            <p className="text-slate-300">
              Currently focused on improving my development skills through
              projects, certifications, and continuous learning.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
            <a href="#contact" className="secondary-btn">
              Download CV
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="glass-card p-5 text-sm">
                <p className="font-semibold text-slate-100">{item.value}</p>
                <p className="mt-2 text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setMouse({
              x: ((event.clientX - rect.left) / rect.width - 0.5) * 8,
              y: ((event.clientY - rect.top) / rect.height - 0.5) * 6,
            });
          }}
          className="relative mx-auto flex max-w-md justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-800/8 via-transparent to-transparent" />
          <motion.div
            className="relative flex h-80 w-80 items-center justify-center rounded-full sm:h-96 sm:w-96"
            style={transformStyles}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="profile-ring relative flex h-64 w-64 items-center justify-center rounded-full border border-blue-400/15 bg-slate-900/30 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:h-72 sm:w-72">
              <div className="h-56 w-56 overflow-hidden rounded-full bg-slate-950 sm:h-64 sm:w-64">
                <img
                  src={profilePhoto}
                  alt="Salma Shaaban"
                  className="h-full w-full object-cover"
                  width={256}
                  height={256}
                />
              </div>
              <div className="absolute -inset-1 rounded-full ring-profile" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
