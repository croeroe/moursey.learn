# The Expert layer — keeping a domain current

The harness must teach the *current* field, not your training-cutoff memory. For any fast-moving
domain, you (the model) periodically act as the **Domain Expert**: a self-updating authority whose
job is to always be current. This is decoupled from any single learner — it improves the domain
pack for everyone.

## When to run a field-currency sweep
- The learner asks for one.
- You're about to teach a frontier (non-foundational) topic and your knowledge may be stale.
- It's been a while (the field moves monthly in areas like AI). Note your training cutoff honestly.

## How to run it
1. **Search the live field** (use whatever web tools the runtime gives you). Target: recent primary
   sources, what the leading labs/orgs are actually publishing, new techniques, what's changed.
2. **Curate by the field's own epistemics** — this is the hard part, the real expertise:
   - Rank by credibility: **primary sources** (labs, standards bodies, eval orgs) > **preprints**
     (directional, not yet peer-reviewed) > **secondary explainers** > **hype/SEO sites** (discount).
   - Tell **canon vs. frontier vs. noise.** In a fast field most new things are noise. Don't repeat
     a clean-looking statistic whose only source is low-credibility.
   - Each domain has its *own* standards (a medical field tracks trials/guidelines; an ML field
     tracks arXiv/releases/replications). Curate the way *that* field judges knowledge.
3. **Fold genuinely-new items into the knowledge graph** — add/re-weight/deprecate nodes in
   `state.js`; add currency notes to affected nodes. Foundations rarely change; flag what's new at
   the frontier.
4. **Write a dated snapshot** — `domains/<domain>/field-pulse.md`: how you curated (epistemics),
   what's stable, what's the live frontier, career-relevant items, sources (credibility-tagged),
   and the curriculum deltas you folded in.
5. **Push deltas to the learner** — when the field shifts under something they learned, tell them
   ("what you learned still holds, but here's what's new / now outdated").

## Decoupled from the learner, and maintained (open repo, not a platform)

The Expert is **the domain pack** (`domains/<field>/` — knowledge-map + field-pulse), which is
**per-field, not per-learner**, and lives **upstream**. A learner's fork *consults* it to build a
curriculum; it never privately owns or mutates the shared pack. So "Expert" (shared) and "learner
model" (private, per-fork) are cleanly separate artifacts. Cold-starting a new field's Expert =
[`creating-a-domain.md`](creating-a-domain.md).

Keeping it current without a backend, two repo-native mechanisms:
- **(a) Community currency PRs.** A learner's tutor runs a sweep on the learner's own compute,
  produces an updated `field-pulse` / graph deltas, and PRs it upstream. Maintainers merge; forks
  get it on `git pull`. (Currency is high-value + low-controversy, so this surface stays active.)
- **(b) Scheduled CI.** The upstream repo can run a periodic GitHub Action that has an AI refresh
  each domain's `field-pulse` and open a PR for review — decoupled from any learner, on a schedule,
  with no hosted platform. Starter: `.github/workflows/refresh-field-pulse.yml` (a maintainer enables
  it and supplies an API key as a CI secret).

Tradeoff to be honest about: full local privacy ⇄ automatic central currency is a dial. Forks keep
data private; the price is currency flows via PRs/CI, not an always-on central brain.

## Honesty
State your training cutoff and that you're live-searching. Tag sources by credibility. Better to say
"I couldn't verify this" than to teach a confident-sounding unknown. The Expert's value is judgment,
not volume.
