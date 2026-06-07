# Session close — so the next session resumes seamlessly

Run every time a session ends. Continuity is a feature; the close matters as much as the open.

1. **Commit the model.** `state.js` reflects only what the learner *demonstrated* this session
   (mastery, how-they-learn, energy). Never inflate from background/credentials.
2. **Log it.** Append `sessions/NNNN-title.md` (zero-padded, incrementing): what was covered, what
   *landed* vs. what's still mid-air, observations on how they learn, and the exact next step.
3. **Set the resume pointer.** Fill `state.js → resume`:
   - `nextEntryPoint` — one unambiguous "start here next time."
   - `warmupRetrieval` — 2–3 things to recall at the next open, before new material.
   - `openThreads` — live questions worth returning to.
   - `energyNote` — how to read/ask their energy next time.
   The dashboard surfaces this; you read it first on resume.
4. **Schedule retrieval.** What's due for spaced recall next open.
5. **(Optional) review contribution candidates.** Session-close is *one convenient* moment to empty
   the contributor queue (`contributions/candidates.md`) — but it is **not required** and not the
   only trigger; the learner can review anytime (the queue persists). If they want to: walk the
   candidates, dedup each against **live upstream**, and draft PRs for the ones they approve. See
   [`contributor-layer.md`](contributor-layer.md). Never let this disrupt the learning itself.
6. **Ask their energy.** They steer by it. Next session opens with retrieval, then their direction.

After this, a fresh model instance should be able to pick up perfectly from `state.js` + the newest
session log. Test that mentally before you stop.
