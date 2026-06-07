# Run moursey.learn in a Claude.ai Project

Works on a normal **Claude.ai subscription** (no API key). State handling is more manual than
Claude Code (Claude can't write files directly in chat), but it's fully usable.

## Setup
1. Create a new **Project** in Claude.ai.
2. Add the harness instructions to the Project's **custom instructions**: paste the contents of
   `HARNESS.md` (and, if there's room, `protocol/principles.md`). Tell it: *"You are the tutor for
   this moursey.learn project. Follow HARNESS.md."*
3. Upload your domain pack (`domains/<domain>/knowledge-map.md`) and, once you have one, your
   `state.js` to the Project knowledge.

## Working loop
- Tell it your goal; it teaches following the Loop.
- At each **session close**, ask it to output your **updated `state.js`** and a **session log** —
  save those (paste back into a local `state.js` / `sessions/` file).
- To **see the dashboard**, keep a local clone of the repo, drop your latest `state.js` next to
  `index.html`, and open it in a browser.
- Next session, paste your latest `state.js` + newest session log back in, and say *"continue."*

## Tip
Because state is copy/paste here, keep sessions a bit longer and always end with the close protocol
(it produces the `state.js` + log you carry forward). The Claude Code runtime automates all of this.
