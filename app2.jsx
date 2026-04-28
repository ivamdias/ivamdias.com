// app2.jsx — projects, books, contact, root
const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;
const D2 = window.__PORTFOLIO_DATA__;

/* ============ Project diagrams (placeholders, not attempted realism) ============ */
function TelegramNotionDiagram() {
  return (
    <svg className="diagram" viewBox="0 0 480 200" fill="none">
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--muted)" />
        </marker>
      </defs>
      {/* Inputs column */}
      <g>
        <rect x="20" y="30" width="100" height="34" rx="6" stroke="var(--border)" fill="var(--surface)"/>
        <text x="70" y="51" className="node-label">TEXT</text>
        <rect x="20" y="80" width="100" height="34" rx="6" stroke="var(--border)" fill="var(--surface)"/>
        <text x="70" y="101" className="node-label">VOICE</text>
        <rect x="20" y="130" width="100" height="34" rx="6" stroke="var(--border)" fill="var(--surface)"/>
        <text x="70" y="151" className="node-label">IMAGE · 11 CATS</text>
      </g>
      {/* Agent */}
      <rect x="180" y="70" width="120" height="60" rx="8" stroke="var(--accent)" fill="var(--accent-soft)"/>
      <text x="240" y="95" className="node-label" style={{ fill: 'var(--accent)' }}>AI AGENT</text>
      <text x="240" y="112" className="node-label" style={{ fill: 'var(--accent)', fontSize: 9 }}>GPT · CLASSIFY · ROUTE</text>
      {/* Outputs */}
      <rect x="360" y="55" width="100" height="34" rx="6" stroke="var(--border)" fill="var(--surface)"/>
      <text x="410" y="76" className="node-label">NOTION DB</text>
      <rect x="360" y="105" width="100" height="34" rx="6" stroke="var(--border)" fill="var(--surface)"/>
      <text x="410" y="126" className="node-label">POSTGRES</text>
      {/* Arrows */}
      <path d="M120 47 L180 90" stroke="var(--muted)" strokeWidth="1" markerEnd="url(#arr)" fill="none"/>
      <path d="M120 97 L180 100" stroke="var(--muted)" strokeWidth="1" markerEnd="url(#arr)" fill="none"/>
      <path d="M120 147 L180 110" stroke="var(--muted)" strokeWidth="1" markerEnd="url(#arr)" fill="none"/>
      <path d="M300 90 L360 72" stroke="var(--muted)" strokeWidth="1" markerEnd="url(#arr)" fill="none"/>
      <path d="M300 110 L360 122" stroke="var(--muted)" strokeWidth="1" markerEnd="url(#arr)" fill="none"/>
    </svg>
  );
}

function EdgeTVDiagram() {
  return (
    <svg className="diagram" viewBox="0 0 480 200" fill="none">
      <circle cx="240" cy="100" r="22" stroke="var(--accent)" fill="var(--accent-soft)"/>
      <text x="240" y="104" className="node-label" style={{ fill: 'var(--accent)' }}>EDGE</text>
      {[0,1,2,3,4,5].map(i => {
        const a = (i/6) * Math.PI * 2;
        const x = 240 + Math.cos(a) * 80;
        const y = 100 + Math.sin(a) * 60;
        return (
          <g key={i}>
            <line x1="240" y1="100" x2={x} y2={y} stroke="var(--border)" strokeDasharray="2 3"/>
            <rect x={x-22} y={y-10} width="44" height="20" rx="4" stroke="var(--border)" fill="var(--surface)"/>
            <text x={x} y={y+4} className="node-label" style={{ fontSize: 9 }}>TV {i+1}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ============ Projects ============ */
function Projects() {
  const renderDiagram = (key) => {
    if (key === 'telegram-notion') return <TelegramNotionDiagram />;
    if (key === 'edge-tv') return <EdgeTVDiagram />;
    return null;
  };
  return (
    <section id="projects" className="section" data-screen-label="04 Projects">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow"><span className="num">03</span> · Projects</span>
          <h2 className="section-title">Side projects where I push my own creative limits.</h2>
          <p className="section-lede">A mix of personal experiments and award-winning concepts — all built to scratch a real itch.</p>
        </div>
        <div className="projects-grid">
          {D2.projects.map((p, i) => (
            <article key={i} className={`project-card reveal ${p.featured ? 'featured' : ''}`} data-stagger={Math.min(i, 4)}>
              <div className="project-vis">
                <div className="grid-bg"></div>
                <div className="nodes">{renderDiagram(p.diagram)}</div>
              </div>
              <div className="project-body">
                <div className="top">
                  <div>
                    <h3>{p.title}</h3>
                    <div style={{ color: 'var(--fg-2)', fontSize: 14, marginTop: 6 }}>{p.tagline}</div>
                  </div>
                  <div className="links">
                    {p.links.live && (
                      <a href={p.links.live} target="_blank" rel="noopener" aria-label="Live site">
                        <Icon.External />
                      </a>
                    )}
                  </div>
                </div>
                <p>{p.description}</p>
                <div className="tech-stack">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Books — fetch covers from Open Library ============ */
function BookCover({ book }) {
  const [state, setState] = useState2({ status: 'loading', url: null });
  useEffect2(() => {
    let cancelled = false;
    if (book.isbn) {
      if (!cancelled) setState({ status: 'ok', url: `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg` });
      return;
    }
    (async () => {
      try {
        const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(book.query)}&limit=1`);
        const json = await res.json();
        const doc = json?.docs?.[0];
        if (doc?.cover_i) {
          if (!cancelled) setState({ status: 'ok', url: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg` });
        } else {
          if (!cancelled) setState({ status: 'fallback', url: null });
        }
      } catch (e) {
        if (!cancelled) setState({ status: 'fallback', url: null });
      }
    })();
    return () => { cancelled = true; };
  }, [book.isbn, book.query]);

  const handleError = () => setState({ status: 'fallback', url: null });

  if (state.status === 'loading') return <div className="cover"><div className="skel"></div></div>;
  if (state.status === 'ok') return <div className="cover"><img src={state.url} alt={book.title} loading="lazy" onError={handleError} /></div>;
  return (
    <div className="cover">
      <div className="placeholder">
        <div>{book.title}</div>
        <div className="pl-author">{book.author}</div>
      </div>
    </div>
  );
}

function Books() {
  return (
    <section id="books" className="section" data-screen-label="05 Reading">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow"><span className="num">04</span> · Reading</span>
          <h2 className="section-title">Books that shaped how I think.</h2>
          <p className="section-lede">Recurring themes — building in public, systems thinking, AI as leverage, and the discipline of small, compounding habits.</p>
        </div>
        <div className="books-grid reveal">
          {D2.books.map(b => (
            <div className="book" key={b.title}>
              <BookCover book={b} />
              <div>
                <div className="title">{b.title}</div>
                <div className="author">{b.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Contact ============ */
function Contact() {
  return (
    <section id="contact" className="section" data-screen-label="06 Contact">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow"><span className="num">05</span> · Contact</span>
        </div>
        <div className="contact-card reveal" data-stagger="1">
          <h3>Let's <em>talk</em> about your next project.</h3>
          <p>Open to technical advisory, private wireless engagements, and conversations about anything that mixes telecom, cloud, and AI. Best to reach me by email.</p>
          <div className="contact-list">
            <a className="contact-row" href={`mailto:${D2.identity.email}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className="label">Email</span>
                <span className="value">{D2.identity.email}</span>
              </div>
              <Icon.Arrow className="arrow"/>
            </a>
            <a className="contact-row" href={D2.identity.linkedin} target="_blank" rel="noopener">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className="label">LinkedIn</span>
                <span className="value">/in/ivamdias</span>
              </div>
              <Icon.Arrow className="arrow"/>
            </a>
            <div className="contact-row" style={{ cursor: 'default' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className="label">Based in</span>
                <span className="value">{D2.identity.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Ivan Dias · Built with care in Madrid</div>
        <div>v1.0 · Last update Apr 2026</div>
      </div>
    </footer>
  );
}

/* ============ Tweaks ============ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 195,
  "density": "comfortable",
  "theme": "dark",
  "heroVariant": "compact"
}/*EDITMODE-END*/;

function PortfolioTweaks() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect2(() => {
    document.documentElement.style.setProperty('--accent-h', String(tweaks.accentHue));
    document.documentElement.dataset.density = tweaks.density;
  }, [tweaks.accentHue, tweaks.density]);

  return (
    <TweaksPanel>
      <TweakSection title="Hero layout">
        <TweakSelect
          label="Variant"
          value={tweaks.heroVariant}
          options={[
            { value: 'asymmetric', label: 'A · Asymmetric (big portrait)' },
            { value: 'compact',    label: 'B · Compact (avatar + Now)' },
            { value: 'textonly',   label: 'C · Text-only (signal tower)' },
            { value: 'credential', label: 'D · Credential strip' }
          ]}
          onChange={(v) => setTweak('heroVariant', v)}
        />
      </TweakSection>
      <TweakSection title="Theme">
        <TweakSlider label="Accent hue" value={tweaks.accentHue} min={0} max={360} step={1} onChange={(v) => setTweak('accentHue', v)} />
        <TweakRadio
          label="Density"
          value={tweaks.density}
          options={[{ value: 'comfortable', label: 'Comfortable' }, { value: 'compact', label: 'Compact' }]}
          onChange={(v) => setTweak('density', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

/* ============ Root ============ */
function App() {
  const stored = (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) || 'dark';
  const [theme, setTheme] = useState2(stored);
  const [heroV, setHeroV] = useState2(() => {
    try { return JSON.parse(localStorage.getItem('__edit_state') || '{}').heroVariant || TWEAK_DEFAULTS.heroVariant; } catch (e) { return TWEAK_DEFAULTS.heroVariant; }
  });
  useEffect2(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);
  // Listen for tweak changes to swap hero variant live
  useEffect2(() => {
    const onMsg = (e) => {
      if (e?.data?.type === '__edit_mode_set_keys' && e.data.edits?.heroVariant) {
        setHeroV(e.data.edits.heroVariant);
      }
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);
  useReveal([heroV]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero variant={heroV} />
        <About />
        <Experience />
        <Projects />
        <Books />
        <Contact />
      </main>
      <Footer />
      <PortfolioTweaks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
