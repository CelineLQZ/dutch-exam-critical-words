const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCES = {
  zh: '/Users/liceline/Desktop/荷兰融入考试阅读/grammar_chinese.md',
  en: '/Users/liceline/Desktop/荷兰融入考试阅读/grammar_english.md'
};
const OUT = path.join(ROOT, 'sentence-grammar-data.js');

function stripMd(value) {
  return String(value || '')
    .replace(/\*\*/g, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function splitRow(line) {
  const raw = line.trim();
  if (!raw.startsWith('|') || !raw.endsWith('|')) return null;
  const cells = raw.slice(1, -1).split('|').map(cell => cell.trim());
  return cells.length >= 3 ? cells : null;
}

function normalizeSentence(sentence) {
  return stripMd(sentence)
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseMarkdown(file) {
  const text = fs.readFileSync(file, 'utf8');
  const reference = [];
  const sentences = {};
  let section = null;

  for (const line of text.split(/\r?\n/)) {
    if (/^##\s+Grammar Type Reference/.test(line)) {
      section = 'reference';
      continue;
    }
    if (/^##\s+Exam\b/.test(line)) {
      section = 'sentences';
      continue;
    }

    const row = splitRow(line);
    if (!row) continue;
    if (row.some(cell => /^-+$/.test(cell.replace(/\s/g, '')))) continue;
    if (/^Dutch sentence$/i.test(stripMd(row[0])) || /^Type$/i.test(stripMd(row[0]))) continue;

    if (section === 'reference') {
      const [type, rule, explanation, pattern] = row;
      reference.push({
        type: stripMd(type),
        rule: stripMd(rule),
        explanation: stripMd(explanation),
        pattern: stripMd(pattern)
      });
      continue;
    }

    if (section === 'sentences') {
      const [sentenceCell, typeCell, reasonCell] = row;
      const sentence = normalizeSentence(sentenceCell);
      const types = stripMd(typeCell).split('\n').map(s => s.trim()).filter(Boolean);
      const reasons = stripMd(reasonCell).split('\n').map(s => s.trim()).filter(Boolean);
      if (!sentence || !types.length) continue;
      sentences[sentence] = {
        forms: types.map((type, i) => ({
          label: type,
          nl: reasons[i] || reasons.join('\n') || ''
        }))
      };
    }
  }

  return { reference, sentences };
}

const zh = parseMarkdown(SOURCES.zh);
const en = parseMarkdown(SOURCES.en);
const sentenceKeys = new Set([...Object.keys(zh.sentences), ...Object.keys(en.sentences)]);
const sentences = {};

for (const key of sentenceKeys) {
  sentences[key] = {
    zh: zh.sentences[key] || null,
    en: en.sentences[key] || null
  };
}

const payload = {
  reference: { zh: zh.reference, en: en.reference },
  sentences
};

fs.writeFileSync(
  OUT,
  `window.SENTENCE_GRAMMAR_DATA = ${JSON.stringify(payload, null, 2)};\n`,
  'utf8'
);

console.log(`Wrote ${OUT}`);
console.log(`References: zh=${zh.reference.length}, en=${en.reference.length}`);
console.log(`Sentence grammar rows: ${sentenceKeys.size}`);
