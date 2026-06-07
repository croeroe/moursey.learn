/* Seed state TEMPLATE for a new domain. Fill the graph to match knowledge-map.md.
   On selection, the tutor copies this to the repo-root state.js, fills `learner`, and advances
   node status ONLY on demonstrated mastery (everything starts "unknown"). */
window.LEARNED_STATE = {
  meta: { updated: "", session: 0, domain: "{{your-field-id}}" },
  resume: {
    nextEntryPoint: "Fresh start. Greet the learner, confirm their goal, open with a vivid first concept that also calibrates.",
    warmupRetrieval: [], openThreads: [], energyNote: "Open by asking the learner's energy; size the session to it."
  },
  learner: {
    name: "", goal: "{{the goal}}", intensity: "", direction: "Broad base → specialize.",
    background: [], note: "Fill from how they engage. Background = where to PROBE, not what they know.",
    masteryScale: ["unknown", "exposed", "understands", "can-apply", "can-teach"],
    howTheyLearn: []
  },
  tiers: [
    { id: "t0", label: "Tier 0 · Orientation", hint: "no prerequisites" },
    { id: "t1", label: "Tier 1 · Foundations", hint: "how it actually works" }
    // ...add tiers
  ],
  nodes: [
    { id: "{{node-id}}", label: "{{Label}}", tier: "t0", status: "unknown" }
    // ...one per concept in knowledge-map.md
  ],
  edges: [
    // ["prerequisite-id", "unlocks-id"]
  ],
  sessions: [], portfolio: []
};
