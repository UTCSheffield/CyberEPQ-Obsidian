<!-- QueryToSerialize: LIST regexreplace(regexreplace(regexreplace(Tasks.text,"#[\w-]+" ,""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*[\w,]*", ""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*\d{4}-\d{2}-\d{2}[0-9:\/]*", "") FROM "/" WHERE file.tasks FLATTEN file.tasks AS Tasks WHERE Tasks.due  WHERE !Task.completed  SORT Tasks.due LIMIT 3 -->
<!-- SerializedQuery: LIST regexreplace(regexreplace(regexreplace(Tasks.text,"#[\w-]+" ,""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*[\w,]*", ""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*\d{4}-\d{2}-\d{2}[0-9:\/]*", "") FROM "/" WHERE file.tasks FLATTEN file.tasks AS Tasks WHERE Tasks.due  WHERE !Task.completed  SORT Tasks.due LIMIT 3 -->
- [[3 - Referencing]]: Do "Referencing" / On the “Project Writing Assistance" page ( [1 Year](https://study.cyberepq.org.uk/mod/scorm/view.php?id=41555)  or [Extended](https://study.cyberepq.org.uk/mod/scorm/view.php?id=42103) ) 📅 2025-10-14
- [[Modules June Start]]: Specialist Module  14 days 📅 2025-11-16
- [[Planning/1 Year/Modules.md|Modules]]: Specialist Module 7 days  📅 2025-11-16
<!-- SerializedQuery END -->

<!--
```dataview
TABLE WITHOUT ID regexreplace(regexreplace(regexreplace(Tasks.text,"#[\w-]+" ,""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*[\w,]*", ""), "(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*\d{4}-\d{2}-\d{2}[0-9:\/]*", "") AS Task, Tasks.due AS "Due Date" FROM "Planning" WHERE file.tasks FLATTEN file.tasks AS Tasks WHERE Tasks.due  WHERE !Task.completed SORT Tasks.due LIMIT 5
```
-->

---

## Plenary

### What is your next action to do at home?