import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  about,
  experience,
  profile,
  projects,
  skills,
  stats,
} from "./data";
import portrait from "./assets/prachi-portrait.webp";
import "./App.css";

const ease = [0.22, 1, 0.36, 1];

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Icon({ name }) {
  const paths = {
    external: (
      <>
        <path d="M14 4h6v6" />
        <path d="M20 4 11 13" />
        <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
      </>
    ),
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
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    moon: <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />,
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

const DARK_QUERY = "(prefers-color-scheme: dark)";

function readSavedTheme() {
  try {
    const t = localStorage.getItem("theme");
    return t === "light" || t === "dark" ? t : null;
  } catch {
    return null;
  }
}

/** Light/dark theme: system preference until the visitor picks one with the toggle. */
function useTheme() {
  const [saved, setSaved] = useState(readSavedTheme);
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia?.(DARK_QUERY).matches ?? false,
  );

  useEffect(() => {
    const mq = window.matchMedia?.(DARK_QUERY);
    if (!mq) return undefined;
    const sync = () => setSystemDark(mq.matches);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const theme = saved ?? (systemDark ? "dark" : "light");

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setSaved(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage blocked (private mode): the choice lasts for this visit only.
    }
  };

  return { theme, toggle };
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <Icon name={isDark ? "sun" : "moon"} />
    </button>
  );
}

function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** Real screenshot of the live site in a quiet browser frame (+ optional phone). */
function Screens({ project, priority = false }) {
  return (
    <div className={`screens ${project.mobile ? "has-phone" : ""}`}>
      <figure className="browser">
        <div className="browser-bar" aria-hidden="true">
          <span className="browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser-url">{domainOf(project.url)}</span>
        </div>
        <img
          src={project.image}
          alt={`${project.name} home page, desktop`}
          width="1440"
          height="900"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </figure>
      {project.mobile && (
        <figure className="phone">
          <img
            src={project.mobile}
            alt={`${project.name} on a phone`}
            width="390"
            height="844"
            loading="lazy"
            decoding="async"
          />
        </figure>
      )}
    </div>
  );
}

function CaseStudy({ project, index }) {
  return (
    <article
      className={`case ${index % 2 ? "is-flipped" : ""}`}
      style={{ "--accent": project.accent }}
    >
      <div className="case-text">
        <p className="case-type">{project.type}</p>
        <h3>{project.name}</h3>
        <p className="case-summary">{project.summary}</p>
        <h4>What I built</h4>
        <ul className="case-points">
          {project.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="case-stack">
          <span className="sr-only">Built with </span>
          {project.stack.join(", ")}
        </p>
        <a
          className="text-link"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit {domainOf(project.url)} <Icon name="external" />
        </a>
      </div>
      <Screens project={project} priority={index === 0} />
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="card" style={{ "--accent": project.accent }}>
      <a
        className="card-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="card-shot">
          <img
            src={project.image}
            alt={`${project.name} home page`}
            width="1440"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="card-body">
          <h3>
            {project.name} <Icon name="external" />
          </h3>
          <p className="card-type">{project.type}</p>
          <p>{project.summary}</p>
          <p className="case-stack">{project.stack.join(", ")}</p>
        </div>
      </a>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { theme, toggle: toggleTheme } = useTheme();

  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // One orchestrated entrance for the hero; everything else is static.
  const enter = (i) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease, delay: 0.08 * i },
        };

  return (
    <div className="site">
      <a className="skip-link" href="#work">
        Skip to work
      </a>

      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="nav-brand" href="#top">
            {profile.name}
          </a>
          <nav
            id="site-menu"
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
            aria-label="Main"
          >
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
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a className="btn btn-dark btn-sm nav-cta" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <button
            className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <motion.p className="hero-status" {...enter(0)}>
                <span className="status-dot" aria-hidden="true" />
                {profile.role} at {profile.company}, open to new projects
              </motion.p>
              <motion.h1 {...enter(1)}>
                I build and ship full-stack products that real businesses run
                on.
              </motion.h1>
              <motion.p className="hero-intro" {...enter(2)}>
                {profile.tagline}
              </motion.p>
              <motion.div className="hero-actions" {...enter(3)}>
                <a className="btn btn-dark" href="#work">
                  See the work
                </a>
                <a className="btn btn-line" href={`mailto:${profile.email}`}>
                  <Icon name="mail" /> {profile.email}
                </a>
              </motion.div>
              <motion.dl className="facts" {...enter(4)}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            <motion.figure
              className="portrait"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, scale: 0.97 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.9, ease, delay: 0.15 },
                  })}
            >
              <img
                src={portrait}
                alt={`${profile.name}`}
                width="660"
                height="825"
              />
              <figcaption>
                {profile.name}
                <span>Based in {profile.location}</span>
              </figcaption>
            </motion.figure>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <div className="section-head">
              <h2>Selected work</h2>
              <p>
                Live products I designed, built and maintain. Every screen below
                is a real capture of the site in production.
              </p>
            </div>

            <div className="cases">
              {featured.map((project, i) => (
                <CaseStudy key={project.id} project={project} index={i} />
              ))}
            </div>

            {more.length > 0 && (
              <>
                <h3 className="subhead">More in production</h3>
                <div className="cards">
                  {more.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <section id="about" className="section section-mist">
          <div className="container about-grid">
            <div className="section-head">
              <h2>About</h2>
            </div>
            <div className="about-body">
              {about.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <dl className="skills">
                {skills.map((group) => (
                  <div key={group.title}>
                    <dt>{group.title}</dt>
                    <dd>{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container about-grid">
            <div className="section-head">
              <h2>Experience</h2>
            </div>
            <ol className="timeline">
              {experience.map((item) => (
                <li key={item.title}>
                  <p className="timeline-period">{item.period}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-org">{item.org}</p>
                    <ul>
                      {item.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <h2>Have a product to build or a team to join? Let's talk.</h2>
            <p className="contact-copy">
              Open to full-time roles, freelance product builds and analytics
              setups.
            </p>
            <div className="contact-actions">
              <a className="btn btn-light" href={`mailto:${profile.email}`}>
                <Icon name="mail" /> {profile.email}
              </a>
              <a className="btn btn-ghost-light" href={`tel:+91${profile.phone}`}>
                <Icon name="phone" /> +91 {profile.phone}
              </a>
            </div>
            <div className="contact-social">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Icon name="github" /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            {about.education.degree}, {about.education.school} (
            {about.education.years}), CGPA {about.education.cgpa}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
