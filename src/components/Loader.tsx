import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-backdrop text-slate-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="flex min-h-[160px] w-full max-w-sm flex-col items-center justify-center gap-6 rounded-3xl border border-white/8 bg-slate-900/90 p-6 shadow-soft">
        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            Salma Shaaban
          </p>
          <h1 className="text-xl font-semibold text-slate-100">
            Preparing portfolio
          </h1>
        </div>
        <div className="w-full">
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <motion.div
              className="h-2 rounded-full bg-gradient-to-r from-blue-600 via-accent to-primary"
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "0%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
