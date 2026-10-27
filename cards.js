// Builds the unit cards on the home page from units.js.
// Each card shows the unit number (a link), the unit title, and the first learning goal.
// Cards for completed units (see progress.js) get the "completed" class, which changes their color.

const lessonsContainer = document.getElementById("lessons");

function makeCard(id, progressId, href, heading, lines) {
  const card = document.createElement("div");
  card.id = id;
  card.dataset.progress = progressId;
  card.className = "lessonstyle";

  const h1 = document.createElement("h1");
  h1.className = "heading";
  const a = document.createElement("a");
  a.href = href;
  a.textContent = heading;
  h1.appendChild(a);
  card.appendChild(h1);

  lines.forEach((line, i) => {
    const p = document.createElement("p");
    p.className = i === 0 ? "text cardtitle" : "text";
    p.textContent = line;
    card.appendChild(p);
  });
  return card;
}

UNITS.forEach((unit) => {
  lessonsContainer.appendChild(
    makeCard(`lesson${unit.number}`, String(unit.number), `lesson.html?lesson=${unit.number}`, `Unit ${unit.number}`, [
      unit.title,
      unit.goals[0],
    ])
  );
});

lessonsContainer.appendChild(
  makeCard("finaltest", "final", "finaltest.html", "Final Test", [
    `All ${UNITS.length} units`,
    `${FINAL_TEST.questions.length} questions. ${FINAL_TEST.passMark} or more is a pass.`,
  ])
);

// Colors the cards of completed units. Runs on load, when the page is shown again
// (e.g. the Back button), and when another tab changes the saved progress.
function refreshCompleted() {
  const done = getCompletedIds();
  document.querySelectorAll(".lessonstyle").forEach((card) => {
    const isDone = done.indexOf(card.dataset.progress) !== -1;
    card.classList.toggle("completed", isDone);
    const link = card.querySelector("a");
    const name = link.textContent;
    link.setAttribute("aria-label", isDone ? `${name} (completed)` : name);
  });
}

refreshCompleted();
window.addEventListener("pageshow", refreshCompleted);
window.addEventListener("focus", refreshCompleted);
window.addEventListener("storage", refreshCompleted);
