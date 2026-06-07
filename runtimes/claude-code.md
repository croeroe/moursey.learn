# Run moursey.learn in Claude Code (recommended)

**Claude Code is included with Claude Pro/Max** — so this runs on your *subscription*, with no
per-token billing, and it's the richest experience: the tutor reads and writes your files natively
and runs the full loop.

## Setup
```bash
git clone https://github.com/croeroe/moursey.learn.git
cd moursey.learn
claude
```
Claude Code auto-reads `CLAUDE.md`, which points it at `HARNESS.md` — it becomes your tutor.

## First session
1. Open the dashboard: `open index.html` (macOS) / `xdg-open index.html` (Linux) — it ships with the
   AI-alignment demo so you can see the living map immediately.
2. In Claude Code, tell it your goal: *"I want to become an X"* (or *"continue the AI-alignment
   track"*).
3. It will pick or build a domain pack, initialize **your** `state.js`, and start teaching.
4. Keep `index.html` open in a browser tab — it re-renders from `state.js` as your model updates.
   New concept pages appear in `wiki/`.

## Tips
- Each session, just say *"let's continue"* — it reads `state.js → resume` and picks up exactly
  where you left off.
- Ask for a **field-currency sweep** anytime to refresh the frontier (it'll use web search).
- Your learning lives in plain files — version it with git to keep a history of your growth.
