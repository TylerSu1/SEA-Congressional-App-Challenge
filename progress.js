// Tracks which units (and the final test) the learner has marked complete.
//
// Saved in a cookie called "sea_completed" (for example "1,3,final") that lasts one year.
// Some browsers (notably Chrome) refuse cookies for pages opened straight from a folder
// (file://). In that case the same data is kept in localStorage instead, so the feature
// still works when the site is downloaded and opened locally.
//
// IDs: "1" to "8" for units, "final" for the Final Test.

const PROGRESS_COOKIE = "sea_completed";
const PROGRESS_MAX_AGE = 60 * 60 * 24 * 365; // one year, in seconds

function cookiesWork() {
  try {
    document.cookie = "sea_test=1; path=/; SameSite=Lax";
    const ok = document.cookie.indexOf("sea_test=1") !== -1;
    document.cookie = "sea_test=; path=/; max-age=0; SameSite=Lax";
    return ok;
  } catch (e) {
    return false;
  }
}

function cleanIds(list) {
  const seen = [];
  list.forEach((id) => {
    id = String(id).trim();
    if (/^(\d{1,2}|final)$/.test(id) && seen.indexOf(id) === -1) seen.push(id);
  });
  // units in number order, "final" last
  return seen.sort((a, b) => (a === "final") - (b === "final") || (a === "final" ? 0 : a - b));
}

function readStored() {
  let raw = "";
  if (cookiesWork()) {
    const match = document.cookie.split("; ").find((c) => c.indexOf(PROGRESS_COOKIE + "=") === 0);
    if (match) {
      try {
        raw = decodeURIComponent(match.slice(PROGRESS_COOKIE.length + 1));
      } catch (e) {
        raw = "";
      }
    }
  } else {
    try {
      raw = localStorage.getItem(PROGRESS_COOKIE) || "";
    } catch (e) {
      raw = "";
    }
  }
  return cleanIds(raw.split(","));
}

function writeStored(ids) {
  const value = ids.join(",");
  if (cookiesWork()) {
    document.cookie =
      PROGRESS_COOKIE + "=" + encodeURIComponent(value) + "; max-age=" + PROGRESS_MAX_AGE + "; path=/; SameSite=Lax";
  } else {
    try {
      localStorage.setItem(PROGRESS_COOKIE, value);
    } catch (e) {
      /* storage blocked: progress just will not be remembered */
    }
  }
}

function getCompletedIds() {
  return readStored();
}

function isComplete(id) {
  return readStored().indexOf(String(id)) !== -1;
}

// Turns completion on or off for one id. Returns the new state (true = complete).
function setComplete(id, done) {
  id = String(id);
  const ids = readStored().filter((x) => x !== id);
  if (done) ids.push(id);
  writeStored(cleanIds(ids));
  return done;
}

// Adds a "mark as complete" toggle button to a container.
// name is what the button calls the thing, e.g. "Unit 3" or "the Final Test".
function renderCompleteToggle(container, id, name) {
  const box = document.createElement("section");
  box.className = "completebox";

  const status = document.createElement("p");
  status.className = "completestatus";
  status.setAttribute("aria-live", "polite");

  const button = document.createElement("button");
  button.type = "button";
  button.className = "completebtn";

  function paint() {
    const done = isComplete(id);
    button.classList.toggle("on", done);
    button.setAttribute("aria-pressed", done ? "true" : "false");
    button.textContent = done ? "\u2713 Completed (click to undo)" : "Mark as complete";
    status.textContent = done
      ? `Nice work! ${name} is marked complete. It will show as completed on the home page.`
      : `Finished ${name}? Mark it complete to track your progress.`;
    box.classList.toggle("on", done);
  }

  button.addEventListener("click", () => {
    setComplete(id, !isComplete(id));
    paint();
  });

  box.appendChild(status);
  box.appendChild(button);
  container.appendChild(box);
  paint();
}
