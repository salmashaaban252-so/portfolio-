import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCopy,
} from "react-icons/fa";

const contacts = [
  {
    id: "email",
    label: "Email",
    value: "salma.shaaban1972@gmail.com",
    icon: FaEnvelope,
    href: "mailto:salma.shaaban1972@gmail.com",
    actionLabel: "Send Email",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+20 155 154 7574",
    icon: FaWhatsapp,
    href: "https://wa.me/201551547574",
    actionLabel: "Message",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "salma-shaaban-ibrahim-bb66a837b",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/salma-shaaban-ibrahim-bb66a837b",
    actionLabel: "View Profile",
  },
  {
    id: "github",
    label: "GitHub",
    value: "salmashaaban252-so",
    icon: FaGithub,
    href: "https://github.com/salmashaaban252-so",
    actionLabel: "View Repo",
  },
  {
    id: "location",
    label: "Location",
    value: "Matay, El Minya, Egypt",
    icon: FaMapMarkerAlt,
    actionLabel: "View",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      window.setTimeout(() => setCopied(null), 1800);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/8 bg-slate-950/60 p-8 shadow-soft backdrop-blur-xl">
      <header className="mb-8">
        <p className="text-sm uppercase tracking-[0.45em] text-blue-300/80">
          Contact Me
        </p>
        <h2 className="section-title mt-3">Get In Touch</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          I&apos;m open to opportunities, collaborations, and mentorship. Choose
          a preferred method below to reach out.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.id}
              whileHover={{ y: -6 }}
              className="glass-card flex flex-col justify-between rounded-2xl border border-white/8 p-6"
            >
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900/60 text-blue-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="mt-1 text-base font-medium text-slate-100 break-words">
                      {item.value}
                    </p>
                  </div>
                </div>

                {item.label === "Location" ? (
                  <p className="mt-4 text-sm text-slate-400">{item.value}</p>
                ) : (
                  <p className="mt-4 text-sm text-slate-400">
                    {item.actionLabel}
                  </p>
                )}
              </div>

              <div className="mt-6 flex items-center gap-3">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-95"
                  >
                    {item.actionLabel}
                  </a>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-800/80"
                  >
                    {item.actionLabel}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => handleCopy(item.value)}
                  aria-label={`Copy ${item.label}`}
                  className="ml-auto rounded-full border border-white/10 bg-slate-900/80 p-2 text-slate-300 transition hover:border-accent hover:text-accent"
                >
                  <FaCopy />
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>

      {copied && (
        <motion.div
          className="fixed bottom-6 right-6 rounded-3xl border border-blue-300/20 bg-slate-950/95 px-5 py-3 text-slate-100 shadow-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          Copied to clipboard.
        </motion.div>
      )}
    </section>
  );
}
