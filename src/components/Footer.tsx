import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-10 text-slate-400 md:px-10 xl:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-200">© 2026 Salma Shaaban</p>
          <p className="mt-2 text-sm text-slate-400">
            Designed & Developed by Salma Shaaban
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-300">
          <a
            href="https://github.com/salmashaaban252-so"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/salma-shaaban-ibrahim-bb66a837b"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:salma.shaaban1972@gmail.com" aria-label="Email">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
