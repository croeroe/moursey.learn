/* moursey.learn — DEMO instance (AI-alignment domain).
   Ships so index.html is ALIVE on first open. This is a generic demo, NOT a real person.
   Tell your tutor your goal and it replaces this with YOUR model (and resets mastery to
   what you actually demonstrate). See schema/state.schema.js for the full contract. */
window.LEARNED_STATE = {
  meta: { updated: "2026-06-06", session: 0, domain: "ai-alignment" },

  resume: {
    nextEntryPoint: "👋 This is a demo. Tell your tutor your real goal to start your own instance — or say “continue the AI-alignment track” to learn this map.",
    warmupRetrieval: ["Open a concept page (e.g. “What is a model”) and try its Test-Yourself prompts."],
    openThreads: ["What field do YOU want to learn? Your tutor will build the domain pack."],
    energyNote: "Open by asking the learner's energy; size the session to it."
  },

  learner: {
    name: "Demo learner",
    goal: "Become an AI alignment researcher (example goal — swap in your own)",
    intensity: "Variable — signals energy each session",
    direction: "Broad base → specialize (example).",
    background: [
      "This is an illustrative demo profile, not a real person.",
      "Your tutor builds this from how YOU engage — background tells it where to PROBE, not what you know."
    ],
    note: "DEMO instance. On a real start: replace the learner, and reset every node to what's actually demonstrated (mastery is earned, never assumed).",
    masteryScale: ["unknown", "exposed", "understands", "can-apply", "can-teach"],
    howSheLearns: [
      { dim: "How this fills in", read: "Each row is inferred from real signal over sessions: best-fit delivery, gaps, motivation, traps.", tag: "strong" },
      { dim: "Example — frame before mechanism", read: "Many learners need purpose before mechanism; the tutor adapts this per person.", tag: "growing" },
      { dim: "Example — a known gap", read: "Untested skills show as 'growing/unknown' until demonstrated.", tag: "unknown" }
    ]
  },

  tiers: [
    { id: "t0", label: "Tier 0 · Orientation & mental models", hint: "no math" },
    { id: "t1", label: "Tier 1 · How models actually work", hint: "conceptual; build the smallest real version" },
    { id: "t2", label: "Tier 2 · The alignment problem", hint: "rigorously" },
    { id: "t3", label: "Tier 3 · Technical fluency", hint: "enough to run & interpret experiments" },
    { id: "t4", label: "Tier 4 · Frontier & specialization", hint: "choose from what grips you" },
    { id: "tx", label: "Cross-cutting", hint: "developed continuously" }
  ],

  nodes: [
    { id: "capability-vs-alignment", label: "Capability vs alignment", tier: "t0", status: "understands", confidence: 0.8, note: "Demo: the gap between 'good at its objective' and 'the objective we wanted'." },
    { id: "the-landscape", label: "The landscape", tier: "t0", status: "unknown" },
    { id: "field-epistemics", label: "Field epistemics", tier: "t0", status: "unknown" },
    { id: "reading-papers", label: "Reading papers", tier: "t0", status: "unknown" },

    { id: "what-is-a-model", label: "What is a model", tier: "t1", status: "can-apply", confidence: 0.8, wiki: "wiki/what-is-a-model.html", note: "Demo concept page — shows the canonical + 'in your words' textbook format." },
    { id: "next-token-prediction", label: "Next-token prediction", tier: "t1", status: "exposed", confidence: 0.4 },
    { id: "nets-as-function-approximators", label: "Nets as function approximators", tier: "t1", status: "unknown" },
    { id: "tokenization-embeddings", label: "Tokenization & embeddings", tier: "t1", status: "unknown" },
    { id: "transformer-conceptually", label: "Transformer (conceptual)", tier: "t1", status: "unknown" },
    { id: "training-pipeline", label: "Training pipeline", tier: "t1", status: "unknown" },
    { id: "scaling-laws-emergence", label: "Scaling laws & emergence", tier: "t1", status: "unknown" },
    { id: "gradient-descent", label: "Gradient descent", tier: "t1", status: "understands", confidence: 0.55, wiki: "wiki/gradient-descent.html", note: "Demo generated-interactive — drag the ball; this is what 'the tutor builds an explainer' looks like." },

    { id: "specification-gaming", label: "Specification gaming", tier: "t2", status: "understands", confidence: 0.75 },
    { id: "goodharts-law", label: "Goodhart's law", tier: "t2", status: "unknown" },
    { id: "outer-vs-inner-alignment", label: "Outer vs inner alignment", tier: "t2", status: "unknown" },
    { id: "mesa-optimization", label: "Mesa-optimization", tier: "t2", status: "unknown" },
    { id: "reward-modeling", label: "Reward modeling", tier: "t2", status: "exposed", confidence: 0.45 },
    { id: "rlhf", label: "RLHF", tier: "t2", status: "exposed", confidence: 0.5 },
    { id: "sycophancy", label: "Sycophancy", tier: "t2", status: "can-apply", confidence: 0.8, note: "2026 frontier: monitored & steered via persona vectors (see field-pulse)." },
    { id: "deception-situational-awareness", label: "Deception & situational awareness", tier: "t2", status: "unknown" },
    { id: "honesty-calibration", label: "Honesty & calibration", tier: "t2", status: "unknown" },
    { id: "evals", label: "Evals", tier: "t2", status: "exposed", confidence: 0.35, note: "2026 live problems: evaluation awareness, monitoring blind spots." },
    { id: "evaluation-awareness", label: "Evaluation awareness", tier: "t2", status: "unknown", note: "Frontier (2026): models can tell an eval from real deployment and may act on it." },
    { id: "scalable-oversight", label: "Scalable oversight", tier: "t2", status: "exposed", confidence: 0.55, note: "2026: going theory→practice (debate, automated alignment researchers)." },

    { id: "read-run-modify-code", label: "Read / run / modify code", tier: "t3", status: "unknown" },
    { id: "experimental-loop", label: "The experimental loop", tier: "t3", status: "unknown" },
    { id: "sampling-decoding", label: "Sampling & decoding", tier: "t3", status: "unknown" },
    { id: "model-apis", label: "Model APIs", tier: "t3", status: "unknown" },
    { id: "interp-basics", label: "Interpretability basics", tier: "t3", status: "unknown" },

    { id: "mechanistic-interpretability", label: "Mechanistic interpretability", tier: "t4", status: "unknown" },
    { id: "scalable-oversight-deep", label: "Scalable oversight (deep)", tier: "t4", status: "unknown" },
    { id: "post-training-cai", label: "Post-training & Constitutional AI", tier: "t4", status: "unknown" },
    { id: "dangerous-capability-evals", label: "Dangerous-capability evals & red-teaming", tier: "t4", status: "unknown" },
    { id: "agent-safety", label: "Agent safety", tier: "t4", status: "unknown" },
    { id: "alignment-theory", label: "Alignment theory", tier: "t4", status: "unknown" },

    { id: "research-taste", label: "Research taste", tier: "tx", status: "exposed", confidence: 0.3 },
    { id: "writing-communication", label: "Writing & communication", tier: "tx", status: "unknown" },
    { id: "building-in-public", label: "Building in public", tier: "tx", status: "unknown" },
    { id: "reproducing-papers", label: "Reproducing papers", tier: "tx", status: "unknown" }
  ],

  edges: [
    ["capability-vs-alignment", "specification-gaming"],
    ["specification-gaming", "goodharts-law"],
    ["goodharts-law", "outer-vs-inner-alignment"],
    ["outer-vs-inner-alignment", "mesa-optimization"],
    ["what-is-a-model", "nets-as-function-approximators"],
    ["what-is-a-model", "next-token-prediction"],
    ["nets-as-function-approximators", "gradient-descent"],
    ["gradient-descent", "next-token-prediction"],
    ["next-token-prediction", "training-pipeline"],
    ["training-pipeline", "rlhf"],
    ["rlhf", "reward-modeling"],
    ["reward-modeling", "sycophancy"],
    ["rlhf", "sycophancy"],
    ["sycophancy", "scalable-oversight"],
    ["evals", "evaluation-awareness"],
    ["evals", "dangerous-capability-evals"],
    ["interp-basics", "mechanistic-interpretability"],
    ["experimental-loop", "evals"],
    ["read-run-modify-code", "experimental-loop"]
  ],

  sessions: [
    { n: 0, date: "2026-06-06", title: "Welcome / demo", summary: "Demo instance shipped with the AI-alignment domain so the dashboard is alive on first open. Tell your tutor your goal to start your own." }
  ],

  portfolio: [
    { title: "Learning = portfolio", note: "Every concept should terminate in a shippable artifact. Your tutor tracks them here." }
  ]
};
