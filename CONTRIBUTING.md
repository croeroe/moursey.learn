# Contributing to moursey.learn

The harness is the engine; **domains and features are where the community compounds.** Two main ways
to contribute, plus the usual fixes.

> **This *is* the contributor layer.** Because every learner runs a private fork, the harness
> improves for everyone only through consensual contributions back to upstream — there's no central
> aggregation by design (your learning stays yours). As you learn, your AI passively notes novel
> improvements, checks them against **live upstream** (so it never re-proposes what already exists),
> and drafts PRs *with your approval* — never interrupting the lesson. See
> [`protocol/contributor-layer.md`](protocol/contributor-layer.md).

## 1. Contribute a domain pack (highest value)

A domain pack is the knowledge a tutor needs to teach a field well. Add one under
`domains/<your-domain>/`:

```
domains/<your-domain>/
├── README.md          what this pack covers, who it's for, prerequisites
├── knowledge-map.md   the competency graph: tiers + nodes (dependency-ordered, coarse → frontier)
└── field-pulse.md     (optional) a dated currency snapshot to seed the Expert layer
```

Good domain packs:
- Are **dependency-ordered** — foundations first, frontier last; every node names its prerequisites.
- State each field's **epistemics** — what counts as credible/current knowledge in *this* field
  (so the Expert layer can curate correctly).
- Are honest about what's **canon vs. frontier**.
- Orient toward **doing** — each strand should be able to terminate in a real artifact.

You don't need to author `state.js` — the tutor seeds a learner's state from your `knowledge-map.md`.

## 2. Contribute interface / feature components

The interface is dependency-free, self-contained HTML that renders `state.js` (data/view split — no
build step). Improvements welcome: better map layouts, new concept-page templates, accessibility,
new interactive-explainer patterns under `wiki/`. Keep it **zero-dependency and offline-first** —
no CDN, nothing to rot.

## 3. Improve the protocol

`HARNESS.md` and `protocol/` are the pedagogy. If you have evidence (from real use) that a change
teaches better, open a PR with the rationale. Principles should be **earned**, not asserted.

## Ground rules
- **Zero runtime dependencies** in the interface. Self-contained HTML only.
- **Model-agnostic.** Instructions must work for any capable model, not just one vendor.
- **Honesty over hype**, in content and in docs — it's a learning tool; correctness is the product.
- Keep personal learner data out of PRs (your own `state.js`/`sessions/` stay in your fork).

Open an issue first for anything large. Thanks for helping people learn freely.
