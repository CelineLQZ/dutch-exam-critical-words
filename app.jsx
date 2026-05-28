// Root app — multi-user, palette, routing
const { useState, useEffect, useMemo } = React;

/* ── Palettes ───────────────────────────────────── */
const PALETTES = {
  'delft': {
    name: 'Delft Porcelain',
    cream:'#FBF8F1', paper:'#FFFFFF', 'paper-2':'#F0EDE3', line:'#E2DDD0',
    ink:'#1A2540', 'ink-soft':'#5A6680', 'ink-faint':'#9AA4BC',
    brand:'#1E5BA8', 'brand-ink':'#FFFFFF', 'brand-shadow':'rgba(30,91,168,0.28)', 'brand-faint':'rgba(30,91,168,0.10)',
    keep:'#2A7D5C', forgot:'#B0432F', accent:'#D4A437',
    'card-shadow':'0 10px 28px rgba(26,37,64,0.12), 0 2px 6px rgba(26,37,64,0.06)'
  },
  'coral-night': {
    name: 'Coral Night',
    cream:'#14152A', paper:'#1F2140', 'paper-2':'#292C50', line:'#2E3157',
    ink:'#F5F2EE', 'ink-soft':'#B7B8D2', 'ink-faint':'#6E7090',
    brand:'#FF7E70', 'brand-ink':'#3a0d05', 'brand-shadow':'rgba(255,126,112,0.35)', 'brand-faint':'rgba(255,126,112,0.14)',
    keep:'#3FE0CE', forgot:'#FF6B85', accent:'#FFD23F',
    'card-shadow':'0 14px 36px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)'
  },
  'espresso': {
    name: 'Espresso',
    cream:'#15110D', paper:'#1F1A14', 'paper-2':'#2A241B', line:'#332C22',
    ink:'#F1E8DA', 'ink-soft':'#B7AC9A', 'ink-faint':'#7A7263',
    brand:'#D4A437', 'brand-ink':'#1F1A14', 'brand-shadow':'rgba(212,164,55,0.35)', 'brand-faint':'rgba(212,164,55,0.14)',
    keep:'#7CB97E', forgot:'#E07A5F', accent:'#E07A5F',
    'card-shadow':'0 14px 36px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)'
  },
  'heritage': {
    name: 'Heritage Ink',
    cream:'#F1ECDF', paper:'#FAF6ED', 'paper-2':'#E8E0CE', line:'#D8CFB6',
    ink:'#2A2520', 'ink-soft':'#5A5145', 'ink-faint':'#948A78',
    brand:'#8B2C2F', 'brand-ink':'#FAF6ED', 'brand-shadow':'rgba(139,44,47,0.28)', 'brand-faint':'rgba(139,44,47,0.10)',
    keep:'#3A6D4E', forgot:'#B85844', accent:'#C19A3E',
    'card-shadow':'0 10px 28px rgba(42,37,32,0.14), 0 2px 6px rgba(42,37,32,0.07)'
  },
  'midnight-tulip': {
    name: 'Midnight Tulip',
    cream:'#1A1424', paper:'#251E33', 'paper-2':'#312842', line:'#3E344F',
    ink:'#F0E5F1', 'ink-soft':'#BCB1C8', 'ink-faint':'#7A6E89',
    brand:'#F26B7E', 'brand-ink':'#1A1424', 'brand-shadow':'rgba(242,107,126,0.35)', 'brand-faint':'rgba(242,107,126,0.14)',
    keep:'#84D4B9', forgot:'#FFB444', accent:'#FFB444',
    'card-shadow':'0 14px 36px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)'
  },
  'polder': {
    name: 'Polder',
    cream:'#E8E4DA', paper:'#F2EFE7', 'paper-2':'#DDD8C9', line:'#CFC9B6',
    ink:'#2E2A1F', 'ink-soft':'#5F5848', 'ink-faint':'#928B79',
    brand:'#5A7A4E', 'brand-ink':'#F2EFE7', 'brand-shadow':'rgba(90,122,78,0.28)', 'brand-faint':'rgba(90,122,78,0.12)',
    keep:'#3F8C6D', forgot:'#B85844', accent:'#C9A14A',
    'card-shadow':'0 10px 28px rgba(46,42,31,0.14), 0 2px 6px rgba(46,42,31,0.07)'
  },
  'meadow': {
    name: 'Meadow',
    cream:'#FFFFFF', paper:'#FAFAF7', 'paper-2':'#F0F0E8', line:'#E2E2D6',
    ink:'#1F2937', 'ink-soft':'#5B6373', 'ink-faint':'#9CA3AF',
    brand:'#3FB950', 'brand-ink':'#FFFFFF', 'brand-shadow':'rgba(63,185,80,0.32)', 'brand-faint':'rgba(63,185,80,0.12)',
    keep:'#3FB950', forgot:'#E84855', accent:'#FFC93C',
    'card-shadow':'0 10px 28px rgba(31,41,55,0.10), 0 2px 6px rgba(31,41,55,0.05)'
  },
  'sunshine': {
    name: 'Sunshine',
    cream:'#FFF8EC', paper:'#FFFFFF', 'paper-2':'#FFEFD0', line:'#F5E0B5',
    ink:'#3A2A14', 'ink-soft':'#7A5F3D', 'ink-faint':'#B59E78',
    brand:'#F49B0E', 'brand-ink':'#FFFFFF', 'brand-shadow':'rgba(244,155,14,0.35)', 'brand-faint':'rgba(244,155,14,0.15)',
    keep:'#2BB673', forgot:'#E94F4F', accent:'#7E5BEF',
    'card-shadow':'0 10px 28px rgba(58,42,20,0.12), 0 2px 6px rgba(58,42,20,0.06)'
  }
};

function applyPalette(id) {
  const p = PALETTES[id] || PALETTES['delft'];
  const r = document.documentElement;
  Object.entries(p).forEach(([k, v]) => { if (k !== 'name') r.style.setProperty('--' + k, v); });
  document.body.style.background = p.cream;
}

function isPaletteDark(id) {
  const p = PALETTES[id]; if (!p) return false;
  const hex = p.cream.replace('#','');
  const lum = (0.299 * parseInt(hex.slice(0,2),16) + 0.587 * parseInt(hex.slice(2,4),16) + 0.114 * parseInt(hex.slice(4,6),16)) / 255;
  return lum < 0.5;
}

function shuffleA(arr) {
  const a = arr.slice();
  for (let i = a.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}

function wordKey(w, index = 0) {
  return w._key || [w.deck ?? 'ar', w.les ?? '', w.nl ?? '', w.en ?? '', index].join('|');
}

function flattenReadings(readings) {
  return readings.flatMap(article => (article.sentences || []).map((s, i) => ({
    nl: s.nl,
    en: s.en,
    ipa: '',
    pos: 'sentence',
    type: 'sentence',
    les: article.les,
    articleTitle: article.title,
    sentenceNumber: i + 1,
    examples: {},
    grammar: analyzeSentenceGrammar(s.nl),
    _key: `sentence|${article.id}|${i + 1}|${s.nl}`
  })));
}

function normalizeSentenceGrammarKey(sentence) {
  return String(sentence || '')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

const SENTENCE_COLLOCATION_PATTERNS = [
  [/tips?\s+om\b/i, 'tips om', 'tips for / tips to'],
  [/\bom\s+te\s+\w+/i, 'om te + verb', 'in order to / to'],
  [/\bgoed\s+te\s+leren\b/i, 'goed te leren', 'to study well'],
  [/\bbeter\s+te\s+kunnen\s+leren\b/i, 'beter te kunnen leren', 'to be able to study better'],
  [/\been\s+planning\s+maken\b/i, 'een planning maken', 'to make a plan'],
  [/\been\s+pauze\s+nemen\b|\bneem\s+.*\bpauze\b/i, 'een pauze nemen', 'to take a break'],
  [/\bdenken?\s+.*\bna\s+over\b|\bdenk\s+.*\bna\s+over\b/i, 'nadenken over', 'to think about'],
  [/\buitleggen\b|\bleg\s+.*\buit\b/i, 'uitleggen aan iemand', 'to explain to someone'],
  [/\bzeker\s+weten\b|\bweet\s+u\s+zeker\b/i, 'zeker weten', 'to know for sure'],
  [/\blast\s+heb\w*\s+van\b/i, 'last hebben van', 'to be bothered by / suffer from'],
  [/\bzin\s+in\s+heeft\b|\bzin\s+heb\w*\s+in\b/i, 'zin hebben in', 'to feel like / want to'],
  [/\bmeedoen\s+aan\b|\bmeedoet\s+aan\b/i, 'meedoen aan', 'to take part in'],
  [/\bkijken\s+naar\b|\bnaar\s+.*\bkijken\b/i, 'kijken naar', 'to look at / watch'],
  [/\binformatie\s+geven\s+over\b/i, 'informatie geven over', 'to give information about'],
  [/\bveilig\s+is\s+voor\b|\bveilig\s+zijn\s+voor\b/i, 'veilig zijn voor', 'to be safe for'],
  [/\bstraten\s+.*\bafsluiten\b|\bsluiten\s+.*\baf\b/i, 'afsluiten', 'to close off'],
  [/\bwegslepen\b/i, 'wegslepen', 'to tow away'],
  [/\bop\s+de\s+route\b/i, 'op de route', 'on the route'],
  [/\bgebruikmaken\s+van\b/i, 'gebruikmaken van', 'to use / make use of'],
  [/\bbestaat\s+uit\b/i, 'bestaan uit', 'to consist of'],
  [/\bsolliciteert\s+naar\b|\bsolliciteren\s+naar\b/i, 'solliciteren naar', 'to apply for'],
  [/\bhelpen\s+tijdens\b/i, 'helpen tijdens', 'to help during'],
  [/\baanmelden\s+bij\b|\baanmelden\s+voor\b/i, 'zich aanmelden bij/voor', 'to register with / for'],
  [/\bbellen\s+met\b/i, 'bellen met', 'to call'],
  [/\bmelden\s+bij\b/i, 'melden bij', 'to report to'],
  [/\blast\s+van\s+heeft\b|\blast\s+van\s+hebben\b/i, 'last hebben van', 'to have trouble with'],
  [/\bafspraak\s+maken\s+met\b/i, 'een afspraak maken met', 'to make an appointment with'],
  [/\bpraten\s+over\b/i, 'praten over', 'to talk about'],
  [/\bopgeven\b|\bgeef\s+.*\bop\b/i, 'zich opgeven', 'to sign up'],
  [/\bdoorgeven\s+aan\b|\bgeef\s+.*\bdoor\b/i, 'doorgeven aan', 'to pass on to / inform'],
  [/\bletten\s+op\b|\blet\s+.*\bop\b/i, 'letten op', 'to pay attention to'],
  [/\brekening\s+houden\s+met\b/i, 'rekening houden met', 'to take into account']
];

function analyzeSentenceCollocations(sentence) {
  const seen = new Set();
  return SENTENCE_COLLOCATION_PATTERNS
    .filter(([pattern]) => pattern.test(sentence))
    .map(([, label, en]) => ({ label, nl: en }))
    .filter(item => {
      const key = item.label.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function analyzeSentenceGrammar(sentence) {
  const data = window.SENTENCE_GRAMMAR_DATA?.sentences || {};
  const key = normalizeSentenceGrammarKey(sentence);
  const entry = data[key] || Object.entries(data).find(([candidate]) => normalizeSentenceGrammarKey(candidate) === key)?.[1];
  const collocations = analyzeSentenceCollocations(sentence);
  if (!entry && !collocations.length) return null;
  return {
    kind: 'sentence',
    languages: entry || null,
    forms: (entry?.zh || entry?.en || {}).forms || [],
    collocations
  };
}

function clampTestCount(value) {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n)) return 100;
  return Math.max(20, Math.min(1200, n));
}

const PREPOSITION_WORDS = new Set([
  'aan', 'achter', 'bij', 'binnen', 'boven', 'buiten', 'door', 'in', 'langs', 'met',
  'na', 'naar', 'naast', 'om', 'onder', 'op', 'over', 'per', 'rond', 'tegen', 'tot',
  'tussen', 'uit', 'van', 'vanaf', 'voor', 'zonder'
]);
const QUESTION_WORDS = new Set([
  'wat', 'waar', 'waarom', 'wanneer', 'wie', 'welk', 'welke', 'hoe', 'hoeveel', 'waarheen',
  'waarmee', 'waarvoor', 'waarvan'
]);
const ADJECTIVE_WORDS = new Set([
  'ander', 'andere', 'belangrijk', 'beste', 'beter', 'blij', 'breed', 'druk', 'duur',
  'echt', 'eenvoudig', 'erg', 'fijn', 'gratis', 'goed', 'grote', 'groot', 'half',
  'hoog', 'hoger', 'jong', 'koud', 'klein', 'laat', 'lang', 'leeg', 'lekker', 'leuk',
  'makkelijk', 'medisch', 'medische', 'moeilijk', 'mooi', 'nat', 'nieuw', 'nieuwe',
  'nodig', 'open', 'oud', 'oude', 'prive', 'privé', 'rustig', 'schoon', 'snel',
  'veilig', 'veel', 'vol', 'vrij', 'weinig', 'ziek'
]);
const VERB_WORDS = new Set([
  'borrelen', 'dansen', 'hockeyen', 'kamperen', 'koken', 'leren', 'snijden',
  'sporten', 'stappen', 'studeren', 'tennissen', 'tuinieren', 'uitgaan',
  'wandelen', 'werken', 'winkelen', 'wonen', 'zwemmen'
]);

function wordCategory(w) {
  const pos = (w.pos || 'other').toLowerCase();
  const rawTerm = (w.nl || '').toLowerCase().trim();
  const term = rawTerm.replace(/^(de|het|een)\s+/, '').trim();
  if (w.grammar?.kind === 'verb' || VERB_WORDS.has(term)) return 'verb';
  if (/^(de|het|een)\s+\S+/.test(rawTerm)) return 'noun';
  if (PREPOSITION_WORDS.has(term)) return 'preposition';
  if (QUESTION_WORDS.has(term)) return 'question';
  if (ADJECTIVE_WORDS.has(term)) return 'adjective';
  if (pos.includes('pronoun')) return 'pronoun';
  if (pos.includes('adverb')) return 'adverb';
  if (pos.includes('noun')) return 'noun';
  if (pos.includes('verb')) return 'verb';
  if (pos.includes('preposition')) return 'preposition';
  if (pos.includes('adjective')) return 'adjective';
  if (pos.includes('conjunction')) return 'conjunction';
  if (pos.includes('time')) return 'time';
  if (pos.includes('number')) return 'number';
  if (pos.includes('phrase')) return 'phrase';
  if (pos.includes('question')) return 'question';
  if (pos.includes('grammar')) return 'grammar';
  return 'other';
}

const PRIMARY_WORD_CATEGORIES = ['verb', 'noun', 'preposition', 'adjective', 'question'];
function wordCategoryGroup(w) {
  if (w.category && PRIMARY_WORD_CATEGORIES.includes(w.category)) return w.category;
  const cat = wordCategory(w);
  return PRIMARY_WORD_CATEGORIES.includes(cat) ? cat : 'other';
}

function normalizeDictKey(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[.,!?;:"“”()]/g, '')
    .replace(/^'(.*)'$/, '$1')
    .replace(/^(de|het|een)\s+/, '')
    .trim();
}

function buildDictionary(words, externalDictionary = {}) {
  const skip = new Set(['de', 'het', 'een']);
  const grammarOnlyRe = /\b(first|second|third)-person\b|\bpresent indicative\b|\bpast tense\b|\bpast indicative\b|\bparticiple\b|\binflection of\b|\bform of\b/i;
  const attributiveOnlyRe = /\battributive\b|\bmasculine\b|\bfeminine\b|\bneuter\b|\bcomparative degree\b|\bsuperlative degree\b/i;
  const isGrammarOnlyMeaning = text => grammarOnlyRe.test(String(text || ''));
  const isAttributiveOnlyMeaning = text => attributiveOnlyRe.test(String(text || ''));
  const isFormOnlyMeaning = text => isGrammarOnlyMeaning(text) || isAttributiveOnlyMeaning(text);
  const infinitiveCandidates = (key, meaning = '') => {
    const clean = normalizeDictKey(key);
    const out = [];
    const ofMatch = String(meaning || '').match(/\bof\s+([a-zà-ÿ'-]+)\b/i);
    if (ofMatch) out.push(normalizeDictKey(ofMatch[1]));
    if (clean.endsWith('t') && clean.length > 3) {
      const stem = clean.slice(0, -1);
      out.push(stem + 'en', stem + stem.slice(-1) + 'en');
      if (/f$/.test(stem)) out.push(stem.replace(/f$/, 'v') + 'en');
      if (/s$/.test(stem)) out.push(stem.replace(/s$/, 'z') + 'en');
    }
    if (clean.length > 3) out.push(clean + 'en');
    if (clean.endsWith('de') || clean.endsWith('te')) {
      const stem = clean.slice(0, -2);
      out.push(stem + 'en');
      if (/f$/.test(stem)) out.push(stem.replace(/f$/, 'v') + 'en');
      if (/s$/.test(stem)) out.push(stem.replace(/s$/, 'z') + 'en');
    }
    if (clean.endsWith('den') || clean.endsWith('ten')) {
      const stem = clean.slice(0, -3);
      out.push(stem + 'en');
      if (/f$/.test(stem)) out.push(stem.replace(/f$/, 'v') + 'en');
      if (/s$/.test(stem)) out.push(stem.replace(/s$/, 'z') + 'en');
    }
    return [...new Set(out.filter(Boolean))];
  };
  const adjectiveCandidates = (key, meaning = '') => {
    const clean = normalizeDictKey(key);
    const out = [];
    const ofMatch = String(meaning || '').match(/\bof\s+([a-zà-ÿ'-]+)\b/i);
    if (ofMatch) out.push(normalizeDictKey(ofMatch[1]));
    if (clean.endsWith('ste') && clean.length > 5) out.push(clean.slice(0, -3));
    if (clean.endsWith('e') && clean.length > 4) {
      const stem = clean.slice(0, -1);
      out.push(stem);
      if (/kk$/.test(stem)) out.push(stem.replace(/kk$/, 'k'));
      if (/tt$/.test(stem)) out.push(stem.replace(/tt$/, 't'));
      if (/ss$/.test(stem)) out.push(stem.replace(/ss$/, 's'));
    }
    return [...new Set(out.filter(Boolean))];
  };
  const overrides = {
    weer: { en: 'again', pos: 'adverb' },
    dan: { en: 'then', pos: 'adverb' },
    daarna: { en: 'after that', pos: 'adverb' },
    eerst: { en: 'first', pos: 'adverb' },
    ongeveer: { en: 'about / approximately', pos: 'adverb' },
    veilig: { en: 'safe', pos: 'adjective' },
    weinig: { en: 'little / not much', pos: 'adjective' },
    rustig: { en: 'quiet / calm', pos: 'adjective' },
    makkelijk: { en: 'easy', pos: 'adjective' },
    samen: { en: 'together', pos: 'adverb' },
    gratis: { en: 'free', pos: 'adjective' },
    kapot: { en: 'broken', pos: 'adjective' },
    meteen: { en: 'immediately', pos: 'adverb' },
    uiterlijk: { en: 'at the latest', pos: 'adverb' },
    misschien: { en: 'maybe', pos: 'adverb' },
    natuurlijk: { en: 'of course', pos: 'adverb' },
    zelf: { en: 'self / yourself', pos: 'pronoun' },
    thuis: { en: 'at home / home', pos: 'adverb' },
    mee: { en: 'along / with', pos: 'particle' },
    af: { en: 'finished / off', pos: 'particle' },
    met: { en: 'with', pos: 'preposition' },
    op: { en: 'on / at', pos: 'preposition' },
    in: { en: 'in', pos: 'preposition' },
    aan: { en: 'at / on / to', pos: 'preposition' },
    bij: { en: 'at / near / with', pos: 'preposition' },
    voor: { en: 'for / before / in front of', pos: 'preposition' },
    naar: { en: 'to / toward', pos: 'preposition' },
    van: { en: 'of / from', pos: 'preposition' },
    door: { en: 'through / by', pos: 'preposition' },
    over: { en: 'over / about', pos: 'preposition' },
    onder: { en: 'under / among', pos: 'preposition' },
    achter: { en: 'behind', pos: 'preposition' },
    tegen: { en: 'against / to', pos: 'preposition' },
    tussen: { en: 'between', pos: 'preposition' },
    vanaf: { en: 'from (starting at)', pos: 'preposition' },
    tot: { en: 'until / up to', pos: 'preposition' },
    om: { en: 'at (time) / around / in order to', pos: 'preposition' },
    per: { en: 'per / by', pos: 'preposition' },
    zonder: { en: 'without', pos: 'preposition' },
    uit: { en: 'out of / from', pos: 'preposition' },
    na: { en: 'after', pos: 'preposition' },
    langs: { en: 'along / past', pos: 'preposition' },
    naast: { en: 'next to / beside', pos: 'preposition' },
    boven: { en: 'above', pos: 'preposition' },
    buiten: { en: 'outside / except', pos: 'preposition' },
    binnen: { en: 'inside / within', pos: 'preposition' },
    rond: { en: 'around', pos: 'preposition' },
    en: { en: 'and', pos: 'conjunction' },
    of: { en: 'or', pos: 'conjunction' },
    maar: { en: 'but', pos: 'conjunction' },
    want: { en: 'because / for', pos: 'conjunction' },
    omdat: { en: 'because', pos: 'conjunction' },
    als: { en: 'if / when / as', pos: 'conjunction' },
    dat: { en: 'that', pos: 'conjunction' },
    dus: { en: 'so / therefore', pos: 'adverb' },
    ook: { en: 'also / too', pos: 'adverb' },
    nog: { en: 'still / yet', pos: 'adverb' },
    al: { en: 'already', pos: 'adverb' },
    niet: { en: 'not', pos: 'adverb' },
    geen: { en: 'no / not any', pos: 'determiner' },
    wel: { en: 'indeed / do', pos: 'adverb' },
    erg: { en: 'very', pos: 'adverb' },
    heel: { en: 'very / whole', pos: 'adverb' },
    zeer: { en: 'very', pos: 'adverb' },
    nu: { en: 'now', pos: 'adverb' },
    hier: { en: 'here', pos: 'adverb' },
    daar: { en: 'there', pos: 'adverb' },
    opleidingsgids: { en: 'training guide / study guide', pos: 'noun' },
    waar: { en: 'where', pos: 'question word' },
    wat: { en: 'what', pos: 'question word' },
    wie: { en: 'who', pos: 'question word' },
    hoe: { en: 'how', pos: 'question word' },
    wanneer: { en: 'when', pos: 'question word' },
    waarom: { en: 'why', pos: 'question word' },
    welke: { en: 'which', pos: 'question word' },
    welk: { en: 'which', pos: 'question word' },
    moet: { en: 'must / have to', pos: 'modal verb' },
    moeten: { en: 'must / have to', pos: 'modal verb' },
    kunt: { en: 'can / are able to', pos: 'modal verb' },
    kan: { en: 'can / is able to', pos: 'modal verb' },
    kunnen: { en: 'can / be able to', pos: 'modal verb' },
    wilt: { en: 'want / would like', pos: 'modal verb' },
    wil: { en: 'want / would like', pos: 'modal verb' },
    willen: { en: 'to want', pos: 'verb' },
    hoeft: { en: 'need to / have to', pos: 'modal verb' },
    hebt: { en: 'have', pos: 'verb' },
    heeft: { en: 'has', pos: 'verb' },
    hebben: { en: 'to have', pos: 'verb' },
    ben: { en: 'am', pos: 'verb' },
    bent: { en: 'are', pos: 'verb' },
    is: { en: 'is', pos: 'verb' },
    zijn: { en: 'are / to be', pos: 'verb' },
    was: { en: 'was', pos: 'verb', headword: 'zijn', baseForm: 'zijn', formLabel: 'ik/hij/zij/het-vorm, verleden tijd' },
    gaat: { en: 'goes / is going', pos: 'verb' },
    gaan: { en: 'to go', pos: 'verb' },
    wonen: { en: 'to live', pos: 'verb' },
    woont: { en: 'to live', pos: 'verb', headword: 'wonen', baseForm: 'wonen', formLabel: 'u/hij/zij/het-vorm, tegenwoordige tijd' },
    zullen: { en: 'will / shall', pos: 'modal verb' },
    zal: { en: 'will / shall', pos: 'modal verb', headword: 'zullen', baseForm: 'zullen', formLabel: 'ik/hij/zij/het-vorm, tegenwoordige tijd' },
    werk: { en: 'work / job', pos: 'noun (het)' },
    wegen: { en: 'roads / ways; to weigh', pos: 'noun plural / verb' },
    sluiten: { en: 'to close', pos: 'verb' },
    meenemen: { en: 'to bring / take along', pos: 'verb' },
    aanmelden: { en: 'to register / sign up', pos: 'verb' },
    aanmeldt: { en: 'to register / sign up', pos: 'verb', headword: 'aanmelden', baseForm: 'aanmelden', formLabel: 'u/hij/zij/het-vorm, tegenwoordige tijd' },
    verbouwen: { en: 'to renovate / rebuild', pos: 'verb' },
    verbouwd: { en: 'to renovate / rebuild', pos: 'verb', headword: 'verbouwen', baseForm: 'verbouwen', formLabel: 'past participle / verb form' },
    bekende: { en: 'known / familiar', formMeaning: 'known / familiar', pos: 'adjective', headword: 'bekend', baseForm: 'bekend', formLabel: 'attributive -e form' },
    bekendste: { en: 'known / familiar', formMeaning: 'best-known / most famous', pos: 'superlative adjective', headword: 'bekend', baseForm: 'bekend', formLabel: 'superlative -ste form' },
    onze: { en: 'our', formMeaning: 'our', pos: 'possessive pronoun', headword: 'ons', baseForm: 'ons', formLabel: 'attributive possessive form' },
    doordeweekse: { en: 'weekday / during the week', formMeaning: 'weekday / during the week', pos: 'adjective', headword: 'doordeweeks', baseForm: 'doordeweeks', formLabel: 'attributive -e form' },
    belangrijkste: { en: 'important', formMeaning: 'most important', pos: 'superlative adjective', headword: 'belangrijk', baseForm: 'belangrijk', formLabel: 'superlative -ste form' },
    jaarlijks: { en: 'annual / yearly', pos: 'adjective' },
    jaarlijkse: { en: 'annual / yearly', formMeaning: 'annual / yearly', pos: 'adjective', headword: 'jaarlijks', baseForm: 'jaarlijks', formLabel: 'attributive -e form' },
    zonnig: { en: 'sunny', pos: 'adjective' },
    zonnige: { en: 'sunny', formMeaning: 'sunny', pos: 'adjective', headword: 'zonnig', baseForm: 'zonnig', formLabel: 'attributive -e form' },
    anders: { en: 'different / otherwise', pos: 'adjective / adverb' },
    deelnemer: { en: 'participant', pos: 'noun' },
    deelnemers: { en: 'participant', formMeaning: 'participants', pos: 'noun', headword: 'deelnemer', baseForm: 'deelnemer', formLabel: 'plural form' },
    kind: { en: 'child', pos: 'noun (het)' },
    kinderen: { en: 'child', formMeaning: 'children', pos: 'noun', headword: 'kind', baseForm: 'kind', formLabel: 'plural form' },
    drankje: { en: 'drink / beverage', pos: 'noun (het)' },
    drankjes: { en: 'drink / beverage', formMeaning: 'drinks / beverages', pos: 'noun', headword: 'drankje', baseForm: 'drankje', formLabel: 'plural form' },
    zich: { en: 'oneself / himself / herself / themselves', pos: 'reflexive pronoun' },
    doen: { en: 'to do', pos: 'verb' },
    doet: { en: 'does', pos: 'verb' }
  };
  const map = {};
  const add = (key, word, sourceLabel) => {
    const clean = normalizeDictKey(key);
    if (!clean || clean.length < 2 || skip.has(clean)) return;
    if (!map[clean]) {
      map[clean] = {
        nl: clean,
        headword: word.nl,
        en: word.en,
        pos: word.pos || 'word',
        grammar: word.grammar || null,
        source: sourceLabel || word.nl
      };
    }
  };

  words.forEach(word => {
    add(word.nl, word, word.nl);
    normalizeDictKey(word.nl).split(/\s+/).forEach(part => add(part, word, word.nl));
    (word.grammar?.forms || []).forEach(form => {
      add(form.nl, word, form.label);
      normalizeDictKey(form.nl).split(/\s+/).forEach(part => add(part, word, form.label));
    });
  });
  Object.entries(overrides).forEach(([key, value]) => {
    map[key] = {
      nl: key,
      headword: value.headword || key,
      en: value.en,
      pos: value.pos,
      source: 'reading dictionary',
      baseForm: value.baseForm || null,
      formLabel: value.formLabel || null,
      formMeaning: value.formMeaning || null
    };
  });
  map.staan = { nl: 'staan', headword: 'staan', en: 'to stand / be listed / be written', pos: 'verb', source: 'reading dictionary' };
  const externalEntries = externalDictionary.entries || externalDictionary || {};
  Object.entries(externalEntries).forEach(([key, value]) => {
    const clean = normalizeDictKey(key);
    if (!clean || clean.length < 2 || skip.has(clean) || !value?.en) return;
    const externalMeaning = String(value.en || '');
    const isInflectionOnly = isFormOnlyMeaning(externalMeaning);
    if (map[clean]?.source === 'reading dictionary') return;
    if (map[clean] && isInflectionOnly) return;
    map[clean] = {
      nl: clean,
      headword: value.headword || clean,
      en: value.en,
      pos: value.pos || 'word',
      grammar: null,
      source: value.source || 'external dictionary'
    };
  });
  Object.entries(map).forEach(([key, entry]) => {
    if (!isFormOnlyMeaning(entry.en)) return;
    const candidates = isGrammarOnlyMeaning(entry.en) ? infinitiveCandidates(key, entry.en) : adjectiveCandidates(key, entry.en);
    const baseKey = candidates.find(candidate => map[candidate] && !isFormOnlyMeaning(map[candidate].en));
    if (!baseKey) return;
    const base = map[baseKey];
    map[key] = {
      ...entry,
      headword: base.headword || baseKey,
      en: base.en,
      pos: base.pos || entry.pos,
      grammar: base.grammar || entry.grammar || null,
      baseForm: base.headword || baseKey,
      formMeaning: null,
      formLabel: isAttributiveOnlyMeaning(entry.en)
        ? (/ste|superlative/i.test(entry.en) ? 'superlative/attributive form' : 'attributive form')
        : /past|participle/i.test(entry.en)
        ? 'verb form'
        : 'u/hij/zij/het-vorm, tegenwoordige tijd'
    };
  });
  map.voor = { nl: 'voor', headword: 'voor', en: 'for / before / in front of', pos: 'preposition', source: 'reading dictionary' };
  return map;
}

/* ── Settings hook ──────────────────────────────── */
function useSettings() {
  const KEY = 'dutchReading.settings';
  const DEF = { palette: 'delft', autoplay: true };
  const [s, setS] = useState(() => {
    try { return { ...DEF, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
    catch { return DEF; }
  });
  const update = (k, v) => setS(prev => {
    const n = { ...prev, [k]: v };
    try { localStorage.setItem(KEY, JSON.stringify(n)); } catch {}
    return n;
  });
  return [s, update];
}

/* ── Settings modal ─────────────────────────────── */
function SettingsModal({ settings, onUpdate, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle"></div>
        <h2>Instellingen</h2>

        <div className="field-label" style={{ marginBottom: 10 }}>Thema</div>
        <div className="palette-grid">
          {Object.entries(PALETTES).map(([id, p]) => (
            <button key={id} type="button"
              className={'palette-card' + (settings.palette === id ? ' active' : '')}
              onClick={() => onUpdate('palette', id)}>
              <div className="swatch">
                {[p.cream, p.paper, p.brand, p.keep, p.accent].map((c,i) => (
                  <div key={i} className="col" style={{ background: c }}></div>
                ))}
              </div>
              <div className="name">{p.name}</div>
            </button>
          ))}
        </div>

        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 0 8px', borderTop:'1px solid var(--line)', marginTop:16 }}>
          <span style={{ fontSize:14, fontWeight:700, color:'var(--ink)' }}>Auto-play pronunciation</span>
          <button onClick={() => onUpdate('autoplay', !settings.autoplay)}
            style={{ width:48, height:28, borderRadius:14,
              background: settings.autoplay ? 'var(--brand)' : 'var(--line)',
              border:'none', cursor:'pointer', position:'relative', transition:'background 0.2s', flexShrink:0 }}>
            <span style={{ position:'absolute', top:3,
              left: settings.autoplay ? 23 : 3,
              width:22, height:22, borderRadius:'50%', background:'white',
              transition:'left 0.2s', boxShadow:'0 1px 3px rgba(0,0,0,0.3)' }}></span>
          </button>
        </div>

        <button className="ghost-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

/* ── App ────────────────────────────────────────── */
function App() {
  const Store = window.DutchStore;
  const [allWords, setAllWords]       = useState([]);
  const [readings, setReadings]        = useState([]);
  const [externalDictionary, setExternalDictionary] = useState({});
  const [loading, setLoading]         = useState(true);
  const [settings, updateSetting]     = useSettings();
  const [users, setUsers]             = useState([]);
  const [activeUser, setActiveUser]   = useState(null);
  const [userData, setUserData]       = useState(null);
  const [route, setRoute]             = useState('register');
  const [resuming, setResuming]       = useState(false);
  const [sessionBackRoute, setSessionBackRoute] = useState('home');
  const [sentenceResumeOffset, setSentenceResumeOffset] = useState(0);
  const [retryWords, setRetryWords]   = useState(null);
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Load words.json
  useEffect(() => {
    Promise.all([
      fetch('words.json?' + Date.now()).then(r => r.json()),
      fetch('readings.json?' + Date.now()).then(r => r.json()).catch(() => []),
      fetch('dictionary.json?' + Date.now()).then(r => r.ok ? r.json() : {}).catch(() => ({}))
    ])
      .then(([wordData, readingData, dictionaryData]) => {
        setAllWords(wordData.map((w, i) => ({ ...w, _key: wordKey(w, i) })));
        setReadings(readingData);
        setExternalDictionary(dictionaryData || {});
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Apply palette
  useEffect(() => { applyPalette(settings.palette); }, [settings.palette]);

  useEffect(() => {
    window.DutchDictionary = buildDictionary(allWords, externalDictionary);
  }, [allWords, externalDictionary]);

  // Init user from store once words loaded
  useEffect(() => {
    if (loading) return;
    const list = Store.listUsers();
    setUsers(list);
    const active = Store.activeUser();
    if (active && list.includes(active)) {
      setActiveUser(active); setUserData(Store.getUser(active)); setRoute('home');
    } else if (list.length > 0) {
      Store.setActiveUser(list[0]);
      setActiveUser(list[0]); setUserData(Store.getUser(list[0])); setRoute('home');
    } else {
      setRoute('register');
    }
  }, [loading]);

  // Persist userData changes
  useEffect(() => { if (activeUser && userData) Store.saveUser(activeUser, userData); }, [activeUser, userData]);

  const createUser = name => {
    Store.addUser(name); const list = Store.listUsers();
    setUsers(list); setActiveUser(name); setUserData(Store.getUser(name));
    setShowSwitcher(false); setRoute('home');
  };
  const pickUser = name => {
    Store.setActiveUser(name);
    setActiveUser(name); setUserData(Store.getUser(name));
    setShowSwitcher(false); setRoute('home');
  };
  const deleteUser = name => {
    Store.deleteUser(name); const left = Store.listUsers(); setUsers(left);
    if (left.length === 0) { setActiveUser(null); setUserData(null); setRoute('register'); }
    else if (name === activeUser) pickUser(left[0]);
  };

  const prefs  = { order:'course', level:'a1', les:'all', category:'all', contentType:'words', wordDeck:'common', filterMode:'lesson', testCount:100, wordLimit:'', lesFrom:'', lesTo:'', exampleMode:'beginner', ...(userData?.prefs || {}) };
  const status = userData?.status || {};
  const studyList = userData?.studyList || [];

  useEffect(() => {
    window.DutchStudyListAPI = {
      isInList: (nl) => {
        const key = (nl || '').toLowerCase().trim();
        return (userData?.studyList || []).some(w => (w.nl || '').toLowerCase().trim() === key);
      },
      add: (word) => {
        const key = (word.nl || '').toLowerCase().trim();
        if (!key) return;
        setUserData(d => {
          const list = d.studyList || [];
          if (list.some(w => (w.nl || '').toLowerCase().trim() === key)) return d;
          return { ...d, studyList: [...list, { nl: word.nl, en: word.en, pos: word.pos, headword: word.headword, addedAt: Date.now() }] };
        });
      },
      remove: (nl) => {
        const key = (nl || '').toLowerCase().trim();
        setUserData(d => ({ ...d, studyList: (d.studyList || []).filter(w => (w.nl || '').toLowerCase().trim() !== key) }));
      },
      onViewList: () => setRoute('studylist')
    };
  }, [userData]);
  const activeWordDeck = prefs.wordDeck || 'common';
  const activeWords = useMemo(() => allWords.filter(w => (w.deck || 'ar') === activeWordDeck), [allWords, activeWordDeck]);

  const orderedWords = useMemo(() => {
    let list = activeWords;
    if (prefs.filterMode === 'category') {
      if (prefs.category !== 'all') list = list.filter(w => wordCategoryGroup(w) === prefs.category);
    } else if (prefs.les !== 'all') {
      list = list.filter(w => {
        const lessonsForFilter = activeWordDeck === 'common' ? [w.les] : (w.articleLes || [w.les]);
        return lessonsForFilter.includes(prefs.les);
      });
    }
    const from = Number.parseInt(prefs.lesFrom, 10);
    const to = Number.parseInt(prefs.lesTo, 10);
    if (Number.isFinite(from) || Number.isFinite(to)) {
      list = list.filter(w => {
        const lessonsForRange = activeWordDeck === 'common' ? [w.les || 0] : (w.articleLes || [w.les || 0]);
        return lessonsForRange.some(les =>
        (!Number.isFinite(from) || les >= from) && (!Number.isFinite(to) || les <= to)
        );
      });
    }
    list = prefs.order === 'random' ? shuffleA(list) : list.slice().sort((a,b) => (a.les||0)-(b.les||0));
    const limit = Number.parseInt(prefs.wordLimit, 10);
    if (Number.isFinite(limit) && limit > 0) list = list.slice(0, Math.min(limit, list.length));
    return list;
  }, [activeWords, prefs.les, prefs.category, prefs.filterMode, prefs.order, prefs.wordLimit, prefs.lesFrom, prefs.lesTo]);

  const allSentences = useMemo(() => flattenReadings(readings), [readings]);
  const orderedSentences = useMemo(() => {
    let list = allSentences;
    if (prefs.les !== 'all') list = list.filter(s => s.les === prefs.les);
    return list.slice().sort((a,b) => (a.les||0)-(b.les||0) || (a.sentenceNumber||0)-(b.sentenceNumber||0));
  }, [allSentences, prefs.les]);

  const lessons = useMemo(() => {
    const m = {};
    activeWords.forEach(w => { m[w.les] = (m[w.les]||0)+1; });
    return Object.keys(m).map(k => ({ les:Number(k), count:m[k] })).sort((a,b)=>a.les-b.les);
  }, [activeWords]);

  const articles = useMemo(() => {
    const wordCounts = {};
    allWords.filter(w => (w.deck || 'ar') === 'ar').forEach(w => {
      (w.articleLes || [w.les]).forEach(les => { wordCounts[les] = (wordCounts[les] || 0) + 1; });
    });
    return readings.map(r => ({
      les: r.les,
      label: r.label,
      title: r.title,
      wordCount: wordCounts[r.les] || 0,
      sentenceCount: r.sentences?.length || 0
    }));
  }, [readings, allWords]);

  const wordCategories = useMemo(() => {
    const labels = {
      verb:'Verbs',
      noun:'Nouns',
      preposition:'Prepositions',
      adjective:'Adjectives',
      question:'Questions',
      other:'Other'
    };
    const counts = {};
    activeWords.forEach(w => {
      const cat = wordCategoryGroup(w);
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return Object.keys(labels)
      .filter(id => counts[id])
      .map(id => ({ id, label: labels[id], count: counts[id] }));
  }, [activeWords]);

  const wordCategoryStats = useMemo(() => {
    const out = {};
    activeWords.forEach((w, i) => {
      const cat = wordCategoryGroup(w);
      if (!out[cat]) out[cat] = { total: 0, learned: 0, forgotten: 0 };
      out[cat].total += 1;
      const s = status[wordKey(w, i)] || status[w.nl];
      if (s === 'learned') out[cat].learned += 1;
      if (s === 'forgotten') out[cat].forgotten += 1;
    });
    return out;
  }, [activeWords, status]);

  const learnedCount   = useMemo(() => Object.values(status).filter(s=>s==='learned').length, [status]);
  const forgottenCount = useMemo(() => Object.values(status).filter(s=>s==='forgotten').length, [status]);
  const reviewQueue    = useMemo(() => orderedWords.filter(w=>status[wordKey(w)]==='forgotten' || status[w.nl]==='forgotten'), [orderedWords, status]);
  const sentenceStatus = userData?.sentenceStatus || {};
  const sentenceLearnedCount = useMemo(() => Object.values(sentenceStatus).filter(s=>s==='learned').length, [sentenceStatus]);
  const sentenceForgottenCount = useMemo(() => Object.values(sentenceStatus).filter(s=>s==='forgotten').length, [sentenceStatus]);
  const sentenceReviewQueue = useMemo(() => orderedSentences.filter(s=>sentenceStatus[wordKey(s)]==='forgotten'), [orderedSentences, sentenceStatus]);
  const articleSentenceStats = useMemo(() => {
    const out = {};
    readings.forEach(article => {
      const total = article.sentences?.length || 0;
      let learned = 0;
      let forgotten = 0;
      (article.sentences || []).forEach((s, i) => {
        const key = `sentence|${article.id}|${i + 1}|${s.nl}`;
        if (sentenceStatus[key] === 'learned') learned += 1;
        if (sentenceStatus[key] === 'forgotten') forgotten += 1;
      });
      out[article.id] = { total, learned, forgotten };
    });
    return out;
  }, [readings, sentenceStatus]);
  // Test pool: all words in the current lesson filter (or all words if 'all')
  const testPool = useMemo(() => orderedWords, [orderedWords]);
  const sentenceTestPool = useMemo(() => orderedSentences, [orderedSentences]);
  const selectedWordStats = useMemo(() => ({
    total: orderedWords.length,
    learned: orderedWords.filter(w => status[wordKey(w)] === 'learned').length,
    forgotten: orderedWords.filter(w => status[wordKey(w)] === 'forgotten' || status[w.nl] === 'forgotten').length
  }), [orderedWords, status]);
  const selectedSentenceStats = useMemo(() => ({
    total: orderedSentences.length,
    learned: orderedSentences.filter(s => sentenceStatus[wordKey(s)] === 'learned').length,
    forgotten: orderedSentences.filter(s => sentenceStatus[wordKey(s)] === 'forgotten').length
  }), [orderedSentences, sentenceStatus]);
  const allWordStats = useMemo(() => ({
    total: allWords.length,
    learned: allWords.filter((w, i) => status[wordKey(w, i)] === 'learned').length,
    forgotten: allWords.filter((w, i) => status[wordKey(w, i)] === 'forgotten' || status[w.nl] === 'forgotten').length
  }), [allWords, status]);
  const commonWordStats = useMemo(() => {
    const list = allWords.filter(w => (w.deck || 'ar') === 'common');
    return {
      total: list.length,
      learned: list.filter((w, i) => status[wordKey(w, i)] === 'learned').length,
      forgotten: list.filter((w, i) => status[wordKey(w, i)] === 'forgotten' || status[w.nl] === 'forgotten').length
    };
  }, [allWords, status]);
  const arWordStats = useMemo(() => {
    const list = allWords.filter(w => (w.deck || 'ar') === 'ar');
    return {
      total: list.length,
      learned: list.filter((w, i) => status[wordKey(w, i)] === 'learned').length,
      forgotten: list.filter((w, i) => status[wordKey(w, i)] === 'forgotten' || status[w.nl] === 'forgotten').length
    };
  }, [allWords, status]);
  const allSentenceStats = useMemo(() => ({
    total: allSentences.length,
    learned: allSentences.filter(s => sentenceStatus[wordKey(s)] === 'learned').length,
    forgotten: allSentences.filter(s => sentenceStatus[wordKey(s)] === 'forgotten').length
  }), [allSentences, sentenceStatus]);

  const updatePrefs  = patch => setUserData(d => {
    const next = { ...patch };
    if (Object.prototype.hasOwnProperty.call(next, 'testCount')) next.testCount = clampTestCount(next.testCount);
    return { ...d, prefs: { ...d.prefs, ...next } };
  });

  // ── Today stats helpers ────────────────────────────
  function todayDateStr() { return new Date().toISOString().slice(0, 10); }
  function getTodayStats(d) {
    const today = todayDateStr();
    return d.todayStats?.date === today
      ? d.todayStats
      : { date: today, words: 0, sentences: 0, right: 0, total: 0 };
  }

  const recordSwipe  = (word, dir, swipeMode = route) => setUserData(d => {
    const key = wordKey(word);
    const reviewCounts = { ...(d.reviewCounts || {}) };
    const statusNext = { ...d.status };
    if (dir === 'left') {
      reviewCounts[key] = 0;
      statusNext[key] = 'forgotten';
    } else if (swipeMode === 'review') {
      const nextCount = (reviewCounts[key] || 0) + 1;
      reviewCounts[key] = nextCount;
      statusNext[key] = nextCount >= 3 ? 'learned' : 'forgotten';
    } else {
      statusNext[key] = 'learned';
    }
    const prevToday = getTodayStats(d);
    const newToday  = { ...prevToday, words: prevToday.words + 1, right: prevToday.right + (dir === 'right' ? 1 : 0), total: prevToday.total + 1 };
    return { ...d, status: statusNext, reviewCounts, todayStats: newToday };
  });
  const recordSentenceSwipe = (sentence, dir) => setUserData(d => {
    const prevToday = getTodayStats(d);
    const newToday  = { ...prevToday, sentences: prevToday.sentences + 1, right: prevToday.right + (dir === 'right' ? 1 : 0), total: prevToday.total + 1 };
    return { ...d, sentenceStatus: { ...(d.sentenceStatus || {}), [wordKey(sentence)]: dir==='right'?'learned':'forgotten' }, todayStats: newToday };
  });
  const saveSession  = (mode, words, cursor) => {
    if (cursor >= words.length) setUserData(d => ({ ...d, session: null }));
    else setUserData(d => ({ ...d, session: { mode, words: words.map(w=>wordKey(w)), cursor } }));
  };
  const clearSession = () => setUserData(d => ({ ...d, session: null }));

  const continueSession = useMemo(() => {
    if (!userData?.session) return null;
    const s = userData.session;
    const byKey = new Map([
      ...allWords.map((w, i) => [wordKey(w, i), w]),
      ...allSentences.map((w, i) => [wordKey(w, i), w])
    ]);
    const source = s.mode === 'reading' || s.mode === 'sentence-review' || s.mode === 'sentence-test' ? allSentences : allWords;
    const words = s.words.map(k => byKey.get(k) || source.find(w=>w.nl===k)).filter(Boolean);
    if (!words.length) return null;
    if (words[0]?.deck === 'ar') return null;
    if ((s.cursor || 0) >= words.length) return null;
    return { ...s, words };
  }, [userData?.session, allWords, allSentences]);

  // Loading splash
  if (loading) {
    return (
      <div className="app-root" style={{ display:'grid', placeItems:'center' }}>
        <div style={{ color:'var(--ink-soft)', fontFamily:'var(--font-ui)', fontSize:16 }}>Laden…</div>
      </div>
    );
  }

  // Modals rendered over every screen
  const modals = (
    <>
      {showSwitcher && <UserSwitcher users={users} active={activeUser}
        onPick={pickUser} onAdd={createUser} onDelete={deleteUser}
        onClose={() => setShowSwitcher(false)} />}
      {showSettings && <SettingsModal settings={settings} onUpdate={updateSetting}
        onClose={() => setShowSettings(false)} />}
    </>
  );

  // Register
  if (!activeUser || !userData) {
    return (
      <div className="app-root">
        <RegisterScreen existingUsers={users} onCreate={createUser} onPickExisting={pickUser} />
        {modals}
      </div>
    );
  }

  // ── Today stats for home screen ───────────────────
  const _todayStr  = todayDateStr();
  const todayStats = userData?.todayStats?.date === _todayStr ? userData.todayStats : { date: _todayStr, words: 0, sentences: 0, right: 0, total: 0 };

  // Route → screen
  let screen;
  if (route === 'home') {
    const resolveMode = action => {
      if (prefs.contentType === 'sentences') {
        return action === 'study' ? 'reading' : action === 'review' ? 'sentence-review' : 'sentence-test';
      }
      return action === 'study' ? 'learn' : action === 'review' ? 'review' : 'test';
    };
    screen = (
      <HomeScreen user={activeUser}
        stats={allWordStats}
        commonStats={commonWordStats}
        sentenceStats={allSentenceStats}
        studyListCount={studyList.length}
        todayStats={todayStats}
        prefs={prefs} lessons={lessons} articles={articles} wordCategories={wordCategories}
        onPickMode={m => { setResuming(false); clearSession(); setRoute(resolveMode(m)); }}
        onPickContent={type => {
          setResuming(false);
          clearSession();
          if (type === 'sentences') {
            updatePrefs({ contentType: 'sentences', filterMode: 'article' });
            setRoute('sentences-pick');
          } else if (type === 'studylist') {
            setRoute('studylist');
          } else if (type === 'common') {
            updatePrefs({ contentType: 'words', wordDeck: 'common', filterMode: 'lesson', les: 'all', category: 'all', wordLimit: '', lesFrom: '', lesTo: '' });
            setRoute('words-pick');
          }
        }}
        onChangePrefs={updatePrefs}
        onSwitchUser={() => setShowSwitcher(true)}
        onShowSettings={() => setShowSettings(true)}
        continueSession={continueSession}
        onContinue={() => { if (continueSession) { setResuming(true); setRoute(continueSession.mode); } }}
      />
    );
  } else if (route === 'words-pick') {
    screen = (
      <WordsPickScreen
        wordCategories={wordCategories}
        statsByCategory={wordCategoryStats}
        articles={articles}
        lessons={lessons}
        wordDeck={activeWordDeck}
        prefs={prefs}
        onBack={() => setRoute('home')}
        onStartDeck={(action, patch) => {
          setResuming(false);
          clearSession();
          setSessionBackRoute('words-pick');
          updatePrefs({ contentType: 'words', ...patch });
          setRoute(action === 'study' ? 'learn' : action === 'review' ? 'review' : 'test');
        }}
      />
    );
  } else if (route === 'sentences-pick') {
    screen = (
      <SentencesPickScreen
        readings={readings}
        statsByArticle={articleSentenceStats}
        prefs={prefs}
        continueSession={continueSession}
        onBack={() => setRoute('home')}
        onStartArticle={(action, les, order) => {
          setResuming(false);
          clearSession();
          setSentenceResumeOffset(0);
          setSessionBackRoute('sentences-pick');
          updatePrefs({ contentType: 'sentences', filterMode: 'article', les, order });
          setRoute(action === 'study' ? 'reading' : action === 'review' ? 'sentence-review' : 'sentence-test');
        }}
        onContinueArticle={(article, order) => {
          if (continueSession?.mode === 'reading' && continueSession.words?.[0]?.les === article.les) {
            setResuming(true);
            setSentenceResumeOffset(0);
            setSessionBackRoute('sentences-pick');
            updatePrefs({ contentType: 'sentences', filterMode: 'article', les: article.les, order });
            setRoute('reading');
            return;
          }
          const stats = article.stats || {};
          const offset = Math.max(0, Math.min(stats.learned || 0, Math.max((stats.total || 1) - 1, 0)));
          setResuming(false);
          clearSession();
          setSentenceResumeOffset(offset);
          setSessionBackRoute('sentences-pick');
          updatePrefs({ contentType: 'sentences', filterMode: 'article', les: article.les, order });
          setRoute('reading');
        }}
      />
    );
  } else if (route === 'reading' || route === 'sentence-review') {
    const useSaved = resuming && continueSession?.mode === route;
    const fullSentences = route === 'reading'
      ? (useSaved ? continueSession.words : orderedSentences)
      : (useSaved ? continueSession.words : sentenceReviewQueue);
    const offset = useSaved
      ? Math.min(continueSession.cursor || 0, fullSentences.length)
      : route === 'reading'
        ? Math.min(sentenceResumeOffset, fullSentences.length)
        : 0;
    const sentences = offset > 0 ? fullSentences.slice(offset) : fullSentences;
    screen = (
      <DeckScreen mode={route} words={sentences} progressOffset={offset}
        level={prefs.level} onLevelChange={lv => updatePrefs({ level: lv })}
        autoplay={settings.autoplay}
        exampleMode={prefs.exampleMode}
        onExit={() => { setResuming(false); setSentenceResumeOffset(0); setRoute(sessionBackRoute || 'home'); }}
        onSwipe={(sentence, dir, cursor) => { recordSentenceSwipe(sentence, dir); saveSession(route, fullSentences, offset + cursor); }}
      />
    );
  } else if (route === 'learn' || route === 'review') {
    const useSaved = resuming && continueSession?.mode === route;
    const fullWords = route === 'learn'
      ? (useSaved ? continueSession.words : orderedWords)
      : (useSaved ? continueSession.words : reviewQueue);
    const offset = useSaved ? Math.min(continueSession.cursor || 0, fullWords.length) : 0;
    const words = useSaved ? fullWords.slice(offset) : fullWords;
    screen = (
      <DeckScreen mode={route} words={words} progressOffset={offset}
        level={prefs.level} onLevelChange={lv => updatePrefs({ level: lv })}
        autoplay={settings.autoplay}
        onExit={() => { setResuming(false); setRoute(sessionBackRoute || 'home'); }}
        onSwipe={(word, dir, cursor) => { recordSwipe(word, dir, route); saveSession(route, fullWords, offset + cursor); }}
        onRetryMissed={route === 'learn' ? missed => { setRetryWords(missed); clearSession(); setRoute('learn-retry'); } : null}
      />
    );
  } else if (route === 'studylist') {
    screen = (
      <StudyListScreen
        items={studyList}
        onBack={() => setRoute('home')}
        onRemove={nl => window.DutchStudyListAPI?.remove(nl)}
        onStudy={() => {
          if (!studyList.length) return;
          const byKey = {};
          allWords.forEach((w, i) => { byKey[(w.nl || '').toLowerCase().trim()] = w; });
          const words = studyList.map(item => {
            const resolved = window.lookupDutchWord?.(item.nl) || window.lookupDutchWord?.(item.headword) || null;
            const fixedItem = resolved?.formMeaning
              ? { ...item, nl: item.nl, en: resolved.formMeaning, pos: resolved.pos || item.pos, headword: item.nl }
              : resolved?.baseForm || /\b(first|second|third)-person\b|\bpresent indicative\b|\bpast tense\b|\bpast indicative\b|\bparticiple\b|\binflection of\b|\bform of\b/i.test(String(item.en || ''))
              ? { ...item, nl: resolved?.baseForm || resolved?.headword || item.nl, en: resolved?.en || item.en, pos: resolved?.pos || item.pos, headword: resolved?.baseForm || resolved?.headword || item.headword }
              : item;
            const key = (fixedItem.nl || '').toLowerCase().trim();
            return byKey[key] || {
              nl: fixedItem.nl, en: fixedItem.en, pos: fixedItem.pos || 'word', ipa: '', les: 0,
              examples: {}, grammar: null, deck: 'studylist',
              _key: `studylist|${key}`
            };
          });
          setSessionBackRoute('studylist');
          setRetryWords(words);
          setRoute('learn-retry');
        }}
      />
    );
  } else if (route === 'learn-retry' && retryWords) {
    screen = (
      <DeckScreen key={`learn-retry-${retryWords.map(w => wordKey(w)).join('|')}`} mode="learn" words={retryWords} progressOffset={0}
        level={prefs.level} onLevelChange={lv => updatePrefs({ level: lv })}
        autoplay={settings.autoplay}
        exampleMode={prefs.exampleMode}
        onExit={() => { setRetryWords(null); setRoute(sessionBackRoute || 'home'); }}
        onSwipe={(word, dir) => recordSwipe(word, dir, 'learn')}
        onRetryMissed={missed => { setRetryWords(missed); setRoute('learn-retry'); }}
      />
    );
  } else if (route === 'test') {
    // When testing by lesson, use all lesson words (no cap); when all, apply user's testCount
    const maxQ = prefs.les !== 'all' ? null : clampTestCount(prefs.testCount);
    screen = (
      <TestScreen key="test" words={testPool} allWords={allWords} autoplay={settings.autoplay}
        maxQuestions={maxQ}
        onWrongWord={word => recordSwipe(word, 'left')}
        onExit={() => { clearSession(); setRoute(sessionBackRoute || 'home'); }}
        onComplete={wrongs => { setRetryWords(wrongs); setRoute('retry'); }}
      />
    );
  } else if (route === 'sentence-test') {
    const maxQ = prefs.les !== 'all' ? null : clampTestCount(prefs.testCount);
    screen = (
      <TestScreen key="sentence-test" words={sentenceTestPool} allWords={allSentences} autoplay={settings.autoplay}
        maxQuestions={maxQ}
        onWrongWord={sentence => recordSentenceSwipe(sentence, 'left')}
        onExit={() => { clearSession(); setRoute(sessionBackRoute || 'home'); }}
        onComplete={wrongs => { setRetryWords(wrongs); setRoute('sentence-retry'); }}
      />
    );
  } else if (route === 'sentence-retry' && retryWords) {
    screen = (
      <TestScreen key="sentence-retry" words={retryWords} allWords={allSentences} autoplay={settings.autoplay}
        maxQuestions={null}
        onWrongWord={sentence => recordSentenceSwipe(sentence, 'left')}
        onExit={() => { setRetryWords(null); setRoute(sessionBackRoute || 'home'); }}
        onComplete={wrongs => {
          setRetryWords(wrongs.length ? wrongs : null);
          if (!wrongs.length) setRoute(sessionBackRoute || 'home');
        }}
      />
    );
  } else if (route === 'retry' && retryWords) {
    screen = (
      <TestScreen key="retry" words={retryWords} allWords={allWords} autoplay={settings.autoplay}
        maxQuestions={null}
        onWrongWord={word => recordSwipe(word, 'left')}
        onExit={() => { setRetryWords(null); setRoute(sessionBackRoute || 'home'); }}
        onComplete={wrongs => {
          setRetryWords(wrongs.length ? wrongs : null);
          if (!wrongs.length) setRoute(sessionBackRoute || 'home');
        }}
      />
    );
  }

  return (
    <div className="app-root">
      {screen}
      {modals}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
