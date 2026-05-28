// Screens: Register, Home, Deck, Test, Done, UserSwitcher
const { useState: useStateS, useRef: useRefS, useMemo: useMemoS, useEffect: useEffectS } = React;

/* ── Icon helpers ─────────────────────────────────── */
function CloseIcon()   { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>; }
function CheckIcon()   { return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"   strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>; }
function XIcon()       { return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"   strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>; }
function PlayIcon()    { return <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>; }
function GearIcon()    { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>; }
function ChevDownS()   { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>; }

function initial(name) { return (name || '?').trim().charAt(0).toUpperCase(); }

function shuffleArr(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function useSwipeBack(onBack) {
  const startRef = useRefS(null);
  return {
    onTouchStart: e => {
      const t = e.touches?.[0];
      if (t) startRef.current = { x: t.clientX, y: t.clientY };
    },
    onTouchEnd: e => {
      const start = startRef.current;
      const t = e.changedTouches?.[0];
      startRef.current = null;
      if (!start || !t) return;
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      if (Math.abs(dx) > 90 && Math.abs(dx) > Math.abs(dy) * 1.7) onBack?.();
    }
  };
}

/* ── Register ─────────────────────────────────────── */
function RegisterScreen({ existingUsers, onCreate, onPickExisting }) {
  const [name, setName] = useStateS('');
  const trimmed = name.trim();
  const submit = () => { if (trimmed) onCreate(trimmed); };
  return (
    <div className="app-screen">
      <div className="register">
        <div className="hero">
          <div className="flag">🇳🇱</div>
          <h1>Examen Woorden</h1>
          <p>Practice Dutch reading and listening exam vocabulary.</p>
        </div>
        <label className="field-label">Your name</label>
        <input className="text-input" autoFocus placeholder="e.g. Alex" value={name}
          onChange={e => setName(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} maxLength={24} />
        <button className="primary-btn" disabled={!trimmed} onClick={submit}>Start learning</button>
        {existingUsers.length > 0 && (
          <div className="existing-users">
            <div className="field-label" style={{ marginBottom: 8 }}>Or continue as</div>
            {existingUsers.map(u => (
              <div key={u} className="user-row" onClick={() => onPickExisting(u)}>
                <div className="user-avatar">{initial(u)}</div>
                <div className="name">{u}</div>
                <div className="chev">›</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── User Switcher (bottom sheet) ────────────────── */
function UserSwitcher({ users, active, onPick, onAdd, onDelete, onClose }) {
  const [adding, setAdding] = useStateS(false);
  const [newName, setNewName] = useStateS('');
  const submit = () => {
    const t = newName.trim();
    if (!t) return;
    onAdd(t); setNewName(''); setAdding(false);
  };
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle"></div>
        <h2>Switch user</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {users.map(u => (
            <div key={u} style={{
              background: u === active ? 'var(--paper-2)' : 'var(--paper)',
              border: u === active ? '2px solid var(--brand)' : '1px solid var(--line)',
              borderRadius: 14, padding: '12px 14px',
              display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer'
            }} onClick={() => onPick(u)}>
              <div className="user-avatar">{initial(u)}</div>
              <div style={{ flex: 1, fontWeight: 700, fontSize: 15 }}>{u}</div>
              {u === active
                ? <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>active</div>
                : <button onClick={e => { e.stopPropagation(); if (confirm(`Delete ${u}?`)) onDelete(u); }}
                    style={{ background: 'transparent', border: 'none', color: 'var(--ink-faint)', fontSize: 18, padding: 4, cursor: 'pointer' }}>×</button>
              }
            </div>
          ))}
        </div>
        {adding ? (
          <div style={{ marginTop: 14 }}>
            <input className="text-input" autoFocus placeholder="New name" value={newName}
              onChange={e => setNewName(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} maxLength={24} />
            <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
              <button className="ghost-btn" style={{ flex: 1, margin: 0 }} onClick={() => { setAdding(false); setNewName(''); }}>Cancel</button>
              <button className="primary-btn" style={{ flex: 1, margin: 0 }} disabled={!newName.trim()} onClick={submit}>Add</button>
            </div>
          </div>
        ) : (
          <button className="ghost-btn" onClick={() => setAdding(true)} style={{ marginTop: 14 }}>+ Add another user</button>
        )}
      </div>
    </div>
  );
}

/* ── Home ────────────────────────────────────────── */
function LegacyHomeScreen({ user, stats, sentenceStats, prefs, lessons, articles, wordCategories, onPickMode, onPickContent, onChangePrefs, onSwitchUser, onShowSettings, continueSession, onContinue }) {
  const [lesOpen, setLesOpen] = useStateS(false);
  const [categoryOpen, setCategoryOpen] = useStateS(false);
  const [testCountDraft, setTestCountDraft] = useStateS(String(prefs.testCount || 100));
  const activeStats = prefs.contentType === 'sentences' ? sentenceStats : stats;
  const activeUnit = prefs.contentType === 'sentences' ? 'sentences' : 'words';
  const allWordCount = wordCategories.reduce((sum, c) => sum + c.count, 0);
  const allArticleCount = articles.reduce((sum, a) => sum + (prefs.contentType === 'sentences' ? a.sentenceCount : a.wordCount), 0);
  const currentArticle = articles.find(a => a.les === prefs.les);
  const currentLesLabel = prefs.les === 'all'
    ? `All articles · ${activeStats.total} ${activeUnit}`
    : `Article ${prefs.les} · ${currentArticle?.title || ''}`;
  const currentCategory = wordCategories.find(c => c.id === prefs.category);
  const currentCategoryLabel = prefs.category === 'all'
    ? `All categories · ${allWordCount} words`
    : `${currentCategory?.label || prefs.category} · ${currentCategory?.count || 0} words`;
  const applyTestCount = value => {
    const n = Number.parseInt(value, 10);
    const clamped = Number.isFinite(n) ? Math.max(20, Math.min(1200, n)) : 100;
    setTestCountDraft(String(clamped));
    onChangePrefs({ testCount: clamped });
  };

  return (
    <div className="app-screen">
      <div className="topbar">
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em' }}>
          🇳🇱&nbsp;&nbsp;Examen Woorden
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div className="mode-pill"><span className="dot"></span>{activeStats.total} {activeUnit}</div>
          <button className="iconbtn" onClick={onShowSettings} title="Instellingen"><GearIcon /></button>
        </div>
      </div>

      <div className="home">
        {/* Greeting */}
        <div className="home-greet" onClick={onSwitchUser}>
          <div className="user-avatar">{initial(user)}</div>
          <div className="who">
            <div className="hi">Hallo, {user}!</div>
            <div className="sw">Tap to switch user</div>
          </div>
          <div style={{ color: 'var(--ink-faint)', fontSize: 22 }}>⇅</div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-card brand"><div className="num">{activeStats.total}</div><div className="lbl">Total</div></div>
          <div className="stat-card keep"><div className="num">{activeStats.learned}</div><div className="lbl">Learned</div></div>
          <div className="stat-card forgot"><div className="num">{activeStats.forgotten}</div><div className="lbl">Review</div></div>
        </div>

        {/* Continue banner */}
        {continueSession && (
          <div className="continue-banner" onClick={onContinue}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="label">Continue</div>
              <div className="title">
                {continueSession.mode === 'test' ? 'Test in progress'
                 : continueSession.mode === 'review' ? 'Review session'
                 : 'Learning session'}
              </div>
              <div className="progress">
                <span style={{ width: `${Math.round((continueSession.cursor / continueSession.words.length) * 100)}%` }}></span>
              </div>
            </div>
            <div className="play"><PlayIcon /></div>
          </div>
        )}

        <div className="section-h"><h3>Content</h3></div>
        <div className="seg" style={{ marginBottom: 14 }}>
          {[{v:'words',lab:'Words'},{v:'sentences',lab:'Sentences'}].map(o => (
            <div key={o.v} className={'opt' + (prefs.contentType === o.v ? ' active' : '')}
              onClick={() => onPickContent ? onPickContent(o.v) : onChangePrefs({ contentType: o.v, filterMode: o.v === 'sentences' ? 'article' : prefs.filterMode })}>{o.lab}</div>
          ))}
        </div>

        {prefs.contentType === 'words' && (
          <>
            <div className="section-h"><h3>Filter type</h3></div>
            <div className="seg" style={{ marginBottom: 14 }}>
              {[{v:'article',lab:'Article'},{v:'category',lab:'Category'}].map(o => (
                <div key={o.v} className={'opt' + (prefs.filterMode === o.v ? ' active' : '')}
                  onClick={() => onChangePrefs({ filterMode: o.v })}>{o.lab}</div>
              ))}
            </div>
          </>
        )}

        {/* Article/category dropdown */}
        <div className="section-h"><h3>{prefs.contentType === 'words' && prefs.filterMode === 'category' ? 'Category' : 'Article'}</h3></div>
        {prefs.contentType === 'words' && prefs.filterMode === 'category' ? (
          <div className={'dropdown' + (categoryOpen ? ' open' : '')}>
            <button type="button" className="dropdown-trigger" onClick={() => setCategoryOpen(o => !o)}>
              <span className="dropdown-value">{currentCategoryLabel}</span>
              <span className="dropdown-chev"><ChevDownS /></span>
            </button>
            {categoryOpen && (
              <div className="dropdown-menu">
                <div className={'dropdown-item' + (prefs.category === 'all' ? ' active' : '')}
                  onClick={() => { onChangePrefs({ category: 'all' }); setCategoryOpen(false); }}>
                  <span>All categories</span>
                  <span className="dropdown-count">{allWordCount}</span>
                </div>
                {wordCategories.map(c => (
                  <div key={c.id}
                    className={'dropdown-item' + (prefs.category === c.id ? ' active' : '')}
                    onClick={() => { onChangePrefs({ category: c.id }); setCategoryOpen(false); }}>
                    <span>{c.label}</span>
                    <span className="dropdown-count">{c.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
        <div className={'dropdown' + (lesOpen ? ' open' : '')}>
          <button type="button" className="dropdown-trigger" onClick={() => setLesOpen(o => !o)}>
            <span className="dropdown-value">{currentLesLabel}</span>
            <span className="dropdown-chev"><ChevDownS /></span>
          </button>
          {lesOpen && (
            <div className="dropdown-menu">
              <div className={'dropdown-item' + (prefs.les === 'all' ? ' active' : '')}
                onClick={() => { onChangePrefs({ les: 'all' }); setLesOpen(false); }}>
                <span>All articles</span>
                <span className="dropdown-count">{allArticleCount}</span>
              </div>
              {articles.map(a => (
                <div key={a.les}
                  className={'dropdown-item' + (prefs.les === a.les ? ' active' : '')}
                  onClick={() => { onChangePrefs({ les: a.les }); setLesOpen(false); }}>
                  <span>Article {a.les}: {a.title}</span>
                  <span className="dropdown-count">{prefs.contentType === 'sentences' ? a.sentenceCount : a.wordCount}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        )}

        {/* Modes */}
        <div className="section-h" style={{ marginTop: 18 }}><h3>Modes</h3></div>
        <div className="mode-list">
          <div className="mode-card learn" onClick={() => onPickMode('study')}>
            <div className="glyph">📖</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="title">Study</div>
              <div className="desc">Swipe through selected {activeUnit}.</div>
            </div>
            <div className="chev">›</div>
          </div>
          <div className="mode-card review" onClick={() => onPickMode('review')}>
            <div className="glyph">🔁</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="title">Review</div>
              <div className="desc">{activeStats.forgotten ? `${activeStats.forgotten} ${activeUnit.slice(0, -1)}${activeStats.forgotten === 1 ? '' : 's'} to retry` : 'Nothing to review yet'}</div>
            </div>
            <div className="chev">›</div>
          </div>
          <div className="mode-card test" onClick={() => onPickMode('test')}>
            <div className="glyph">✓</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="title">Test</div>
              <div className="desc">{prefs.contentType === 'sentences' ? 'Pick the English explanation.' : 'Guess the meaning — no hints.'}</div>
            </div>
            <div className="chev">›</div>
          </div>
        </div>

        {/* Test count (only relevant when testing all words) */}
        {prefs.les === 'all' && !(prefs.contentType === 'words' && prefs.filterMode === 'category' && prefs.category !== 'all') && (
          <>
            <div className="section-h" style={{ marginTop: 18 }}><h3>Test count</h3></div>
            <div className="test-count-row">
              <input className="number-input" type="number" inputMode="numeric"
                min="20" max="1200" step="10" value={testCountDraft}
                onChange={e => setTestCountDraft(e.target.value)}
                onBlur={e => applyTestCount(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') e.currentTarget.blur(); }} />
              <div className="count-hint">20-1200</div>
            </div>
          </>
        )}

        {/* Order */}
        <div className="section-h"><h3>Order</h3></div>
        <div className="seg" style={{ marginBottom: 14 }}>
          {[{v:'random',lab:'Random'},{v:'course',lab:'By lesson'}].map(o => (
            <div key={o.v} className={'opt' + (prefs.order === o.v ? ' active' : '')}
              onClick={() => onChangePrefs({ order: o.v })}>{o.lab}</div>
          ))}
        </div>

      </div>
    </div>
  );
}

function LegacyWordsPickScreen({ wordCategories, statsByCategory, articles, prefs, onBack, onPickAll, onPickCategory, onPickArticle }) {
  const [mode, setMode] = useStateS('category');
  const orderedCategories = ['verb', 'noun', 'preposition', 'question', 'time', 'phrase', 'pronoun', 'adverb', 'adjective', 'grammar', 'other'];
  const categories = wordCategories.slice().sort((a, b) => {
    const ai = orderedCategories.indexOf(a.id);
    const bi = orderedCategories.indexOf(b.id);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  return (
    <div className="app-screen">
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}><CloseIcon /></button>
        <div className="mode-pill"><span className="dot"></span>Words</div>
        <div style={{ width: 38 }}></div>
      </div>
      <div className="home pick-screen">
        <div className="seg">
          <div className={'opt' + (mode === 'all' ? ' active' : '')} onClick={() => { setMode('all'); onPickAll(); }}>All</div>
          <div className={'opt' + (mode === 'article' ? ' active' : '')} onClick={() => setMode('article')}>Article</div>
          <div className={'opt' + (mode === 'category' ? ' active' : '')} onClick={() => setMode('category')}>Category</div>
        </div>

        {mode === 'article' ? (
          <>
            <div className="section-h"><h3>Articles</h3></div>
            <div className="pick-list">
              {articles.map(a => (
                <div key={a.les} className="mode-card pick-row" onClick={() => onPickArticle(a.les)}>
                  <div className="glyph reading">{a.les}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="title">Article {a.les}</div>
                    <div className="desc">{a.title} · {a.wordCount} words</div>
                  </div>
                  <div className="chev">›</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="section-h"><h3>Categories</h3></div>
            <div className="pick-grid">
              {categories.map(c => {
                const s = statsByCategory[c.id] || { total: c.count, learned: 0 };
                const pct = s.total ? Math.round((s.learned / s.total) * 100) : 0;
                return (
                  <div key={c.id} className="pick-card" onClick={() => onPickCategory(c.id)}>
                    <div className="pick-card-title">{c.label}</div>
                    <div className="pick-card-count">{c.count} words</div>
                    <div className="mini-progress"><span style={{ width: `${pct}%` }}></span></div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function LegacySentencesPickScreen({ readings, statsByArticle, onBack, onPickArticle }) {
  const rows = readings.map(r => {
    const s = statsByArticle[r.id] || { total: r.sentences?.length || 0, learned: 0 };
    return { ...r, stats: s, pct: s.total ? Math.round((s.learned / s.total) * 100) : 0 };
  });
  const resume = rows.find(r => r.stats.learned > 0 && r.stats.learned < r.stats.total) || rows[0];

  return (
    <div className="app-screen">
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}><CloseIcon /></button>
        <div className="mode-pill"><span className="dot"></span>Sentences</div>
        <div style={{ width: 38 }}></div>
      </div>
      <div className="home pick-screen">
        {resume && (
          <div className="continue-banner pick-continue" onClick={() => onPickArticle(resume.les)}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="label">Continue</div>
              <div className="title">{resume.title}</div>
              <div className="desc-light">Sentence {Math.min(resume.stats.learned + 1, resume.stats.total)}/{resume.stats.total}</div>
              <div className="progress"><span style={{ width: `${resume.pct}%` }}></span></div>
            </div>
            <div className="play"><PlayIcon /></div>
          </div>
        )}

        <div className="section-h"><h3>All articles</h3></div>
        <div className="pick-list">
          {rows.map(r => (
            <div key={r.id} className="mode-card pick-row" onClick={() => onPickArticle(r.les)}>
              <div className="glyph reading">{r.stats.total}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="title">{r.title}</div>
                <div className="desc">{r.stats.total} sentences</div>
                <div className="mini-progress"><span style={{ width: `${r.pct}%` }}></span></div>
              </div>
              <div className="chev">›</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SessionModeList({ selected, order, onOrder, onStart, reviewCount = 0, unit = 'items', testCount = 100, testLabel = null }) {
  const [orderOpen, setOrderOpen] = useStateS(false);
  if (!selected) {
    return (
      <div className="empty-hint-card">
        Choose the content you want to practice first.
      </div>
    );
  }
  const orderLabel = order === 'random' ? 'random order' : (selected.orderLabel || 'by order');
  const total = selected.total || selected.count || 0;
  const scope = selected.scopeLabel || selected.label;
  return (
    <>
      <div className="section-h study-mode-heading">
        <h3>Study modes</h3>
        <div className="order-menu-wrap">
          <button type="button" className="order-menu-btn" onClick={() => setOrderOpen(v => !v)} aria-label="Order options">...</button>
          {orderOpen && (
            <div className="order-menu">
              {[{v:'course', lab:'By order'}, {v:'random', lab:'Random'}].map(o => (
                <button
                  type="button"
                  key={o.v}
                  className={order === o.v ? 'active' : ''}
                  onClick={() => { onOrder(o.v); setOrderOpen(false); }}
                >{o.lab}</button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="study-mode-grid">
        <div className="study-start-card" onClick={() => onStart('study')}>
          <div className="study-start-copy">
            <div className="study-start-label">Start session</div>
            <div className="study-start-title">Study {total || ''} {unit}</div>
            <div className="study-start-desc">{scope} · in {orderLabel}</div>
          </div>
          <div className="study-start-play"><PlayIcon /></div>
        </div>
        <div className="study-secondary-row">
          <div className="study-small-card review" onClick={() => onStart('review')}>
            <div className="study-small-icon">↻</div>
            <div>
              <div className="study-small-title">Review</div>
              <div className="study-small-desc">{reviewCount ? `${reviewCount} due` : '0 due'}</div>
            </div>
          </div>
          <div className="study-small-card test" onClick={() => onStart('test')}>
            <div className="study-small-icon">✓</div>
            <div>
              <div className="study-small-title">Test</div>
              <div className="study-small-desc">{testLabel || `${testCount} questions`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Content card icons ──────────────────────────── */
function BookIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}
function GradCapIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}
function ListIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="4" y1="7"  x2="20" y2="7"/>
      <line x1="4" y1="12" x2="20" y2="12"/>
      <line x1="4" y1="17" x2="20" y2="17"/>
    </svg>
  );
}

/* ── Home ────────────────────────────────────────── */
function StudyListIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function HomeScreen({ user, stats, commonStats, studyListCount = 0, onPickContent, onSwitchUser, onShowSettings, continueSession, onContinue }) {
  const primary = { label: 'Reading & Listening Words', total: commonStats?.total || 0, learned: commonStats?.learned || 0, review: commonStats?.forgotten || 0 };
  const libraryRows = [
    { label: primary.label, total: primary.total, learned: primary.learned, review: primary.review, tone: 'keep', icon: <BookIcon />, action: 'common' },
    { label: 'My Study List', total: studyListCount, learned: 0, review: 0, tone: 'brand', icon: <StudyListIcon />, action: 'studylist', saved: true },
  ];
  const continueDeck = primary;
  const continueProgress = continueSession?.words?.length
    ? Math.round((continueSession.cursor / continueSession.words.length) * 100)
    : 0;

  return (
    <div className="app-screen">
      <div className="topbar">
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em' }}>
          🇳🇱&nbsp;&nbsp;Examen Woorden
        </div>
        <button className="iconbtn" onClick={onShowSettings} title="Instellingen"><GearIcon /></button>
      </div>

      <div className="home">
        <div className="home-greet" onClick={onSwitchUser}>
          <div className="user-avatar">{initial(user)}</div>
          <div className="who">
            <div className="hi">Hallo, {user}!</div>
            <div className="sw">Tap to switch user</div>
          </div>
          <div className="home-switch-chev">⌄</div>
        </div>

        {continueSession && (
          <div className="home-continue-card" onClick={onContinue}>
            <div className="home-continue-copy">
              <div className="home-continue-label">Pick up where you left off</div>
              <div className="home-continue-title">{continueDeck.label}</div>
              <div className="home-continue-meta">
                <span>{continueDeck.learned} learned</span>
                {continueDeck.review > 0 && <span className="home-review-pill">{continueDeck.review} due for review</span>}
              </div>
              <div className="home-continue-progress" aria-hidden="true">
                <span style={{ width: `${continueProgress}%` }}></span>
              </div>
            </div>
            <div className="home-continue-play"><PlayIcon /></div>
          </div>
        )}

        <div className="section-h library-heading"><h3>Your library</h3></div>
        <div className="library-list">
          {libraryRows.map(row => (
            <React.Fragment key={row.label}>
              <div className="library-row" onClick={() => onPickContent(row.action)}>
                <div className={`library-icon ${row.tone}`}>{row.icon}</div>
                <div className="library-body">
                  <div className="library-title">{row.label}</div>
                  <div className="library-meta">
                    <span>{row.learned} / {row.total}</span>
                    {row.saved ? <span>{row.total === 1 ? 'saved' : 'saved'}</span> : null}
                    {!row.saved && row.review > 0 && <span className="library-review">{row.review} review</span>}
                  </div>
                </div>
                <div className="library-chev">›</div>
              </div>
              {row.action === 'common' && (
                <div className="library-source-note">
                  <span className="library-source-icon">🌐</span>
                  <span>Vocabulary is based on the Quizlet-style Word document, with examples matched from the mock exams where available.</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function WordsPickScreen({ wordCategories, statsByCategory, articles, lessons, wordDeck, prefs, onBack, onStartDeck }) {
  const swipeBack = useSwipeBack(onBack);
  const isCommon = wordDeck === 'common';
  const primaryMode = isCommon ? 'lesson' : 'article';
  const primaryLabel = isCommon ? 'lesson' : 'article';
  const allDeck = { id: 'all', label: 'all words', reviewCount: 0, patch: { wordDeck, filterMode: primaryMode, les: 'all', category: 'all' } };
  const [mode, setMode] = useStateS(primaryMode);
  const [order, setOrder] = useStateS(prefs.order || 'course');
  const [itemOrder, setItemOrder] = useStateS('asc');
  const [showAllItems, setShowAllItems] = useStateS(false);
  const [allScope, setAllScope] = useStateS('all');
  const sourceItems = isCommon
    ? lessons.map(l => ({ les: l.les, title: `Lesson ${l.les}`, wordCount: l.count }))
    : articles.filter(a => a.wordCount > 0);
  const firstItem = sourceItems[0];
  const [itemLes, setItemLes] = useStateS(String(firstItem?.les || ''));
  const [categoryId, setCategoryId] = useStateS('verb');
  const [wordLimit, setWordLimit] = useStateS(String(prefs.wordLimit || ''));
  const [lesFrom, setLesFrom] = useStateS(String(prefs.lesFrom || ''));
  const [lesTo, setLesTo] = useStateS(String(prefs.lesTo || ''));
  const orderedCategories = ['verb', 'noun', 'preposition', 'adjective', 'question', 'other'];
  const categories = wordCategories.slice().sort((a, b) => {
    const ai = orderedCategories.indexOf(a.id);
    const bi = orderedCategories.indexOf(b.id);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
  const itemOptions = sourceItems
    .slice()
    .sort((a, b) => itemOrder === 'asc' ? a.les - b.les : b.les - a.les);
  const selectedItem = sourceItems.find(a => String(a.les) === String(itemLes)) || itemOptions[0];
  const selectedCategory = categories.find(c => c.id === categoryId) || categories[0];
  const allCustom = allScope === 'count'
    ? { wordLimit, lesFrom: '', lesTo: '' }
    : allScope === 'range'
      ? { wordLimit: '', lesFrom, lesTo }
      : { wordLimit: '', lesFrom: '', lesTo: '' };
  const selected = mode === 'all'
    ? { ...allDeck, label: allScope === 'count' && wordLimit ? `${wordLimit} words` : allScope === 'range' && (lesFrom || lesTo) ? `${primaryLabel}s ${lesFrom || '1'}-${lesTo || '30'}` : 'all words', total: allScope === 'count' && wordLimit ? Number(wordLimit) : sourceItems.reduce((sum, item) => sum + (item.wordCount || 0), 0), scopeLabel: isCommon ? 'Reading & Listening Words' : 'A2 Words', orderLabel: isCommon ? 'lesson order' : 'article order' }
    : mode === primaryMode && selectedItem
      ? { id: `${primaryMode}-${selectedItem.les}`, label: selectedItem.title, reviewCount: 0, total: selectedItem.wordCount || 0, scopeLabel: isCommon ? `Lesson ${selectedItem.les}` : selectedItem.title, orderLabel: isCommon ? 'lesson order' : 'article order', patch: { wordDeck, filterMode: primaryMode, les: selectedItem.les, category: 'all' } }
      : mode === 'category' && selectedCategory
        ? { id: `category-${selectedCategory.id}`, label: selectedCategory.label, reviewCount: (statsByCategory[selectedCategory.id] || {}).forgotten || 0, total: selectedCategory.count || 0, scopeLabel: selectedCategory.label, orderLabel: 'category order', patch: { wordDeck, filterMode: 'category', category: selectedCategory.id, les: 'all' } }
        : null;
  const start = action => {
    if (!selected) return;
    const custom = selected.id === 'all' ? allCustom : { wordLimit: '', lesFrom: '', lesTo: '' };
    onStartDeck(action, { ...selected.patch, ...custom, order });
  };
  const shownItems = itemOptions;
  const categoryShort = label => ({
    verb: 'Verbs',
    verbs: 'Verbs',
    noun: 'Nouns',
    nouns: 'Nouns',
    preposition: 'Prep.',
    prepositions: 'Prep.',
    adjective: 'Adj.',
    adjectives: 'Adj.',
    question: 'Question',
    questions: 'Question',
    time: 'Time',
    phrase: 'Phrase',
    phrases: 'Phrase',
    adverb: 'Adverb',
    adverbs: 'Adverb',
    other: 'Other'
  }[String(label || '').toLowerCase()] || label);

  return (
    <div className="app-screen" {...swipeBack}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}><CloseIcon /></button>
        <div className="mode-pill"><span className="dot"></span>{isCommon ? 'Exam Words' : 'A2 Words'}</div>
        <div style={{ width: 38 }}></div>
      </div>
      <div className="home pick-screen">
        <div className="seg">
          <div className={'opt' + (mode === primaryMode ? ' active' : '')} onClick={() => setMode(primaryMode)}>{isCommon ? 'Lesson' : 'Article'}</div>
          <div className={'opt' + (mode === 'category' ? ' active' : '')} onClick={() => setMode('category')}>Category</div>
          <div className={'opt' + (mode === 'all' ? ' active' : '')} onClick={() => setMode('all')}>All</div>
        </div>

        {mode === 'all' && (
          <div className="custom-filter-card">
            <div className="section-h"><h3>Customize all words</h3></div>
            <label className="stacked-field">
              <span>Scope</span>
              <select className="select-input compact-select" value={allScope} onChange={e => setAllScope(e.target.value)}>
                <option value="all">All words</option>
                <option value="count">Choose by number of words</option>
                <option value="range">Choose by {primaryLabel} range</option>
              </select>
            </label>
            {allScope === 'count' && (
              <label className="stacked-field">
                <span>Words</span>
                <input className="number-input compact" inputMode="numeric" type="number" min="1" max="1200"
                  placeholder="100" value={wordLimit} onChange={e => setWordLimit(e.target.value)} />
              </label>
            )}
            {allScope === 'range' && (
              <div className="inline-input-grid two">
                <label>
                  <span>From {primaryLabel}</span>
                  <input className="number-input compact" inputMode="numeric" type="number" min="1" max="30"
                    placeholder="1" value={lesFrom} onChange={e => setLesFrom(e.target.value)} />
                </label>
                <label>
                  <span>To {primaryLabel}</span>
                  <input className="number-input compact" inputMode="numeric" type="number" min="1" max="30"
                    placeholder="30" value={lesTo} onChange={e => setLesTo(e.target.value)} />
                </label>
              </div>
            )}
          </div>
        )}

        {mode === primaryMode && (
          <>
            <div className="section-h pick-heading-row">
              <h3>Or pick one {primaryLabel}</h3>
              <button type="button" className="list-sort-btn" onClick={() => setItemOrder(o => o === 'asc' ? 'desc' : 'asc')}>
                {itemOrder === 'asc' ? 'A → Z' : 'Z → A'}⌄
              </button>
            </div>
            <div className="content-list-card compact-scroll-list lesson-scroll-list">
              {shownItems.map(a => {
                const selectedRow = String(a.les) === String(itemLes);
                return (
                  <div key={a.les} className={'content-list-row' + (selectedRow ? ' selected' : '')} onClick={() => setItemLes(String(a.les))}>
                    <div className="content-list-index">{a.les}</div>
                    <div className="content-list-main">
                      <div className="content-list-title">{isCommon ? `Lesson ${a.les}` : a.title}</div>
                      <div className="content-list-meta">0 / {a.wordCount} learned</div>
                    </div>
                    <div className="content-list-progress"><span style={{ width: selectedRow ? '18%' : '0%' }}></span></div>
                    <div className="content-list-chev">›</div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {mode === 'category' && (
          <>
            <div className="section-h"><h3>Pick category</h3></div>
            <div className="category-tile-grid">
              {categories.map(c => (
                <button
                  type="button"
                  key={c.id}
                  className={'category-tile' + (categoryId === c.id ? ' active' : '')}
                  onClick={() => setCategoryId(c.id)}
                >
                  <span>{categoryShort(c.label || c.id)}</span>
                  <strong>{c.count}</strong>
                </button>
              ))}
            </div>
          </>
        )}

        <SessionModeList selected={selected} order={order} onOrder={setOrder}
          reviewCount={selected?.reviewCount || 0} unit="words"
          testLabel={`${selected?.total || 0} questions`} onStart={start} />

      </div>
    </div>
  );
}

function SentencesPickScreen({ readings, statsByArticle, prefs, continueSession, onBack, onStartArticle, onContinueArticle }) {
  const swipeBack = useSwipeBack(onBack);
  const [selected, setSelected] = useStateS(null);
  const [order, setOrder] = useStateS(prefs.order || 'course');
  const [articleOrder, setArticleOrder] = useStateS('asc');
  const defaultArticleLes = prefs.les && prefs.les !== 'all' ? String(prefs.les) : String(readings[0]?.les || '');
  const [articleLes, setArticleLes] = useStateS(defaultArticleLes);
  const rows = readings.map(r => {
    const s = statsByArticle[r.id] || { total: r.sentences?.length || 0, learned: 0, forgotten: 0 };
    return { ...r, stats: s, pct: s.total ? Math.round((s.learned / s.total) * 100) : 0 };
  });
  const articleOptions = rows.slice().sort((a, b) => articleOrder === 'asc' ? a.les - b.les : b.les - a.les);
  const resumeArticle = continueSession?.mode === 'reading'
    ? rows.find(r => r.les === continueSession.words?.[0]?.les)
    : null;
  const resume = resumeArticle || rows.find(r => r.stats.learned > 0 && r.stats.learned < r.stats.total) || rows[0];
  const effectiveArticle = (selected && rows.find(r => r.les === selected.les)) || rows.find(r => String(r.les) === String(articleLes)) || articleOptions[0];
  const effectiveSelected = effectiveArticle
    ? { id: effectiveArticle.id, label: effectiveArticle.title, reviewCount: effectiveArticle.stats.forgotten, total: effectiveArticle.stats.total, les: effectiveArticle.les }
    : null;
  const pick = r => {
    setArticleLes(String(r.les));
    setSelected({ id: r.id, label: r.title, reviewCount: r.stats.forgotten, total: r.stats.total, les: r.les });
  };
  const start = action => effectiveSelected && onStartArticle(action, effectiveSelected.les, order);
  const pickArticleValue = value => {
    const les = Number(value);
    const article = rows.find(r => r.les === les);
    if (article) pick(article);
  };

  return (
    <div className="app-screen" {...swipeBack}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}><CloseIcon /></button>
        <div className="mode-pill"><span className="dot"></span>Sentences</div>
        <div style={{ width: 38 }}></div>
      </div>
      <div className="home pick-screen">
        {resume && (
          <div className="continue-banner pick-continue" onClick={() => onContinueArticle ? onContinueArticle(resume, order) : pick(resume)}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="label">Continue</div>
              <div className="title">{resume.title}</div>
              <div className="desc-light">Sentence {Math.min(resume.stats.learned + 1, resume.stats.total)}/{resume.stats.total}</div>
              <div className="progress"><span style={{ width: `${resume.pct}%` }}></span></div>
            </div>
            <div className="play"><PlayIcon /></div>
          </div>
        )}

        <div className="section-h pick-heading-row compact-pick-heading">
          <h3>Pick article</h3>
          <button type="button" className="list-sort-btn" onClick={() => setArticleOrder(o => o === 'asc' ? 'desc' : 'asc')}>
            {articleOrder === 'asc' ? 'A → Z' : 'Z → A'}⌄
          </button>
        </div>
        {effectiveArticle && (
          <div className="content-list-card sentence-article-picker">
            <div className="compact-scroll-list article-scroll-list">
              {articleOptions.map(r => {
                const selectedRow = String(r.les) === String(effectiveArticle.les);
                return (
                  <div key={r.id} className={'content-list-row' + (selectedRow ? ' selected' : '')} onClick={() => pick(r)}>
                    <div className="content-list-index">{r.les}</div>
                    <div className="content-list-main">
                      <div className="content-list-title">{r.title}</div>
                      <div className="content-list-meta">{r.stats.learned} / {r.stats.total} learned</div>
                    </div>
                    <div className="content-list-progress"><span style={{ width: `${r.pct}%` }}></span></div>
                    <div className="content-list-chev">›</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <SessionModeList selected={effectiveSelected} order={order} onOrder={setOrder}
          reviewCount={effectiveSelected?.reviewCount || 0} unit="sentences"
          testLabel={`${effectiveSelected?.total || 0} questions`} onStart={start} />

      </div>
    </div>
  );
}

/* ── Deck (Learn / Review) ───────────────────────── */
function DeckScreen({ mode, words, level, onLevelChange, autoplay, onExit, onSwipe, onRetryMissed, exampleMode = 'beginner', progressOffset = 0 }) {
  const deckRef = useRefS(null);
  const [cursor, setCursor] = useStateS(0);
  const [internalLevel, setInternalLevel] = useStateS(level);
  const [missed, setMissed] = useStateS([]);
  const [internalExampleMode, setInternalExampleMode] = useStateS(exampleMode || 'beginner');
  const totalWords = progressOffset + words.length;

  if (!words.length) {
    return (
      <div className="app-screen">
        <div className="topbar">
          <div className="iconbtn" onClick={onExit}><CloseIcon /></div>
          <div className="mode-pill"><span className="dot"></span>{mode}</div>
          <div style={{ width: 38 }}></div>
        </div>
        <div className="empty-state">
          <div className="big">🎉</div>
          <div className="title">Nothing here</div>
          <div className="desc">{mode === 'review' ? 'No words to review yet. Try Learn mode first.' : 'All caught up!'}</div>
          <button className="primary-btn" style={{ maxWidth: 220 }} onClick={onExit}>Back home</button>
        </div>
      </div>
    );
  }

  const done = cursor >= words.length;
  const pct  = totalWords ? Math.round(((progressOffset + cursor) / totalWords) * 100) : 0;
  const swipe = (dir) => deckRef.current?.swipe(dir);
  const grammarMode = words[0]?.pos === 'grammar' || mode.startsWith('grammar');
  const sentenceMode = words[0]?.type === 'sentence' || mode.startsWith('sentence') || mode === 'reading' || grammarMode;
  const modeLabel = sentenceMode
    ? (grammarMode ? 'Grammar' : mode.includes('review') ? 'Sentence Review' : 'Sentences Study')
    : (mode === 'review' ? 'Review' : 'Learn');
  const handleSwipe = (i, dir, item) => {
    setCursor(i + 1);
    if (dir === 'left' && onRetryMissed && !sentenceMode) {
      setMissed(prev => prev.concat(item));
    }
    onSwipe?.(item, dir, i + 1);
  };

  return (
    <div className="app-screen">
      <div className="topbar">
        <div className="iconbtn" onClick={onExit}><CloseIcon /></div>
        <div className="mode-pill">
          <span className="dot" style={{ background: mode === 'review' ? 'var(--forgot)' : 'var(--brand)' }}></span>
          {modeLabel}
        </div>
        <div className="counter">{Math.min(progressOffset + cursor + 1, totalWords)}/{totalWords}</div>
      </div>
      {!done && <div className="progressbar"><span style={{ width: pct + '%' }}></span></div>}
      <div className="deck-stage">
        {!done ? (
          <SwipeDeck ref={deckRef} items={words}
            onSwipe={handleSwipe}
            renderCard={(w, i, isTop, dragState) => (
              sentenceMode ? (
                <SentenceCard word={w} mode={mode} autoplay={autoplay} isTop={isTop} dragState={dragState} />
              ) : (
                <WordCard word={w} mode={mode} level={internalLevel}
                  onLevelChange={lv => { setInternalLevel(lv); onLevelChange?.(lv); }}
                  autoplay={autoplay} isTop={isTop} dragState={dragState}
                  exampleMode={internalExampleMode} onExampleModeChange={setInternalExampleMode} />
              )
            )}
          />
        ) : (
          <div className="empty-state">
            <div className="big">🎉</div>
            <div className="title">Session done!</div>
            <div className="desc">{missed.length ? `${missed.length} cards were marked again.` : 'Nice work. Come back tomorrow to keep your streak alive.'}</div>
            {missed.length > 0 && onRetryMissed && (
              <button className="primary-btn" style={{ maxWidth: 220 }} onClick={() => onRetryMissed(missed)}>Retry missed</button>
            )}
            <button className="primary-btn" style={{ maxWidth: 220 }} onClick={onExit}>Back home</button>
          </div>
        )}
      </div>
      {!done && (
        <div className="deck-actions">
          <button className="act-btn forgot" onClick={() => swipe('left')}  aria-label="Don't know"><XIcon /></button>
          <button className="act-btn keep"   onClick={() => swipe('right')} aria-label="Got it"><CheckIcon /></button>
        </div>
      )}
    </div>
  );
}

/* ── Reading screen ──────────────────────────────── */
function ReadingScreen({ readings, autoplay, onExit }) {
  const [articleId, setArticleId] = useStateS(readings[0]?.id || null);
  const [sentenceIndex, setSentenceIndex] = useStateS(0);
  const current = readings.find(r => r.id === articleId) || readings[0];
  const sentences = current?.sentences || [];
  const activeSentence = sentences[sentenceIndex];

  useEffectS(() => {
    if (!current || !autoplay) return;
    const sentence = current.sentences?.[sentenceIndex]?.nl;
    if (sentence && window.dutchTTS) {
      const t = setTimeout(() => window.dutchTTS.speak(sentence), 220);
      return () => clearTimeout(t);
    }
  }, [current?.id, sentenceIndex, autoplay]);

  if (!current) {
    return (
      <div className="app-screen">
        <div className="topbar">
          <div className="iconbtn" onClick={onExit}><CloseIcon /></div>
          <div className="mode-pill"><span className="dot"></span>Reading</div>
          <div style={{ width: 38 }}></div>
        </div>
        <div className="empty-state">
          <div className="big">📖</div>
          <div className="title">No readings yet</div>
          <button className="primary-btn" style={{ maxWidth: 220 }} onClick={onExit}>Back home</button>
        </div>
      </div>
    );
  }

  const pickArticle = (id) => {
    setArticleId(id);
    setSentenceIndex(0);
  };
  const goPrev = () => setSentenceIndex(i => Math.max(0, i - 1));
  const goNext = () => setSentenceIndex(i => Math.min(sentences.length - 1, i + 1));
  const pct = sentences.length ? Math.round(((sentenceIndex + 1) / sentences.length) * 100) : 0;

  return (
    <div className="app-screen">
      <div className="topbar">
        <div className="iconbtn" onClick={onExit}><CloseIcon /></div>
        <div className="mode-pill"><span className="dot"></span>Reading</div>
        <div className="counter">{sentenceIndex + 1}/{sentences.length}</div>
      </div>
      <div className="progressbar"><span style={{ width: pct + '%' }}></span></div>
      <div className="reading-screen">
        <div className="article-tabs">
          {readings.map(r => (
            <button key={r.id}
              className={'article-tab' + (r.id === current.id ? ' active' : '')}
              onClick={() => pickArticle(r.id)}>
              {r.les}. {r.title}
            </button>
          ))}
        </div>

        <div className="reading-card-wrap">
          <div className="reading-card">
            <div className="reading-card-top">
              <div>
                <div className="lesson-chip">Article {current.les}</div>
                <h2>{current.title}</h2>
              </div>
              <button className="speaker-btn"
                onClick={() => activeSentence && window.dutchTTS?.speak(activeSentence.nl)}
                aria-label="Sentence pronunciation">
                <SpeakerIcon size={16} />
              </button>
            </div>

            {activeSentence && (
              <div className="reading-sentence">
                <div className="sentence-number">Sentence {sentenceIndex + 1}</div>
                <div className="sentence-nl large">{activeSentence.nl}</div>
                <div className="divider"></div>
                <div className="sentence-en large">{activeSentence.en}</div>
              </div>
            )}
          </div>
        </div>

        <div className="reading-actions">
          <button className="ghost-nav-btn" onClick={goPrev} disabled={sentenceIndex === 0}>Previous</button>
          <button className="primary-nav-btn" onClick={goNext} disabled={sentenceIndex >= sentences.length - 1}>Next</button>
        </div>
      </div>
    </div>
  );
}

/* ── Test screen ─────────────────────────────────── */
function TestScreen({ words, allWords, autoplay, maxQuestions, onWrongWord, onExit, onComplete }) {
  const deckRef = useRefS(null);
  const [cursor, setCursor] = useStateS(0);
  const [score, setScore]   = useStateS({ right: 0, wrong: 0 });
  const [wrongWords, setWrongWords] = useStateS([]);
  const quizKey = useMemoS(
    () => words.map(w => `${w.les}|${w.nl}|${w.en}`).join('~') + `::${maxQuestions ?? 'all'}`,
    [words, maxQuestions]
  );

  const quiz = useMemoS(() => {
    const cap  = maxQuestions != null ? maxQuestions : words.length;
    const pool = shuffleArr(words).slice(0, Math.min(cap, words.length));
    return pool.map(w => {
      const distractors = shuffleArr(allWords.filter(x => x.en !== w.en)).slice(0, 3).map(x => x.en);
      return { word: w, choices: shuffleArr([w.en, ...distractors]) };
    });
  }, [words, allWords, maxQuestions]);
  const grammarMode = words[0]?.pos === 'grammar';
  const sentenceMode = words[0]?.type === 'sentence';

  useEffectS(() => {
    setCursor(0);
    setScore({ right: 0, wrong: 0 });
    setWrongWords([]);
    deckRef.current?.reset?.();
  }, [quizKey]);

  if (!quiz.length) {
    return (
      <div className="app-screen">
        <div className="topbar">
          <div className="iconbtn" onClick={onExit}><CloseIcon /></div>
          <div className="mode-pill"><span className="dot" style={{ background: 'var(--keep)' }}></span>{grammarMode ? 'Grammar Test' : sentenceMode ? 'Sentence Test' : 'Test'}</div>
          <div style={{ width: 38 }}></div>
        </div>
        <div className="empty-state">
          <div className="big">📭</div>
          <div className="title">{grammarMode ? 'No grammar rules yet' : sentenceMode ? 'No sentences yet' : 'No words yet'}</div>
          <div className="desc">{grammarMode ? 'Try again from the grammar card.' : sentenceMode ? 'Choose another article filter or try again.' : 'Learn a few words first, then test yourself.'}</div>
          <button className="primary-btn" style={{ maxWidth: 220 }} onClick={onExit}>Back home</button>
        </div>
      </div>
    );
  }

  const done  = cursor >= quiz.length;
  const total = quiz.length;
  const pct   = total ? Math.round((cursor / total) * 100) : 0;

  if (done) {
    return <DoneScreen right={score.right} wrong={score.wrong} wrongWords={wrongWords} onExit={onExit}
      onRetry={wrongWords.length ? () => onComplete?.(wrongWords) : null} />;
  }

  return (
    <div className="app-screen">
      <div className="topbar">
        <div className="iconbtn" onClick={onExit}><CloseIcon /></div>
        <div className="mode-pill"><span className="dot" style={{ background: 'var(--keep)' }}></span>{grammarMode ? 'Grammar Test' : sentenceMode ? 'Sentence Test' : 'Test'}</div>
        <div className="counter">{cursor + 1}/{total}</div>
      </div>
      <div className="progressbar"><span style={{ width: pct + '%' }}></span></div>
      <div className="deck-stage">
        <SwipeDeck ref={deckRef} items={quiz}
          onSwipe={(i) => setCursor(i + 1)}
          renderCard={(q, i, isTop, dragState) => (
            <TestCard word={q.word} choices={q.choices} autoplay={autoplay} isTop={isTop} dragState={dragState}
              onAnswered={correct => {
                setScore(s => ({ right: s.right + (correct ? 1 : 0), wrong: s.wrong + (correct ? 0 : 1) }));
                if (!correct) {
                  setWrongWords(ws => [...ws, q.word]);
                  onWrongWord?.(q.word);
                }
                deckRef.current?.swipe(correct ? 'right' : 'left');
              }}
            />
          )}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginTop: 14, padding: '0 6px', fontSize: 12, fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          <span style={{ color: 'var(--forgot)' }}>✗ {score.wrong}</span>
          <span style={{ color: 'var(--ink-faint)' }}>Tap an answer</span>
          <span style={{ color: 'var(--keep)' }}>{score.right} ✓</span>
        </div>
      </div>
    </div>
  );
}

/* ── Done screen ─────────────────────────────────── */
function DoneScreen({ right, wrong, wrongWords, onExit, onRetry }) {
  const total = right + wrong;
  const pct   = total ? Math.round((right / total) * 100) : 0;
  const title = pct >= 90 ? 'Geweldig!' : pct >= 70 ? 'Goed gedaan!' : pct >= 40 ? 'Bijna!' : 'Blijf oefenen!';
  const desc  = pct >= 90 ? 'Practically a native speaker.'
    : pct >= 70 ? 'Solid result. Tomorrow nail the rest.'
    : pct >= 40 ? 'A few more rounds and these stick.'
    : 'Every swipe counts. Try once more.';
  return (
    <div className="app-screen">
      <div className="topbar">
        <div className="iconbtn" onClick={onExit}><CloseIcon /></div>
        <div className="mode-pill"><span className="dot" style={{ background: 'var(--keep)' }}></span>Done</div>
        <div style={{ width: 38 }}></div>
      </div>
      <div className="empty-state">
        <div className="score-circle" style={{ '--p': pct + '%' }}>
          <div className="inner">
            <div style={{ textAlign: 'center' }}>
              <div className="pct">{pct}%</div>
              <div className="lab">{right}/{total} right</div>
            </div>
          </div>
        </div>
        <div className="score-breakdown">
          <span className="right">✓ {right} correct</span>
          <span className="wrong">✗ {wrong} wrong</span>
        </div>
        <div className="title" style={{ marginTop: 12 }}>{title}</div>
        <div className="desc">{desc}</div>
        <div className="button-row">
          {onRetry && (
            <button className="primary-btn" type="button" onClick={onRetry}>
              Retry {wrongWords.length} wrong word{wrongWords.length === 1 ? '' : 's'}
            </button>
          )}
          <button type="button" className={onRetry ? 'ghost-btn' : 'primary-btn'} style={{ margin: 0 }} onClick={onExit}>Back home</button>
        </div>
      </div>
    </div>
  );
}

function StudyListScreen({ items, onBack, onRemove, onStudy }) {
  const resolveItem = item => {
    const resolved = window.lookupDutchWord?.(item.nl) || window.lookupDutchWord?.(item.headword) || null;
    const hasOnlyGrammar = /\b(first|second|third)-person\b|\bpresent indicative\b|\bpast tense\b|\bpast indicative\b|\bparticiple\b|\binflection of\b|\bform of\b/i.test(String(item.en || ''));
    if (resolved?.formMeaning) {
      return {
        ...item,
        nl: item.nl,
        headword: item.nl,
        en: resolved.formMeaning,
        pos: resolved.pos || item.pos
      };
    }
    if (!resolved || (!hasOnlyGrammar && !resolved.baseForm)) return item;
    return {
      ...item,
      nl: resolved.baseForm || resolved.headword || item.nl,
      headword: resolved.baseForm || resolved.headword || item.headword,
      en: resolved.en || item.en,
      pos: resolved.pos || item.pos
    };
  };
  const displayItems = items.map(resolveItem);
  return (
    <div className="app-screen studylist-screen">
      <div className="topbar">
        <button className="topbar-back" onClick={onBack} aria-label="Back">‹</button>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em' }}>
          My Study List
        </div>
        <div style={{ width: 30 }} />
      </div>
      <div className="home">
        <div className="studylist-title">Saved words</div>
        <div className="studylist-sub">
          {displayItems.length === 0
            ? 'Tap “+ to deck” in the dictionary popup to save words here.'
            : `${displayItems.length} word${displayItems.length === 1 ? '' : 's'} ready to study.`}
        </div>
        {displayItems.length > 0 && (
          <div className="studylist-actions">
            <button className="primary-btn" onClick={onStudy}>Study these words</button>
          </div>
        )}
        {displayItems.length === 0 ? (
          <div className="studylist-empty">
            <div className="big">📑</div>
            Your study list is empty.<br/>
            Use + Study List on a word card to add it.
          </div>
        ) : (
          <div className="studylist-list">
            {displayItems.map(item => (
              <div key={item.nl} className="studylist-item">
                <div className="body">
                  <div className="nl">{item.headword || item.nl}</div>
                  <div className="en">{item.en}</div>
                </div>
                <button className="remove" onClick={() => onRemove(item.nl)} aria-label="Remove">×</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

window.RegisterScreen = RegisterScreen;
window.UserSwitcher   = UserSwitcher;
window.HomeScreen     = HomeScreen;
window.WordsPickScreen = WordsPickScreen;
window.SentencesPickScreen = SentencesPickScreen;
window.DeckScreen     = DeckScreen;
window.ReadingScreen  = ReadingScreen;
window.TestScreen     = TestScreen;
window.DoneScreen     = DoneScreen;
window.StudyListScreen = StudyListScreen;
