import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "certificates",
  "education",
  "contact",
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [loaded, setLoaded] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1200);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.2 },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
      sectionRefs.current[id] = element;
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".section-fade", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".section-fade",
          start: "top 85%",
          end: "bottom top",
          scrub: false,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pageVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
      exit: { opacity: 0, y: -10, transition: { duration: 0.4 } },
    }),
    [],
  );

  return (
    <div className="relative overflow-x-hidden bg-backdrop text-slate-100">
      <AnimatePresence>{!loaded && <Loader key="loader" />}</AnimatePresence>

      <motion.div
        className={loaded ? "opacity-100" : "pointer-events-none opacity-0"}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
      >
        <Navbar activeSection={activeSection} onLinkClick={handleNavClick} />
        <main className="relative overflow-hidden">
          <section
            id="home"
            className="relative min-h-screen px-6 pb-20 pt-28 md:px-10 xl:px-24"
          >
            <Hero />
          </section>

          <section
            id="about"
            className="section-fade px-6 pb-24 md:px-10 xl:px-24"
          >
            <About />
          </section>

          <section
            id="skills"
            className="section-fade px-6 pb-24 md:px-10 xl:px-24"
          >
            <Skills />
          </section>

          <section
            id="projects"
            className="section-fade px-6 pb-24 md:px-10 xl:px-24"
          >
            <Projects />
          </section>

          <section
            id="certificates"
            className="section-fade px-6 pb-24 md:px-10 xl:px-24"
          >
            <Certificates />
          </section>

          <section
            id="education"
            className="section-fade px-6 pb-24 md:px-10 xl:px-24"
          >
            <Education />
          </section>

          <section
            id="contact"
            className="section-fade px-6 pb-20 md:px-10 xl:px-24"
          >
            <Contact />
          </section>
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
