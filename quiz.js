// Shared quiz widget.
// renderQuiz(container, { questions, passMark?, guide? })
//   questions: [{ q, options: [..], answer: index, why?: string }]
//   passMark:  optional score needed to pass (shows a pass / not-yet line)
//   guide:     optional [{ min, label }] sorted high to low (shows a result label)

function renderQuiz(container, config) {
  const questions = config.questions;
  const total = questions.length;
  let answered = 0;
  let score = 0;

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  container.textContent = "";

  const progress = el("p", "quizprogress", `Answered 0 of ${total}`);
  progress.setAttribute("aria-live", "polite");
  container.appendChild(progress);

  const result = el("div", "quizresult");
  result.hidden = true;
  result.setAttribute("aria-live", "polite");

  questions.forEach((question, qIndex) => {
    const box = el("div", "quizquestion");
    const prompt = el("p", "quizprompt", `${qIndex + 1}. ${question.q}`);
    box.appendChild(prompt);

    const optionsBox = el("div", "quizoptions");
    optionsBox.setAttribute("role", "group");
    optionsBox.setAttribute("aria-label", `Question ${qIndex + 1}`);
    const feedback = el("p", "quizfeedback");
    feedback.hidden = true;
    feedback.setAttribute("aria-live", "polite");

    const buttons = question.options.map((optionText, oIndex) => {
      const button = el("button", "quizoption");
      button.type = "button";
      button.appendChild(el("span", "quizletter", "ABCD"[oIndex]));
      button.appendChild(el("span", "quizoptiontext", optionText));
      button.addEventListener("click", () => choose(oIndex));
      optionsBox.appendChild(button);
      return button;
    });

    let done = false;
    function choose(oIndex) {
      if (done) return;
      done = true;
      answered++;
      const correct = oIndex === question.answer;
      if (correct) score++;

      buttons.forEach((b, i) => {
        b.disabled = true;
        if (i === question.answer) b.classList.add("correct");
        if (i === oIndex && !correct) b.classList.add("wrong");
      });
      buttons[oIndex].classList.add("chosen");

      const verdict = correct
        ? "\u2713 Correct."
        : `\u2717 Not quite. The correct answer is ${"ABCD"[question.answer]}.`;
      feedback.textContent = question.why ? `${verdict} ${question.why}` : verdict;
      feedback.classList.add(correct ? "good" : "bad");
      feedback.hidden = false;

      progress.textContent = `Answered ${answered} of ${total}`;
      if (answered === total) showResult();
    }

    box.appendChild(optionsBox);
    box.appendChild(feedback);
    container.appendChild(box);
  });

  container.appendChild(result);

  function showResult() {
    result.textContent = "";
    result.appendChild(el("h3", "quizscore", `Your score: ${score} out of ${total}`));

    if (config.guide) {
      const tier = config.guide.find((g) => score >= g.min);
      if (tier) result.appendChild(el("p", "quizlabel", tier.label));
    }
    if (config.passMark !== undefined) {
      const passed = score >= config.passMark;
      result.appendChild(
        el(
          "p",
          "quizlabel",
          passed
            ? `You passed! (${config.passMark} or more is a pass.)`
            : `Not a pass yet. You need ${config.passMark} or more. Review the units and try again.`
        )
      );
    } else if (score === total) {
      result.appendChild(el("p", "quizlabel", "Perfect score!"));
    } else {
      result.appendChild(el("p", "quizlabel", "Reread the parts you missed, then try again."));
    }

    const retry = el("button", "quizretry", "Try again");
    retry.type = "button";
    retry.addEventListener("click", () => {
      renderQuiz(container, config);
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    result.appendChild(retry);
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}
