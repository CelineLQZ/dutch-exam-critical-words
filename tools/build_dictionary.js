const fs = require('fs');

const WORD_RE = /[A-Za-zÀ-ÿ']+/g;
const API_ROOT = 'https://freedictionaryapi.com/api/v1/entries/nl/';

const STOP_EN = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'have',
  'he', 'her', 'his', 'in', 'is', 'it', 'of', 'on', 'or', 'she', 'that', 'the',
  'their', 'there', 'they', 'this', 'to', 'we', 'what', 'when', 'where', 'which',
  'who', 'why', 'will', 'with', 'you', 'your'
]);

const MANUAL_ENTRIES = {
  opleidingsgids: { headword: 'opleidingsgids', en: 'training guide / study guide', pos: 'noun' },
  staan: { headword: 'staan', en: 'to stand / be located / be written', pos: 'verb' },
  staat: { headword: 'staan', en: 'stands / is located / is written', pos: 'verb' },
  tips: { headword: 'tip', en: 'tips / pieces of advice', pos: 'noun' },
  tip: { headword: 'tip', en: 'tip / piece of advice', pos: 'noun' },
};

function normalizeToken(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/^'+|'+$/g, '')
    .trim();
}

function normalizeDefinition(text) {
  return String(text || '')
    .replace(/\([^)]*\)\s*/g, '')
    .replace(/^to be, to be /i, 'to be ')
    .replace(/^to /i, 'to ')
    .replace(/\s+/g, ' ')
    .trim();
}

function simpleDefinition(text) {
  const cleaned = normalizeDefinition(text)
    .replace(/^the act of /i, '')
    .replace(/^a person who /i, 'person who ')
    .replace(/^someone who /i, 'someone who ');
  return cleaned.split(/;|\.\s/)[0].trim();
}

function englishWords(text) {
  return new Set(
    String(text || '')
      .toLowerCase()
      .match(/[a-z]+/g)
      ?.filter(w => w.length > 2 && !STOP_EN.has(w)) || []
  );
}

function posFromContext(contexts) {
  let noun = 0;
  let verb = 0;
  let adjective = 0;
  for (const c of contexts) {
    if (['de', 'het', 'een', 'mijn', 'uw', 'zijn', 'haar', 'onze', 'dit', 'deze'].includes(c.prev)) noun += 2;
    if (['moet', 'moeten', 'kan', 'kunt', 'kunnen', 'wil', 'wilt', 'willen', 'gaat', 'gaan', 'te', 'om'].includes(c.prev)) verb += 2;
    if (['is', 'zijn', 'wordt', 'worden', 'heel', 'erg', 'zeer'].includes(c.prev)) adjective += 1;
    if (c.token.endsWith('en')) verb += 1;
  }
  if (noun > verb && noun >= adjective) return 'noun';
  if (verb > noun && verb >= adjective) return 'verb';
  if (adjective > noun && adjective > verb) return 'adjective';
  return '';
}

function flattenSenses(entry) {
  const out = [];
  for (const sense of entry.senses || []) {
    out.push({ pos: entry.partOfSpeech || 'word', definition: sense.definition || '', tags: sense.tags || [] });
    for (const sub of sense.subsenses || []) {
      out.push({ pos: entry.partOfSpeech || 'word', definition: sub.definition || '', tags: sub.tags || [] });
    }
  }
  return out;
}

function formLemmaFrom(entries) {
  for (const entry of entries || []) {
    for (const sense of flattenSenses(entry)) {
      const text = sense.definition;
      const match = text.match(/\b(?:plural of|inflection of|form of)\s+([A-Za-zÀ-ÿ'-]+)/i)
        || text.match(/\bof\s+([A-Za-zÀ-ÿ'-]+)$/i);
      if (match) return normalizeToken(match[1]);
    }
  }
  return '';
}

async function fetchEntry(token, cache) {
  if (cache[token]) return cache[token];
  try {
    const res = await fetch(API_ROOT + encodeURIComponent(token));
    if (!res.ok) throw new Error(String(res.status));
    const json = await res.json();
    cache[token] = json;
  } catch (err) {
    cache[token] = { word: token, entries: [], error: err.message };
  }
  return cache[token];
}

function chooseSense(token, entries, contexts) {
  const expectedPos = posFromContext(contexts);
  const contextWords = englishWords(contexts.map(c => c.en).join(' '));
  const senses = entries.flatMap(flattenSenses)
    .filter(s => s.definition && !/\b(?:plural of|inflection of|form of)\b/i.test(s.definition))
    .filter(s => !(s.tags || []).some(t => ['obsolete', 'archaic'].includes(String(t).toLowerCase())));

  if (!senses.length) return null;

  let best = null;
  for (const sense of senses) {
    const defWords = englishWords(sense.definition);
    let score = 0;
    for (const w of defWords) if (contextWords.has(w)) score += 2;
    if (expectedPos && sense.pos === expectedPos) score += 4;
    if (sense.pos === 'noun' && token.endsWith('en')) score -= 1;
    if (sense.definition.length < 70) score += 1;
    if (!best || score > best.score) best = { ...sense, score };
  }
  return best;
}

function compoundFallback(token) {
  const parts = [
    ['opleiding', 'gids', 'training guide / study guide', 'noun'],
    ['woorden', 'lijst', 'word list', 'noun'],
    ['tandarts', 'praktijk', 'dental practice', 'noun'],
    ['hardloop', 'wedstrijd', 'running race', 'noun'],
    ['buurt', 'bijeenkomst', 'neighborhood meeting', 'noun'],
  ];
  for (const [left, right, en, pos] of parts) {
    if (token.includes(left) && token.includes(right)) return { headword: token, en, pos };
  }
  return null;
}

function addContextLine(contexts, nl, en) {
  const tokens = (nl.match(WORD_RE) || []).map(normalizeToken).filter(Boolean);
  tokens.forEach((token, i) => {
    if (!contexts.has(token)) contexts.set(token, []);
    contexts.get(token).push({
      token,
      prev: tokens[i - 1] || '',
      next: tokens[i + 1] || '',
      nl,
      en: en || '',
    });
  });
}

function collectContexts(readings, words) {
  const contexts = new Map();
  for (const article of readings) {
    for (const sentence of article.sentences || []) {
      addContextLine(contexts, sentence.nl, sentence.en);
    }
  }
  for (const word of words) {
    addContextLine(contexts, word.nl || '', word.en || '');
    const examples = Array.isArray(word.examples) ? word.examples : Object.values(word.examples || {});
    for (const example of examples) {
      addContextLine(contexts, example.nl || '', example.en || word.en || '');
    }
  }
  return contexts;
}

function collectFormOverrides(words) {
  const overrides = {};
  for (const word of words) {
    const base = normalizeToken(word.nl || '').replace(/^(de|het|een)\s+/, '');
    if (base && word.en) {
      overrides[base] = {
        nl: base,
        headword: base,
        en: word.en,
        pos: word.pos || 'word',
        source: 'word deck headword',
      };
    }

    for (const form of word.grammar?.forms || []) {
      const token = normalizeToken(form.nl || '').split(/\s+/).pop();
      if (!token || !word.en) continue;
      const isVerb = word.grammar?.kind === 'verb' || word.pos === 'verb';
      const isNoun = word.grammar?.kind === 'noun' || word.pos === 'noun';
      if (!isVerb && !isNoun) continue;
      if (overrides[token]) continue;
      overrides[token] = {
        nl: token,
        headword: base || token,
        en: word.en,
        pos: isVerb ? 'verb' : 'noun',
        source: 'word deck grammar form',
      };
    }
  }
  return overrides;
}

async function main() {
  const readings = JSON.parse(fs.readFileSync('readings.json', 'utf8'));
  const words = fs.existsSync('words.json') ? JSON.parse(fs.readFileSync('words.json', 'utf8')) : [];
  const contexts = collectContexts(readings, words);
  const formOverrides = collectFormOverrides(words);
  const cachePath = 'tools/.dictionary-api-cache.json';
  const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};
  const entries = {};
  const tokens = [...contexts.keys()].sort();

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (MANUAL_ENTRIES[token]) {
      entries[token] = { nl: token, ...MANUAL_ENTRIES[token], source: 'manual exam-context override' };
      continue;
    }
    if (formOverrides[token]) {
      const expectedPos = posFromContext(contexts.get(token) || []);
      const overridePos = formOverrides[token].pos;
      const hasClearConflict = expectedPos && overridePos && expectedPos !== overridePos
        && ['noun', 'verb', 'adjective'].includes(expectedPos)
        && ['noun', 'verb', 'adjective'].includes(overridePos);
      if (hasClearConflict) {
        // Keep asking the dictionary when the sentence context says this form is a different part of speech.
      } else {
        entries[token] = formOverrides[token];
        continue;
      }
    }

    let data = await fetchEntry(token, cache);
    let apiEntries = data.entries || [];
    let headword = token;
    let sense = chooseSense(token, apiEntries, contexts.get(token) || []);

    if (!sense) {
      const lemma = formLemmaFrom(apiEntries);
      if (lemma && lemma !== token) {
        const lemmaData = await fetchEntry(lemma, cache);
        const lemmaSense = chooseSense(lemma, lemmaData.entries || [], contexts.get(token) || []);
        if (lemmaSense) {
          headword = lemma;
          sense = lemmaSense;
        }
      }
    }

    const compound = !sense ? compoundFallback(token) : null;
    if (compound) {
      entries[token] = { nl: token, ...compound, source: 'compound fallback' };
    } else if (sense) {
      entries[token] = {
        nl: token,
        headword,
        en: simpleDefinition(sense.definition),
        pos: sense.pos || 'word',
        source: 'FreeDictionaryAPI / Wiktionary, context-selected',
      };
    }

    if ((i + 1) % 100 === 0) {
      fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + '\n');
      console.log(`processed ${i + 1}/${tokens.length}`);
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + '\n');
  const output = {
    _meta: {
      source: 'FreeDictionaryAPI entries for Dutch, sourced from English Wiktionary',
      license: 'CC BY-SA 4.0',
      generatedAt: new Date().toISOString(),
      tokenCount: tokens.length,
      entryCount: Object.keys(entries).length,
    },
    entries,
  };
  fs.writeFileSync('dictionary.json', JSON.stringify(output, null, 2) + '\n');
  console.log(JSON.stringify(output._meta, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
