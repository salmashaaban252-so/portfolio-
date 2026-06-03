import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025 - 2029",
    title: "Lotus University",
    subtitle: "Bachelor of Computer Science",
    description:
      "Pursuing a degree in Computer Science with a focus on software engineering, web development, and innovative technology solutions.",
  },
];

export default function Education() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-soft backdrop-blur-xl">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.45em] text-blue-300/80">
          Education
        </p>
        <h2 className="section-title mt-3">
          Academic journey in a modern timeline.
        </h2>
      </div>

      <div className="relative grid gap-8">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/70 via-transparent to-blue-500/10" />
        {timeline.map((item) => (
          <motion.div
            key={item.year}
            className="glass-card relative ml-10 rounded-[32px] border border-white/10 p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="absolute left-[-1.5rem] top-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-200 ring-2 ring-slate-900">
              <span className="text-sm font-semibold">
                {item.year.split(" ")[0]}
              </span>
            </div>
            <span className="text-sm uppercase tracking-[0.35em] text-blue-300/80">
              {item.year}
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-slate-100">
              {item.title}
            </h3>
            <p className="mt-2 text-lg text-slate-200">{item.subtitle}</p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
