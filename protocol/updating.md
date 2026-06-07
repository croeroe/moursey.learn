# Updating the harness (without losing the learner's progress)

A fork does **not** auto-update. When the upstream harness improves, the learner gets it by
**syncing** — and because this fork also holds their *personal learning data*, syncing must preserve
it. As the AI, you can do this for them so they never have to touch git.

## The instance / harness split (what's whose)
- **Harness files — update from upstream:** `HARNESS.md`, `protocol/`, `schema/`, the interface
  renderers (`index.html`, `wiki/index.html`, `wiki/_concept.template.html`), `runtimes/`, docs, and
  `domains/` starter packs.
- **Instance files — the learner's; never overwrite from upstream:** `state.js`, `sessions/`,
  generated `wiki/<concept>.html`, `contributions/candidates.md`.
- **Maintainer discipline:** upstream should **not change instance files after release.** If that
  holds, syncing a fork never conflicts.

## How to update (AI-managed — the default)
When the learner says "update yourself" / "get the latest", or you notice the fork is behind:
1. Ensure the upstream remote:
   `git remote get-url upstream || git remote add upstream https://github.com/croeroe/moursey.learn.git`
2. `git fetch upstream`
3. See what changed: `git log --oneline main..upstream/main` and `git diff --stat main upstream/main`.
4. Merge harness changes **while preserving instance files**:
   - `git merge upstream/main`. If it conflicts *only* on instance files, keep the learner's version:
     `git checkout --ours state.js sessions/ wiki/<their-pages> contributions/candidates.md`, then
     `git add -A && git commit`.
   - If a full merge looks risky, instead `git checkout upstream/main -- HARNESS.md protocol/ schema/
     index.html wiki/index.html wiki/_concept.template.html runtimes/ domains/` (harness paths only),
     leaving instance files untouched, then commit.
5. **Tell the learner what's new** in plain language (new protocol, better interface, fresher domain
   pack) and fold any relevant upgrade into their next session.

## The learner can also self-serve
GitHub's **"Sync fork"** button (or `git pull upstream main` / `gh repo sync`) works too — if
prompted about conflicts, keep `state.js` and `sessions/`.

> Note: this is *downstream* (improvements → fork). Sending improvements *upstream* is the
> [contributor layer](contributor-layer.md). Both are opt-in and learner-driven.
