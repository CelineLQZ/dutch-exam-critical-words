// Card components — WordCard (Learn/Review) and TestCard (Test mode)
const { useState: useStateW, useEffect: useEffectW, useRef: useRefW } = React;

function SpeakerIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5L6 9H3v6h3l5 4V5z"/>
      <path d="M15.5 8.5a5 5 0 010 7"/>
      <path d="M18.5 5.5a9 9 0 010 13"/>
    </svg>
  );
}

function ChevDown({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  );
}

function speak(text) { if (window.dutchTTS && text) window.dutchTTS.speak(text); }

function normalizeDictLookup(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[.,!?;:"“”()]/g, '')
    .replace(/^'(.*)'$/, '$1')
    .trim();
}

function lookupDutchWord(token, context = {}) {
  const dict = window.DutchDictionary || {};
  const key = normalizeDictLookup(token);
  if (!key) return null;
  const contextual = contextualDutchEntry(key, context);
  if (contextual) return contextual;
  const entry = dict[key] || dict[key.replace(/'s$/, '')] || null;
  return entry ? enrichDictEntry(key, entry, dict) : null;
}

function contextualDutchEntry(key, context) {
  if (key === 'zijn') {
    const prev = normalizeDictLookup(context.prevWord || '');
    const next = normalizeDictLookup(context.nextWord || '');
    const prepBefore = ['van', 'voor', 'met', 'bij', 'naar', 'aan', 'over', 'door', 'op', 'in'].includes(prev);
    const startsPossessivePhrase = !prev && !!next;
    if (prepBefore || startsPossessivePhrase) {
      return {
        nl: 'zijn',
        headword: 'zijn',
        en: 'his',
        zh: '他的',
        pos: 'possessive pronoun',
        note: '这里不是动词 zijn/to be，而是物主代词：zijn collega = his colleague'
      };
    }
  }
  return null;
}

const DUTCH_ZH_HINTS = {
  ontvangen: '收到 / 接收',
  liggen: '位于 / 躺',
  verzamelen: '收集 / 集合',
  krijgen: '得到 / 收到',
  geven: '给',
  gaan: '去 / 将要',
  doen: '做',
  lezen: '读',
  hebben: '有',
  zijn: '是',
  worden: '变成 / 被',
  kunnen: '能够',
  moeten: '必须',
  willen: '想要',
  helpen: '帮助',
  zorgen: '照顾 / 确保',
  werken: '工作',
  komen: '来',
  maken: '做 / 制作',
  wonen: '居住',
  zullen: '将会',
  verbouwen: '翻新 / 改建',
  meenemen: '带上',
  sluiten: '关闭',
  aanmelden: '报名 / 登记',
  zonnig: '晴朗的',
  jaarlijks: '每年的',
  kind: '孩子',
  drankje: '饮料'
};

function isInflectionOnlyMeaning(text) {
  return /\b(first|second|third)-person\b|\bpresent indicative\b|\bpast tense\b|\bpast indicative\b|\bparticiple\b|\binflection of\b|\bform of\b|\battributive\b|\bmasculine\b|\bfeminine\b|\bneuter\b|\bcomparative degree\b|\bsuperlative degree\b/i.test(String(text || ''));
}

function inferInfinitiveCandidates(key) {
  const candidates = [];
  const ofMatch = String(arguments[1] || '').match(/\bof\s+([a-zà-ÿ'-]+)\b/i);
  if (ofMatch) candidates.push(normalizeDictLookup(ofMatch[1]));
  if (/attributive|masculine|feminine|neuter|comparative|superlative/i.test(String(arguments[1] || ''))) {
    if (key.endsWith('ste') && key.length > 5) candidates.push(key.slice(0, -3));
    if (key.endsWith('e') && key.length > 4) {
      const stem = key.slice(0, -1);
      candidates.push(stem);
      if (/kk$/.test(stem)) candidates.push(stem.replace(/kk$/, 'k'));
      if (/tt$/.test(stem)) candidates.push(stem.replace(/tt$/, 't'));
      if (/ss$/.test(stem)) candidates.push(stem.replace(/ss$/, 's'));
    }
  }
  if (key.endsWith('t') && key.length > 3) {
    const stem = key.slice(0, -1);
    candidates.push(stem + 'en');
    candidates.push(stem + stem.slice(-1) + 'en');
    if (/([aeiou])\1f$/.test(stem)) candidates.push(stem.replace(/([aeiou])\1f$/, '$1v') + 'en');
    if (/([aeiou])\1s$/.test(stem)) candidates.push(stem.replace(/([aeiou])\1s$/, '$1z') + 'en');
    if (/f$/.test(stem)) candidates.push(stem.replace(/f$/, 'v') + 'en');
    if (/s$/.test(stem)) candidates.push(stem.replace(/s$/, 'z') + 'en');
  }
  if (key.length > 3) candidates.push(key + 'en');
  return candidates;
}

function enrichDictEntry(key, entry, dict) {
  if (!isInflectionOnlyMeaning(entry.en)) return entry;
  const baseKey = inferInfinitiveCandidates(key, entry.en).find(candidate => dict[candidate] && !isInflectionOnlyMeaning(dict[candidate].en));
  if (!baseKey) return entry;
  const base = dict[baseKey];
  const zh = DUTCH_ZH_HINTS[baseKey];
  return {
    ...entry,
    headword: base.headword || baseKey,
    en: base.en,
    pos: base.pos || entry.pos,
    baseForm: base.headword || baseKey,
    formLabel: 'u/hij/zij/het-vorm, tegenwoordige tijd',
    zh
  };
}

function DictMeaning({ selected }) {
  const entry = selected.entry;
  return (
    <span className="dict-meaning">
      {entry.baseForm ? (
        <>
          <span className="dict-main">{entry.baseForm} = {entry.en}{entry.zh ? ` (${entry.zh})` : ''}</span>
          <span className="dict-note">
            {selected.token} = {entry.formMeaning ? `${entry.formMeaning} · ` : ''}{entry.formLabel}
          </span>
        </>
      ) : (
        <>
          <span className="dict-main">{entry.en}{entry.zh ? ` (${entry.zh})` : ''}</span>
          {entry.note && <span className="dict-note">{entry.note}</span>}
        </>
      )}
    </span>
  );
}

function pickGrammarForm(forms, patterns) {
  return forms.find(f => {
    const label = String(f.label || '').toLowerCase();
    return patterns.some(pattern => pattern.test(label));
  });
}

function compactWordGrammar(word) {
  const forms = word.grammar?.forms || [];
  if (!forms.length) return [];

  const grammarKind = String(word.grammar?.kind || '').toLowerCase();
  const pos = String(word.pos || '').toLowerCase();

  if (grammarKind === 'noun' || pos.includes('noun')) {
    const plural = pickGrammarForm(forms, [/meervoud/, /plural/]);
    return plural ? [{ label: 'plural', nl: plural.nl }] : [];
  }

  if (grammarKind === 'verb' || pos.includes('verb')) {
    const ik = pickGrammarForm(forms, [/^ik$/]);
    const hij = pickGrammarForm(forms, [/^hij\b/, /hij\/zij/, /hij\/zij\/het/]);
    const past = pickGrammarForm(forms, [/^verleden$/, /^past$/]);
    const perfect = pickGrammarForm(forms, [/voltooid/, /perfect/]);

    return [
      ik && { label: 'ik', nl: ik.nl },
      hij && { label: 'hij', nl: hij.nl },
      past && { label: 'past', nl: past.nl },
      perfect && { label: 'perfect', nl: perfect.nl },
    ].filter(Boolean);
  }

  return [];
}

function ClickableDutchText({ text }) {
  const [selected, setSelected] = useStateW(null);
  const [inList, setInList] = useStateW(false);
  const wrapRef = useRefW(null);
  const parts = String(text || '').split(/([A-Za-zÀ-ÿ']+)/g);
  const wordBefore = index => {
    for (let i = index; i >= 0; i--) {
      if (/^[A-Za-zÀ-ÿ']+$/.test(parts[i])) return parts[i];
    }
    return '';
  };
  const wordAfter = index => {
    for (let i = index; i < parts.length; i++) {
      if (/^[A-Za-zÀ-ÿ']+$/.test(parts[i])) return parts[i];
    }
    return '';
  };
  const selectedStudyKey = selected
    ? (selected.entry.formMeaning ? selected.token : (selected.entry.headword || selected.token)).replace(/^(de|het|een)\s+/i, '')
    : '';

  useEffectW(() => {
    if (!selected) return;
    const api = window.DutchStudyListAPI;
    setInList(api ? api.isInList(selectedStudyKey) : false);
  }, [selected]);

  useEffectW(() => {
    if (!selected) return;
    const closeOutside = e => {
      if (wrapRef.current?.contains(e.target)) return;
      setSelected(null);
    };
    document.addEventListener('pointerdown', closeOutside, true);
    return () => document.removeEventListener('pointerdown', closeOutside, true);
  }, [selected]);

  const handleAdd = e => {
    e.stopPropagation();
    const api = window.DutchStudyListAPI;
    if (!api || !selected) return;
    const displayWord = selectedStudyKey;
    if (inList) { api.remove(displayWord); setInList(false); }
    else { api.add({ nl: displayWord, en: selected.entry.en, pos: selected.entry.pos, headword: selected.entry.headword }); setInList(true); }
  };

  return (
    <span className="dict-text" ref={wrapRef}>
      {parts.map((part, i) => {
        const entry = /^[A-Za-zÀ-ÿ']+$/.test(part)
          ? lookupDutchWord(part, { prevWord: wordBefore(i - 1), nextWord: wordAfter(i + 1) })
          : null;
        if (!entry) return <React.Fragment key={i}>{part}</React.Fragment>;
        return (
          <button
            key={i}
            type="button"
            className={'dict-word' + (selected?.index === i ? ' active' : '')}
            onPointerDown={e => e.stopPropagation()}
            onClick={e => { e.stopPropagation(); setSelected({ token: part, entry, index: i }); }}
          >
            {part}
          </button>
        );
      })}
      {selected && (
        <span className="dict-popover" onPointerDown={e => e.stopPropagation()}>
          <DictMeaning selected={selected} />
          <span className="dict-popover-actions">
            <button type="button" className={'dict-add-btn' + (inList ? ' in-list' : '')} onClick={handleAdd}>
              {inList ? '✓ in deck' : '+ to deck'}
            </button>
            <button type="button" className="dict-close-btn" onClick={e => { e.stopPropagation(); setSelected(null); }} aria-label="Close">×</button>
          </span>
        </span>
      )}
    </span>
  );
}

function GrammarReferencePopover({ lang, onLangChange }) {
  const [open, setOpen] = useStateW(false);
  const [dragX, setDragX] = useStateW(0);
  const wrapRef = useRefW(null);
  const popoverRef = useRefW(null);
  const dragRef = useRefW(null);
  const reference = window.SENTENCE_GRAMMAR_DATA?.reference?.[lang] || [];

  useEffectW(() => {
    if (!open) return;
    const closeOutside = e => {
      if (wrapRef.current?.contains(e.target)) return;
      if (popoverRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside, true);
    return () => document.removeEventListener('pointerdown', closeOutside, true);
  }, [open]);

  if (!reference.length) return null;

  const startDrag = e => {
    if (e.target.closest('button')) return;
    dragRef.current = { x: e.clientX, start: dragX };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const moveDrag = e => {
    if (!dragRef.current) return;
    const next = dragRef.current.start + e.clientX - dragRef.current.x;
    setDragX(Math.max(-220, Math.min(220, next)));
  };
  const endDrag = () => { dragRef.current = null; };
  const popover = open && ReactDOM.createPortal(
    <span
      ref={popoverRef}
      className="grammar-ref-popover"
      style={{ '--grammar-ref-x': `${dragX}px` }}
      onPointerDown={e => e.stopPropagation()}
    >
      <span
        className="grammar-ref-popover-head"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <span>Grammar Type Reference</span>
        <span className="grammar-lang-toggle compact">
          <button type="button" className={lang === 'zh' ? 'active' : ''} onClick={e => { e.stopPropagation(); onLangChange('zh'); }}>中文</button>
          <button type="button" className={lang === 'en' ? 'active' : ''} onClick={e => { e.stopPropagation(); onLangChange('en'); }}>EN</button>
        </span>
      </span>
      <span className="grammar-ref-list">
        {reference.map(item => (
          <span className="grammar-ref-item" key={item.type}>
            <span className="grammar-ref-type">{item.type}</span>
            <span className="grammar-ref-rule">{item.rule}</span>
            <span className="grammar-ref-text">{item.explanation}</span>
            <span className="grammar-ref-pattern">{item.pattern}</span>
          </span>
        ))}
      </span>
    </span>,
    document.body
  );

  return (
    <span className="grammar-ref-wrap" ref={wrapRef} onPointerDown={e => e.stopPropagation()}>
      <button
        type="button"
        className="grammar-ref-btn"
        aria-label="Grammar type reference"
        onClick={e => { e.stopPropagation(); setOpen(v => !v); setDragX(0); }}
      >?</button>
      {popover}
    </span>
  );
}

// ── Sentence card (Reading learn / review) ───────────────────────
function SentenceCard({ word, mode, autoplay, isTop, dragState }) {
  const playedRef = useRefW(null);
  const [grammarLang, setGrammarLang] = useStateW('zh');

  useEffectW(() => {
    if (!isTop || !autoplay) return;
    if (playedRef.current === word.nl) return;
    playedRef.current = word.nl;
    const t = setTimeout(() => speak(word.nl), 180);
    return () => clearTimeout(t);
  }, [isTop, word.nl, autoplay]);

  const grammarEntry = word.grammar?.languages?.[grammarLang] || word.grammar?.languages?.zh || word.grammar?.languages?.en;
  const grammarForms = grammarEntry?.forms || word.grammar?.forms || [];
  const collocations = word.grammar?.collocations || [];
  const grammarMode = word.pos === 'grammar';

  return (
    <React.Fragment>
      {isTop && (
        <React.Fragment>
          <div className="stamp keep" style={{ opacity: dragState.keepOpacity }}>GOT IT</div>
          <div className="stamp forgot" style={{ opacity: dragState.forgotOpacity }}>AGAIN</div>
        </React.Fragment>
      )}

      <div className="card-top-row sentence-card-header">
        <div className="sentence-card-meta">
          <span className="les-tag">{grammarMode ? 'Grammar' : `Article ${word.les}`}</span>
          <div className="sentence-number">{word.articleTitle || 'Reading'}</div>
        </div>
        <div className="sentence-card-tools">
          {!grammarMode && <GrammarReferencePopover lang={grammarLang} onLangChange={setGrammarLang} />}
          <span className="pos-tag">{grammarMode ? 'rule' : 'sentence'}</span>
        </div>
      </div>

      <div className="sentence-study-card">
        <div className="sentence-nl large sentence-nl-with-speaker">
          <ClickableDutchText text={word.nl} />
          <button
            className="speaker-btn sentence-inline-speaker"
            onPointerDown={e => e.stopPropagation()}
            onClick={e => { e.stopPropagation(); speak(word.nl); }}
            aria-label="Sentence pronunciation"
          ><SpeakerIcon size={16} /></button>
        </div>
        <div className="divider"></div>
        {mode !== 'test' && <div className="sentence-en large">{word.en}</div>}
      </div>

      {mode !== 'test' && (grammarForms.length > 0 || collocations.length > 0) && (
        <div className="grammar-panel sentence-grammar-panel" onPointerDown={e => e.stopPropagation()}>
          {collocations.length > 0 && (
            <div className={grammarForms.length > 0 ? 'sentence-collocation-block first' : ''}>
              <div className="sentence-grammar-title">Collocation</div>
              {collocations.map((f, i) => (
                <div className="sentence-grammar-row collocation-row" key={`${f.label}-${i}`}>
                  <span className="lab">{f.label}</span>
                  <span className="form">{f.nl}</span>
                </div>
              ))}
            </div>
          )}
          {grammarForms.length > 0 && (
            <>
              <div className="sentence-grammar-head">
                <div className="sentence-grammar-title">Grammar</div>
                <div className="grammar-lang-toggle">
                  <button type="button" className={grammarLang === 'zh' ? 'active' : ''} onClick={e => { e.stopPropagation(); setGrammarLang('zh'); }}>中文</button>
                  <button type="button" className={grammarLang === 'en' ? 'active' : ''} onClick={e => { e.stopPropagation(); setGrammarLang('en'); }}>EN</button>
                </div>
              </div>
              {grammarForms.map((f, i) => (
                <div className="sentence-grammar-row" key={i}>
                  <span className="lab">{f.label}</span>
                  <span className="form">{f.nl}</span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

// ── Word card (Learn / Review) ──────────────────────────
function WordCard({ word, mode, level, onLevelChange, autoplay, isTop, dragState, exampleMode = 'beginner', onExampleModeChange }) {
  const playedRef = useRefW(null);
  const [inList, setInList] = useStateW(false);

  useEffectW(() => {
    if (!isTop || !autoplay) return;
    if (playedRef.current === word.nl) return;
    playedRef.current = word.nl;
    const t = setTimeout(() => speak(word.nl), 180);
    return () => clearTimeout(t);
  }, [isTop, word.nl, autoplay]);

  useEffectW(() => {
    const api = window.DutchStudyListAPI;
    setInList(api ? api.isInList(word.nl) : false);
  }, [word.nl, isTop]);

  const exMap  = exampleMode === 'exam'
    ? (word.examExamples || word.examples || {})
    : (word.beginnerExamples || word.examples || {});
  const ex     = exMap.a1 || exMap.a0 || exMap.a2 || { nl: '—', en: '' };
  const hasEx  = ex.nl && ex.nl !== '—';
  const exampleTitle = word.deck === 'ar'
    ? 'From the exam text'
    : exampleMode === 'exam' && word.examExamples
      ? 'From the exam text'
      : 'Beginner example';
  const grammarRows = compactWordGrammar(word);
  const showExampleToggle = word.deck === 'common';
  const unitLabel = word.deck === 'common' ? 'Lesson' : 'Article';
  const toggleStudyList = e => {
    e.stopPropagation();
    const api = window.DutchStudyListAPI;
    if (!api) return;
    if (inList) {
      api.remove(word.nl);
      setInList(false);
    } else {
      api.add(word);
      setInList(true);
    }
  };

  return (
    <React.Fragment>
      {isTop && (
        <React.Fragment>
          <div className="stamp keep"   style={{ opacity: dragState.keepOpacity }}>GOT IT</div>
          <div className="stamp forgot" style={{ opacity: dragState.forgotOpacity }}>AGAIN</div>
        </React.Fragment>
      )}

      <div className="card-top-row">
        <span className="les-tag">{word.pos === 'grammar' ? 'Grammar' : `${unitLabel} ${word.les}`}</span>
        {word.pos && <span className="pos-tag">{word.pos}</span>}
      </div>

      <div className="word-block">
        <div className={'word' + (word.type === 'sentence' ? ' sentence-word' : '')}>{word.nl}</div>
        {word.ipa && <div className="ipa">/{word.ipa}/</div>}
        <div className="word-card-actions" onPointerDown={e => e.stopPropagation()}>
          <button
            className="speaker-btn"
            onPointerDown={e => e.stopPropagation()}
            onClick={e => { e.stopPropagation(); speak(word.nl); }}
            aria-label="Uitspreken"
          ><SpeakerIcon size={16} /></button>
          <button
            type="button"
            className={'word-save-btn' + (inList ? ' in-list' : '')}
            onClick={toggleStudyList}
          >{inList ? 'Saved' : '+ Study List'}</button>
        </div>
        {mode !== 'test' && <div className="meaning">{word.en}</div>}
      </div>

      <div className="divider"></div>

      <div className="example-block">
        {hasEx ? (
          <>
            {showExampleToggle ? (
              <div className="card-example-seg" onPointerDown={e => e.stopPropagation()}>
                {[{v:'beginner', lab:'Beginner'}, {v:'exam', lab:'Exam'}].map(o => (
                  <button
                    key={o.v}
                    type="button"
                    className={exampleMode === o.v ? 'active' : ''}
                    onClick={e => { e.stopPropagation(); onExampleModeChange?.(o.v); }}
                  >{o.lab}</button>
                ))}
              </div>
            ) : (
              <div className="sentence-grammar-title">{exampleTitle}</div>
            )}
            <div className="example-nl">
              <button
                className="speaker-btn small keep"
                onPointerDown={e => e.stopPropagation()}
                onClick={e => { e.stopPropagation(); speak(ex.nl); }}
                aria-label="Voorbeeld uitspreken"
              ><SpeakerIcon size={13} /></button>
              <span><ClickableDutchText text={ex.nl} /></span>
            </div>
            {ex.en && ex.en !== word.en && ex.en !== 'Original sentence from the mock exam.' && <div className="example-en">{ex.en}</div>}
          </>
        ) : (
          <div className="example-missing">
            Example not available yet.
          </div>
        )}
      </div>

      {grammarRows.length > 0 && mode !== 'test' && (
        <div className="grammar-card" onPointerDown={e => e.stopPropagation()}>
          <div className="grammar-card-title">Grammatica</div>
          {grammarRows.map((f, i) => (
            <div className="grammar-card-row" key={i}>
              <span className="lab">{f.label}</span>
              <span className="form">{f.nl}</span>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}

// ── Test card (multiple choice) ─────────────────────────
function TestCard({ word, choices, autoplay, isTop, dragState, onAnswered }) {
  const [picked, setPicked] = useStateW(null);
  const playedRef = useRefW(null);

  useEffectW(() => { setPicked(null); playedRef.current = null; }, [word.nl]);

  useEffectW(() => {
    if (!isTop || !autoplay || playedRef.current === word.nl) return;
    playedRef.current = word.nl;
    const t = setTimeout(() => speak(word.nl), 180);
    return () => clearTimeout(t);
  }, [isTop, word.nl, autoplay]);

  const handlePick = (e, choice) => {
    e.stopPropagation();
    if (picked) return;
    const correct = choice === word.en;
    setPicked({ choice, correct });
    setTimeout(() => onAnswered?.(correct), 800);
  };

  return (
    <React.Fragment>
      {isTop && (
        <React.Fragment>
          <div className="stamp keep"   style={{ opacity: dragState.keepOpacity }}>GOT IT</div>
          <div className="stamp forgot" style={{ opacity: dragState.forgotOpacity }}>AGAIN</div>
        </React.Fragment>
      )}

      <div className="card-top-row">
        <span className="les-tag">{word.deck === 'common' ? 'Lesson' : 'Article'} {word.les}</span>
        {word.pos && <span className="pos-tag">{word.pos}</span>}
      </div>

      <div className="word-block">
        <div className="word">{word.nl}</div>
        {word.ipa && <div className="ipa">/{word.ipa}/</div>}
        <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}>
          <button
            className="speaker-btn"
            onPointerDown={e => e.stopPropagation()}
            onClick={e => { e.stopPropagation(); speak(word.nl); }}
          ><SpeakerIcon size={16} /></button>
        </div>
      </div>

      <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-faint)', marginTop: 12, textAlign: 'center' }}>
        {word.type === 'sentence' ? 'Choose the explanation' : 'What does it mean?'}
      </div>

      <div className="test-options" onPointerDown={e => e.stopPropagation()}>
        {choices.map((c, i) => {
          let cls = 'test-opt';
          if (picked) {
            cls += ' disabled';
            if (c === word.en)          cls += ' right';
            else if (picked.choice === c) cls += ' wrong';
          }
          return (
            <button key={c} className={cls} onClick={e => handlePick(e, c)}>
              <span className="letter">{String.fromCharCode(65 + i)}</span>
              <span>{c}</span>
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
}

window.WordCard  = WordCard;
window.SentenceCard = SentenceCard;
window.TestCard  = TestCard;
window.SpeakerIcon = SpeakerIcon;
window.ChevDown  = ChevDown;
window.lookupDutchWord = lookupDutchWord;
