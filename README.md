# Examen Woorden

Small static React app for studying Dutch reading/listening exam vocabulary.

- Vocabulary source: `/Users/liceline/Desktop/荷兰融入考试阅读/荷兰语阅读听力考点词 QUIZLET整理.docx`
- Generated deck: `words.json`
- Translation review notes: `translation-audit.md`
- Mock-exam sentence examples: `readings.json`

Rebuild the word deck after editing the Word file:

```bash
python3 tools/build_quizlet_vocab.py
```

The app is static and can be deployed from the repo root on Netlify, GitHub Pages, or any static host.
