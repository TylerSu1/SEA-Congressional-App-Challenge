// Renders one unit (lesson) from units.js. The unit is chosen with ?lesson=NUMBER in the URL.
// Needs: units.js (UNITS, SAFETY_RULES, REPORT_RESOURCES), quiz.js (renderQuiz), progress.js (renderCompleteToggle).

const params = new URLSearchParams(window.location.search);
const lessonNumber = parseInt(params.get("lesson"), 10);
const lesson = UNITS.find((u) => u.number === lessonNumber);

const headingEl = document.getElementById("lessonheading");
const subheadingEl = document.getElementById("lessonsubheading");
const bodyEl = document.getElementById("lessonbody");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// An item is plain text, or { lead, text } where the lead is shown in bold.
function fillItem(node, item) {
  if (typeof item === "string") {
    node.textContent = item;
  } else {
    node.appendChild(el("strong", "", item.lead));
    node.appendChild(document.createTextNode(" " + item.text));
  }
}

function renderList(tag, items, className) {
  const list = el(tag, className || "lessonlist");
  items.forEach((item) => {
    const li = el("li");
    fillItem(li, item);
    list.appendChild(li);
  });
  return list;
}

function renderBlock(block) {
  switch (block.t) {
    case "p": {
      const p = el("p", "lessontext");
      fillItem(p, block.lead ? { lead: block.lead, text: block.text } : block.text);
      return p;
    }
    case "ul":
      return renderList("ul", block.items);
    case "ol":
      return renderList("ol", block.items);
    case "sub":
      return el("h4", "lessonsub", block.text);
    case "quote":
      return el("blockquote", "lessonquote", block.text);
    case "example": {
      const box = el("div", "lessonexample");
      box.appendChild(el("h4", "lessonexampletitle", block.title));
      if (block.quote) box.appendChild(el("blockquote", "lessonquote", block.quote));
      if (block.steps && block.steps.length) box.appendChild(renderList("ol", block.steps));
      return box;
    }
    default:
      return null;
  }
}

function renderSection(section, id) {
  const wrap = el("section", "lessonsection");
  wrap.id = id;
  wrap.appendChild(el("h3", "lessonsectiontitle", section.title));
  section.blocks.forEach((block) => {
    const node = renderBlock(block);
    if (node) wrap.appendChild(node);
  });
  return wrap;
}

function renderRulesBox() {
  const box = el("section", "lessonbox");
  box.appendChild(el("h3", "lessonsectiontitle", SAFETY_RULES.title));
  box.appendChild(el("p", "lessontext", SAFETY_RULES.intro));
  box.appendChild(renderList("ol", SAFETY_RULES.items));
  return box;
}

const REPORT_LINKS = {
  "ReportFraud.ftc.gov": "https://reportfraud.ftc.gov",
  "ic3.gov": "https://www.ic3.gov",
  "donotcall.gov": "https://www.donotcall.gov",
};

function renderReportBox() {
  const box = el("section", "lessonbox");
  box.appendChild(el("h3", "lessonsectiontitle", REPORT_RESOURCES.title));
  const list = el("ul", "lessonlist");
  REPORT_RESOURCES.items.forEach((r) => {
    const li = el("li");
    li.appendChild(el("strong", "", r.label + ":"));
    li.appendChild(document.createTextNode(" "));
    if (REPORT_LINKS[r.value]) {
      const a = el("a", "lessonlink", r.value);
      a.href = REPORT_LINKS[r.value];
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
    } else {
      li.appendChild(document.createTextNode(r.value));
    }
    list.appendChild(li);
  });
  box.appendChild(list);
  return box;
}

function renderPager(number) {
  const nav = el("nav", "lessonpager");
  nav.setAttribute("aria-label", "Unit navigation");

  const prev = UNITS.find((u) => u.number === number - 1);
  const next = UNITS.find((u) => u.number === number + 1);

  const left = el("a", "lessonpagerlink", prev ? `\u2190 Unit ${prev.number}: ${prev.title}` : "\u2190 All units");
  left.href = prev ? `lesson.html?lesson=${prev.number}` : "index.html";

  const right = el(
    "a",
    "lessonpagerlink",
    next ? `Unit ${next.number}: ${next.title} \u2192` : "Take the Final Test \u2192"
  );
  right.href = next ? `lesson.html?lesson=${next.number}` : "finaltest.html";

  nav.appendChild(left);
  nav.appendChild(right);
  return nav;
}

function showNotFound() {
  document.title = "SEA | Unit not found";
  headingEl.textContent = "Unit not found";
  subheadingEl.textContent = "That unit does not exist.";
  const p = el("p", "lessontext", "Pick one of the 8 units from the ");
  const a = el("a", "lessonlink", "home page");
  a.href = "index.html";
  p.appendChild(a);
  p.appendChild(document.createTextNode("."));
  bodyEl.appendChild(p);
}

function showLesson(unit) {
  document.title = `SEA | Unit ${unit.number}: ${unit.title}`;
  headingEl.textContent = `Unit ${unit.number}`;
  subheadingEl.textContent = unit.title;

  // Learning goals first, then the unit's own sections.
  const goals = {
    title: "Learning Goals",
    blocks: [{ t: "ul", items: unit.goals }],
  };
  const sections = [goals, ...unit.sections];

  // "Jump to" links
  const toc = el("nav", "lessontoc");
  toc.setAttribute("aria-label", "Jump to a section");
  toc.appendChild(el("span", "lessontoclabel", "Jump to:"));
  sections.forEach((s, i) => {
    const a = el("a", "lessontoclink", s.title);
    a.href = `#sec-${i}`;
    toc.appendChild(a);
  });
  const quizLink = el("a", "lessontoclink", "Quiz");
  quizLink.href = "#quiz";
  toc.appendChild(quizLink);
  bodyEl.appendChild(toc);

  sections.forEach((s, i) => bodyEl.appendChild(renderSection(s, `sec-${i}`)));

  bodyEl.appendChild(renderRulesBox());
  bodyEl.appendChild(renderReportBox());

  // Quiz
  const quizSection = el("section", "lessonsection");
  quizSection.id = "quiz";
  quizSection.appendChild(el("h3", "lessonsectiontitle", `Unit ${unit.number} Quiz`));
  quizSection.appendChild(
    el("p", "lessontext", `${unit.quiz.length} questions. Tap an answer to see if you got it right.`)
  );
  const quizBox = el("div", "quizbox");
  quizSection.appendChild(quizBox);
  bodyEl.appendChild(quizSection);
  renderQuiz(quizBox, { questions: unit.quiz });

  renderCompleteToggle(bodyEl, String(unit.number), `Unit ${unit.number}`);

  bodyEl.appendChild(renderPager(unit.number));
}

if (lesson) {
  showLesson(lesson);
} else {
  showNotFound();
}
