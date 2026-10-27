// Renders the Final Test (all 8 units) from units.js.
// Needs: units.js (FINAL_TEST, UNITS), quiz.js (renderQuiz), progress.js (renderCompleteToggle).

const bodyEl = document.getElementById("lessonbody");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// Instructions
// The source text says to check answers "with the key at the end"; here each answer is graded as you tap it.
bodyEl.appendChild(
  el(
    "p",
    "lessontext",
    FINAL_TEST.instructions.replace(
      "Check your answers with the key at the end.",
      "Tap an answer to see right away if you got it right."
    )
  )
);

// Score guide
const guideBox = el("section", "lessonbox");
guideBox.appendChild(el("h3", "lessonsectiontitle", "Score Guide"));
const guideList = el("ul", "lessonlist");
FINAL_TEST.guide.forEach((g, i) => {
  const higher = i === 0 ? FINAL_TEST.questions.length : FINAL_TEST.guide[i - 1].min - 1;
  const range = g.min === 0 ? `Below ${higher + 1}` : g.min === higher ? `${g.min}` : `${g.min}\u2013${higher}`;
  const li = el("li");
  li.appendChild(el("strong", "", range + ":"));
  li.appendChild(document.createTextNode(" " + g.label));
  guideList.appendChild(li);
});
guideBox.appendChild(guideList);
bodyEl.appendChild(guideBox);

// Test
const testSection = el("section", "lessonsection");
testSection.id = "test";
testSection.appendChild(el("h3", "lessonsectiontitle", "The Test"));
const quizBox = el("div", "quizbox");
testSection.appendChild(quizBox);
bodyEl.appendChild(testSection);
renderQuiz(quizBox, {
  questions: FINAL_TEST.questions,
  passMark: FINAL_TEST.passMark,
  guide: FINAL_TEST.guide,
});

// Quick reference checklist
const check = FINAL_TEST.checklist;
const checkBox = el("section", "lessonbox");
checkBox.appendChild(el("h3", "lessonsectiontitle", "Quick Reference: " + check.title));
checkBox.appendChild(el("p", "lessontext", check.intro));
const checkList = el("ul", "lessonlist");
check.items.forEach((t) => checkList.appendChild(el("li", "", t)));
checkBox.appendChild(checkList);
bodyEl.appendChild(checkBox);

// Mark the final test complete
renderCompleteToggle(bodyEl, "final", "the Final Test");

// Back to the last unit / all units
const nav = el("nav", "lessonpager");
const back = el("a", "lessonpagerlink", `\u2190 Unit ${UNITS.length}: ${UNITS[UNITS.length - 1].title}`);
back.href = `lesson.html?lesson=${UNITS.length}`;
const home = el("a", "lessonpagerlink", "All units \u2192");
home.href = "index.html";
nav.appendChild(back);
nav.appendChild(home);
bodyEl.appendChild(nav);
