# The contributor layer — giving back, without disrupting learning

The harness improves for everyone **not** through central aggregation (there's no platform) but
through **consensual contributions** back to the upstream repo. This layer observes the learning
process and proposes contributions — carefully, so it never gets in the way of learning.

## What counts as a contribution
Something genuinely *new* that the process produced and that **isn't already in the forked repo**:
- a better explanation or teaching method for a concept,
- a new interactive explainer (`wiki/*.html`) worth reusing,
- a new or improved **domain pack**,
- a protocol/pedagogy tweak that demonstrably helped.

## The mechanism — decoupled, so it never interrupts

1. **Detect passively & continuously.** When you generate something novel during learning, log it
   *cheaply* — one line appended to `contributions/candidates.md` — and keep teaching. **Never pause
   the lesson** to talk about contributing.
2. **Propose on the learner's terms, at a safe moment.** Do not push proposals mid-flow. Surface
   candidates only when (a) the learner asks, (b) the learner signals a pause / stop / topic-switch,
   or (c) as a quiet, ignorable note ("N drafts ready"). Detection and proposal are **decoupled** —
   the queue persists — so this needs no clean "session end." A learner with ambient, never-ending
   learning empties the queue whenever they like.
3. **Dedup against live upstream first.** Before proposing, check the upstream repo (git / `gh` /
   web) — the thing may **already exist** (added after the fork). If it does: offer to pull it in
   instead. If not: draft a clean, **generalized** PR (strip the learner's personal data).
4. **Always get approval.** Nothing leaves the fork without explicit consent. The learner submits.

## The prime constraint: don't disrupt
Learning comes first, always. The expensive work (upstream check, PR drafting) happens **on demand**
when the learner reviews candidates — never during teaching. When in doubt: log it, stay silent,
move on.

> This replaces the old "product loop." There is no central brain and no automatic aggregation —
> just an observer that drafts PRs you approve. Currency + content are per-fork capabilities (see
> `expert-layer.md`); *sharing* them is this layer, opt-in.
