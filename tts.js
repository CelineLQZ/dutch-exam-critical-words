// Tiny Dutch TTS helper around Web Speech API.
(function() {
  const synth = window.speechSynthesis;
  let dutchVoice = null;

  function pickVoice() {
    if (!synth) return;
    const voices = synth.getVoices();
    if (!voices.length) return;
    dutchVoice =
      voices.find(v => v.lang === 'nl-NL') ||
      voices.find(v => v.lang && v.lang.toLowerCase().startsWith('nl')) ||
      voices.find(v => /dutch|nederlands/i.test(v.name)) ||
      null;
  }

  if (synth) {
    pickVoice();
    synth.addEventListener?.('voiceschanged', pickVoice);
    setTimeout(pickVoice, 250);
    setTimeout(pickVoice, 1000);
  }

  window.dutchTTS = {
    speak(text, opts = {}) {
      if (!synth || !text) return false;
      try {
        synth.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'nl-NL';
        if (dutchVoice) u.voice = dutchVoice;
        u.rate = opts.rate ?? 0.92;
        u.pitch = opts.pitch ?? 1;
        synth.speak(u);
        return true;
      } catch (e) { return false; }
    },
    isAvailable() { return !!synth; }
  };
})();
