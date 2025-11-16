/* ======= QUESTIONS (20) — mix of A + B style =======
   Each question has 4 options mapped 0..3 (0 = best / 3 = worst)
   Options include emoji + short label
*/
const questions = [
  {
    q: "Over the last 2 weeks, how often have you felt little interest or pleasure in doing things?",
    opts: [
      { e: "😃", t: "Not at all", v: 0 },
      { e: "🙂", t: "Several days", v: 1 },
      { e: "😞", t: "More than half the days", v: 2 },
      { e: "😣", t: "Nearly every day", v: 3 },
    ],
  },
  {
    q: "How often have you felt down, depressed, or hopeless?",
    opts: [
      { e: "😃", t: "Not at all", v: 0 },
      { e: "🙂", t: "Several days", v: 1 },
      { e: "😞", t: "More than half the days", v: 2 },
      { e: "😣", t: "Nearly every day", v: 3 },
    ],
  },
  {
    q: "How often have you had trouble falling or staying asleep, or sleeping too much?",
    opts: [
      { e: "😴", t: "No problem", v: 0 },
      { e: "💤", t: "Occasionally", v: 1 },
      { e: "😩", t: "Often", v: 2 },
      { e: "🛌", t: "Nearly every day", v: 3 },
    ],
  },
  {
    q: "How often have you felt tired or had little energy?",
    opts: [
      { e: "⚡", t: "Not at all", v: 0 },
      { e: "🔋", t: "Sometimes", v: 1 },
      { e: "🔅", t: "Often", v: 2 },
      { e: "🪫", t: "Nearly every day", v: 3 },
    ],
  },
  {
    q: "How often have you had poor appetite or overeating?",
    opts: [
      { e: "🥗", t: "Not at all", v: 0 },
      { e: "🍽️", t: "Several days", v: 1 },
      { e: "🍔", t: "More than half the days", v: 2 },
      { e: "🍟", t: "Nearly every day", v: 3 },
    ],
  },
  {
    q: "Feeling nervous, anxious, or on edge?",
    opts: [
      { e: "😌", t: "Not at all", v: 0 },
      { e: "🙂", t: "Several days", v: 1 },
      { e: "😟", t: "More than half the days", v: 2 },
      { e: "😰", t: "Nearly every day", v: 3 },
    ],
  },
  {
    q: "Not being able to stop or control worrying?",
    opts: [
      { e: "😌", t: "Not at all", v: 0 },
      { e: "🤔", t: "Several days", v: 1 },
      { e: "😟", t: "More than half the days", v: 2 },
      { e: "😨", t: "Nearly every day", v: 3 },
    ],
  },
  {
    q: "How difficult have these problems made it to do your work, take care of things at home, or get along with others?",
    opts: [
      { e: "✅", t: "Not difficult", v: 0 },
      { e: "⚠️", t: "Somewhat difficult", v: 1 },
      { e: "❗", t: "Very difficult", v: 2 },
      { e: "🚨", t: "Extremely difficult", v: 3 },
    ],
  },
  {
    q: "How often have you felt overwhelmed by responsibilities?",
    opts: [
      { e: "🧘", t: "Rarely", v: 0 },
      { e: "🙂", t: "Sometimes", v: 1 },
      { e: "😓", t: "Often", v: 2 },
      { e: "😩", t: "Almost always", v: 3 },
    ],
  },
  {
    q: "How often do you find it hard to concentrate on tasks?",
    opts: [
      { e: "🎯", t: "No", v: 0 },
      { e: "🔎", t: "Sometimes", v: 1 },
      { e: "🌀", t: "Often", v: 2 },
      { e: "🚫", t: "Nearly always", v: 3 },
    ],
  },
  {
    q: "How often do you feel irritable or easily annoyed?",
    opts: [
      { e: "🙂", t: "Rarely", v: 0 },
      { e: "😐", t: "Sometimes", v: 1 },
      { e: "😤", t: "Often", v: 2 },
      { e: "🤬", t: "Nearly always", v: 3 },
    ],
  },
  {
    q: "How often have you felt lonely or isolated?",
    opts: [
      { e: "👥", t: "Never", v: 0 },
      { e: "🙂", t: "Occasionally", v: 1 },
      { e: "😕", t: "Often", v: 2 },
      { e: "😔", t: "Very often", v: 3 },
    ],
  },
  {
    q: "How often do worries interfere with your sleep or appetite?",
    opts: [
      { e: "🌙", t: "Not at all", v: 0 },
      { e: "🌗", t: "Sometimes", v: 1 },
      { e: "🌘", t: "Often", v: 2 },
      { e: "🌑", t: "Nearly always", v: 3 },
    ],
  },
  {
    q: "How often do you avoid social activities because of anxiety?",
    opts: [
      { e: "🙅‍♀️", t: "Never", v: 0 },
      { e: "🙂", t: "Sometimes", v: 1 },
      { e: "😟", t: "Often", v: 2 },
      { e: "🚫", t: "Almost always", v: 3 },
    ],
  },
  {
    q: "How often do you feel hopeless about the future?",
    opts: [
      { e: "🌤️", t: "Rarely", v: 0 },
      { e: "⛅", t: "Sometimes", v: 1 },
      { e: "🌧️", t: "Often", v: 2 },
      { e: "⛈️", t: "Nearly every day", v: 3 },
    ],
  },
  {
    q: "How often do you feel physical symptoms from stress (headaches, upset stomach)?",
    opts: [
      { e: "🙂", t: "Not at all", v: 0 },
      { e: "😕", t: "Sometimes", v: 1 },
      { e: "😣", t: "Often", v: 2 },
      { e: "🤕", t: "Nearly every day", v: 3 },
    ],
  },
  {
    q: "How often do you feel able to control your worrying?",
    opts: [
      { e: "✅", t: "Always", v: 0 },
      { e: "🔁", t: "Mostly", v: 1 },
      { e: "⚠️", t: "Sometimes", v: 2 },
      { e: "❌", t: "Never", v: 3 },
    ],
  },
  {
    q: "How often do you use unhealthy coping (excessive screen time, eating, alcohol) to feel better?",
    opts: [
      { e: "🚫", t: "Never", v: 0 },
      { e: "🙂", t: "Occasionally", v: 1 },
      { e: "⚠️", t: "Sometimes", v: 2 },
      { e: "🔥", t: "Often", v: 3 },
    ],
  },
  {
    q: "How connected do you feel to friends/family right now?",
    opts: [
      { e: "🤝", t: "Very connected", v: 0 },
      { e: "🙂", t: "Somewhat", v: 1 },
      { e: "😕", t: "A little", v: 2 },
      { e: "🪶", t: "Not at all", v: 3 },
    ],
  },
  {
    q: "Overall, how stressed have you felt in the past 2 weeks?",
    opts: [
      { e: "😌", t: "Not at all", v: 0 },
      { e: "🙂", t: "A little", v: 1 },
      { e: "😟", t: "Moderately", v: 2 },
      { e: "😰", t: "Extremely", v: 3 },
    ],
  },
];

let currentIndex = 0;
let answers = new Array(questions.length).fill(null);

/* ====== VOICE & SOUND (no external files) ====== */
/* Speech: reads question and options via SpeechSynthesis */
function speakText(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel(); // stop previous
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 1;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}

/* WebAudio short tones */
const audioCtx =
  typeof AudioContext !== "undefined" ? new AudioContext() : null;
function playTone(freq = 440, length = 0.08, type = "sine") {
  if (!audioCtx) return;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 0.005);
  o.connect(g);
  g.connect(audioCtx.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + length);
  o.stop(audioCtx.currentTime + length + 0.02);
}

/* action sound shortcuts */
function soundNext() {
  playTone(880, 0.06, "sine");
}
function soundPrev() {
  playTone(520, 0.06, "sine");
}
function soundSelect() {
  playTone(660, 0.05, "triangle");
}
function soundSubmit() {
  playTone(320, 0.18, "sawtooth");
  playTone(880, 0.12, "sine");
}
function soundResult() {
  playTone(520, 0.18, "sine");
  playTone(740, 0.12, "sine");
}

/* ====== RENDERING ====== */
const questionArea = document.getElementById("questionArea");
const progressEl = document.getElementById("progress");
const savedMessage = document.getElementById("savedMessage");
const resultPanel = document.getElementById("resultPanel");
const historyPanel = document.getElementById("historyPanel");

function renderQuestion() {
  const q = questions[currentIndex];
  questionArea.innerHTML = `
    <div class="question" role="group" aria-labelledby="q-${currentIndex}">
      <div class="q-number">Question ${currentIndex + 1} of ${
    questions.length
  }</div>
      <div id="q-${currentIndex}" class="q-text">${escapeHtml(q.q)}</div>
      <div class="options" id="optionsWrap">
        ${q.opts
          .map(
            (o, i) => `
          <label class="opt ${
            answers[currentIndex] == o.v ? "opt-selected" : ""
          }" data-value="${o.v}" onclick="selectOption(${currentIndex}, ${
              o.v
            })" tabindex="0">
            <div class="emoji">${o.e}</div>
            <div class="opt-label">${escapeHtml(o.t)}</div>
          </label>
        `
          )
          .join("")}
      </div>
    </div>
  `;
  updateProgress();
  // set prev button visibility
  document.getElementById("prevBtn").style.visibility =
    currentIndex === 0 ? "hidden" : "visible";
  // toggle next/submit
  document
    .getElementById("nextBtn")
    .classList.toggle("hidden", currentIndex === questions.length - 1);
  document
    .getElementById("submitBtn")
    .classList.toggle("hidden", currentIndex !== questions.length - 1);
}

/* escape HTML for safety */
function escapeHtml(s) {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c])
  );
}

/* option selection */
function selectOption(qIdx, value) {
  answers[qIdx] = Number(value);
  // visually mark selection
  const opts = document.querySelectorAll("#optionsWrap .opt");
  opts.forEach((el) => {
    el.classList.toggle(
      "opt-selected",
      Number(el.getAttribute("data-value")) === Number(value)
    );
  });
  // sound
  soundSelect();
  // quick save draft
  localSaveDraft();
}

/* NEXT / PREV */
function nextQuestion() {
  if (answers[currentIndex] === null) {
    alert("Please select an option to continue.");
    return;
  }
  soundNext();
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
}
function prevQuestion() {
  soundPrev();
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

/* progress bar */
function updateProgress() {
  const pct = (currentIndex / questions.length) * 100 + 100 / questions.length;
  progressEl.style.width = pct + "%";
}

/* speak current question & options */
// const speak = document.getElementById("speakBtn");
// function speakCurrent(short = false) {
//   if (!("speechSynthesis" in window)) return;
//   const q = questions[currentIndex];
//   if (short) {
//     const s = `Question ${currentIndex + 1}. ${q.q}`;

//     speak.addEventListener("click", speakText(s));
//   } else {
//     let s = `Question ${currentIndex + 1}. ${q.q}. Options are: `;
//     s += q.opts.map((o) => `${o.e} ${o.t}`).join(", ");
//     // speakText(s);
//     speak.addEventListener("click", speakText(s));
//   }
// }

/* SUBMIT */
function submitQuiz() {
  // require all answered
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === null) {
      alert(`Please answer question ${i + 1} before submitting.`);
      currentIndex = i;
      renderQuestion();
      return;
    }
  }
  soundSubmit();
  // calculate
  const total = answers.reduce((a, b) => a + Number(b), 0);
  const max = questions.length * 3;
  let category = "";
  let advice = "";

  // Simple mapping — you can tweak thresholds
  const pct = (total / max) * 100;
  if (pct <= 20) {
    category = "Good — low symptoms";
    advice =
      "You're showing low levels of distress. Maintain self-care and check in with yourself regularly.";
  } else if (pct <= 45) {
    category = "Mild — some signs";
    advice =
      "You have mild symptoms. Consider stress-reduction techniques (walks, journaling, sleep), and connect with friends.";
  } else if (pct <= 70) {
    category = "Moderate — consider support";
    advice =
      "You're experiencing noticeable symptoms. Consider talking to a trusted person or a mental health professional.";
  } else {
    category = "High — consider professional help";
    advice =
      "High levels of distress detected. Please consider reaching out to a healthcare professional or crisis resources in your area.";
  }

  // Save result to localStorage (last + history)
  const timestamp = new Date().toISOString();
  const result = {
    score: total,
    max,
    pct: Math.round(pct),
    category,
    advice,
    answers: [...answers],
    timestamp,
  };
  localStorage.setItem("mh_last_result", JSON.stringify(result));

  // history array
  const histRaw = localStorage.getItem("mh_history");
  const hist = histRaw ? JSON.parse(histRaw) : [];
  hist.unshift(result); // newest first
  if (hist.length > 50) hist.pop(); // keep reasonable limit
  localStorage.setItem("mh_history", JSON.stringify(hist));

  // show result panel
  showResult(result);
  // play sound
  setTimeout(() => soundResult(), 120);
}

/* show result UI */
function showResult(result) {
  document.getElementById("quizCard").style.display = "none";
  resultPanel.style.display = "block";
  resultPanel.innerHTML = `
    <div class="result-card">
      <div style="font-size:13px;color:var(--muted)">Completed on ${new Date(
        result.timestamp
      ).toLocaleString()}</div>
      <div class="score">${result.score} / ${result.max}</div>
      <div style="font-weight:700;font-size:18px;margin-bottom:6px">${escapeHtml(
        result.category
      )}</div>
      <div class="result-msg">${escapeHtml(result.advice)}</div>
      <div style="display:flex;gap:8px;justify-content:center;margin-top:12px;">
        <button class="btn" onclick="retakeQuiz()">Retake Quiz ↺</button>
        <button class="btn ghost" onclick="downloadResult()">Export JSON</button>
        <button class="btn ghost" onclick="clearAll()">Clear History</button>
      </div>
    </div>
  `;
  renderHistory();
}

/* RETAKE */
function retakeQuiz() {
  soundNext();
  // bring back quiz, reset answers if you want fresh; keep drafts by comment/uncomment
  answers = new Array(questions.length).fill(null);
  currentIndex = 0;
  document.getElementById("quizCard").style.display = "";
  resultPanel.style.display = "none";
  renderQuestion();
  localStorage.removeItem("mh_draft_answers"); // optional
}

/* Download latest result JSON */
function downloadResult() {
  const last = localStorage.getItem("mh_last_result");
  if (!last) {
    alert("No saved result to export.");
    return;
  }
  const blob = new Blob([last], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mh_result.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* history rendering */
function renderHistory() {
  const histRaw = localStorage.getItem("mh_history");
  const hist = histRaw ? JSON.parse(histRaw) : [];
  if (!hist.length) {
    historyPanel.innerHTML = `<div class="history"><div style="color:var(--muted);font-size:13px">No history yet — take the quiz to save results locally.</div></div>`;
    savedMessage.innerText = "No saved results.";
    return;
  }
  savedMessage.innerText = `Last saved: ${new Date(
    hist[0].timestamp
  ).toLocaleString()}`;
  let html = `<div class="history"><h3 style="margin:10px 0 8px">Attempts History</h3>`;
  html += hist
    .map(
      (h, idx) => `
    <div class="hist-item">
      <div>
        <div style="font-weight:700">${h.score} / ${h.max} — ${h.category}</div>
        <div style="font-size:12px;color:var(--muted)">${new Date(
          h.timestamp
        ).toLocaleString()}</div>
      </div>
      <div style="text-align:right">
        <button class="btn ghost" style="font-size:12px;padding:6px 10px" onclick='viewDetail(${idx})'>View</button>
      </div>
    </div>
  `
    )
    .join("");
  html += `</div>`;
  historyPanel.innerHTML = html;
}

/* view detail (opens latest) */
function viewDetail(idx) {
  const hist = JSON.parse(localStorage.getItem("mh_history") || "[]");
  const r = hist[idx];
  if (!r) return;
  alert(
    `Score: ${r.score}/${r.max}\nCategory: ${r.category}\nPercent: ${
      r.pct
    }%\nWhen: ${new Date(r.timestamp).toLocaleString()}\n\nAdvice: ${r.advice}`
  );
}

/* clear history and last */
function clearAll() {
  if (!confirm("Clear all saved results and history from this browser?"))
    return;
  localStorage.removeItem("mh_last_result");
  localStorage.removeItem("mh_history");
  localStorage.removeItem("mh_draft_answers");
  savedMessage.innerText = "Cleared.";
  // return to quiz view
  document.getElementById("quizCard").style.display = "";
  resultPanel.style.display = "none";
  answers = new Array(questions.length).fill(null);
  currentIndex = 0;
  renderQuestion();
  renderHistory();
}

/* draft save for partial progress */
function localSaveDraft() {
  const draft = {
    answers,
    currentIndex,
    updated: new Date().toISOString(),
  };
  localStorage.setItem("mh_draft_answers", JSON.stringify(draft));
  savedMessage.innerText = "Draft saved locally.";
}

/* load draft on start */
function loadDraftIfAny() {
  const d = localStorage.getItem("mh_draft_answers");
  if (!d) return false;
  try {
    const parsed = JSON.parse(d);
    if (
      Array.isArray(parsed.answers) &&
      parsed.answers.length === questions.length
    ) {
      answers = parsed.answers;
      currentIndex = parsed.currentIndex || 0;
      savedMessage.innerText = `Loaded draft from ${new Date(
        parsed.updated
      ).toLocaleString()}`;
      return true;
    }
  } catch (e) {}
  return false;
}

/* show last saved result on load if any */
function showLastIfAny() {
  const last = localStorage.getItem("mh_last_result");
  if (!last) return false;
  try {
    const r = JSON.parse(last);
    // show a small panel but allow retake
    document.getElementById("quizCard").style.display = "";
    renderHistory();
    return true;
  } catch (e) {
    return false;
  }
}

/* INIT */
(function init() {
  // try load draft
  loadDraftIfAny();
  // render
  renderQuestion();
  renderHistory();
  // if there is last result, show small hint
  const last = localStorage.getItem("mh_last_result");
  if (last) {
    savedMessage.innerText =
      "You have a saved result — it appears in History below.";
  }
})();

/* allow keyboard selection for options */
document.addEventListener("keydown", (e) => {
  if (e.key >= "1" && e.key <= "4") {
    // pick option 1..4 of current question if present
    const q = questions[currentIndex];
    const idx = Number(e.key) - 1;
    if (q && q.opts[idx]) selectOption(currentIndex, q.opts[idx].v);
  } else if (e.key === "ArrowRight") {
    nextQuestion();
  } else if (e.key === "ArrowLeft") {
    prevQuestion();
  }
});
