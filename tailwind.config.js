export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#0f172a",
        backdrop: "#020617",
        primary: "#2563eb",
        accent: "#38bdf8",
        glow: "#60a5fa",
      },
      boxShadow: {
        glow: "0 0 50px rgba(56,189,248,0.20)",
        soft: "0 30px 80px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        radial:
          "radial-gradient(circle at top, rgba(56,189,248,0.15), transparent 30%), radial-gradient(circle at 80% 10%, rgba(56,189,248,0.12), transparent 18%)",
      },
    },
  },
  plugins: [],
};
