import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

type Props = {
  activeSection: string;
  onLinkClick: (id: string) => void;
};

export default function Navbar({ activeSection, onLinkClick }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 xl:px-24">
        <button
          type="button"
          onClick={() => onLinkClick("home")}
          className="text-xl font-bold tracking-tight text-slate-100"
        >
          Salma.
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onLinkClick(item.id)}
              className={`text-sm font-medium transition duration-200 ${
                activeSection === item.id
                  ? "text-accent"
                  : "text-slate-400 hover:text-slate-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-300 transition hover:border-accent hover:text-accent md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <AiOutlineClose size={22} />
          ) : (
            <AiOutlineMenu size={22} />
          )}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-white/10 bg-slate-950/95 px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onLinkClick(item.id);
                  setMenuOpen(false);
                }}
                className={`text-left text-base font-medium transition ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-slate-300 hover:text-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
