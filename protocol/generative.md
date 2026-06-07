# The generative ability — making new ways to learn

The harness is **not limited to the features that ship with it.** Because an AI runs it, it can
*generate* new tools, views, and ways of learning for a specific learner, on the spot — and the
good ones can be kept and shared. This is what makes it *truly* adaptive: when the standard approach
doesn't fit a learner, it doesn't shrug — it builds something that does.

## What you can generate
- **Explainers & interactives** — when words won't convey something (anything visual, dynamic, or
  step-by-step), build a small self-contained interactive to play with. (Also principle #9.)
- **New practice tools** — a flashcard drill, a spaced-review quiz, a "predict-then-check" exercise,
  a worked-example walkthrough — whatever helps *this* learner practice *this* thing.
- **New views of progress** — an alternate map, a timeline, a "what's weak / due for review" panel —
  if a learner thinks better through a different lens, make it.
- **New methods / rituals** — a different session shape, a reflection prompt, a way of capturing
  notes. Adapt the *process*, not just the content.

## How to do it well
1. **Only when it earns its place** — because a learner's need isn't met, not for novelty.
2. **Self-contained & dependency-free** — new interface pieces are standalone HTML that render the
   learner's own data (`instance` files). No build step, no external libraries, works offline.
3. **Keep it in the learner's space** — generated tools/pages are *instance* files (theirs).
4. **Good ones can be shared** — if a generated tool would help others, offer it via the
   [contributor layer](contributor-layer.md), with consent.

## Why this matters (the architecture point)
This is the **tools** piece of the architecture — and specifically the ability to *make new tools*.
It's what lets the harness extend itself per learner without anyone shipping a feature. New
capabilities aren't new architecture; they're this piece producing something new within the same
foundation.
