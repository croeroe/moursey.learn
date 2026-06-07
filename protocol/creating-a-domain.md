# Creating a new domain pack

When a learner's goal has no existing pack in `domains/`, you (the tutor) **author one.** This is
the Expert layer's *cold start* for a field (see [`expert-layer.md`](expert-layer.md)) — and a
finished pack is a contribution back to the upstream repo so others can pick it.

## Steps
1. **Scope the goal.** "What do you want to become / be able to do?" Pin down the target capability.
2. **Run an Expert-layer sweep** (`expert-layer.md`) to ground the pack in the *current* field, not
   your static memory: what matters, what's foundational vs. frontier, the field's own epistemics.
3. **Build the graph.** Copy `domains/_template/` → `domains/<field-id>/`. Author `knowledge-map.md`:
   dependency-ordered competencies, coarse → frontier, each node naming its prerequisites. Foundations
   first. Keep nodes small and teachable. Every strand should be able to end in a shippable artifact.
4. **Write the seed.** Fill `state.seed.js` to match the map (all `status: "unknown"`; encode
   prerequisites as `edges`).
5. **Write `field-pulse.md`** — a dated currency snapshot + the field's epistemics (so future
   sweeps know how to curate for this field).
6. **Initialize the learner.** Copy `state.seed.js` → repo-root `state.js`; fill `learner`; begin
   The Loop.
7. **Offer to contribute it upstream.** A new domain pack is the highest-value contribution —
   draft a PR so other learners can select this field. (Consensual; the learner submits.)

## Quality bar
- Dependency-ordered and honest about canon vs. frontier.
- States the field's epistemics (what counts as credible/current here).
- Teachable nodes; portfolio-oriented strands.
- No learner-specific content in the pack — it's shared curriculum, not one person's notes.
