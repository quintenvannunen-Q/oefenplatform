const SPEAKER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>';

const store = {
  get(k, d) { try { const v = localStorage.getItem("kfc_" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("kfc_" + k, JSON.stringify(v)); } catch (e) { } }
};

const $ = id => document.getElementById(id);
let settings = store.get("settings", { decks: DECKS.map(d => d.id), dir: "ko", mode: "flip" });
let queue = [], total = 0, correct = 0, seen = 0, missed = new Map(), current = null, flipped = false, answered = false, lastSet = [];

/* ---------- setup ---------- */
function renderDecks() {
  $("decks").innerHTML = DECKS.map(d => `
    <label class="deck">
      <input type="checkbox" value="${d.id}" ${settings.decks.includes(d.id) ? "checked" : ""}>
      <span class="name">${d.name}</span>
      <span class="sample">${d.words.slice(0, 2).map(w => w[0]).join(" · ")}</span>
      <span class="count">${d.words.length}</span>
    </label>`).join("");
  $("decks").querySelectorAll("input").forEach(cb => cb.addEventListener("change", readDecks));
  updateStart();
}
function readDecks() {
  settings.decks = [...$("decks").querySelectorAll("input:checked")].map(i => i.value);
  store.set("settings", settings); updateStart();
}
function updateStart() {
  const n = DECKS.filter(d => settings.decks.includes(d.id)).reduce((s, d) => s + d.words.length, 0);
  $("startBtn").disabled = n === 0;
  $("startBtn").textContent = n ? `Start · ${n} cards` : "Pick at least one deck";
}
function setupSeg(segId, key) {
  const seg = $(segId);
  seg.querySelectorAll("button").forEach(b => {
    b.classList.toggle("on", b.dataset.v === settings[key]);
    b.onclick = () => {
      settings[key] = b.dataset.v; store.set("settings", settings);
      seg.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    };
  });
}
$("allBtn").onclick = () => { settings.decks = DECKS.map(d => d.id); store.set("settings", settings); renderDecks(); };
$("noneBtn").onclick = () => { settings.decks = []; store.set("settings", settings); renderDecks(); };

/* ---------- study ---------- */
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; }
function show(id) { ["setup", "study", "done"].forEach(s => $(s).hidden = s !== id); $("homeBtn").hidden = id === "setup"; }

function start(cards) {
  lastSet = cards;
  queue = shuffle(cards.map(c => ({ ...c, front: settings.dir === "mix" ? (Math.random() < .5 ? "ko" : "en") : settings.dir })));
  total = queue.length; correct = 0; seen = 0; missed = new Map();
  $("flipControls").hidden = settings.mode !== "flip";
  $("typeControls").hidden = settings.mode !== "type";
  show("study"); next();
}
function startFromDecks() {
  const cards = [];
  DECKS.filter(d => settings.decks.includes(d.id)).forEach(d => d.words.forEach(([ko, en]) => cards.push({ ko, en, deck: d.name })));
  start(cards);
}

function next() {
  if (!queue.length) return finish();
  current = queue[0]; flipped = false; answered = false;
  const card = $("card");
  card.style.transition = "none"; card.classList.remove("flipped"); void card.offsetWidth; card.style.transition = "";
  const koFirst = current.front === "ko";
  $("frontText").innerHTML = koFirst ? `<div class="ko">${current.ko}</div>` : `<div class="en">${current.en}</div>`;
  $("backText").innerHTML = koFirst ? `<div class="en">${current.en}</div>` : `<div class="ko">${current.ko}</div>`;
  $("backSub").innerHTML = koFirst ? `<span class="k">${current.ko}</span>` : current.en;
  $("frontTag").textContent = $("backTag").textContent = current.deck;
  $("speakF").hidden = !koFirst;  // only offer audio on the Korean side up front
  $("frontHint").textContent = settings.mode === "flip" ? "tap to flip" : "";
  $("answers").classList.add("hidden");
  $("typeNext").classList.add("hidden");
  $("verdict").textContent = ""; $("verdict").className = "verdict";
  $("typeInput").value = ""; $("typeInput").disabled = false; $("checkBtn").disabled = false;
  $("typeInput").placeholder = koFirst ? "Type the English meaning…" : "Type it in Korean (한글)…";
  if (settings.mode === "type") setTimeout(() => $("typeInput").focus(), 50);
  updateStats();
}
function updateStats() {
  $("bar").style.width = (total ? (total - queue.length) / total * 100 : 0) + "%";
  $("left").textContent = `${queue.length} left`;
  $("score").textContent = seen ? `${correct}/${seen} first try` : "";
}
function flip() {
  if (settings.mode === "type" && !answered) return;
  flipped = !flipped; $("card").classList.toggle("flipped", flipped);
  if (flipped && settings.mode === "flip") $("answers").classList.remove("hidden");
}
function grade(ok) {
  const c = queue.shift();
  const key = c.ko + "|" + c.en;
  if (!c.retry) { seen++; if (ok) correct++; }
  if (!ok) {
    missed.set(key, { ko: c.ko, en: c.en, deck: c.deck });
    // put it back a few cards later so you see it again this round
    const pos = Math.min(queue.length, 3 + (Math.random() * 3 | 0));
    queue.splice(pos, 0, { ...c, retry: true });
  }
  next();
}

/* type-answer checking */
function norm(s) { return s.toLowerCase().replace(/\(.*?\)/g, "").replace(/^(to be |to |a |an |the )/, "").replace(/[^a-z가-힣ㄱ-ㆎ]/g, ""); }
function check(e) {
  e.preventDefault(); if (answered) return;
  const guess = $("typeInput").value.trim(); if (!guess) return;
  const koFirst = current.front === "ko";
  const target = koFirst ? current.en : current.ko;
  const options = target.split(/[\/,]/).map(norm);
  const ok = options.includes(norm(guess)) || (koFirst && norm(target).length > 3 && norm(target).includes(norm(guess)) && norm(guess).length >= norm(target).length - 2);
  answered = true; $("typeInput").disabled = true; $("checkBtn").disabled = true;
  $("verdict").textContent = ok ? "Correct!" : `Not quite — it's “${target}”`;
  $("verdict").className = "verdict " + (ok ? "ok" : "no");
  flipped = true; $("card").classList.add("flipped");
  if (!koFirst || ok) speak(current.ko);
  $("typeNext").classList.remove("hidden");
  $("tGot").textContent = ok ? "Next →" : "I was right";
  $("tAgain").textContent = ok ? "Count as wrong" : "Next →";
  $("tGot").onclick = () => grade(true);
  $("tAgain").onclick = () => grade(false);
  $("tGot").dataset.default = ok ? "1" : "0";
}

function finish() {
  show("done");
  const pct = seen ? Math.round(correct / seen * 100) : 0;
  $("doneText").textContent = `${correct} of ${seen} right on the first try (${pct}%).`;
  const m = [...missed.values()];
  $("missList").hidden = $("missBtn").hidden = !m.length;
  $("missList").innerHTML = m.map(w => `<div><span class="k">${w.ko}</span><span>${w.en}</span></div>`).join("");
  $("missBtn").onclick = () => start(m);
  const hist = store.get("history", []); hist.push({ t: Date.now(), c: correct, n: seen }); store.set("history", hist.slice(-50));
}

/* pronunciation */
let koVoice = null;
function loadVoices() { try { koVoice = speechSynthesis.getVoices().find(v => /^ko/i.test(v.lang)) || null; } catch (e) { } }
try { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; } catch (e) { }
function speak(text) {
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = "ko-KR"; u.rate = .85; if (koVoice) u.voice = koVoice;
    speechSynthesis.speak(u);
  } catch (e) { }
}
["speakF", "speakB"].forEach(id => { $(id).innerHTML = SPEAKER; $(id).onclick = e => { e.stopPropagation(); speak(current.ko); }; });

/* events */
$("card").onclick = flip;
$("againBtn").onclick = e => { e.stopPropagation(); grade(false); };
$("gotBtn").onclick = e => { e.stopPropagation(); grade(true); };
$("typeForm").onsubmit = check;
$("startBtn").onclick = startFromDecks;
$("restartBtn").onclick = () => start(lastSet);
$("backBtn").onclick = $("homeBtn").onclick = () => { show("setup"); renderDecks(); };
document.addEventListener("keydown", e => {
  if ($("study").hidden) return;
  if (settings.mode === "flip") {
    if (e.code === "Space" || e.key === "Enter") { e.preventDefault(); flip(); }
    else if (flipped && (e.key === "ArrowRight" || e.key === "2")) grade(true);
    else if (flipped && (e.key === "ArrowLeft" || e.key === "1")) grade(false);
  } else if (answered && e.key === "Enter") { e.preventDefault(); grade($("tGot").dataset.default === "1"); }
});

setupSeg("dirSeg", "dir"); setupSeg("modeSeg", "mode"); renderDecks(); show("setup");
