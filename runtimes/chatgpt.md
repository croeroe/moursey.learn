# Run moursey.learn with ChatGPT

Works on a **ChatGPT subscription** via a Custom GPT or a Project. Same idea as the Claude.ai
runtime: the model follows the harness protocol; you carry the state files between sessions.

## Custom GPT setup
1. Create a **Custom GPT** (or a Project).
2. In the GPT's **Instructions**, paste `HARNESS.md` and `protocol/principles.md`, prefaced with:
   *"You are the tutor for moursey.learn. Follow this operating manual exactly."*
3. Upload your domain pack (`domains/<domain>/knowledge-map.md`) and your `state.js` (once it exists)
   as **Knowledge** files.

## Working loop
- State the goal → it teaches via the Loop.
- At **session close**, have it print your updated `state.js` and a session log; save them.
- To view the **dashboard**, keep a local clone, drop your latest `state.js` beside `index.html`,
  and open it in a browser.
- Resume by re-uploading the latest `state.js` + newest log and saying *"continue."*

## Notes
- Any capable model works (the protocol is model-agnostic) — quality tracks the model's reasoning.
- For a hands-off, file-native experience, prefer the **Claude Code** runtime.
