# File persistence beats fresh-run reset

User fixed ESM warning (import → require) and verified todo-file.js: add milk, add bread, list shows both, todos.json holds ["milk","bread"]. Proves fs read/write persists across runs, unlike memory-only todo.js.

Evidence: node runs + todos.json on 2026-10-02. Implications: fs + JSON now floor; note file version intentionally breaks spec.txt not-doing (no file save) — memory v1 stays spec-true, file v2 is stretch; next ZPD is max-3 across runs + spec update choice.
