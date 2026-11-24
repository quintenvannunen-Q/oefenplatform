// Multiple-choice quiz. Reads its questions from VCA_CHAPTERS (data/vca-questions.js).
const $ = id => document.getElementById(id);

const store = {
    get(k, d) { try { const v = localStorage.getItem("vca_" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("vca_" + k, JSON.stringify(v)); } catch (e) { } }
};

let settings = store.get("settings", { chapters: VCA_CHAPTERS.map(c => c.nr), count: "all" });
let questions = [], index = 0, correct = 0, missed = [], answered = false, lastSet = [];

/* ---------- helpers ---------- */
function shuffle(a) { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; }
function show(id) { ["setup", "quiz", "result"].forEach(s => $(s).hidden = s !== id); $("homeBtn").hidden = id === "setup"; }
function esc(s) { return s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])); }

/* ---------- setup ---------- */
function renderChapters() {
    $("chapters").innerHTML = VCA_CHAPTERS.map(c => `
    <label class="chapter">
      <input type="checkbox" value="${c.nr}" ${settings.chapters.includes(c.nr) ? "checked" : ""}>
      <span class="nr">${c.nr}</span>
      <span class="name">${c.title}</span>
      <span class="count">${c.questions.length}</span>
    </label>`).join("");
    $("chapters").querySelectorAll("input").forEach(cb => cb.addEventListener("change", () => {
        settings.chapters = [...$("chapters").querySelectorAll("input:checked")].map(i => +i.value);
        save();
    }));
    updateStart();
}
function save() { store.set("settings", settings); updateStart(); }
function pool() {
    const list = [];
    VCA_CHAPTERS.filter(c => settings.chapters.includes(c.nr))
        .forEach(c => c.questions.forEach(q => list.push({ ...q, chapter: c.nr, chapterTitle: c.title })));
    return list;
}
function updateStart() {
    const n = pool().length;
    const take = settings.count === "all" ? n : Math.min(n, +settings.count);
    $("startBtn").disabled = n === 0;
    $("startBtn").textContent = n ? `Start · ${take} vragen` : "Kies minstens één hoofdstuk";
}
$("countSeg").querySelectorAll("button").forEach(b => {
    b.classList.toggle("on", b.dataset.v === settings.count);
    b.onclick = () => {
        settings.count = b.dataset.v;
        $("countSeg").querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
        save();
    };
});
$("allBtn").onclick = () => { settings.chapters = VCA_CHAPTERS.map(c => c.nr); save(); renderChapters(); };
$("noneBtn").onclick = () => { settings.chapters = []; save(); renderChapters(); };

/* ---------- quiz ---------- */
function start(list) {
    lastSet = list;
    questions = shuffle(list).map(q => ({ ...q, options: shuffle([q.a, ...q.wrong]) }));
    index = 0; correct = 0; missed = [];
    show("quiz"); render();
}
function startFromSetup() {
    let list = shuffle(pool());
    if (settings.count !== "all") list = list.slice(0, +settings.count);
    start(list);
}

function render() {
    const q = questions[index];
    answered = false;
    $("bar").style.width = (index / questions.length * 100) + "%";
    $("counter").textContent = `Vraag ${index + 1} van ${questions.length}`;
    $("score").textContent = index ? `${correct}/${index} juist` : "";
    $("chapterTag").textContent = `Hoofdstuk ${q.chapter} · ${q.chapterTitle}`;
    $("questionText").textContent = q.q;
    $("options").innerHTML = q.options.map((o, i) => `
    <li><button class="option" data-i="${i}"><span class="key">${i + 1}</span><span>${esc(o)}</span></button></li>`).join("");
    $("options").querySelectorAll(".option").forEach(b => b.onclick = () => choose(+b.dataset.i));
    $("feedback").hidden = true;
    window.scrollTo({ top: 0 });
}

function choose(i) {
    if (answered) return;
    answered = true;
    const q = questions[index];
    const ok = q.options[i] === q.a;
    if (ok) correct++; else missed.push(q);
    $("options").querySelectorAll(".option").forEach((b, j) => {
        b.disabled = true;
        if (q.options[j] === q.a) b.classList.add("correct");
        else if (j === i) b.classList.add("wrong");
        else b.classList.add("dim");
    });
    $("verdict").textContent = ok ? "Juist!" : "Fout";
    $("verdict").className = "verdict " + (ok ? "ok" : "no");
    $("why").textContent = q.why;
    $("feedback").hidden = false;
    $("nextBtn").textContent = index + 1 < questions.length ? "Volgende →" : "Resultaat bekijken";
    $("feedback").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function next() {
    index++;
    if (index < questions.length) render(); else finish();
}

function finish() {
    show("result");
    const pct = Math.round(correct / questions.length * 100);
    $("pct").textContent = pct + "%";
    $("resultText").textContent = `${correct} van de ${questions.length} vragen juist.` +
        (pct >= 70 ? " Goed bezig!" : " Blijf oefenen, bekijk vooral de foute vragen hieronder.");
    $("missList").hidden = $("missBtn").hidden = !missed.length;
    $("missList").innerHTML = missed.map(q => `<div><strong>${esc(q.q)}</strong><span>${esc(q.a)}</span></div>`).join("");
    $("missBtn").onclick = () => start(missed.map(({ options, ...q }) => q));
}

/* ---------- events ---------- */
$("startBtn").onclick = startFromSetup;
$("nextBtn").onclick = next;
$("restartBtn").onclick = () => start(lastSet);
$("backBtn").onclick = $("homeBtn").onclick = () => { show("setup"); renderChapters(); };
document.addEventListener("keydown", e => {
    if ($("quiz").hidden) return;
    if (!answered && ["1", "2", "3", "4"].includes(e.key)) choose(+e.key - 1);
    else if (answered && e.key === "Enter") { e.preventDefault(); next(); }
});

renderChapters(); show("setup");