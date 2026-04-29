// app.jsx — main portfolio app
const { useState, useEffect, useRef, useMemo } = React;
const D = window.__PORTFOLIO_DATA__;

/* ============ Icons ============ */
const Icon = {
  Sun: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>,
  Moon: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>,
  Mail: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
  LinkedIn: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.59 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.55v-6.55c0-1.56-.03-3.57-2.18-3.57-2.18 0-2.51 1.7-2.51 3.45V22H7.81V8z" /></svg>,
  Arrow: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M7 17 17 7M9 7h8v8" /></svg>,
  Download: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></svg>,
  External: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14 4h6v6M10 14 20 4M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></svg>,
  Menu: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
};

/* ============ Reveal on scroll ============ */
const useReveal = (deps = []) => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {e.target.classList.add('in');io.unobserve(e.target);}});
    }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
    els.forEach((el) => io.observe(el));
    // Force-show anything already in viewport on mount (handles delayed mounts)
    requestAnimationFrame(() => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
      });
    });
    return () => io.disconnect();
  }, deps);
};

/* ============ Header ============ */
function Header({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);
  const links = [
  { id: 'about', label: 'About', n: '01' },
  { id: 'experience', label: 'Experience', n: '02' },
  { id: 'projects', label: 'Projects', n: '03' },
  { id: 'books', label: 'Reading', n: '04' },
  { id: 'contact', label: 'Contact', n: '05' }];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const ids = ['hero', ...links.map((l) => l.id)];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) setActive(e.target.id);});
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  const handleNav = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#hero" className="brand" onClick={(e) => handleNav(e, 'hero')}>
          <span className="glyph">ID</span>
          <span>ivan.dias</span>
        </a>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {links.map((l) =>
          <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={(e) => handleNav(e, l.id)}>
              {l.label}
            </a>
          )}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            {theme === 'dark' ? <Icon.Sun /> : <Icon.Moon />}
          </button>
          <button className="menu-btn theme-toggle" style={{ marginLeft: 8 }} onClick={() => setOpen((o) => !o)} aria-label="Menu">
            <Icon.Menu />
          </button>
        </div>
      </div>
    </header>);

}

/* ============ Hero variants ============ */

function HeroStatusPill() {
  return (
    <div className="hero-status reveal">
      <span className="pulse"></span>
      <span>Available for technical advisory · {D.identity.location}</span>
    </div>);

}

function HeroActions() {
  return (
    <div className="hero-actions reveal" data-stagger="4">
      <a href={`mailto:${D.identity.email}`} className="cta-pill cta-pill-primary">
        <span className="cta-icon"><Icon.Mail /></span>
        <span className="cta-text">
          <span className="cta-label">Email</span>
          <span className="cta-value">{D.identity.email}</span>
        </span>
        <span className="cta-arrow"><Icon.Arrow /></span>
      </a>
      <a href={D.identity.linkedin} target="_blank" rel="noopener" className="cta-pill">
        <span className="cta-icon"><Icon.LinkedIn /></span>
        <span className="cta-text">
          <span className="cta-label">LinkedIn</span>
          <span className="cta-value">/in/ivamdias</span>
        </span>
        <span className="cta-arrow"><Icon.Arrow /></span>
      </a>
    </div>);

}

function HeroStats() {
  return (
    <div className="hero-stats reveal" data-stagger="3">
      {D.stats.map((s, i) =>
      <div className="stat" key={i}>
          <div className="num">{s.num}<span className="plus">{s.suffix}</span></div>
          <div className="label">{s.label}</div>
        </div>
      )}
    </div>);

}

/* Variant A — original asymmetric, big portrait */
function HeroAsymmetric() {
  return (
    <div className="hero-grid">
      <div className="hero-left">
        <HeroStatusPill />
        <h1 className="reveal" data-stagger="1">
          Designing <span className="accent">private wireless</span> networks for the enterprises of tomorrow.
        </h1>
        <div className="role reveal" data-stagger="2">
          <span>Telecommunications Engineer</span>
          <span className="sep"></span>
          <span>Technical Project Manager</span>
        </div>
        <p className="bio reveal" data-stagger="3">{D.bio.short}</p>
        <HeroActions />
      </div>
      <div className="hero-portrait reveal" data-stagger="2">
        <span className="corner tl"></span><span className="corner tr"></span>
        <span className="corner bl"></span><span className="corner br"></span>
        <div className="frame"><img src="assets/photo.jpg" alt="Ivan Dias" /></div>
        <div className="meta"><span className="marker"></span><span>MAD · 40.4°N 3.7°W</span></div>
      </div>
    </div>);

}

/* Variant B — compact: small avatar inline, "now" sidebar */
function HeroCompact() {
  return (
    <div className="hero-compact">
      <div className="hero-compact-main">
        <div className="hero-compact-id reveal">
          <img src="assets/photo.jpg" alt="Ivan Dias" className="avatar-sm" />
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Ivan Dias · Madrid</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, fontSize: 13, color: 'var(--fg-2)' }}>
              <span className="pulse" style={{ width: 7, height: 7, background: 'oklch(0.7 0.18 145)', borderRadius: '50%', position: 'relative' }}></span>
              <span>Available for technical advisory</span>
            </div>
          </div>
        </div>
        <h1 className="reveal" data-stagger="1" style={{ marginTop: 32 }}>
          Designing <span className="accent">private wireless</span> networks for the enterprises of tomorrow.
        </h1>
        <p className="bio reveal" data-stagger="2">{D.bio.short}</p>
        <HeroActions />
      </div>
      <aside className="hero-now reveal" data-stagger="3">
        <div className="now-header">NOW</div>
        <div className="now-row"><span className="k">Role</span><span className="v">PM · Private Wireless</span></div>
        <div className="now-row"><span className="k">Org</span><span className="v">Nokia</span></div>
        <div className="now-row"><span className="k">Building</span><span className="v">AI task agent</span></div>
        <div className="now-row"><span className="k">Reading</span><span className="v">AI Engineering</span></div>
        <div className="now-row"><span className="k">Stack</span><span className="v">5GC · AWS · Python</span></div>
        <div className="now-row"><span className="k">Loc</span><span className="v">Madrid, Spain</span></div>
      </aside>
    </div>);

}

/* Variant C — text-only, signal-tower diagram */
function HeroTextOnly() {
  return (
    <div className="hero-text-only">
      <HeroStatusPill />
      <h1 className="reveal hero-mega" data-stagger="1">
        Twenty years<br />
        connecting the<br />
        <span className="accent">unseen networks</span><br />
        that move the world.
      </h1>
      <div className="hero-text-meta reveal" data-stagger="2">
        <div>
          <div className="k">Currently</div>
          <div className="v">Technical PM · Nokia Enterprises EU</div>
        </div>
        <div>
          <div className="k">Specialty</div>
          <div className="v">Private 4G/5G · 3GPP · AWS · Edge</div>
        </div>
        <div>
          <div className="k">Based</div>
          <div className="v">Madrid, Spain · 40.4°N 3.7°W</div>
        </div>
      </div>
      <HeroActions />
      {/* Signal tower as visual anchor */}
      <svg className="signal-tower reveal" viewBox="0 0 600 220" fill="none" aria-hidden>
        <line x1="300" y1="40" x2="300" y2="200" stroke="var(--border)" strokeWidth="1" />
        <path d="M260 80 L300 40 L340 80" stroke="var(--border)" strokeWidth="1" />
        <path d="M250 200 L300 40 L350 200" stroke="var(--border)" strokeWidth="0.7" strokeDasharray="2 4" />
        {[1, 2, 3, 4].map((i) =>
        <g key={i}>
            <path d={`M${300 - i * 55} ${40} Q${300} ${40 - i * 18} ${300 + i * 55} ${40}`} stroke="var(--accent)" strokeOpacity={0.8 - i * 0.15} strokeWidth="1" fill="none" />
          </g>
        )}
        <circle cx="300" cy="40" r="3" fill="var(--accent)" />
      </svg>
    </div>);

}

/* Variant D — credential strip */
function HeroCredential() {
  return (
    <div className="hero-credential">
      <div className="cred-strip reveal">
        <img src="assets/photo.jpg" alt="Ivan Dias" className="cred-photo" />
        <div className="cred-fields">
          <div className="cred-row">
            <div><div className="k">Name</div><div className="v">Ivan M. Dias Pestana</div></div>
            <div><div className="k">Role</div><div className="v">Telecom Engineer · PM</div></div>
            <div><div className="k">Org</div><div className="v">Nokia · Enterprises</div></div>
          </div>
          <div className="cred-row">
            <div><div className="k">ID</div><div className="v">NCSS-5G19A · AWS-SA</div></div>
            <div><div className="k">Region</div><div className="v">EU · Madrid</div></div>
            <div><div className="k">Since</div><div className="v">2005</div></div>
          </div>
        </div>
        <div className="cred-stamp">
          <div className="stamp-num">№ 005</div>
          <div className="stamp-label">VERIFIED</div>
        </div>
      </div>

      <h1 className="reveal hero-mega" data-stagger="1" style={{ marginTop: 56 }}>
        Designing <span className="accent">private wireless</span> networks for the enterprises of tomorrow.
      </h1>
      <p className="bio reveal" data-stagger="2" style={{ maxWidth: '60ch' }}>{D.bio.short}</p>
      <HeroActions />
    </div>);

}

function Hero({ variant = 'asymmetric' }) {
  return (
    <section id="hero" className="hero" data-screen-label="01 Hero" data-hero-variant={variant}>
      <div className="container">
        {variant === 'asymmetric' && <HeroAsymmetric />}
        {variant === 'compact' && <HeroCompact />}
        {variant === 'textonly' && <HeroTextOnly />}
        {variant === 'credential' && <HeroCredential />}
        <HeroStats />
      </div>
    </section>);

}

/* ============ About ============ */
function About() {
  return (
    <section id="about" className="section" data-screen-label="02 About">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow"><span className="num">01</span> · About</span>
          <h2 className="section-title">Twenty years building wireless, one customer problem at a time.</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal" data-stagger="1">
            {D.bio.long.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <aside className="about-aside reveal" data-stagger="2">
            <div className="aside-card">
              <h4>Core Stack</h4>
              <div className="skill-tags">
                {D.skills.technical.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="aside-card">
              <h4>Languages</h4>
              <div className="lang-list">
                {D.languages.map((l) =>
                <div className="row" key={l.name}>
                    <span>{l.name}</span>
                    <span className="level">{l.level}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="aside-card">
              <h4>Education</h4>
              <div style={{ fontSize: 14, color: 'var(--fg-2)' }}>{D.education.degree}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>{D.education.school}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--muted)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {D.education.years} · {D.education.place}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>);

}

/* ============ Experience ============ */
function Experience() {
  return (
    <section id="experience" className="section" data-screen-label="03 Experience">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow"><span className="num">02</span> · Experience</span>
          <h2 className="section-title">A career across continents, technologies, and customer types.</h2>
          <p className="section-lede">From CDMA base-station integration to leading 4G/5G private wireless rollouts, the through-line has been deep technical ownership and a customer-first lens.</p>
        </div>
        <div className="timeline">
          {D.experience.map((e, i) =>
          <div className={`tl-item reveal ${e.current ? 'current' : ''}`} data-stagger={Math.min(i, 4)} key={i}>
              <div className="tl-meta">
                <span>{e.from} — {e.to}</span>
                <span>·</span>
                <span>{e.location}</span>
                {e.current && <span className="badge">Current</span>}
              </div>
              <h3>{e.title}</h3>
              <div className="company"><span className="at">at</span> {e.company}</div>
              <p>{e.blurb}</p>
              {e.bullets.length > 0 &&
            <ul>
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
            }
            </div>
          )}
        </div>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }} className="reveal">
          {D.certifications.map((c, i) =>
          <div key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '14px 18px', background: 'var(--surface)' }}>
              <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.3 }}>{c.name}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--muted)', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {c.year}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, { Icon, useReveal, Header, Hero, About, Experience });