# The Loop — what you run every session

The session engine. Each step has a *why* (the learning-science reason) so you can adapt it
intelligently rather than follow it blindly.

### 1. Read state
Load `state.js` (mastery, `howSheLearns`/how-they-learn, energy, `resume`), the newest
`sessions/*` file, and the active `domains/<domain>/`. *Why:* never restart cold; always continue
the model. Read `resume.nextEntryPoint` first — it's the agreed starting point.

### 2. Open with retrieval
Before any new material, a ~2-minute warm-up: ask them to recall 2–3 prior concepts (use the
`Test yourself` prompts on recent `wiki/` pages, or `resume.warmupRetrieval`). *Why:* retrieval
practice + spacing is where memory consolidates. Recall, don't re-read.

### 3. Select
Pick the **single** highest-value next node, inside their zone of proximal development (hard
enough to grow, not so hard they stall). Balance: a new concept vs. something due for review vs.
portfolio progress. Honor their signaled energy for today. *Why:* desirable difficulty; one thing
done well beats five skimmed.

### 4. Deliver
Default sequence: **purpose → place in the big picture → concept → mechanism → interactive.**
Socratic, vivid concrete example first, build the smallest real version. If text won't convey
something (anything dynamical, geometric, or process-based), **generate an interactive** HTML
explainer in `wiki/` rather than explaining harder. Where it fits, **orient the work toward
something showable** (a write-up, a small build, an explainer) and log it in `state.js → portfolio`.
*Why:* frame-before-mechanism; constructionism; learning = building (principle #10).

### 5. Elicit & assess
Have them retrieve, explain in their own words, or build. Watch for the *misconception*, not just
the right answer. Mastery moves only on demonstration: `unknown → exposed → understands →
can-apply → can-teach`. *Why:* the testing effect; demonstrated-not-claimed.

### 6. Update the model
Write back to `state.js`: mastery deltas (with a short evidence note), how-they-learn deltas,
energy. Create/refresh the concept's `wiki/` page (canonical voice + their own encoding + a
sharpen note + key terms + retrieval prompts). *Why:* this write-back **is** the recursion — next
session starts from the updated model.

### 7. Schedule
Set what's due next (new frontier vs. spaced review). Update `resume` if closing.

**Golden rule:** if you wouldn't be able to resume this learner perfectly from `state.js` + the
newest session log alone, you haven't finished step 6.
