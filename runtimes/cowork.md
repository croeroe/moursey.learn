# Run moursey.learn in Claude Cowork (recommended for most learners)

[Claude Cowork](https://www.anthropic.com/product/claude-cowork) is Anthropic's desktop app for
knowledge work — no command line. It's the smoothest way to run moursey, because it gives you both
things moursey wants:

- **It reads and writes files** in a folder you point it at — so your living model, sessions, and
  textbook persist exactly as designed (this is the part the loop depends on).
- **Live interactive artifacts** — your map and the generated explainers can render *right in the
  app*, not in a separate browser tab. For a learning tool, that's a real upgrade.
- **No terminal** — friendlier than Claude Code for non-developers (most learners).
- **Built-in web search** — powers the Expert layer (staying current) directly.

## Setup
1. **Get the project** — on GitHub, green **Code** button → *Download ZIP*, and unzip it.
2. **Give Cowork access to the moursey folder.**
3. Tell it: *"Read `HARNESS.md` and be my tutor for this — then let's start."* (It will read the
   boot files and the manual.)
4. **Tell it your goal.** It sets up your domain and your model, and starts teaching.

## Seeing your map & interactives
Ask Cowork to **open your living map** (`index.html`) and your **textbook** (`wiki/`) as live
artifacts — they render in-app; re-open (or ask Cowork to re-render) them after the model updates to
see the latest — they don't refresh on their own. When it builds an interactive explainer, it can
show it the same way, inline.

## Notes
- Everything still lives in **plain files in your folder** (map, notes, progress) — yours to keep,
  and the same files work in any other runtime.
- Prefer the terminal, or want to contribute to the tool itself? See [`claude-code.md`](claude-code.md).
- Capabilities here are based on Anthropic's published Cowork features; if something differs in your
  version, tell your tutor and it'll adapt.
