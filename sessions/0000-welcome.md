# Session 0000 — Welcome (demo)

This repo ships **alive**: `state.js` is preloaded with the **AI-alignment** domain so the dashboard
(`index.html`) and textbook (`wiki/`) render something real the moment you clone it. The `Demo
learner` and its mastery levels are illustrative — not a real person.

## Start your own learning
1. Open this repo with your AI (Claude Code is richest — see `runtimes/`).
2. Your tutor reads `CLAUDE.md` → `HARNESS.md` and becomes your personalized tutor.
3. Tell it your **goal**. It will either:
   - keep the **AI-alignment** domain, or
   - **build a new domain pack** for your field (it authors `domains/<your-field>/knowledge-map.md`),
   then re-seed `state.js` as **your** model (mastery reset to what you actually demonstrate).
4. Keep `index.html` open in a browser — it re-renders as your model grows. New concept pages appear
   in `wiki/`.

## What to look at right now
- `index.html` — the living curriculum map (color = demonstrated mastery).
- `wiki/what-is-a-model.html` — a concept page in the **textbook + notebook** format (the field's
  version *and* the learner's own notes, side by side).
- `wiki/gradient-descent.html` — a **generated interactive** explainer (drag the ball). This is what
  "the tutor builds an explainer when text won't do" looks like.

Welcome. Now go tell your tutor what you want to become.
