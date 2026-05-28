/* =============================================
   DUTCH VOCABULARY APP
   Modes: learn / review / test
   Swipe right = mastered, left = not yet
   ============================================= */

// ---- STATE ----
let allWords = [];
let queue = [];
let currentIndex = 0;
let currentMode = 'learn';
let currentLevel = 'beginner';
let currentLesson = 'all';
let currentUser = '';
let shuffleMode = true;
let sessionCorrect = 0;
let sessionWrong = 0;
let isDragging = false;
let startX = 0, startY = 0, currentX = 0;
let autoPlayTimer = null;
let grammarOpen = false;

const KEY_USER = 'nl_user';

// Per-user localStorage key helper
function uk(base) { return `${base}_${currentUser}`; }

// ---- TTS ----
const synth = window.speechSynthesis;
let nlVoice = null;

function initVoices() {
  const load = () => {
    const voices = synth.getVoices();
    nlVoice = voices.find(v => v.lang.startsWith('nl')) || null;
  };
  load();
  synth.onvoiceschanged = load;
}

function speak(text, onEnd) {
  synth.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'nl-NL';
  utt.rate = 0.88;
  utt.pitch = 1;
  if (nlVoice) utt.voice = nlVoice;
  if (onEnd) utt.onend = onEnd;
  synth.speak(utt);
  return utt;
}

function speakWord() {
  const word = queue[currentIndex];
  if (!word) return;
  const btn = document.getElementById('word-speaker');
  btn.classList.add('speaking');
  speak(word.dutch, () => btn.classList.remove('speaking'));
}

function speakSentence() {
  const word = queue[currentIndex];
  if (!word) return;
  const s = word.sentences?.[currentLevel];
  if (!s) return;
  const btn = document.getElementById('sentence-speaker');
  btn.classList.add('speaking');
  speak(s.dutch, () => btn.classList.remove('speaking'));
}

// ---- STORAGE ----
function getMastered() {
  return new Set(JSON.parse(localStorage.getItem(uk('nl_mastered')) || '[]'));
}
function getReview() {
  return new Set(JSON.parse(localStorage.getItem(uk('nl_review')) || '[]'));
}
function saveMastered(set) {
  localStorage.setItem(uk('nl_mastered'), JSON.stringify([...set]));
}
function saveReview(set) {
  localStorage.setItem(uk('nl_review'), JSON.stringify([...set]));
}

function saveSession() {
  if (currentIndex <= 0 || currentIndex >= queue.length) {
    localStorage.removeItem(uk('nl_session'));
    return;
  }
  localStorage.setItem(uk('nl_session'), JSON.stringify({
    mode: currentMode,
    lesson: currentLesson,
    level: currentLevel,
    queueIds: queue.map(w => w.id),
    index: currentIndex
  }));
}

function loadSession() {
  try {
    return JSON.parse(localStorage.getItem(uk('nl_session')));
  } catch (e) { return null; }
}

function clearSession() {
  localStorage.removeItem(uk('nl_session'));
}

// ---- USER ----
function initUser() {
  currentUser = localStorage.getItem(KEY_USER) || '';
  if (!currentUser) {
    showScreen('user');
    // Focus input after transition
    setTimeout(() => document.getElementById('user-input')?.focus(), 100);
  } else {
    finishInit();
    showScreen('home');
  }
}

function registerUser() {
  const inp = document.getElementById('user-input');
  const raw = inp.value.trim();
  // Allow letters, digits, underscores, hyphens, CJK characters
  const name = raw.replace(/[^\w\-一-鿿぀-ゟ゠-ヿ]/g, '').slice(0, 20);
  if (!name) {
    inp.classList.add('shake');
    setTimeout(() => inp.classList.remove('shake'), 500);
    inp.focus();
    return;
  }
  currentUser = name;
  localStorage.setItem(KEY_USER, name);
  finishInit();
  showScreen('home');
}

function finishInit() {
  currentLevel  = localStorage.getItem(uk('nl_level'))  || 'beginner';
  currentLesson = localStorage.getItem(uk('nl_lesson')) || 'all';
  shuffleMode   = localStorage.getItem('nl_shuffle') !== 'sequential';

  document.querySelectorAll('.level-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.level === currentLevel);
  });
  document.querySelectorAll('.order-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.order === (shuffleMode ? 'random' : 'sequential'));
  });
  document.getElementById('home-username').textContent = currentUser;

  buildLessonButtons();
  updateHomeStats();
  checkResumeHint();
}

function switchUser() {
  if (!confirm('Van gebruiker wisselen? Je voortgang blijft bewaard onder je naam.')) return;
  localStorage.removeItem(KEY_USER);
  currentUser = '';
  document.getElementById('user-input').value = '';
  showScreen('user');
  setTimeout(() => document.getElementById('user-input')?.focus(), 100);
}

// ---- RESUME HINT ----
function checkResumeHint() {
  const s = loadSession();
  const hint = document.getElementById('resume-hint');
  if (s && s.index > 0 && s.queueIds && s.index < s.queueIds.length) {
    hint.style.display = 'flex';
    const modeLabel = { learn: '📖 Leren', review: '🔄 Herhalen', test: '✏️ Testen' }[s.mode] || s.mode;
    const lessonLabel = s.lesson === 'all' ? 'Alle woorden' : `Les ${s.lesson}`;
    document.getElementById('resume-hint-text').textContent =
      `${modeLabel} · ${lessonLabel} · woord ${s.index} / ${s.queueIds.length}`;
  } else {
    hint.style.display = 'none';
  }
}

function resumeSession() {
  const s = loadSession();
  if (!s || !s.queueIds) return;

  currentMode   = s.mode;
  currentLesson = s.lesson;
  currentLevel  = s.level || currentLevel;
  sessionCorrect = 0;
  sessionWrong   = 0;
  synth.cancel();

  const idMap = Object.fromEntries(allWords.map(w => [w.id, w]));
  queue = s.queueIds.map(id => idMap[id]).filter(Boolean);
  currentIndex = s.index;

  const labels = { learn: 'Leren 📖', review: 'Herhalen 🔄', test: 'Testen ✏️' };
  document.getElementById('mode-label').textContent  = labels[currentMode] || currentMode;
  document.getElementById('header-level').textContent = currentLevel;

  showScreen('card');
  renderCard();
}

// ---- HOME ----
function updateHomeStats() {
  const mastered = getMastered();
  const review   = getReview();
  document.getElementById('stat-total').textContent    = allWords.length;
  document.getElementById('stat-mastered').textContent = mastered.size;
  document.getElementById('stat-review').textContent   = review.size;
}

function buildLessonButtons() {
  const lessons = [...new Set(allWords.map(w => w.lesson))].sort((a, b) => a - b);
  const container = document.getElementById('lesson-buttons');
  container.innerHTML = '';
  lessons.forEach(l => {
    const btn = document.createElement('button');
    btn.className = 'lesson-btn' + (currentLesson === String(l) ? ' active' : '');
    btn.dataset.lesson = l;
    btn.textContent = `Les ${l}`;
    btn.onclick = () => setLesson(String(l));
    container.appendChild(btn);
  });
}

function setLevel(lvl) {
  currentLevel = lvl;
  localStorage.setItem(uk('nl_level'), lvl);
  document.querySelectorAll('.level-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.level === lvl);
  });
}

function setOrder(val) {
  shuffleMode = (val === 'random');
  localStorage.setItem('nl_shuffle', val);
  document.querySelectorAll('.order-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.order === val);
  });
}

function setLesson(val) {
  currentLesson = val;
  localStorage.setItem(uk('nl_lesson'), val);
  document.querySelectorAll('.lesson-btn, #lesson-buttons .lesson-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lesson === val);
  });
}

function goHome() {
  synth.cancel();
  clearTimeout(autoPlayTimer);
  // Save session if mid-way through
  if (currentIndex > 0 && currentIndex < queue.length) {
    saveSession();
  } else {
    clearSession();
  }
  showScreen('home');
  updateHomeStats();
  checkResumeHint();
}

// ---- MODES ----
function startMode(mode) {
  currentMode = mode;
  sessionCorrect = 0;
  sessionWrong   = 0;
  synth.cancel();

  let pool = allWords;
  if (currentLesson !== 'all') {
    pool = pool.filter(w => String(w.lesson) === currentLesson);
  }

  if (mode === 'review') {
    const review = getReview();
    pool = pool.filter(w => review.has(w.id));
    if (pool.length === 0) {
      alert('Geen woorden om te herhalen! Swipe eerst woorden naar links tijdens het leren.');
      return;
    }
  }

  if (shuffleMode || mode === 'review') {
    queue = shuffle([...pool]);
  } else {
    // Sequential: sort by lesson number then original word id
    queue = [...pool].sort((a, b) => a.lesson - b.lesson || a.id - b.id);
  }
  currentIndex = 0;
  clearSession();

  const labels = { learn: 'Leren 📖', review: 'Herhalen 🔄', test: 'Testen ✏️' };
  document.getElementById('mode-label').textContent  = labels[mode];
  document.getElementById('header-level').textContent = currentLevel;

  showScreen('card');
  renderCard();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---- CARD RENDERING ----
function renderCard() {
  if (currentIndex >= queue.length) {
    clearSession();
    showDone();
    return;
  }

  const word = queue[currentIndex];
  const card = document.getElementById('main-card');

  card.style.transform = '';
  card.style.transition = '';
  card.className = 'card';

  document.getElementById('word-lesson').textContent = `Les ${word.lesson}`;
  document.getElementById('dutch-word').textContent  = word.dutch;

  const engEl = document.getElementById('english-meaning');
  engEl.textContent = word.english;
  engEl.classList.toggle('hidden', currentMode === 'test');

  const s = word.sentences?.[currentLevel];
  document.getElementById('sentence-nl').textContent = s?.dutch  || '—';
  document.getElementById('sentence-en').textContent = s?.english || '';

  const total = queue.length;
  document.getElementById('progress-text').textContent = `${currentIndex + 1} / ${total}`;
  document.getElementById('progress-bar').style.width  = `${(currentIndex / total) * 100}%`;

  // Grammar
  grammarOpen = false;
  renderGrammar(word);

  clearTimeout(autoPlayTimer);
  autoPlayTimer = setTimeout(() => speakWord(), 350);
}

// ---- GRAMMAR ----
function renderGrammar(word) {
  const g = word.grammar;
  const toggleBtn = document.getElementById('grammar-toggle');
  const panel     = document.getElementById('grammar-panel');

  const hasVerb = g && g.type === 'verb' && g.conjugation;
  const hasNoun = g && g.type === 'noun' && g.plural;

  if ((!hasVerb && !hasNoun) || currentMode === 'test') {
    toggleBtn.style.display = 'none';
    panel.style.display = 'none';
    return;
  }

  toggleBtn.style.display = 'flex';
  panel.style.display = 'none';
  panel.innerHTML = '';
  toggleBtn.querySelector('.toggle-arrow').textContent = '▾';

  const sp = (text) => {
    if (!text || text === '–') return '';
    const safe = text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    return `<button class="gram-speak" data-text="${safe}" onclick="speak(this.dataset.text)" title="Uitspreken">🔊</button>`;
  };

  if (hasVerb) {
    const c = g.conjugation;
    panel.innerHTML = `
      <div class="grammar-section-title">Tegenwoordige tijd</div>
      <table class="conj-table">
        <tr><td class="pronoun">ik</td><td>${c.present?.ik || '–'} ${sp(c.present?.ik)}</td></tr>
        <tr><td class="pronoun">jij / u</td><td>${c.present?.jij || '–'} ${sp(c.present?.jij)}</td></tr>
        <tr><td class="pronoun">hij / zij / het</td><td>${c.present?.['hij/zij/het'] || '–'} ${sp(c.present?.['hij/zij/het'])}</td></tr>
        <tr><td class="pronoun">wij / jullie / zij</td><td>${c.present?.['wij/jullie/zij'] || '–'} ${sp(c.present?.['wij/jullie/zij'])}</td></tr>
      </table>
      <div class="grammar-section-title">Verleden tijd</div>
      <table class="conj-table">
        <tr><td class="pronoun">ik / jij / hij</td><td>${c.past?.['ik/jij/hij'] || '–'} ${sp(c.past?.['ik/jij/hij'])}</td></tr>
        <tr><td class="pronoun">wij / jullie / zij</td><td>${c.past?.['wij/jullie/zij'] || '–'} ${sp(c.past?.['wij/jullie/zij'])}</td></tr>
      </table>
      <div class="grammar-row">
        <span class="grammar-label">Voltooid deelwoord</span>
        <span class="grammar-value">${c.aux || 'hebben'} <strong>${c.pp || '–'}</strong> ${sp(c.pp ? `${c.aux || 'hebben'} ${c.pp}` : null)}</span>
      </div>`;
  } else if (hasNoun) {
    const art   = g.article        || 'de';
    const plArt = g.plural_article || 'de';
    const sg    = g.singular       || word.dutch.replace(/^(de|het)\s+/i, '');
    panel.innerHTML = `
      <div class="grammar-row" style="border-top:none;padding-top:0">
        <span class="grammar-label">Enkelvoud</span>
        <span class="grammar-value"><em>${art}</em> <strong>${sg}</strong> ${sp(`${art} ${sg}`)}</span>
      </div>
      <div class="grammar-row">
        <span class="grammar-label">Meervoud</span>
        <span class="grammar-value"><em>${plArt}</em> <strong>${g.plural}</strong> ${sp(`${plArt} ${g.plural}`)}</span>
      </div>`;
  }
}

function toggleGrammar() {
  const panel = document.getElementById('grammar-panel');
  const arrow = document.getElementById('grammar-toggle').querySelector('.toggle-arrow');
  grammarOpen = !grammarOpen;
  panel.style.display = grammarOpen ? 'block' : 'none';
  arrow.textContent   = grammarOpen ? '▴' : '▾';
}

// ---- SWIPE LOGIC ----
function swipeRight() { animateCard('right'); }
function swipeLeft()  { animateCard('left');  }

function animateCard(dir) {
  const card = document.getElementById('main-card');
  synth.cancel();
  clearTimeout(autoPlayTimer);

  // Close grammar panel
  if (grammarOpen) {
    document.getElementById('grammar-panel').style.display = 'none';
    grammarOpen = false;
  }

  card.style.transition = 'none';
  card.classList.add(dir === 'right' ? 'fly-right' : 'fly-left');

  const word     = queue[currentIndex];
  const mastered = getMastered();
  const review   = getReview();

  if (dir === 'right') {
    mastered.add(word.id);
    review.delete(word.id);
    sessionCorrect++;
  } else {
    review.add(word.id);
    mastered.delete(word.id);
    sessionWrong++;
  }
  saveMastered(mastered);
  saveReview(review);

  setTimeout(() => {
    currentIndex++;
    // Autosave every 10 cards
    if (currentIndex > 0 && currentIndex < queue.length && currentIndex % 10 === 0) {
      saveSession();
    }
    renderCard();
  }, 360);
}

// ---- TOUCH / MOUSE SWIPE ----
function initSwipe() {
  const area = document.getElementById('card-area');
  area.addEventListener('pointerdown',   onDragStart, { passive: false });
  area.addEventListener('pointermove',   onDragMove,  { passive: false });
  area.addEventListener('pointerup',     onDragEnd,   { passive: false });
  area.addEventListener('pointercancel', onDragEnd,   { passive: false });
}

function onDragStart(e) {
  if (!e.target.closest('.card')) return;
  if (e.target.closest('.speaker-btn')) return;
  if (e.target.closest('.grammar-toggle')) return;
  e.preventDefault();
  isDragging = true;
  startX  = e.clientX;
  startY  = e.clientY;
  currentX = 0;
  const card = document.getElementById('main-card');
  card.style.transition = 'none';
  card.setPointerCapture(e.pointerId);
}

function onDragMove(e) {
  if (!isDragging) return;
  e.preventDefault();
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  currentX = dx;

  if (Math.abs(dy) > Math.abs(dx) * 1.8) return;

  const card = document.getElementById('main-card');
  const rotate = dx * 0.04;
  card.style.transform = `translateX(${dx}px) rotate(${rotate}deg)`;

  card.classList.remove('swiping-left', 'swiping-right');
  if (dx > 30)  card.classList.add('swiping-right');
  if (dx < -30) card.classList.add('swiping-left');
}

function onDragEnd(e) {
  if (!isDragging) return;
  isDragging = false;

  const card = document.getElementById('main-card');
  const threshold = window.innerWidth * 0.28;

  if (currentX > threshold) {
    swipeRight();
  } else if (currentX < -threshold) {
    swipeLeft();
  } else {
    card.style.transition = 'transform 0.3s cubic-bezier(.2,.8,.3,1)';
    card.style.transform  = '';
    card.classList.remove('swiping-left', 'swiping-right');
  }
}

// ---- DONE SCREEN ----
function showDone() {
  document.getElementById('done-correct').textContent = sessionCorrect;
  document.getElementById('done-wrong').textContent   = sessionWrong;

  const total = queue.length;
  const pct   = total > 0 ? Math.round((sessionCorrect / total) * 100) : 0;
  document.getElementById('done-title').textContent =
    pct >= 80 ? 'Uitstekend! 🎉' : pct >= 50 ? 'Goed gedaan! 👍' : 'Blijf oefenen! 💪';
  document.getElementById('done-msg').textContent =
    `Je hebt ${sessionCorrect} van de ${total} woorden correct beantwoord (${pct}%).`;

  document.getElementById('repeat-btn').disabled = sessionWrong === 0;
  showScreen('done');
}

function repeatWrong() {
  startMode('review');
}

// ---- RESET ----
function confirmReset() {
  if (confirm('Weet je zeker dat je alle voortgang wilt wissen?')) {
    localStorage.removeItem(uk('nl_mastered'));
    localStorage.removeItem(uk('nl_review'));
    localStorage.removeItem(uk('nl_session'));
    updateHomeStats();
    checkResumeHint();
  }
}

// ---- SCREEN NAV ----
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.add('active');
}

// ---- INIT ----
async function init() {
  initVoices();

  try {
    const res = await fetch('words.json');
    allWords  = await res.json();
  } catch (e) {
    document.body.innerHTML =
      '<p style="color:#fff;padding:40px;text-align:center">Fout: words.json niet gevonden.</p>';
    return;
  }

  initSwipe();
  initUser();
}

document.addEventListener('DOMContentLoaded', init);
