'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  MoveRight,
  Send,
  Sparkles,
  X,
} from 'lucide-react';
import Atmosphere from '@/components/atmosphere';
import Twin from '@/components/twin';
import TwinChat from '@/components/twin-chat';
import { content, Language, projectCategories, projects } from '@/lib/content';
import { siteConfig } from '@/lib/config';

const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('wiame-loaded')) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => {
      sessionStorage.setItem('wiame-loaded', 'true');
      setVisible(false);
    }, 2100);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader">
      <div className="preloader-orb" />
      <div className="terminal">
        <p>
          <span>01</span> Awakening digital twin...
        </p>
        <p>
          <span>02</span> Binding neural core to archive...
        </p>
        <p>
          <span>03</span> <b>TWIN ONLINE</b>
          <i>_</i>
        </p>
      </div>
      <div className="loader-bar">
        <span />
      </div>
    </div>
  );
}

function RoleLine({ roles, reducedMotion }: { roles: readonly string[]; reducedMotion: boolean }) {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (reducedMotion) {
      setText(roles[0]);
      return;
    }
    let char = 0;
    let deleting = false;
    let role = 0;
    let timer = 0;

    const tick = () => {
      const current = roles[role];
      if (!deleting) {
        char += 1;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1600);
          return;
        }
      } else {
        char -= 1;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          role = (role + 1) % roles.length;
        }
      }
      timer = window.setTimeout(tick, deleting ? 40 : 70);
    };

    timer = window.setTimeout(tick, 400);
    return () => window.clearTimeout(timer);
  }, [roles, reducedMotion]);

  return (
    <p className="role-line">
      <span className="role-mark">/</span>
      {text}
      <i />
    </p>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [filterIndex, setFilterIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const copy = content[language];
  const showLinkedIn = !siteConfig.linkedin.startsWith('#');

  const localizedProjects = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        title: project.title[language],
        category: project.category[language],
        description: project.description[language],
        detail: project.detail[language],
        result: project.result[language],
      })),
    [language],
  );

  const filteredProjects = useMemo(() => {
    if (filterIndex === 0) return localizedProjects;
    const category = projectCategories[filterIndex];
    return localizedProjects.filter((project) => project.categories.includes(category));
  }, [filterIndex, localizedProjects]);

  const selectedProject = localizedProjects.find((project) => project.id === selectedId) || null;

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));

    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((node) => revealObserver.observe(node));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, [language]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    setMenuOpen(false);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || 'there');
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Portfolio contact from ${name}`)}&body=${encodeURIComponent(String(data.get('message') || ''))}`;
    setFormStatus(copy.contact.success);
  };

  return (
    <>
      <Preloader />
      <div className="site-shell">
        <Atmosphere reducedMotion={reducedMotion} />
        <header className="navbar">
          <button className="wordmark" onClick={() => scrollTo('home')} aria-label="Go to home">
            <span>W</span>
            <b>
              WIAME
              <br />
              <em>ERRAOUI</em>
            </b>
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {copy.nav.map((label, index) => {
              const id = sectionIds[index];
              return (
                <button key={id} className={active === id ? 'active' : ''} onClick={() => scrollTo(id)}>
                  {label}
                </button>
              );
            })}
          </nav>
          <div className="nav-actions">
            <button className="language" onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')} aria-label="Switch language">
              <span className={language === 'en' ? 'selected' : ''}>EN</span>
              <span>/</span>
              <span className={language === 'fr' ? 'selected' : ''}>FR</span>
            </button>
            <a className="nav-cv" href={siteConfig.cvPath} download>
              CV <Download size={13} />
            </a>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>

        <main>
          <section id="home" className="hero section-pad">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" /> {copy.hero.eyebrow}
              </p>
              <h1>
                <span>Wiame</span>
                <span className="name-accent">Erraoui</span>
              </h1>
              <p className="hero-statement">{copy.hero.statement}</p>
              <RoleLine roles={copy.hero.roles} reducedMotion={reducedMotion} />
              <p className="hero-sub">{copy.hero.sub}</p>
              <p className="hero-description">{copy.hero.copy}</p>
              <div className="availability">
                <span /> {copy.hero.availability}
              </div>
              <div className="hero-actions">
                <button className="button-primary" onClick={() => scrollTo('projects')}>
                  {copy.hero.primary} <MoveRight size={16} />
                </button>
                <a className="button-ghost" href={siteConfig.cvPath} download>
                  {copy.hero.secondary} <Download size={15} />
                </a>
              </div>
              <div className="hero-links">
                <button onClick={() => scrollTo('contact')}>
                  {copy.hero.contact} <ArrowUpRight size={14} />
                </button>
                <a href={siteConfig.githubRepos} target="_blank" rel="noreferrer">
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
            <Twin
              reducedMotion={reducedMotion}
              language={language}
              twinLabel={copy.hero.twinLabel}
              twinStatus={copy.hero.twinStatus}
            />
          </section>

          <section id="about" className="section-pad about-section">
            <div className="section-heading reveal">
              <SectionLabel>{copy.about.label}</SectionLabel>
              <h2>{copy.about.title}</h2>
            </div>
            <div className="about-grid">
              <div className="about-copy reveal">
                <p>{copy.about.copy}</p>
                <span className="location-note">
                  <Sparkles size={15} /> {copy.about.note}
                </span>
                <article className="twin-lore">
                  <div className="twin-lore-portrait">
                    <img src={siteConfig.twinImage} alt="" />
                    <span className="live-dot" />
                  </div>
                  <div>
                    <p className="section-label">{copy.about.twinTitle}</p>
                    <p>{copy.about.twinCopy}</p>
                  </div>
                </article>
              </div>
              <div className="stat-grid reveal">
                {copy.about.cards.map(([value, label, detail]) => (
                  <div className="stat-card" key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                    <small>{detail}</small>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="section-pad experience-section">
            <div className="section-heading reveal">
              <SectionLabel>{copy.experience.label}</SectionLabel>
              <h2>{copy.experience.title}</h2>
            </div>
            <div className="timeline">
              {copy.experience.items.map((item) => (
                <article className="timeline-item reveal" key={item.company}>
                  <div className="timeline-marker" />
                  <div className="timeline-meta">
                    <span>{item.date}</span>
                    <b>{item.company}</b>
                  </div>
                  <div className="timeline-content">
                    <p className="role">{item.role}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <div className="metric-row">
                      {item.bullets.map((bullet) => (
                        <span key={bullet}>{bullet}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="section-pad projects-section">
            <div className="section-heading project-heading reveal">
              <div>
                <SectionLabel>{copy.projects.label}</SectionLabel>
                <h2>{copy.projects.title}</h2>
              </div>
              <p>{copy.projects.intro}</p>
            </div>
            <div className="filter-row">
              {copy.projects.filters.map((label, index) => (
                <button key={label} className={filterIndex === index ? 'active' : ''} onClick={() => setFilterIndex(index)}>
                  {label}
                </button>
              ))}
            </div>
            <div className="project-grid">
              {filteredProjects.map((project, index) => (
                <article
                  className={`project-card accent-${project.accent} reveal`}
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="card-top">
                    <span>0{index + 1}</span>
                    <ArrowUpRight size={18} />
                  </div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-result">{project.result}</div>
                </article>
              ))}
            </div>
            <a className="github-strip" href={siteConfig.githubRepos} target="_blank" rel="noreferrer">
              <Github size={18} />
              <span>{copy.projects.githubCta}</span>
              <em>github.com/Werraoui</em>
              <ArrowUpRight size={16} />
            </a>
          </section>

          <section id="skills" className="section-pad skills-section">
            <div className="section-heading reveal">
              <SectionLabel>{copy.skills.label}</SectionLabel>
              <h2>{copy.skills.title}</h2>
            </div>
            <div className="skill-grid">
              {copy.skills.groups.map((group, index) => (
                <div className="skill-card reveal" key={group.name}>
                  <span>0{index + 1}</span>
                  <h3>{group.name}</h3>
                  <div className="skill-chips">
                    {group.items.map((item) => (
                      <em key={item}>{item}</em>
                    ))}
                  </div>
                  <div className="skill-line" />
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="section-pad education-section">
            <div className="section-heading reveal">
              <SectionLabel>{copy.education.label}</SectionLabel>
              <h2>{copy.education.title}</h2>
            </div>
            <div className="education-layout">
              <div className="education-list reveal">
                {copy.education.entries.map(([date, title, place]) => (
                  <div className="education-item" key={title}>
                    <span>{date}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{place}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="languages-card reveal">
                <span className="orbital-mark">◎</span>
                <p>{copy.education.languagesLabel}</p>
                <ul>
                  {copy.education.languages.map(([name, level]) => (
                    <li key={name}>
                      <b>{name}</b>
                      <span>{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="contact" className="section-pad contact-section">
            <div className="contact-intro reveal">
              <SectionLabel>{copy.contact.label}</SectionLabel>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.copy}</p>
              <div className="contact-links">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail size={17} /> {siteConfig.email}
                </a>
                {siteConfig.phones.map((phone) => (
                  <a key={phone.id} href={phone.href}>
                    <Phone size={17} /> {phone.display}
                    <small>{phone.label[language]}</small>
                  </a>
                ))}
                <button onClick={copyEmail}>
                  {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied' : 'Copy email'}
                </button>
                <a href={siteConfig.githubRepos} target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                {showLinkedIn && (
                  <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={17} /> LinkedIn
                  </a>
                )}
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <label>
                <span>{copy.contact.name}</span>
                <input name="name" required placeholder="Wiame" />
              </label>
              <label>
                <span>{copy.contact.email}</span>
                <input name="email" type="email" required placeholder="you@company.com" />
              </label>
              <label>
                <span>{copy.contact.message}</span>
                <textarea name="message" required rows={4} placeholder="I’d love to talk about..." />
              </label>
              <button className="button-primary" type="submit">
                {copy.contact.send} <Send size={15} />
              </button>
              <p className="form-note">{formStatus || copy.contact.note}</p>
            </form>
          </section>
        </main>

        <footer className="footer">
          <div>
            <span className="footer-mark">W</span>
            <p>
              Designed & built by Wiame Erraoui
              <br />
              <small>© {new Date().getFullYear()} · AI & data, still online.</small>
            </p>
          </div>
          <div className="footer-links">
            <a href={siteConfig.githubRepos} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {showLinkedIn && (
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            <a href={`mailto:${siteConfig.email}`}>Email</a>
            {siteConfig.phones.map((phone) => (
              <a key={phone.id} href={phone.href}>
                {phone.label[language]}
              </a>
            ))}
            <button onClick={() => scrollTo('home')} aria-label="Back to top">
              <ArrowUp size={15} />
            </button>
          </div>
        </footer>

        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedId(null)}>
            <article className={`project-modal accent-${selectedProject.accent}`} onClick={(event) => event.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedId(null)} aria-label="Close project">
                <X size={19} />
              </button>
              <p className="project-category">{selectedProject.category}</p>
              <h2>{selectedProject.title}</h2>
              <p className="modal-detail">{selectedProject.detail}</p>
              <div className="modal-tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="modal-result">{selectedProject.result}</div>
              {selectedProject.repo && (
                <a className="button-primary" href={selectedProject.repo} target="_blank" rel="noreferrer">
                  View repository <ArrowUpRight size={16} />
                </a>
              )}
            </article>
          </div>
        )}
        <TwinChat language={language} reducedMotion={reducedMotion} />
      </div>
    </>
  );
}
