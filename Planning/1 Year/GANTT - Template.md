
```dataviewjs
let path = require('path');   

const title = "Tasks with Start and Due Dates."
const usePriority = false
// Priority mapping based on emojis
const priorityMap = {
    "⏬": "Lowest",
    "🔽": "Low",
    "⏺️": "Medium",
    "⏫": "High",
    "🔺": "Highest"
};

const idEmoji = "🆔"
const dependsEmoji = "⛔"

// Filter tasks
const tasks = dv.pages('"Planning/1 Year"').sort(page => page.file.name, "asc").file.tasks//.where(t => (t.start || t.scheduled || t.due || t.completion) && (t.due || t.completion) );

// TODO : if duration and no start date but completed it goes in wrong place.
// Function to determine priority based on emoji in task text
const getPriority = (text) => {
    for (let emoji in priorityMap) {
        if (text.includes(emoji)) {
            return priorityMap[emoji];
        }
    }
    return "Medium"; // Default to Medium if no emoji is found
};

// Function to determine priority based on emoji in task text
const getTaskIDText = (text) => {
    if (text.includes(idEmoji)) {
        const idMatches = text.match(/🆔 (\w+)/);
        return idMatches[1].trim();
    }
    return ""; // Default to Medium if no emoji is found
};

const getDependsIDText = (text) => {
    if (text.includes(dependsEmoji)) {
        const idMatches = text.match(/⛔ ([\w,]+)/);
        return "after "+(idMatches[1].replace(",", " ").replace("  ", " ").trim());
    }
    return ""; // Default to Medium if no emoji is found
};


// Function to determine page name in task
const getTaskPageName = (task) => {
	let basename = path.basename(task.path, ".md");  
    return basename;
};

// Function to count completed and total subtasks
const countSubtasks = (subtasks) => {
    const completed = subtasks.filter(st => st.completed).length;
    return { completed, total: subtasks.length };
};

function getMermaid(task){
        if(task == null){
            return ""
        }
        
        const priority = getPriority(task.text);
		const taskIDText = getTaskIDText(task.text);
		const dependsIDText = getDependsIDText(task.text)
		
        let sanitizedTaskText = task.text
            .replace(/#[\w-]+/g, "") // Remove hashtags
            .replace(/(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*\d{4}-\d{2}-\d{2}[0-9:\/]*/gu, "") // Remove dates with emojis
            .replace(/(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*[\w,]*/gu, "") // Remove ids with emojis
            .replace(/[\n\r]+/g, " ") // Remove newlines
            .replace("[[", "").replace("]]", "") // Internal Links
            .trim(); // Trim leading/trailing spaces

        for (let emoji in priorityMap) { sanitizedTaskText = sanitizedTaskText.replace(emoji, "").trim(); }
        var dueDate = null
        var completionDate = null
        var startDate = null
        var scheduledDate = null
        const timeSplit = /[T\/\\]/; // "T"  

        if (task.due){
            dueDate = task.due.toString().split(timeSplit)[0]; // Extract YYYY-MM-DD
        }

        if (task.completion){
            task.completed = true
            completionDate = task.completion.toString().split(timeSplit)[0]; // Extract YYYY-MM-DD
        }

        if (task.start){
            startDate = task.start.toString().split(timeSplit)[0]; // Extract YYYY-MM-DD
        }

        if (task.scheduled){
            scheduledDate = task.scheduled.toString().split(timeSplit)[0]; // Extract YYYY-MM-DD
        }

        // Find subtasks of the current task
        const subtasks = task.subtasks || [];
        const { completed, total } = countSubtasks(subtasks);
        const progressMarker = total > 0 ? ` [${completed}/${total}]` : "";
        var milestoneText = ""
	    var metadata = [];
		/*if(sanitizedTaskText.search(/Submission/gi) > -1){
            metadata.push("vert")
        }*/
        if(sanitizedTaskText.search(/Submission|Crit|Critical/gi) > -1){
            metadata.push("crit")
        }
        if(sanitizedTaskText.search(/Submission|Milestone|Deadline|Upload/gi) > -1){
            metadata.push("milestone")
        }

        if(task.completed){
            metadata.push("done")
        } else if(task.start){
            metadata.push("active")
        }
        
        var durationText = null
        var duration = ""
        const durations = sanitizedTaskText.match(/\s([0-9]+)([dhw]|( (Days|Weeks|Months|Day|Week|Month)))/i)

        if( durations !== null  ){
            durationText = durations[0]
            duration = durationText.replace(/ (days|day)/i, "d").replace(/ (week|weeks)/i, "w")
            sanitizedTaskText = sanitizedTaskText.replace(durationText, "").trim()
        }

        var fromText = null
        var toText = null
        var datesText = null

        if (startDate){
            fromText = startDate
        } else if (scheduledDate){
            fromText = scheduledDate
        }

        if (completionDate){
            toText = completionDate
        } else if (dueDate){
            toText = dueDate
        }

		if(fromText && toText && completionDate){
            duration = ""
        } else if(fromText && !toText && duration){
            toText = duration
        } else if(!fromText && toText){
            //fromText = toText
            //toText = "1d"
        } else if(duration){
            toText = duration
        }

        if(!fromText && !toText)  {
            toText = "1d"
        }

        if(fromText){
            datesText = `${fromText}, ${toText}`
        } else {
            datesText = toText
        }
		
		// Fixme : It's choking on the id and depends 
		// Looks legit, is this a modern version of mermiad. try the online ??
		
		/*
	    if(taskIDText){
		    metadata.push(taskIDText)
	    }
	    
	    if(dependsIDText){
		    metadata.push(dependsIDText)
	    }
	    */
		if(datesText){
		    metadata.push(datesText)
	    }
	    
        var out = ""
        if (sanitizedTaskText) {
            //out = `${sanitizedTaskText}${progressMarker} :${milestoneText}${statusText}, ${datesText}`;
            out = `${sanitizedTaskText}${progressMarker} :`;
            console.log("metadata", metadata)
            out += metadata.join(", ")
        }
        return out
    }



//dv.el("pre", tasks)

if (tasks.length > 0) {
    let ganttData = `
\`\`\`mermaid
gantt
    title ${title}
    dateFormat YYYY-MM-DD
    axisFormat %m-%d
    tickInterval 1week
    `;
    let taskGroups = {}
	if(usePriority){
	    // Group tasks by priority
	    const priorityGroups = { "Lowest": [], "Low": [], "Medium": [], "High": [], "Highest": [] };
		
	    tasks.forEach(task => {
	        const priority = getPriority(task.text);
	        var mermaidText = getMermaid(task)
	        if (mermaidText) {
	            priorityGroups[priority].push(mermaidText);
	        }
	    });
	    taskGroups = priorityGroups;
    } else {
	    tasks.forEach(task => {
	        const taskGroup = getTaskPageName(task);
	        var mermaidText = getMermaid(task)
	        if(!taskGroups.hasOwnProperty(taskGroup)) {
		        taskGroups[taskGroup] = [];
	        }
	        if (mermaidText) {
	            taskGroups[taskGroup].push(mermaidText);
	        }
	    });
    }
	
    // Add tasks to Gantt chart by priority
    for (const taskGroup in taskGroups) {
        if (taskGroups[taskGroup].length > 0) {
            ganttData += `\nsection ${taskGroup}\n`;
            ganttData += taskGroups[taskGroup].join("\n");
        }
    }

    ganttData += `\n\`\`\``;

    // Debug mode: Show raw text
    dv.el("pre", ganttData);   
    dv.el("pre", ganttData.replace("```",""));
} else {
    dv.paragraph("No tasks found with Gantt chart marker and with start and due dates. Mark text with #Gantt and ensure both start and due dates are marked.");
}

```


