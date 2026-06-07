# Knowledge Map — AI alignment researcher (v1)

> Dependency-ordered, broad-base-first. A **graph the tutor selects from**, not a syllabus to march
> through. Living — reshape as the field moves (via the Expert layer) and as the learner progresses.
> Node ids map to `state.js`. Foundations rarely change; the frontier (Tier 4) does.

## Tier 0 — Orientation & mental models *(no math)*
- **capability-vs-alignment** — the gap between "good at its objective" and "the objective we
  wanted." Why the gap gets *more* dangerous as systems improve.
- **the-landscape** — major threat models and research agendas; who works on what.
- **field-epistemics** — how alignment researchers reason; what counts as evidence.
- **reading-papers** — reading an ML paper without drowning (skim → claims → method).

## Tier 1 — How models actually work *(conceptual; build the smallest real version)*
- **what-is-a-model** — a model = an input→output function whose rules are *grown from data*;
  knowledge stored in billions of weights we can't directly read. The floor under everything.
- **next-token-prediction** — what pretraining literally optimizes.
- **nets-as-function-approximators** — architecture vs. weights; loss; the *idea* of learning.
- **tokenization-embeddings** — how text becomes numbers.
- **transformer-conceptually** — attention as "looking at relevant context"; why it scaled.
- **training-pipeline** — pretraining → SFT → RLHF/RLAIF; what each stage does to behavior.
- **scaling-laws-emergence** — why bigger becomes qualitatively different.
- **gradient-descent** — how a model tunes its billions of knobs = the "learning" in ML.

## Tier 2 — The alignment problem, rigorously
- **specification-gaming** — reward hacking; optimizing a proxy ≠ getting what you want.
- **goodharts-law** · **outer-vs-inner-alignment** · **mesa-optimization**
- **reward-modeling** — how RLHF encodes preferences, and what it misses.
- **rlhf** — human feedback as a training signal.
- **sycophancy** — telling people what they rate highly vs. what's true/helpful.
- **deception-situational-awareness** · **honesty-calibration**
- **evals** — how you *measure* capability and alignment; what makes an eval good.
- **evaluation-awareness** — models detecting they're being evaluated (a frontier eval problem).
- **scalable-oversight** — supervising systems too capable to easily judge.

## Tier 3 — Core technical fluency *(enough to run & interpret experiments, AI-assisted)*
- **read-run-modify-code** · **experimental-loop** (hypothesis → minimal experiment → result →
  interpretation) · **sampling-decoding** · **model-apis** · **interp-basics**

## Tier 4 — Frontier & specialization *(choose from what grips you)*
- **mechanistic-interpretability** · **scalable-oversight-deep** (debate, weak-to-strong) ·
  **post-training-cai** · **dangerous-capability-evals** (red-teaming) · **agent-safety** ·
  **alignment-theory**

## Cross-cutting *(developed continuously)*
- **research-taste** — choosing what's worth working on.
- **writing-communication** — the write-up that makes work legible (blog / Alignment Forum / paper).
- **building-in-public** — GitHub, feedback loops, visibility (how non-traditional candidates get hired).
- **reproducing-papers** — the single highest-leverage portfolio move.
