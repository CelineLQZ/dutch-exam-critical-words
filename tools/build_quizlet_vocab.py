import json
import math
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
DOCX = Path("/Users/liceline/Desktop/荷兰融入考试阅读/荷兰语阅读听力考点词 QUIZLET整理.docx")
WORDS_OUT = ROOT / "words.json"
AUDIT_OUT = ROOT / "translation-audit.md"
READINGS = ROOT / "readings.json"

NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
WORD_RE = re.compile(r"[A-Za-zÀ-ÿ']+")

TRANSLATION_FIXES = {
    "afhalen": "to pick up / collect",
    "de bon": "receipt / coupon / voucher",
    "boven": "upstairs / above",
    "de cursus Nederlands": "Dutch course",
    "de Eerste Kamer": "the Senate / upper house",
    "Engels": "English language / English",
    "ergens": "somewhere",
    "Ik roep je op.": "I call on you / I summon you.",
    "de kringloop": "thrift store / recycling center",
    "de meeste": "the most / most people",
    "meeste": "most",
    "ouder": "parent / older",
    "over": "about / over",
    "de spoed": "urgency / emergency",
    "versturen": "to send / dispatch",
    "waar": "true",
    "zijn": "to be / his",
}

AUDIT_NOTES = {
    "afhalen": "Changed from 'to take away' to 'to pick up / collect'; in exam-style Dutch, afhalen is usually collect/pick up.",
    "het boemetje": "Likely typo in the Dutch source. If this means 'small tree', Dutch should be 'het boompje'. Kept the original spelling in the deck.",
    "Ik roep je op.": "Changed from 'I call you up' to 'I call on you / I summon you'; 'oproepen' is not normally a phone call.",
    "ouder": "'ouder' can mean parent as a noun, or older as an adjective/comparative. Kept both meanings.",
    "zijn": "Ambiguous: verb 'to be' and possessive pronoun 'his'. Kept both meanings.",
    "waar": "Kept as 'true' because the paired item 'waar / niet waar' confirms this is true/false, not the question word 'where'.",
    "de kringloop": "More natural exam-context translation is thrift store / recycling center.",
    "de spoed": "More natural as urgency/emergency; in medical contexts often urgent care/emergency service.",
}

IRREGULAR_VERBS = {
    "zijn": ("ben", "is", "was", "is geweest"),
    "hebben": ("heb", "heeft", "had", "heeft gehad"),
    "kunnen": ("kan", "kan", "kon", "heeft gekund"),
    "worden": ("word", "wordt", "werd", "is geworden"),
    "weten": ("weet", "weet", "wist", "heeft geweten"),
    "gaan": ("ga", "gaat", "ging", "is gegaan"),
    "komen": ("kom", "komt", "kwam", "is gekomen"),
    "krijgen": ("krijg", "krijgt", "kreeg", "heeft gekregen"),
    "geven": ("geef", "geeft", "gaf", "heeft gegeven"),
    "nemen": ("neem", "neemt", "nam", "heeft genomen"),
    "spreken": ("spreek", "spreekt", "sprak", "heeft gesproken"),
    "lezen": ("lees", "leest", "las", "heeft gelezen"),
    "brengen": ("breng", "brengt", "bracht", "heeft gebracht"),
    "helpen": ("help", "helpt", "hielp", "heeft geholpen"),
    "blijven": ("blijf", "blijft", "bleef", "is gebleven"),
    "bestaan": ("besta", "bestaat", "bestond", "heeft bestaan"),
    "doen": ("doe", "doet", "deed", "heeft gedaan"),
    "trouwen": ("trouw", "trouwt", "trouwde", "is getrouwd"),
    "kopen": ("koop", "koopt", "kocht", "heeft gekocht"),
    "ophalen": ("ophaal", "ophaalt", "ophaalde", "heeft opgehaald"),
    "afhalen": ("afhaal", "afhaalt", "afhaalde", "heeft afgehaald"),
    "opgeven": ("opgeef", "opgeeft", "opgaf", "heeft opgegeven"),
    "geven": ("geef", "geeft", "gaf", "heeft gegeven"),
    "halen": ("haal", "haalt", "haalde", "heeft gehaald"),
}

SEPARABLE_PREFIXES = ("thuis", "achter", "beneden", "boven", "binnen", "buiten", "tegen", "terug", "aan", "af", "op", "uit", "weg", "mee")


def read_docx_rows(path):
    with zipfile.ZipFile(path) as zf:
        root = ET.fromstring(zf.read("word/document.xml"))
    rows = []
    for tr in root.findall(".//w:tr", NS):
        cells = []
        for tc in tr.findall("./w:tc", NS):
            text = "".join(t.text or "" for t in tc.findall(".//w:t", NS)).strip()
            cells.append(re.sub(r"\s+", " ", text))
        if len(cells) >= 2 and cells[0] and cells[0] != "Nederlands":
            rows.append((cells[0], cells[1]))
    return rows


def normalize(text):
    return (
        text.lower()
        .replace("’", "'")
        .replace("‘", "'")
        .replace("“", '"')
        .replace("”", '"')
        .strip()
    )


def bare_nl(nl):
    return re.sub(r"^(de|het|een)\s+", "", normalize(nl)).strip(" .!?")


def split_separable(inf):
    for prefix in SEPARABLE_PREFIXES:
        rest = inf[len(prefix):]
        if inf.startswith(prefix) and len(rest) > 4 and rest.endswith("en"):
            return prefix, rest
    return "", inf


def stem_verb(inf):
    if not inf.endswith("en") or len(inf) <= 3:
        return inf
    stem = inf[:-2]
    if re.search(r"[^aeiou][aeiou][^aeiouwxy]$", stem):
        stem = stem[:-2] + stem[-2] + stem[-2:]
    if len(stem) >= 2 and stem[-1] == stem[-2] and stem[-1] in "bcdfghjklmnpqrstvwxz":
        stem = stem[:-1]
    if stem.endswith("v"):
        stem = stem[:-1] + "f"
    if stem.endswith("z"):
        stem = stem[:-1] + "s"
    return stem


def perfect_prefix(inf, stem):
    ending = "" if stem[-1:] in "dt" else ("t" if stem[-1:] in "tkfschp" else "d")
    if re.match(r"^(be|ge|her|ont|ver)", inf):
        return stem + ending
    return "ge" + stem + ending


def verb_forms(nl):
    inf = bare_nl(nl).split()[0]
    if inf in IRREGULAR_VERBS:
        ik, hij, past, perfect = IRREGULAR_VERBS[inf]
    else:
        prefix, core = split_separable(inf)
        stem = stem_verb(core)
        ik = prefix + stem
        hij = prefix + stem + ("t" if not stem.endswith("t") else "")
        takes_t = stem[-1:] in "tkfschp"
        suffix = "te" if takes_t else "de"
        ending = "" if stem[-1:] in "dt" else ("t" if takes_t else "d")
        past = prefix + stem + suffix
        participle = f"{prefix}ge{stem}{ending}" if prefix else perfect_prefix(inf, stem)
        perfect = "heeft " + participle
    return [
        {"label": "ik", "nl": ik},
        {"label": "hij/zij/het", "nl": hij},
        {"label": "past", "nl": past},
        {"label": "perfect", "nl": perfect},
    ]


def plural_for(noun):
    base = bare_nl(noun)
    if base.endswith("s"):
        plural = base
    elif base.endswith(("je", "tje")):
        plural = base + "s"
    elif base.endswith("ie"):
        plural = base + "s"
    elif base.endswith("heid"):
        plural = base[:-4] + "heden"
    elif base.endswith("f"):
        plural = base[:-1] + "ven"
    elif base.endswith("s"):
        plural = base[:-1] + "zen"
    elif base.endswith("e"):
        plural = base + "n"
    else:
        plural = base + "en"
    return [{"label": "plural", "nl": plural}]


def pos_for(nl, en):
    low_nl = normalize(nl)
    low_en = normalize(en)
    if low_nl.endswith("?") or low_nl.endswith(".") or low_nl.startswith("ik "):
        return "phrase"
    if low_nl.startswith(("de ", "het ")):
        return "noun"
    if low_en.startswith("to ") or low_nl.split()[0].endswith("en"):
        return "verb"
    if low_nl in {"al", "allebei", "alleen", "anders", "beneden", "boven", "eerder", "echt", "ergens", "erg", "gelukkig", "genoeg", "meteen", "mogelijk", "net", "uiteindelijk", "vaak", "vaker", "vroeger", "vroeg", "weg", "weinig", "zelf", "zonder", "tijdens", "nadat", "als", "over"}:
        return "adverb"
    if any(marker in low_en for marker in ["suitable", "available", "reachable", "married", "wooden", "compulsory", "voluntary", "possible", "needed", "tired", "business (adj.)"]):
        return "adjective"
    return "other"


def category_for(pos, nl):
    if pos == "verb":
        return "verb"
    if pos == "noun":
        return "noun"
    if bare_nl(nl) in {"als", "nadat", "tijdens", "over", "zonder"}:
        return "preposition"
    if pos == "adjective":
        return "adjective"
    return "other"


def load_exam_sentences():
    readings = json.loads(READINGS.read_text(encoding="utf-8"))
    out = []
    for article in readings:
        for sentence in article.get("sentences", []):
            out.append({
                "les": article.get("les"),
                "title": article.get("title"),
                "nl": sentence.get("nl", ""),
                "en": sentence.get("en", ""),
            })
    return out


def term_patterns(nl):
    raw = bare_nl(nl)
    terms = [raw]
    if raw.endswith("en") and " " not in raw:
        terms.append(stem_verb(raw))
    words = WORD_RE.findall(raw)
    terms.extend(w for w in words if len(w) > 3)
    return sorted(set(t for t in terms if t), key=len, reverse=True)


def find_example(nl, sentences):
    for term in term_patterns(nl):
        pat = re.compile(rf"(?<![A-Za-zÀ-ÿ']){re.escape(term)}(?![A-Za-zÀ-ÿ'])", re.I)
        for sentence in sentences:
            if pat.search(sentence["nl"]):
                return {
                    "nl": sentence["nl"],
                    "en": sentence["en"],
                    "source": sentence["title"],
                    "les": sentence["les"],
                }
    return None


def build_words(rows):
    sentences = load_exam_sentences()
    lesson_size = math.ceil(len(rows) / 30)
    words = []
    audit = []
    for i, (nl, original_en) in enumerate(rows):
        en = TRANSLATION_FIXES.get(nl, original_en)
        if en != original_en or nl in AUDIT_NOTES:
            audit.append((nl, original_en, en, AUDIT_NOTES.get(nl, "")))
        pos = pos_for(nl, en)
        lesson = min(30, i // lesson_size + 1)
        grammar = None
        if pos == "noun":
            grammar = {"kind": "noun", "forms": plural_for(nl)}
        elif pos == "verb":
            grammar = {"kind": "verb", "forms": verb_forms(nl)}
        example = find_example(nl, sentences)
        examples = {}
        exam_examples = {}
        article_les = []
        if example:
            examples = {"a1": {"nl": example["nl"], "en": example["en"]}}
            exam_examples = dict(examples)
            article_les = [example["les"]]
        words.append({
            "nl": nl,
            "en": en,
            "ipa": "",
            "pos": pos,
            "category": category_for(pos, nl),
            "les": lesson,
            "articleLes": article_les,
            "examples": examples,
            "examExamples": exam_examples,
            "beginnerExamples": examples,
            "grammar": grammar,
            "deck": "common",
            "source": "Quizlet reading/listening exam vocabulary",
            "_sourceIndex": i,
        })
    return words, audit


def write_audit(rows, words, audit):
    matched = sum(1 for w in words if w["examples"])
    counts = {}
    for w in words:
        counts[w["pos"]] = counts.get(w["pos"], 0) + 1
    lines = [
        "# Translation audit",
        "",
        f"- Source rows: {len(rows)}",
        f"- Deck lessons: 30",
        f"- Words with mock-exam examples: {matched}",
        f"- POS counts: " + ", ".join(f"{k} {v}" for k, v in sorted(counts.items())),
        "",
        "## Corrections / notes",
        "",
    ]
    for nl, original, revised, note in audit:
        lines.append(f"- **{nl}**: `{original}` -> `{revised}`" + (f" — {note}" if note else ""))
    AUDIT_OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main():
    rows = read_docx_rows(DOCX)
    words, audit = build_words(rows)
    WORDS_OUT.write_text(json.dumps(words, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_audit(rows, words, audit)
    print(f"Wrote {len(words)} words to {WORDS_OUT}")
    print(f"Wrote audit to {AUDIT_OUT}")


if __name__ == "__main__":
    main()
