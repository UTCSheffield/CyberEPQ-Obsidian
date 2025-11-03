<!-- QueryToSerialize: LIST regexreplace(regexreplace(regexreplace(Tasks.text,"#[\w-]+" ,""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*[\w,]*", ""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*\d{4}-\d{2}-\d{2}[0-9:\/]*", "") FROM "/" WHERE file.tasks FLATTEN file.tasks AS Tasks WHERE Tasks.due  WHERE !Task.completed  SORT Tasks.due LIMIT 6 -->
<!-- SerializedQuery: LIST regexreplace(regexreplace(regexreplace(Tasks.text,"#[\w-]+" ,""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*[\w,]*", ""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*\d{4}-\d{2}-\d{2}[0-9:\/]*", "") FROM "/" WHERE file.tasks FLATTEN file.tasks AS Tasks WHERE Tasks.due  WHERE !Task.completed  SORT Tasks.due LIMIT 6 -->
- [[Planning/1 Year/Modules.md|Modules]]: Module 3 7 days 📅 2025-10-19
- [[Planning/1 Year/Modules.md|Modules]]: Module 4 7 days 📅 2025-10-26
- [[Planning/Extended A/Modules.md|Modules]]: Module 2  14 days 📅 2025-10-26
- [[Planning/1 Year/Modules.md|Modules]]: Module 5 7 days 📅 2025-11-02
- [[Planning/1 Year/Modules.md|Modules]]: Module 6 7 days 📅 2025-11-02
- [[Planning/1 Year/Modules.md|Modules]]: Module 7 7 days 📅 2025-11-02
<!-- SerializedQuery END -->

<!--
```dataview
TABLE WITHOUT ID regexreplace(regexreplace(regexreplace(Tasks.text,"#[\w-]+" ,""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*[\w,]*", ""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*\d{4}-\d{2}-\d{2}[0-9:\/]*", "") AS Task, Tasks.due AS "Due Date" FROM "Planning" WHERE file.tasks FLATTEN file.tasks AS Tasks WHERE Tasks.due  WHERE !Task.completed SORT Tasks.due LIMIT 5
```
-->

---

## Plenary

### What is your next action to do at home?