# Max-3 guard understood via single-run demo

User wrote demo.js pushing 4 items then `if (t.length > 3) blocked` → prints blocked, and fixed todo.js guard from <=3 to <3 inside add-branch. Verified add/list/empty behavior.

Evidence: demo.js + todo.js + node outputs on 2026-10-02. Implications: array length + guard now floor; Lesson 0003 verify checklist closable despite fresh-run memory reset being expected limit, next is file persistence choice or Lesson 0004 QA.
