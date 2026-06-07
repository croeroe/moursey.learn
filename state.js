/* moursey.learn — fresh instance (no domain selected yet).
   This ships CLEAN. Nothing is pre-filled. When you open the repo with your AI and tell it your
   goal, it picks or creates a domain pack (see domains/) and replaces this file with YOUR model.
   Full contract: schema/state.schema.js. */
window.LEARNED_STATE = {
  meta: { updated: "", session: 0, domain: null },
  welcome: true,
  resume: {
    nextEntryPoint: "👋 Welcome. Open this repo with your AI (see runtimes/), tell it your goal, and pick a domain from domains/ — or have it create a new one. It will initialize your learning here.",
    warmupRetrieval: [], openThreads: [], energyNote: ""
  },
  learner: {
    name: "", goal: "",
    masteryScale: ["unknown", "exposed", "understands", "can-apply", "can-teach"],
    howTheyLearn: []
  },
  tiers: [], nodes: [], edges: [], sessions: [], portfolio: []
};
