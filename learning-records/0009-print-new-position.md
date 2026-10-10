# Add-print shows new position, max-3 still holds

User fixed line 15 from always 1. milk to new_count + new_text. Verified fresh: add eggs → 1. eggs, add apple → 2. apple, list both, 3rd ok, 4th → error.

Evidence: todo-file.js + node sequence on 2026-10-02. Implications: print + guard + persistence all floor; Lesson 0003 done with polish, ready for QA/review or spec update.
