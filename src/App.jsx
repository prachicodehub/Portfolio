import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  about,
  experience,
  profile,
  projects,
  skills,
  stats,
} from "./data";
import Avatar3D from "./Avatar3D";
import ProjectVisual from "./ProjectVisual";
import portrait from "./assets/prachi.jpg";
import avatar3d from "./assets/prachi-3d-avatar.png";
import "./App.css";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.7, ease },
  }),
};

const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.25 },
  variants: fadeUp,
};

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

function Icon({ name }) {
  const paths = {
    arrow: <path d="M7 17 17 7M8 7h9v9" />,
    github: (
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    ),
  };
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function ProjectCard({ project, index, large }) {
  return (
    <motion.article
      className={`project-card ${large ? "is-large" : ""}`}
      style={{ "--accent": project.accent }}
      {...reveal}
      custom={index}
    >
      <ProjectVisual id={project.id} />
      <div className="project-body">
        <div className="project-meta">
          <span className="project-type">{project.type}</span>
          {project.url ? (
            <span className="project-status is-live">Live</span>
          ) : (
            <span className="project-status">Private build</span>
          )}
        </div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        {large && (
          <ul className="project-points">
            {project.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className="project-footer">
          <div className="tags">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          {project.url && (
            <a
              className="project-link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name}`}
            >
              Visit <Icon name="arrow" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <motion.div className="section-heading" {...reveal}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-lede">{children}</p>}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="nav-brand" href="#top" aria-label="Home">
            <span className="nav-logo">PK</span>
            <span className="nav-name">{profile.name}</span>
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
            <a
              className="nav-cta-mobile"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let's talk
            </a>
          </nav>
          <a className="btn btn-sm btn-primary nav-cta" href="#contact">
            Let's talk
          </a>
          <button
            className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-grid" />
            <div className="hero-glow" />
          </div>

          <div className="container hero-layout">
            <div className="hero-content">
              <motion.p
                className="status-chip"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0}
              >
                <span className="status-dot" />
                {profile.role} at {profile.company}
              </motion.p>

              <motion.h1
                className="hero-title"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
              >
                Hi, I'm {profile.firstName}. I build products that{" "}
                <em>ship, scale & sell.</em>
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
                  View my work <Icon name="arrow" />
                </a>
                <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
                  <Icon name="mail" /> Email me
                </a>
              </motion.div>

              <motion.div
                className="hero-social"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={4}
              >
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Icon name="github" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Icon name="linkedin" />
                </a>
                <span className="hero-social-note">Based in {profile.location}</span>
              </motion.div>
            </div>

            <Avatar3D src={avatar3d} alt={`${profile.name} 3D avatar`} />
          </div>

          <div className="container">
            <motion.ul
              className="stats"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
            >
              {stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Selected work"
              title="Products I've designed, built and shipped."
            >
              From food ordering to enterprise operations and fashion retail —
              full-stack builds that run real businesses.
            </SectionHeading>

            <div className="featured-grid">
              {featured.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} large />
              ))}
            </div>

            <motion.h3 className="subheading" {...reveal}>
              More projects
            </motion.h3>
            <div className="more-grid">
              {more.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container about-layout">
            <motion.div
              className="about-photo"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease }}
            >
              <img src={portrait} alt={`${profile.name}, ${profile.role}`} />
            </motion.div>

            <div className="about-text">
              <SectionHeading
                eyebrow="About"
                title="Full-stack builder with a growth mindset."
              />
              {about.paragraphs.map((text, i) => (
                <motion.p key={text} className="about-copy" {...reveal} custom={i}>
                  {text}
                </motion.p>
              ))}
              <motion.div className="about-edu" {...reveal} custom={2}>
                <span className="about-edu-label">Education</span>
                <strong>
                  {about.education.degree} · {about.education.school}
                </strong>
                <span>
                  {about.education.years} · CGPA {about.education.cgpa}
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container narrow">
            <SectionHeading eyebrow="Experience" title="Where I've been." />
            <ol className="timeline">
              {experience.map((item, i) => (
                <motion.li key={item.title} {...reveal} custom={i}>
                  <span className="timeline-period">{item.period}</span>
                  <div className="timeline-body">
                    <h3>{item.title}</h3>
                    <p className="timeline-org">{item.org}</p>
                    <ul>
                      {item.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <SectionHeading
              eyebrow="Expertise"
              title="Full stack, DevOps and growth measurement."
            />
            <div className="skills-grid">
              {skills.map((group, i) => (
                <motion.div
                  key={group.title}
                  className="skill-card"
                  {...reveal}
                  custom={i}
                >
                  <span className="skill-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{group.title}</h3>
                  <div className="tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <motion.div className="contact-card" {...reveal}>
              <p className="eyebrow">Contact</p>
              <h2>
                Have a product in mind? <em>Let's build it.</em>
              </h2>
              <p className="contact-copy">
                Open to collaborations, product builds, and conversations about
                full-stack work and growth analytics.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  <Icon name="mail" /> {profile.email}
                </a>
                <a className="btn btn-ghost" href={`tel:+91${profile.phone}`}>
                  <Icon name="phone" /> +91 {profile.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React.
          </p>
          <div className="footer-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
