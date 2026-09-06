import React, { useState, useEffect } from "react";
import "./Hero.css";
import heroBgImg1 from "../assets/image/image/file_00000000d8cc81f4bad658f7c8dcaf05.png";
import heroBgImg2 from "../assets/image/image/file_0000000088c481f4978d7ec14c608172.png";
import heroBgImg3 from "../assets/image/image/file_00000000ec048210b99d18f543e3ce9a.png";
import heroImg from "../assets/image/image/profile.jpg";

const heroBgImages = [heroBgImg1, heroBgImg2, heroBgImg3];
import omaAndSonsImg from "../assets/projects/oma-and-sons.png";
import blaarNgoImg from "../assets/projects/blaar-ngo.png";
import dualMarkImg from "../assets/projects/dual-mark-kreative.png";
import agroconnectImg from "../assets/projects/agroconnect.png";
import evolveCoachingImg from "../assets/projects/evolve-coaching.png";
import digitalPoppaImg from "../assets/projects/digital-poppa.png";
import {
  ExternalLink,
  Code2,
  Layers,
  Globe,
  ArrowUpRight,
  Sparkles,
  Database,
  Send,
  Laptop,
  Mail,
  Clock,
  Server,
  Zap
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "fullstack" | "frontend" | "responsive";
  categoryLabel: string;
  tags: string[];
  liveUrl: string;
  image: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "oma-and-sons",
    title: "Oma & Sons Dynamics",
    category: "fullstack",
    categoryLabel: "E-COMMERCE & APPAREL",
    tags: ["React", "E-Commerce", "Tailwind CSS"],
    liveUrl: "https://oma-and-sons-prototype.vercel.app/",
    image: omaAndSonsImg
  },
  {
    id: "blaar-ngo",
    title: "Blaar NGO",
    category: "responsive",
    categoryLabel: "NON-PROFIT PLATFORM",
    tags: ["React", "NGO Platform", "Responsive Web"],
    liveUrl: "https://blaar-ngo.vercel.app/",
    image: blaarNgoImg
  },
  {
    id: "dual-mark-kreative",
    title: "Dual Mark Kreative",
    category: "frontend",
    categoryLabel: "CREATIVE AGENCY",
    tags: ["React", "Creative UI", "Portfolio"],
    liveUrl: "https://dual-mark-kreative-website.vercel.app/",
    image: dualMarkImg
  },
  {
    id: "agroconnect",
    title: "AgroConnect",
    category: "fullstack",
    categoryLabel: "AGRITECH PLATFORM",
    tags: ["React", "AgriTech", "Web Platform"],
    liveUrl: "https://project-agroconnect.vercel.app/",
    image: agroconnectImg
  },
  {
    id: "evolve-coaching",
    title: "Evolve Coaching",
    category: "responsive",
    categoryLabel: "COACHING & MENTORSHIP",
    tags: ["React", "Coaching", "Responsive Layout"],
    liveUrl: "https://evlove-coaching.vercel.app/",
    image: evolveCoachingImg
  },
  {
    id: "digital-poppa",
    title: "Digital Poppa Enterprises",
    category: "fullstack",
    categoryLabel: "ENTERPRISE BUSINESS",
    tags: ["Bootstrap", "Enterprise Portal", "Responsive"],
    liveUrl: "https://digital-poppa-enterprises.vercel.app/",
    image: digitalPoppaImg
  }
];

const serviceOptions = [
  "Full-Stack Development",
  "Frontend Development",
  "Backend & APIs",
  "Responsive Websites"
];

const Hero: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "fullstack" | "frontend" | "responsive"
  >("all");

  // Hero section background image rotator: changes every 10 seconds through the 3 pictures
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBgImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full-Stack Development",
    message: ""
  });

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        service: "Full-Stack Development",
        message: ""
      });
    }, 5000);
  };

  const scrollToSection = (id: string) => {
    setIsNavOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="portfolio-wrapper">
      {/* ---------- Header / Navigation ---------- */}
      <header className={isScrolled ? "header--scrolled" : ""}>
        <nav className="nav">
          <a href="#" className="brand" onClick={() => scrollToSection("top")}>
            <span>Daniel</span>
            <span className="dot">.</span>
          </a>

          <ul className={`nav-links ${isNavOpen ? "mobile-open" : ""}`}>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => scrollToSection("skills")}>
                Skills & Stack
              </a>
            </li>
            <li>
              <a href="#work" onClick={() => scrollToSection("work")}>
                Selected Work
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => scrollToSection("services")}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            className={`nav-cta ${isNavOpen ? "mobile-open" : ""}`}
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk
          </a>

          <button
            className={`burger ${isNavOpen ? "open" : ""}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* ---------- Hero Section ---------- */}
      <main>
        <section className="hero" id="top">
          {/* 3 Rotating Hero Section Background Images */}
          <div className="hero-bg-wrap" aria-hidden="true">
            {heroBgImages.map((imgSrc, idx) => (
              <div
                key={idx}
                className={`hero-bg-slide hero-bg-slide-${idx} ${bgIndex === idx ? "active" : ""}`}
              >
                <img
                  src={imgSrc}
                  alt=""
                  className={`hero-bg-img hero-bg-img-${idx}`}
                />
              </div>
            ))}
            {/* Mild and smooth linear gradient overlay protecting the write-up without overshadowing */}
            <div className="hero-bg-overlay" />
          </div>

          {/* Subtle bottom-right background indicators */}
          <div className="hero-bg-indicators" aria-label="Hero Background Indicators">
            {heroBgImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`hero-bg-indicator-dot ${bgIndex === idx ? "active" : ""}`}
                onClick={() => setBgIndex(idx)}
                aria-label={`Switch to background ${idx + 1}`}
              />
            ))}
            <span className="hero-bg-indicator-label mono">
              0{bgIndex + 1} / 03
            </span>
          </div>

          {/* Decorative glowing orbs */}
          <div className="hero-orb-left" />

          {/* Floating Tech Badges — React, JS, HTML5, CSS3 always visible */}
          <div className="tech-float html">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f87171"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" /></svg>
            HTML5
          </div>
          <div className="tech-float css3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#93c5fd"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" /></svg>
            CSS3
          </div>
          <div className="tech-float js">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
            JavaScript
          </div>
          <div className="tech-float react">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#67e8f9"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.725 0 1.368.3 1.783.803.55.676.791 1.795.661 3.193-.036.386-.107.778-.198 1.173-.97-.246-2.006-.417-3.095-.513-.657-.888-1.345-1.713-2.034-2.464.612-.576 1.22-1.052 1.805-1.409.455-.279.891-.42 1.278-.784zm-9.557.707c.387.363.823.505 1.278.784.585.357 1.193.833 1.805 1.409-.689.751-1.377 1.576-2.034 2.464-1.089.096-2.125.267-3.095.513-.091-.395-.162-.787-.198-1.173-.13-1.398.111-2.517.661-3.193.415-.503 1.058-.803 1.583-.804zm4.844 3.058c.439.499.876 1.05 1.301 1.652-.43-.018-.869-.027-1.301-.027-.432 0-.871.009-1.301.027.425-.602.862-1.153 1.301-1.652zM9.62 9.795c.594.913 1.17 1.897 1.7 2.933-.3.6-.583 1.21-.844 1.834-.695-.14-1.356-.319-1.973-.538-.04-.017-.081-.035-.122-.053.01-.025.014-.044.022-.069.098-.294.212-.582.327-.869.305-.76.664-1.5 1.049-2.214.154-.288.3-.573.453-.858l-.612-.166zm4.76 0l.613.166c.153.285.299.57.453.858.385.714.744 1.454 1.049 2.214.115.287.229.575.327.869.008.025.012.044.022.069-.041.018-.082.036-.122.053-.617.219-1.278.398-1.973.538-.261-.624-.544-1.234-.844-1.834.53-1.036 1.106-2.02 1.7-2.933l-.225.033zm-2.38 4.516c.43.018.869.027 1.301.027.432 0 .871-.009 1.301-.027-.425.602-.862 1.153-1.301 1.652-.439-.499-.876-1.05-1.301-1.652zm-4.844 1.64c.97.246 2.006.417 3.095.513.657.888 1.345 1.713 2.034 2.464-.612.576-1.22 1.052-1.805 1.409-.455.279-.891.42-1.278.784-.725 0-1.368-.3-1.783-.803-.55-.676-.791-1.795-.661-3.193.036-.386.107-.778.198-1.174zm9.557.707c.091.396.162.788.198 1.174.13 1.398-.111 2.517-.661 3.193-.415.503-1.058.803-1.583.804-.387-.363-.823-.505-1.278-.784-.585-.357-1.193-.833-1.805-1.409.689-.751 1.377-1.576 2.034-2.464 1.089-.096 2.125-.267 3.095-.513z" /></svg>
            React
          </div>

          <div className="wrap">
            <div className="hero-grid">
              {/* Left Column: Hero Content */}
              <div>
                <p className="eyebrow mono">
                  <span className="live-pulse" /> Open to new projects
                </p>

                <h1>
                  Full-Stack Developer.<em> Modern Web Architect.</em>
                </h1>

                <p className="lede">
                  I build fast, scalable web apps — from clean frontends to robust backends and APIs.
                </p>

                <div className="roles">
                  <span>
                    <Laptop size={13} style={{ display: "inline", marginRight: "5px", verticalAlign: "middle" }} />
                    Full-Stack Dev
                  </span>
                  <span>
                    <Layers size={13} style={{ display: "inline", marginRight: "5px", verticalAlign: "middle" }} />
                    Frontend Architecture
                  </span>
                  <span>
                    <Server size={13} style={{ display: "inline", marginRight: "5px", verticalAlign: "middle" }} />
                    Backend &amp; APIs
                  </span>
                  <span>
                    <Zap size={13} style={{ display: "inline", marginRight: "5px", verticalAlign: "middle" }} />
                    Responsive Web
                  </span>
                </div>

                <div className="hero-actions">
                  <a
                    href="#work"
                    className="btn btn-solid"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("work");
                    }}
                  >
                    See My Work
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-outline"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                  >
                    Hire Me
                  </a>
                </div>

                {/* Scroll hint */}
                <div className="hero-scroll-hint">
                  <span className="hero-scroll-line" />
                  Scroll to explore
                </div>
              </div>

              {/* Right Column: Hero Profile Card (Restored) */}
              <div className="hero-profile-card">
                <div className="code-ribbon" aria-hidden="true">
                  <div className="code-ribbon-inner">{`const daniel = {\n  role: 'Full-Stack Developer',\n  stack: ['React', 'TypeScript', 'Node.js'],\n  db: ['PostgreSQL', 'MongoDB', 'Redis'],\n  tools: ['Docker', 'Git', 'Vite', 'REST'],\n};\n\nasync function build(idea: string) {\n  const frontend = await react(idea);\n  const backend = await node(idea);\n  return deploy({ frontend, backend });\n}\n\n// Currently: open to new projects ✓\nbuild('your next big idea');\n\nconst daniel = {\n  role: 'Full-Stack Developer',\n  stack: ['React', 'TypeScript', 'Node.js'],\n  db: ['PostgreSQL', 'MongoDB', 'Redis'],\n};\n`}</div>
                </div>

                <div className="browser-bar" style={{ margin: "-28px -28px 0", borderRadius: "16px 16px 0 0" }}>
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mono" style={{ fontSize: "0.68rem" }}>daniel.dev ~ fullstack</div>
                  <div style={{ width: "24px" }} />
                </div>

                <div className="profile-card-header" style={{ marginTop: "14px" }}>
                  <div className="profile-avatar">
                    <img src={heroImg} alt="Daniel" />
                    <span className="monogram-dot" />
                  </div>
                  <div className="profile-meta">
                    <h4>Daniel</h4>
                    <p>Full-Stack Developer</p>
                  </div>
                </div>

                <div className="profile-status">
                  <span className="live-pulse" /> Open to New Projects &amp; Roles
                </div>

                <div className="profile-stack-list">
                  <div className="profile-stack-item">
                    <span className="label">Frontend:</span>
                    <span className="val">React 19 • TypeScript • Vite</span>
                  </div>
                  <div className="profile-stack-item">
                    <span className="label">Backend:</span>
                    <span className="val">Node.js • Express • REST APIs</span>
                  </div>
                  <div className="profile-stack-item">
                    <span className="label">Database:</span>
                    <span className="val">PostgreSQL • MongoDB • Redis</span>
                  </div>
                  <div className="profile-stack-item">
                    <span className="label">Tooling:</span>
                    <span className="val">Docker • Git • CI/CD</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="btn-card-primary"
                  style={{ justifyContent: "center", marginTop: "6px", width: "100%" }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Start a Project <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Section 01: About ---------- */}
        <section id="about" style={{ background: "#07093a" }}>
          <div className="wrap">
            <div className="section-head">
              <h2>About Daniel</h2>
              <span className="section-num mono">01 / Profile & Philosophy</span>
            </div>

            <div className="about-grid">
              {/* Left Column: Modernized Showcase Card */}
              <div className="about-showcase-card">
                <div className="about-header-badge">
                  <Sparkles size={14} color="var(--gold)" />
                  <span>Daniel • Full-Stack Developer</span>
                </div>

                <div className="about-center-monogram">
                  <div className="monogram-crest">
                    <img src={heroImg} alt="Daniel" />
                    <span className="monogram-dot" />
                  </div>
                  <h3>Daniel</h3>
                  <p>Full-Stack Developer</p>
                </div>

                <div className="about-stats-grid">
                  <div className="about-stat-box">
                    <span className="num">100%</span>
                    <span className="desc">Responsive & Clean Code</span>
                  </div>
                  <div className="about-stat-box">
                    <span className="num">Full Stack</span>
                    <span className="desc">Front-End to Back-End</span>
                  </div>
                  <div className="about-stat-box">
                    <span className="num">Modern</span>
                    <span className="desc">Scalable Architecture</span>
                  </div>
                  <div className="about-stat-box">
                    <span className="num">Performant</span>
                    <span className="desc">Fast, Optimized Apps</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Disciplines */}
              <div className="about-copy">
                <div>
                  <p className="lead-quote">
                    Engineering fast, scalable web systems with clean code and modern architecture.
                  </p>
                  <p>
                    I'm a Full-Stack Developer specializing in building end-to-end web applications.
                    From pixel-precise React interfaces to secure Node.js backends and PostgreSQL schemas — I deliver performant, maintainable software that scales.
                  </p>
                </div>

                <div className="disciplines">
                  <div className="discipline-row">
                    <span className="label mono">
                      <Code2 size={14} color="var(--gold)" /> Full-Stack Dev
                    </span>
                    <span className="desc">
                      End-to-end apps with React, Node.js, APIs, & databases.
                    </span>
                  </div>
                  <div className="discipline-row">
                    <span className="label mono">
                      <Layers size={14} color="var(--sky)" /> Frontend
                    </span>
                    <span className="desc">
                      Reactive, accessible UIs built for performance and usability.
                    </span>
                  </div>
                  <div className="discipline-row">
                    <span className="label mono">
                      <Server size={14} color="var(--pink)" /> Backend &amp; APIs
                    </span>
                    <span className="desc">
                      Scalable server logic, secure auth, and clean database schemas.
                    </span>
                  </div>
                  <div className="discipline-row">
                    <span className="label mono">
                      <Globe size={14} color="var(--sky)" /> Responsive Web
                    </span>
                    <span className="desc">
                      Mobile-first, fluid layouts optimized across all devices.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Section 02: Skills & Stack ---------- */}
        <section id="skills" style={{ background: "#050820", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap">
            <div className="section-head">
              <h2>Stack &amp; Expertise</h2>
              <span className="section-num mono">02 / Tech Stack</span>
            </div>

            <div className="skills-grid">
              {/* Column 1: Core Full-Stack */}
              <div className="skill-col">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <Code2 size={20} color="var(--gold)" />
                  <h3 style={{ margin: 0 }}>Core Full-Stack</h3>
                </div>
                <ul>
                  <li>React 19 &amp; Next.js</li>
                  <li>TypeScript &amp; Modern ES6+</li>
                  <li>Node.js &amp; Express</li>
                  <li>RESTful APIs &amp; Webhooks</li>
                  <li>State Management &amp; Hooks</li>
                  <li>Git &amp; CI/CD Pipelines</li>
                  <li>Vite &amp; Modern Bundlers</li>
                  <li>Docker &amp; Deployment</li>
                </ul>
              </div>

              {/* Column 2: Backend &amp; Databases */}
              <div className="skill-col">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <Database size={20} color="var(--sky)" />
                  <h3 style={{ margin: 0 }}>Backend &amp; Databases</h3>
                </div>
                <ul>
                  <li>PostgreSQL &amp; Schema Design</li>
                  <li>MongoDB &amp; Aggregations</li>
                  <li>Redis Caching</li>
                  <li>JWT &amp; Session Auth</li>
                  <li>WebSockets &amp; Real-Time</li>
                  <li>Stripe &amp; Payment APIs</li>
                  <li>Third-Party API Integration</li>
                  <li>Server Security &amp; Validation</li>
                </ul>
              </div>

              {/* Column 3: Front-End & Architecture */}
              <div className="skill-col">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <Layers size={20} color="var(--pink)" />
                  <h3 style={{ margin: 0 }}>Front-End Engineering</h3>
                </div>
                <ul>
                  <li>Mobile-First Responsive Layouts</li>
                  <li>Modern CSS (Grid, Flexbox, Keyframes)</li>
                  <li>Component Architecture & Reusability</li>
                  <li>Web Performance & Core Web Vitals</li>
                  <li>Cross-Browser & Device Testing</li>
                  <li>SEO & Semantic Web Standards</li>
                  <li>State Management & API Integration</li>
                  <li>Clean Code, Testing & Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Section 03: Selected Work (Card Section) ---------- */}
        <section id="work" style={{ background: "#050820" }}>
          <div className="wrap">
            <div className="section-head">
              <h2>Selected Work</h2>
              <span className="section-num mono">03 / Projects</span>
            </div>

            {/* Filter Tabs */}
            <div className="filters">
              <button
                className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                All ({projectsData.length})
              </button>
              <button
                className={`filter-btn ${activeFilter === "fullstack" ? "active" : ""}`}
                onClick={() => setActiveFilter("fullstack")}
              >
                Full-Stack
              </button>
              <button
                className={`filter-btn ${activeFilter === "frontend" ? "active" : ""}`}
                onClick={() => setActiveFilter("frontend")}
              >
                Frontend
              </button>
              <button
                className={`filter-btn ${activeFilter === "responsive" ? "active" : ""}`}
                onClick={() => setActiveFilter("responsive")}
              >
                Responsive
              </button>
            </div>

            {/* Projects Grid */}
            <div className="work-grid">
              {filteredProjects.map((project) => (
                <article key={project.id} className="work-card">
                  {/* Card Thumbnail / Interactive Browser Window Preview */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-thumb"
                    aria-label={`Visit ${project.title}`}
                  >
                    {/* Browser header representation */}
                    <div className="browser-bar">
                      <div className="browser-dots">
                        <span />
                        <span />
                        <span />
                      </div>
                      <span className="browser-url mono">
                        {project.liveUrl.replace("https://", "").replace(/\/$/, "")}
                      </span>
                      <ExternalLink size={12} className="browser-ext-icon" />
                    </div>

                    {/* Real Website Preview Display */}
                    <div className="preview-image-wrap">
                      <img
                        src={project.image}
                        alt={`${project.title} live website preview`}
                        className="preview-image"
                        loading="lazy"
                      />
                      <div className="preview-overlay">
                        <span className="preview-view-pill">
                          View Live Site <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>

                    <span className="preview-badge">{project.categoryLabel}</span>
                  </a>

                  {/* Card Body */}
                  <div className="work-body">
                    <div className="work-meta">
                      {project.categoryLabel}
                    </div>

                    <h3>{project.title}</h3>

                    {/* Tech Stack Tags */}
                    <div className="work-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="work-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Navigation Buttons */}
                    <div className="work-actions">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-card btn-card-primary"
                        style={{ width: "100%", justifyContent: "center" }}
                        aria-label={`Visit live website for ${project.title}`}
                      >
                        Visit Website <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Section 04: Services ---------- */}
        <section id="services" style={{ background: "#090c30", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap">
            <div className="section-head">
              <h2>Services</h2>
              <span className="section-num mono">04 / What I Build</span>
            </div>

            <div className="services-grid">
              <div className="service">
                <div className="service-icon"><Code2 size={22} /></div>
                <h3>Full-Stack Development</h3>
                <p className="service-sub">Frontend + Backend</p>
                <p>End-to-end web apps built with React, Node.js, and modern databases. Fast, secure, and scalable.</p>
              </div>

              <div className="service">
                <div className="service-icon"><Layers size={22} /></div>
                <h3>Frontend Development</h3>
                <p className="service-sub">React • JavaScript • HTML • CSS</p>
                <p>High-performance, accessible UIs with reactive state management and smooth interactions.</p>
              </div>

              <div className="service">
                <div className="service-icon"><Server size={22} /></div>
                <h3>Backend Development</h3>
                <p className="service-sub">APIs • Databases • Server Logic</p>
                <p>Scalable server architecture, secure authentication, RESTful APIs, and clean database schemas.</p>
              </div>

              <div className="service">
                <div className="service-icon"><Globe size={22} /></div>
                <h3>Responsive Websites</h3>
                <p className="service-sub">Fast • Modern • Mobile-First</p>
                <p>Pixel-perfect layouts that work beautifully across all devices, with top Core Web Vitals scores.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Section 05: Contact ---------- */}
        <section id="contact" style={{ background: "#07093a" }}>
          <div className="wrap">
            <div className="section-head">
              <h2>Get in Touch</h2>
              <span className="section-num mono">05 / Start a Project</span>
            </div>

            <div className="contact-grid">
              {/* Left Column: Contact Cards */}
              <div className="contact-copy">
                <h2>Have a project in mind? Let's build it.</h2>
                <p>
                  Available for freelance commissions and full-time opportunities in full-stack web development.
                </p>

                <div className="contact-cards">
                  <a href="mailto:abrahamdanielmunachi@gmail.com" className="contact-card">
                    <div className="contact-card-icon">
                      <Mail size={18} />
                    </div>
                    <div className="contact-card-content">
                      <span className="label">Direct Email</span>
                      <span className="val mono" style={{ fontSize: "0.85rem", wordBreak: "break-all" }}>
                        abrahamdanielmunachi@gmail.com
                      </span>
                    </div>
                  </a>

                  <a href="https://wa.me/2347044572371" target="_blank" rel="noopener noreferrer" className="contact-card">
                    <div className="contact-card-icon" style={{ color: "#25D366" }}>
                      <FaWhatsapp size={18} />
                    </div>
                    <div className="contact-card-content">
                      <span className="label">WhatsApp</span>
                      <span className="val mono">+234 704 457 2371</span>
                    </div>
                  </a>

                  <a href="https://github.com/danielmunaboss" target="_blank" rel="noopener noreferrer" className="contact-card">
                    <div className="contact-card-icon">
                      <FaGithub size={18} />
                    </div>
                    <div className="contact-card-content">
                      <span className="label">GitHub</span>
                      <span className="val mono">github.com/danielmunaboss</span>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/munachi-daniel-abraham-38a48441a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                  >
                    <div className="contact-card-icon" style={{ color: "#0A66C2" }}>
                      <FaLinkedin size={18} />
                    </div>
                    <div className="contact-card-content">
                      <span className="label">LinkedIn</span>
                      <span className="val">Munachi Daniel Abraham</span>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/danielmunachiabraham?igsi=dWNhMG93ODlvdG4z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                  >
                    <div className="contact-card-icon" style={{ color: "#E4405F" }}>
                      <FaInstagram size={18} />
                    </div>
                    <div className="contact-card-content">
                      <span className="label">Instagram</span>
                      <span className="val mono">@danielmunachiabraham</span>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/share/1Dr3t41p76/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                  >
                    <div className="contact-card-icon" style={{ color: "#1877F2" }}>
                      <FaFacebook size={18} />
                    </div>
                    <div className="contact-card-content">
                      <span className="label">Facebook</span>
                      <span className="val">Connect on Facebook</span>
                    </div>
                  </a>

                  <div className="contact-card">
                    <div className="contact-card-icon">
                      <Clock size={18} />
                    </div>
                    <div className="contact-card-content">
                      <span className="label">Availability</span>
                      <span className="val" style={{ color: "#10b981", display: "flex", alignItems: "center" }}>
                        <span className="live-pulse" /> Available for Hire & Freelance
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Modernized Interactive Contact Form */}
              <div className="contact-form-card">
                <form onSubmit={handleFormSubmit}>
                  <div className="field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email">Your Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="field">
                    <label>Select Service Needed</label>
                    <div className="service-pills">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          className={`service-pill ${formData.service === svc ? "active" : ""}`}
                          onClick={() => setFormData({ ...formData, service: svc })}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell me about your goals, timeline, and requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-solid"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", width: "100%", justifyContent: "center" }}
                  >
                    Send Message <Send size={15} />
                  </button>

                  {formSubmitted && (
                    <div className="form-feedback success">
                      ✓ Thank you! Daniel has received your message and will respond shortly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Modernized Multi-Column Footer ---------- */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            {/* Column 1: Brand & Bio */}
            <div className="footer-col">
              <a href="#" className="brand" onClick={() => scrollToSection("top")}>
                <span>Daniel</span>
                <span className="dot">.</span>
              </a>
              <p style={{ marginTop: "12px" }}>
                Full-Stack Developer. Building scalable web systems with clean architecture.
              </p>
              <div className="mono" style={{ fontSize: "0.78rem", color: "#10b981", display: "flex", alignItems: "center" }}>
                <span className="live-pulse" /> Available for new opportunities
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="#about" onClick={() => scrollToSection("about")}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={() => scrollToSection("skills")}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#work" onClick={() => scrollToSection("work")}>
                    Work
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={() => scrollToSection("services")}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => scrollToSection("contact")}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Specializations */}
            <div className="footer-col">
              <h4>Specializations</h4>
              <ul>
                <li>Full-Stack Web Apps</li>
                <li>Frontend Development</li>
                <li>Backend &amp; APIs</li>
                <li>Responsive Websites</li>
                <li>Web Performance &amp; SEO</li>
              </ul>
            </div>

            {/* Column 4: Connect */}
            <div className="footer-col">
              <h4>Connect & Social</h4>
              <ul>
                <li>
                  <a href="mailto:abrahamdanielmunachi@gmail.com" style={{ wordBreak: "break-all" }}>
                    Email Daniel
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2347044572371" target="_blank" rel="noopener noreferrer">
                    WhatsApp (+234 704 457 2371)
                  </a>
                </li>
                <li>
                  <a href="https://github.com/danielmunaboss" target="_blank" rel="noopener noreferrer">
                    GitHub (@danielmunaboss)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/munachi-daniel-abraham-38a48441a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/danielmunachiabraham?igsi=dWNhMG93ODlvdG4z"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram (@danielmunachiabraham)
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/share/1Dr3t41p76/" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} Daniel. All rights reserved. Designed & Engineered with precision.</div>
            <a
              href="#top"
              className="to-top mono"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("top");
              }}
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
