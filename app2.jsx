// app2.jsx — projects, books, contact, root
const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;
const D2 = window.__PORTFOLIO_DATA__;

/* ============ Project diagrams (placeholders, not attempted realism) ============ */
function TelegramNotionDiagram() {
  return (
    <svg className="diagram tn-diagram" viewBox="0 0 720 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--muted)" />
        </marker>
        <marker id="arr-acc" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--accent)" />
        </marker>
        <linearGradient id="agentGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {/* === Column headers === */}
      <text x="100" y="22" className="tn-h">INPUT · TELEGRAM</text>
      <text x="360" y="22" className="tn-h" style={{ fill: 'var(--accent)' }}>AI PROCESSING LAYER</text>
      <text x="620" y="22" className="tn-h">OUTPUT · NOTION</text>

      {/* === Inputs (Telegram bot) === */}
      <g>
        {/* Telegram device frame */}
        <rect x="20" y="40" width="160" height="290" rx="14" stroke="var(--border)" fill="var(--surface)" />
        <rect x="20" y="40" width="160" height="32" rx="14" fill="var(--bg-2)" />
        <circle cx="36" cy="56" r="5" fill="var(--accent)" />
        <text x="48" y="60" className="tn-l" textAnchor="start">@notion_bot</text>
        <text x="170" y="60" className="tn-meta" textAnchor="end">●●</text>

        {/* Text bubble */}
        <rect x="34" y="86" width="118" height="36" rx="10" fill="var(--bg)" stroke="var(--border-soft)" />
        <text x="44" y="102" className="tn-msg">"Call Maria Friday</text>
        <text x="44" y="114" className="tn-msg">about Q2 review"</text>
        <rect x="34" y="86" width="3" height="36" rx="2" fill="var(--accent)" />

        {/* Voice bubble */}
        <rect x="34" y="134" width="118" height="34" rx="10" fill="var(--bg)" stroke="var(--border-soft)" />
        <circle cx="48" cy="151" r="7" fill="var(--accent-soft)" stroke="var(--accent)" />
        <path d="M45 148 L45 154 M48 146 L48 156 M51 149 L51 153" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) =>
        <rect key={i} x={62 + i * 9} y={148 - i % 3 * 2} width="3" height={6 + i % 3 * 3} rx="1" fill="var(--muted)" />
        )}
        <text x="142" y="166" className="tn-meta" textAnchor="end">0:14</text>

        {/* Image bubble */}
        <rect x="34" y="180" width="118" height="60" rx="10" fill="var(--bg)" stroke="var(--border-soft)" />
        <rect x="44" y="190" width="46" height="40" rx="4" fill="var(--bg-2)" stroke="var(--border-soft)" />
        <path d="M46 222 L56 210 L66 218 L78 204 L88 222 Z" fill="var(--muted-2)" opacity="0.5" />
        <circle cx="58" cy="200" r="3" fill="var(--accent)" opacity="0.7" />
        <text x="98" y="206" className="tn-msg">receipt.jpg</text>
        <text x="98" y="220" className="tn-meta">1.2 MB · auto-class</text>

        {/* Caption */}
        <text x="100" y="270" className="tn-cap">3 modalities</text>
        <text x="100" y="284" className="tn-cap" style={{ fill: 'var(--muted)' }}>text · voice · image</text>
      </g>

      {/* Telegram → Agent arrows */}
      <path d="M180 104 C 220 104, 230 130, 270 130" stroke="var(--muted)" strokeWidth="1" fill="none" markerEnd="url(#arr)" />
      <path d="M180 151 C 230 151, 240 178, 270 178" stroke="var(--muted)" strokeWidth="1" fill="none" markerEnd="url(#arr)" />
      <path d="M180 210 C 230 210, 240 226, 270 226" stroke="var(--muted)" strokeWidth="1" fill="none" markerEnd="url(#arr)" />

      {/* === AI Agent column === */}
      <g>
        {/* Outer agent frame */}
        <rect x="270" y="60" width="200" height="240" rx="12" fill="url(#agentGrad)" stroke="var(--accent)" strokeOpacity="0.4" />
        <text x="370" y="80" className="tn-h" style={{ fill: 'var(--accent)' }}>AI AGENT · GPT-4</text>

        {/* Stage 1: Modality router */}
        <rect x="284" y="96" width="172" height="36" rx="6" fill="var(--bg)" stroke="var(--border)" />
        <circle cx="298" cy="114" r="3" fill="var(--accent)" />
        <text x="308" y="111" className="tn-stage">1 · MODALITY ROUTER</text>
        <text x="308" y="124" className="tn-stage-sub">whisper · vision · nlp</text>

        {/* Stage 2: Image classifier (the special pipeline) */}
        <rect x="284" y="142" width="172" height="86" rx="6" fill="var(--bg)" stroke="var(--border)" />
        <circle cx="298" cy="160" r="3" fill="var(--accent)" />
        <text x="308" y="157" className="tn-stage">2 · IMAGE CLASSIFIER</text>
        <text x="308" y="167" className="tn-stage-sub">11-category pipeline</text>
        {/* Mini chip grid */}
        {['receipt', 'screen', 'note', 'diagram', 'doc', 'chart', '+5'].map((label, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const x = 290 + col * 42;
          const y = 178 + row * 22;
          return (
            <g key={label}>
              <rect x={x} y={y} width="38" height="16" rx="3" fill="var(--surface)" stroke="var(--border-soft)" />
              <text x={x + 19} y={y + 11} className="tn-chip">{label}</text>
            </g>);

        })}

        {/* Stage 3: Extractor */}
        <rect x="284" y="238" width="172" height="48" rx="6" fill="var(--bg)" stroke="var(--border)" />
        <circle cx="298" cy="256" r="3" fill="var(--accent)" />
        <text x="308" y="253" className="tn-stage">3 · EXTRACT &amp; ENRICH</text>
        <text x="308" y="265" className="tn-stage-sub">stakeholders · deadlines</text>
        <text x="308" y="277" className="tn-stage-sub">intent · priority · tags</text>

        {/* Internal flow arrows */}
        <path d="M370 132 L370 142" stroke="var(--accent)" strokeOpacity="0.6" strokeWidth="1" markerEnd="url(#arr-acc)" />
        <path d="M370 228 L370 238" stroke="var(--accent)" strokeOpacity="0.6" strokeWidth="1" markerEnd="url(#arr-acc)" />
      </g>

      {/* Agent → Notion */}
      <path d="M470 180 C 510 180, 520 132, 560 132" stroke="var(--accent)" strokeWidth="1.2" fill="none" markerEnd="url(#arr-acc)" />
      <path d="M470 200 L 560 200" stroke="var(--muted)" strokeWidth="1" fill="none" markerEnd="url(#arr)" />
      <path d="M470 220 C 510 220, 520 268, 560 268" stroke="var(--muted)" strokeWidth="1" fill="none" markerEnd="url(#arr)" />

      {/* === Notion output === */}
      <g>
        {/* Notion task card */}
        <rect x="560" y="100" width="140" height="76" rx="8" fill="var(--surface)" stroke="var(--accent)" strokeOpacity="0.5" />
        <rect x="560" y="100" width="140" height="20" rx="8" fill="var(--accent-soft)" />
        <text x="570" y="114" className="tn-l" textAnchor="start" style={{ fill: 'var(--accent)' }}>✓ TASK</text>
        <text x="570" y="134" className="tn-row-k" textAnchor="start">Title</text>
        <text x="600" y="134" className="tn-row-v" textAnchor="start">Call Maria · Q2</text>
        <text x="570" y="148" className="tn-row-k" textAnchor="start">Due</text>
        <text x="600" y="148" className="tn-row-v" textAnchor="start">Fri 2026-05-02</text>
        <text x="570" y="162" className="tn-row-k" textAnchor="start">People</text>
        <text x="600" y="162" className="tn-row-v" textAnchor="start">@maria</text>

        {/* Notion DB row */}
        <rect x="560" y="186" width="140" height="34" rx="6" fill="var(--bg)" stroke="var(--border)" />
        <text x="570" y="201" className="tn-stage" textAnchor="start">NOTION DB · per-user</text>
        <text x="570" y="213" className="tn-stage-sub" textAnchor="start">isolated workspace</text>

        {/* Postgres */}
        <rect x="560" y="248" width="140" height="40" rx="6" fill="var(--bg)" stroke="var(--border)" />
        <ellipse cx="578" cy="263" rx="9" ry="3.5" fill="none" stroke="var(--muted)" />
        <path d="M569 263 L569 273 A9 3.5 0 0 0 587 273 L587 263" fill="none" stroke="var(--muted)" />
        <text x="594" y="263" className="tn-stage" textAnchor="start">POSTGRES · NEON</text>
        <text x="594" y="275" className="tn-stage-sub" textAnchor="start">multi-user state</text>
      </g>

      {/* === Bottom infra strip === */}
      <g>
        <line x1="20" y1="316" x2="700" y2="316" stroke="var(--border-soft)" strokeDasharray="2 4" />
        <text x="20" y="340" className="tn-infra" textAnchor="start">INFRA</text>
        {[
        { x: 80, label: 'Railway' },
        { x: 160, label: 'Python' },
        { x: 230, label: 'OpenAI' },
        { x: 300, label: 'Whisper' },
        { x: 375, label: 'Telegram API' },
        { x: 470, label: 'Notion API' },
        { x: 555, label: 'Neon DB' },
        { x: 625, label: 'invite-codes' }].
        map((t) =>
        <g key={t.label}>
            <circle cx={t.x - 6} cy={336} r="2" fill="var(--accent)" opacity="0.6" />
            <text x={t.x} y="340" className="tn-infra" textAnchor="start">{t.label}</text>
          </g>
        )}
      </g>
    </svg>);

}

function EdgeTVDiagram() {
  return (
    <svg className="diagram" viewBox="0 0 480 200" fill="none">
      <circle cx="240" cy="100" r="22" stroke="var(--accent)" fill="var(--accent-soft)" />
      <text x="240" y="104" className="node-label" style={{ fill: 'var(--accent)' }}>EDGE</text>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = i / 6 * Math.PI * 2;
        const x = 240 + Math.cos(a) * 80;
        const y = 100 + Math.sin(a) * 60;
        return (
          <g key={i}>
            <line x1="240" y1="100" x2={x} y2={y} stroke="var(--border)" strokeDasharray="2 3" />
            <rect x={x - 22} y={y - 10} width="44" height="20" rx="4" stroke="var(--border)" fill="var(--surface)" />
            <text x={x} y={y + 4} className="node-label" style={{ fontSize: 9 }}>TV {i + 1}</text>
          </g>);

      })}
    </svg>);

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
          {D2.projects.map((p, i) =>
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
                    {p.links.live &&
                  <a href={p.links.live} target="_blank" rel="noopener" aria-label="Live site">
                        <Icon.External />
                      </a>
                  }
                  </div>
                </div>
                <p>{p.description}</p>
                <div className="tech-stack">
                  {p.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

/* ============ Books — fetch covers from Open Library ============ */
function BookCover({ book }) {
  const [state, setState] = useState2({ status: 'loading', url: null });
  useEffect2(() => {
    let cancelled = false;
    const fallbackSearch = async () => {
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
    };
    if (book.coverId) {
      setState({ status: 'ok', url: `https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg` });
    } else if (book.isbn) {
      const url = `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg?default=false`;
      const img = new Image();
      img.onload = () => { if (!cancelled && img.naturalWidth > 10) setState({ status: 'ok', url }); else fallbackSearch(); };
      img.onerror = () => fallbackSearch();
      img.src = url;
    } else {
      fallbackSearch();
    }
    return () => { cancelled = true; };
  }, [book.query]);

  if (state.status === 'loading') return <div className="cover"><div className="skel"></div></div>;
  if (state.status === 'ok') return <div className="cover"><img src={state.url} alt={book.title} loading="lazy" /></div>;
  return (
    <div className="cover">
      <div className="placeholder">
        <div>{book.title}</div>
        <div className="pl-author">{book.author}</div>
      </div>
    </div>);

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
          {D2.books.map((b) =>
          <div className="book" key={b.title}>
              <BookCover book={b} />
              <div>
                <div className="title">{b.title}</div>
                <div className="author">{b.author}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

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
            <a className="contact-row" href={`mailto:${D2.identity.email}`} style={{ width: "589.599px", height: "376.891px" }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className="label">Email</span>
                <span className="value">{D2.identity.email}</span>
              </div>
              <Icon.Arrow className="arrow" />
            </a>
            <a className="contact-row" href={D2.identity.linkedin} target="_blank" rel="noopener">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className="label">LinkedIn</span>
                <span className="value">/in/ivamdias</span>
              </div>
              <Icon.Arrow className="arrow" />
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
    </section>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Ivan Dias</div>
        <div>v1.0 · Last update Apr 2026</div>
      </div>
    </footer>);

}

/* ============ Tweaks ============ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 195,
  "density": "comfortable",
  "theme": "dark",
  "heroVariant": "compact"
} /*EDITMODE-END*/;

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
          { value: 'compact', label: 'B · Compact (avatar + Now)' },
          { value: 'textonly', label: 'C · Text-only (signal tower)' },
          { value: 'credential', label: 'D · Credential strip' }]
          }
          onChange={(v) => setTweak('heroVariant', v)} />
        
      </TweakSection>
      <TweakSection title="Theme">
        <TweakSlider label="Accent hue" value={tweaks.accentHue} min={0} max={360} step={1} onChange={(v) => setTweak('accentHue', v)} />
        <TweakRadio
          label="Density"
          value={tweaks.density}
          options={[{ value: 'comfortable', label: 'Comfortable' }, { value: 'compact', label: 'Compact' }]}
          onChange={(v) => setTweak('density', v)} />
        
      </TweakSection>
    </TweaksPanel>);

}

/* ============ Root ============ */
function App() {
  const stored = typeof localStorage !== 'undefined' && localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState2(stored);
  const [heroV, setHeroV] = useState2(() => {
    try {return JSON.parse(localStorage.getItem('__edit_state') || '{}').heroVariant || TWEAK_DEFAULTS.heroVariant;} catch (e) {return TWEAK_DEFAULTS.heroVariant;}
  });
  useEffect2(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {localStorage.setItem('theme', theme);} catch (e) {}
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
    </>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);