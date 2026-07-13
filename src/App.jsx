import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { about, profile, projects, skills } from "./data";
import portrait from "./assets/prachi.jpg";
import "./App.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

function App() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const selected = projects.find((p) => p.id === activeProject) ?? projects[0];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="site">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <header className="nav">
        <a className="nav-brand" href="#top">
          {profile.name}
        </a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-atmosphere" aria-hidden="true">
            <div className="hero-glow hero-glow-a" />
            <div className="hero-glow hero-glow-b" />
            <div className="hero-grid" />
            <div className="hero-orb" />
          </div>

          <div className="hero-content">
            <motion.p
              className="hero-role"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
            >
              {profile.role} · {profile.company}
            </motion.p>

            <motion.h1
              className="hero-name"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
            >
              {profile.name}
            </motion.h1>

            <motion.p
              className="hero-tagline"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
            >
              <a className="btn btn-primary" href="#work">
                View projects
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-mark"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-mark-label">Building</span>
            <ul className="hero-mark-list">
              <li>Products</li>
              <li>Platforms</li>
              <li>Growth stacks</li>
            </ul>
          </motion.div>
        </section>

        <section id="about" className="section about">
          <div className="section-inner">
            <div className="about-layout">
              <motion.div
                className="about-photo"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={portrait}
                  alt={`${profile.name}, Full Stack Developer`}
                />
              </motion.div>

              <div className="about-text">
                <motion.div
                  className="section-heading"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                >
                  <p className="eyebrow">About</p>
                  <h2>Full stack builder with a growth mindset.</h2>
                </motion.div>

                <div className="about-grid">
                  {about.paragraphs.map((text, i) => (
                    <motion.p
                      key={text}
                      className="about-copy"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.4 }}
                      variants={fadeUp}
                      custom={i}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>

                <motion.p
                  className="about-education"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                  custom={2}
                >
                  <span>Education</span>
                  {about.education.degree} · {about.education.school}
                  <em>
                    {about.education.years} · CGPA {about.education.cgpa}
                  </em>
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-inner">
            <motion.div
              className="section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <p className="eyebrow">Selected work</p>
              <h2>Projects I've built and shipped.</h2>
            </motion.div>

            <div className="work-layout">
              <div className="work-list" role="tablist" aria-label="Projects">
                {projects.map((project, i) => (
                  <motion.button
                    key={project.id}
                    role="tab"
                    aria-selected={activeProject === project.id}
                    className={`work-item ${
                      activeProject === project.id ? "is-active" : ""
                    }`}
                    onClick={() => setActiveProject(project.id)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    custom={i}
                  >
                    <span className="work-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="work-item-copy">
                      <span className="work-item-name">{project.name}</span>
                      <span className="work-item-type">{project.type}</span>
                    </span>
                  </motion.button>
                ))}
              </div>

              <motion.article
                key={selected.id}
                className="work-detail"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="work-detail-type">{selected.type}</p>
                <h3>{selected.name}</h3>
                <p className="work-detail-summary">{selected.summary}</p>
                <ul className="work-detail-list">
                  {selected.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="work-stack">
                  {selected.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {selected.url && (
                  <a
                    className="btn btn-primary work-link"
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit live site
                  </a>
                )}
              </motion.article>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-inner">
            <motion.div
              className="section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <p className="eyebrow">Expertise</p>
              <h2>Frontend, backend, and the measurement layer.</h2>
            </motion.div>

            <div className="skills-grid">
              {skills.map((group, i) => (
                <motion.div
                  key={group.title}
                  className="skill-block"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  custom={i}
                >
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-inner contact-inner">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <p className="eyebrow">Contact</p>
              <h2>Let's build something useful.</h2>
              <p className="contact-copy">
                Open to collaborations, product builds, and conversations about
                full-stack work and growth analytics.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a className="btn btn-ghost" href={`tel:+91${profile.phone}`}>
                  +91 {profile.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          {profile.role} at {profile.company}
        </p>
      </footer>
    </div>
  );
}

export default App;
