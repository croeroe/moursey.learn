/* ───────────────────────────────────────────────────────────────────────────
   state.schema.js — the data contract for a moursey.learn learner instance.

   The live file is `state.js` at the repo root. It is the single source of truth
   for the dashboard (index.html) and textbook (wiki/). You (the tutor model)
   author and update it; the HTML only renders it. Keep it legible markdown-ish
   JS — no build step, works by double-clicking the HTML (script tag, no fetch).

   Copy this shape into `state.js` and fill it in for your learner + domain.
   Everything is a HYPOTHESIS to be revised by evidence — especially mastery,
   which moves ONLY on demonstration (see protocol/principles.md #1).
   ─────────────────────────────────────────────────────────────────────────── */
window.LEARNED_STATE = {
  meta: { updated: "YYYY-MM-DD", session: 0, domain: "your-domain-id" },

  // Read FIRST on resume. The unambiguous entry point for next session.
  resume: {
    nextEntryPoint: "One sentence: exactly what to teach/do next.",
    warmupRetrieval: ["2–3 things to recall before new material."],
    openThreads: ["Live questions worth returning to."],
    energyNote: "How to read/ask this learner's energy next time."
  },

  learner: {
    name: "Learner",
    goal: "What they want to become / be able to do.",
    intensity: "e.g. variable — signals energy each session",
    direction: "Current focus / specialization vector (can be 'broad base first').",
    background: [
      "Bullet facts about who they are.",
      "NB: background = where to PROBE, not proof of skill. Assess on contact."
    ],
    note: "Working note to yourself: how to teach THIS person well (their rules, traps).",
    masteryScale: ["unknown", "exposed", "understands", "can-apply", "can-teach"],
    // Inferred from real signal, revised each session. tag: strong | growing | unknown
    howTheyLearn: [
      { dim: "Best-fit delivery", read: "...", tag: "strong" },
      { dim: "Known gap", read: "...", tag: "growing" }
    ]
  },

  // The knowledge graph: dependency-ordered competencies for the goal.
  tiers: [
    { id: "t0", label: "Tier 0 · Orientation", hint: "no prerequisites" },
    { id: "t1", label: "Tier 1 · Foundations", hint: "how it actually works" }
    // ...add tiers from coarse → frontier
  ],
  nodes: [
    // status ∈ masteryScale. confidence 0–1 (optional). wiki: a page path (optional).
    // note: short evidence/currency note (optional).
    { id: "concept-a", label: "Concept A", tier: "t0", status: "unknown" },
    { id: "concept-b", label: "Concept B", tier: "t1", status: "unknown",
      confidence: 0, wiki: "wiki/concept-b.html", note: "Why it matters / what's current." }
  ],
  edges: [
    // [prerequisite, unlocks] — drawn as dependency lines on the map.
    ["concept-a", "concept-b"]
  ],

  // Append-only highlights (full logs live in sessions/).
  sessions: [
    { n: 1, date: "YYYY-MM-DD", title: "...", summary: "What happened + what was demonstrated." }
  ],

  // Learning = portfolio. Track shippable artifacts + concrete targets.
  portfolio: [
    { title: "Artifact or target", note: "Status / link / why it matters." }
  ]
};
