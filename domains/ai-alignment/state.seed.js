/* Seed state for the AI-alignment domain pack.
   When a learner picks this domain, the tutor copies this to the repo-root `state.js`, then fills
   in the `learner` profile and advances `nodes[].status` ONLY as the learner demonstrates mastery
   (everything starts at "unknown" — mastery is earned, never assumed). The graph below is the
   curriculum; keep it in sync with knowledge-map.md. Currency lives in field-pulse.md. */
window.LEARNED_STATE = {
  meta: { updated: "", session: 0, domain: "ai-alignment" },
  resume: {
    nextEntryPoint: "Fresh start. Greet the learner, confirm their goal, and open with a vivid first concept that also calibrates them.",
    warmupRetrieval: [], openThreads: [], energyNote: "Open by asking the learner's energy; size the session to it."
  },
  learner: {
    name: "", goal: "Become an AI alignment researcher",
    intensity: "", direction: "Broad base → specialize from what grips them.",
    background: [],
    note: "Fill from how they engage. Background = where to PROBE, not what they know.",
    masteryScale: ["unknown", "exposed", "understands", "can-apply", "can-teach"],
    howSheLearns: []
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
    { id: "capability-vs-alignment", label: "Capability vs alignment", tier: "t0", status: "unknown" },
    { id: "the-landscape", label: "The landscape", tier: "t0", status: "unknown" },
    { id: "field-epistemics", label: "Field epistemics", tier: "t0", status: "unknown" },
    { id: "reading-papers", label: "Reading papers", tier: "t0", status: "unknown" },
    { id: "what-is-a-model", label: "What is a model", tier: "t1", status: "unknown" },
    { id: "next-token-prediction", label: "Next-token prediction", tier: "t1", status: "unknown" },
    { id: "nets-as-function-approximators", label: "Nets as function approximators", tier: "t1", status: "unknown" },
    { id: "tokenization-embeddings", label: "Tokenization & embeddings", tier: "t1", status: "unknown" },
    { id: "transformer-conceptually", label: "Transformer (conceptual)", tier: "t1", status: "unknown" },
    { id: "training-pipeline", label: "Training pipeline", tier: "t1", status: "unknown" },
    { id: "scaling-laws-emergence", label: "Scaling laws & emergence", tier: "t1", status: "unknown" },
    { id: "gradient-descent", label: "Gradient descent", tier: "t1", status: "unknown" },
    { id: "specification-gaming", label: "Specification gaming", tier: "t2", status: "unknown" },
    { id: "goodharts-law", label: "Goodhart's law", tier: "t2", status: "unknown" },
    { id: "outer-vs-inner-alignment", label: "Outer vs inner alignment", tier: "t2", status: "unknown" },
    { id: "mesa-optimization", label: "Mesa-optimization", tier: "t2", status: "unknown" },
    { id: "reward-modeling", label: "Reward modeling", tier: "t2", status: "unknown" },
    { id: "rlhf", label: "RLHF", tier: "t2", status: "unknown" },
    { id: "sycophancy", label: "Sycophancy", tier: "t2", status: "unknown" },
    { id: "deception-situational-awareness", label: "Deception & situational awareness", tier: "t2", status: "unknown" },
    { id: "honesty-calibration", label: "Honesty & calibration", tier: "t2", status: "unknown" },
    { id: "evals", label: "Evals", tier: "t2", status: "unknown" },
    { id: "evaluation-awareness", label: "Evaluation awareness", tier: "t2", status: "unknown" },
    { id: "scalable-oversight", label: "Scalable oversight", tier: "t2", status: "unknown" },
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
    { id: "research-taste", label: "Research taste", tier: "tx", status: "unknown" },
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
  sessions: [],
  portfolio: []
};
