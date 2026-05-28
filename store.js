// Per-user persistence helpers. Everything in localStorage.
// Schema:
//   dutchReading.users       → ['alice', 'bob']
//   dutchReading.activeUser  → 'alice'
//   dutchReading.u.<name>    → {
//     status: { [nl]: 'learned' | 'forgotten' },
//     session: { mode, words: [wordKey,...], cursor } | null,
//     prefs: { order: 'random'|'course', level: 'a0'|'a1'|'a2', les: 'all'|number }
//   }

(function() {
  const ROOT = 'dutchReading.';
  const safe = (k) => k.replace(/[^a-z0-9_-]/gi, '_');

  function load(k, fallback) {
    try {
      const raw = localStorage.getItem(k);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function save(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
  }
  function userKey(name) { return ROOT + 'u.' + safe(name); }

  const Store = {
    listUsers()       { return load(ROOT + 'users', []); },
    activeUser()      { return load(ROOT + 'activeUser', null); },
    setActiveUser(n)  { save(ROOT + 'activeUser', n); },
    addUser(name) {
      const users = Store.listUsers();
      if (!users.includes(name)) { users.push(name); save(ROOT + 'users', users); }
      if (!load(userKey(name), null)) {
        save(userKey(name), { status: {}, session: null, prefs: { order: 'random', level: 'a1', les: 'all' } });
      }
      Store.setActiveUser(name);
    },
    getUser(name) {
      if (!name) return null;
      return load(userKey(name), { status: {}, session: null, prefs: { order: 'random', level: 'a1', les: 'all' } });
    },
    saveUser(name, data) { if (name) save(userKey(name), data); },
    deleteUser(name) {
      const users = Store.listUsers().filter(u => u !== name);
      save(ROOT + 'users', users);
      try { localStorage.removeItem(userKey(name)); } catch (e) {}
      if (Store.activeUser() === name) Store.setActiveUser(users[0] || null);
    }
  };

  window.DutchStore = Store;
})();
