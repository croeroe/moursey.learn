<div align="center">

# moursey.learn

**A living, open-source harness for *truly* adaptive learning — powered by your own AI.**

*Not a course. A model of you, plus a tutor that regenerates your curriculum every session.*

</div>

---

## What this is

`moursey.learn` is a **harness**: the scaffolding that wraps an AI model and turns it into a
relentless, personalized tutor. The model brings the *intelligence* (your own Claude or GPT). The
harness brings the *structure* — a living model of you, a self-rewriting curriculum, an interactive
textbook that fills with your own notes, and an "Expert layer" that keeps the field current.

It exists because the two biggest flaws of normal learning are baked in:
1. **Fixed curricula** that ignore how *you* learn and how the *field* evolves.
2. **The cost of intelligence** — so platforms ration it.

`moursey.learn` fixes both: the curriculum is an *output* (regenerated each session from a model of
you), and the intelligence is **yours** (your existing Claude/GPT subscription), so the whole thing
is just files + prompts — free, forkable, and alive.

> **Bring your own model. Own your learning.**

## How it works

A harness you *run*, not a platform we host — no central brain.

- **The learning loop (per fork) — local.** Every session updates a model of *you* (`state.js`):
  what you've *demonstrated*, how you learn, your energy. Your curriculum re-derives from it, and
  your AI keeps the field **current** for you (it researches the live frontier on your own compute).
  No fixed syllabus, no cutoff, nothing central.
- **The contributor layer (per fork → upstream) — consensual.** If your learning produces something
  genuinely new (a better explanation, a new interactive, a new domain pack), your AI checks whether
  upstream already has it and — with your approval, **never mid-lesson** — proposes a PR. That's how
  the harness improves for everyone: opt-in contributions, not central aggregation.

## What you get

| | |
|---|---|
| 🗺 **Living curriculum map** | Your whole competency graph, color-coded by what you've actually *demonstrated*. Open `index.html`. |
| 📖 **Textbook + notebook** | Every concept becomes a page with the *field's canonical version* **and** *your own bridges*, side by side, plus misconception guardrails and self-tests. |
| 🔁 **A model of you** | `state.js` — mastery, how you learn, motivation. It compounds; sessions never start cold. |
| 🧪 **Generated interactives** | When text won't convey something, your tutor builds a self-contained interactive on the spot. |
| 🛰 **Expert layer** | Field-currency sweeps so the curriculum tracks the frontier. |

## Quickstart (60 seconds)

**The premium path — Claude Code** (included with Claude Pro/Max):
```bash
git clone https://github.com/croeroe/moursey.learn.git
cd moursey.learn
claude                      # Claude reads CLAUDE.md and becomes your tutor
open index.html            # a clean welcome screen — it comes alive as you learn
```
Then tell it your goal. It picks a domain from `domains/` (or builds a new one), initializes your model, and starts teaching.

**Other runtimes** (any model, BYO): see [`runtimes/`](runtimes/) for
[Claude Code](runtimes/claude-code.md), [Claude.ai Projects](runtimes/claude-projects.md), and
[ChatGPT custom GPTs](runtimes/chatgpt.md).

> **Starts clean.** Pick the bundled **AI-alignment** domain pack or have your tutor build one for
> your field. Your curriculum map, mastery, and textbook fill in from *your* sessions — nothing is
> pre-filled, because it's your model, not someone else's.

## Repo layout

```
CLAUDE.md / AGENTS.md   boot files — a model reads these and becomes the tutor
HARNESS.md              the operating manual (the brain)
protocol/               the-loop · session-close · principles · expert-layer · creating-a-domain
schema/                 the state.js data contract
index.html · state.js   the living dashboard + your model (ships as a clean welcome)
wiki/                   the living textbook+notebook (+ _concept template)
sessions/               append-only session logs
domains/                OPTIONAL starter packs (e.g. ai-alignment) + _template for new fields
contributions/          the contributor-layer candidate queue
runtimes/               how to run on your model of choice
```

## Contributing

The harness is the engine; **domains and features are community contributions.** Add a domain pack
for your field, or improve the interface. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Why "harness" and not "platform"?

A harness wraps a model to make it useful: the model is the intelligence; the harness is the hands,
eyes, memory, and boundaries. We deliberately don't host the intelligence (you already pay for it)
and we don't reinvent agent runtimes (Claude Code, OpenCode, et al. already exist). We build the one
thing none of them have: the **adaptive-learning layer** — the model-of-you, the regenerating
curriculum, the textbook-that-writes-itself, and the Expert that stays current.

## License

[MIT](LICENSE) © 2026 Catherine Roeroe. Learn freely.
