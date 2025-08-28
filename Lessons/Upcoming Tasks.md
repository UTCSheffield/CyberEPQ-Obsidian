
<!-- QueryToSerialize: LIST regexreplace(regexreplace(regexreplace(Tasks.text,"#[\w-]+" ,""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*[\w,]*", ""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*\d{4}-\d{2}-\d{2}[0-9:\/]*", "") FROM "Planning" WHERE file.tasks FLATTEN file.tasks AS Tasks WHERE Tasks.due  WHERE !Task.completed SORT Tasks.due LIMIT 5 -->
<!-- SerializedQuery: LIST regexreplace(regexreplace(regexreplace(Tasks.text,"#[\w-]+" ,""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*[\w,]*", ""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*\d{4}-\d{2}-\d{2}[0-9:\/]*", "") FROM "Planning" WHERE file.tasks FLATTEN file.tasks AS Tasks WHERE Tasks.due  WHERE !Task.completed SORT Tasks.due LIMIT 5 -->
- [[Modules June Start]]: Overall Journal Reflection 7 days 📅 2025-11-24
- [[Modules September Start]]: Overall Journal Reflection 7 days 📅 2025-11-24
- [[Planning Tasks]]: Project Proposal A & Plan - Submission  📅 2025-12-15
- [[Project Execution]]: Planning Review ⏳ 2026-01-09 📅 2026-01-16
- [[Project Execution]]: Mid Project Review  📅 2026-02-14
<!-- SerializedQuery END -->


<!--
```dataview
TABLE WITHOUT ID regexreplace(regexreplace(regexreplace(Tasks.text,"#[\w-]+" ,""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*[\w,]*", ""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*\d{4}-\d{2}-\d{2}[0-9:\/]*", "") AS Task, Tasks.due AS "Due Date" FROM "Planning" WHERE file.tasks FLATTEN file.tasks AS Tasks WHERE Tasks.due  WHERE !Task.completed SORT Tasks.due LIMIT 5
```
-->

---

## Plenary

### What is your next action to do at home?