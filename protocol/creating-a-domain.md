# Creating a new domain pack

When a learner's goal has no existing pack in `domains/`, you (the tutor) **author one.** This is
the Expert layer's *cold start* for a field (see [`expert-layer.md`](expert-layer.md)) — and a
finished pack is a contribution back to the upstream repo so others can pick it.

## Keep it minimal — teach first, grow later
Do **not** build a full curriculum before the first lesson. A **small Tier 0–1 starter graph** (a
handful of nodes) is enough to begin. Greet, ship the small pack, teach immediately, and expand the
map across sessions. A long silent build violates "no learner meta-work" — they came to learn, not
to watch you author a syllabus.

## Steps
1. **Scope the goal.** Pin the target capability (e.g. "good at chess" → tactics + basic endgames +
   an opening or two).
2. **(Fast-moving fields only) run a quick Expert-layer sweep** ([`expert-layer.md`](expert-layer.md))
   to ground the pack in the current field. **Skip this for stable subjects** (chess, math, music,
   languages, history) — use the established canon.
3. **Build a SMALL graph.** `cp -r domains/_template domains/<field-id>/` (stable field? delete the
   copied `field-pulse.md` stub — you don't need it). Author `knowledge-map.md`
   with a Tier 0–1 starter (dependency-ordered, each node naming prerequisites, nodes small and
   teachable). Don't try to be complete — you'll grow it across sessions.
4. **Write the seed.** Fill `state.seed.js` to match the map (all `status: "unknown"`; prerequisites
   as `edges`).
5. **Initialize the learner.** Copy `state.seed.js` → repo-root `state.js`; fill `learner`; begin the Loop.
6. **(Later, optional)** write `field-pulse.md` if the field moves, and **offer to contribute the
   pack upstream** so others can pick it. (Consensual; the learner submits — not mid-lesson.)

## Quality bar
- Dependency-ordered and honest about canon vs. frontier. **Small is fine; complete is not required.**
- (Fast-moving fields) states the field's epistemics for future sweeps.
- Teachable nodes; strands that can end in something showable.
- No learner-specific content in the pack — it's shared curriculum, not one person's notes.
