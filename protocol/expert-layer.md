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

## A per-fork capability, not a maintained central layer

This is something your AI does *for you*, on your own compute — **not** a central library that
anyone hosts, curates, or keeps fresh on a schedule. There is no maintained "Expert" and no central
brain. If a sweep produces something worth *sharing* (a fresher `field-pulse`, a better-structured
graph, a new domain pack), it flows back the same way everything else does: through the
**contributor layer** ([`contributor-layer.md`](contributor-layer.md)) — logged passively, deduped
against live upstream, proposed to the learner, contributed by PR with consent. Domain packs in
`domains/` are **optional starter examples**, not a curated catalog; your AI can build a pack for any
field on the fly ([`creating-a-domain.md`](creating-a-domain.md)).

## Honesty
State your training cutoff and that you're live-searching. Tag sources by credibility. Better to say
"I couldn't verify this" than to teach a confident-sounding unknown. The Expert's value is judgment,
not volume.
