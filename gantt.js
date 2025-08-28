	// Priority mapping based on emojis
const priorityMap = {
	    "⏬": "Lowest",
	    "🔽": "Low",
	    "⏺️": "Medium",
	    "⏫": "High",
	    "🔺": "Highest"
	};
   
    // Function to count completed and total subtasks
const countSubtasks = (subtasks) => {
	    const completed = subtasks.filter(st => st.completed).length;
	    return { completed, total: subtasks.length };
	};

	const getPriority = (text) => {
		    for (let emoji in priorityMap) {
		        if (text.includes(emoji)) {
		            return priorityMap[emoji];
		        }
		    }
		    return "Medium"; // Default to Medium if no emoji is found
		};
	
	function getMermaid(task){
		if(task == null){
			return ""
		}

		console.log("task", task)
		const priority = getPriority(task.text);

		let sanitizedTaskText = task.text
            .replace(/#[\w-]+/g, "") // Remove hashtags
            .replace(/(?:\p{Emoji_Presentation}|[\u2600-\u27BF])\s*\d{4}-\d{2}-\d{2}[0-9:\/]*/gu, "") // Remove dates with emojis
            .replace(/[\n\r]+/g, " ") // Remove newlines
            .trim(); // Trim leading/trailing spaces

        for (let emoji in priorityMap) { sanitizedTaskText = sanitizedTaskText.replace(emoji, "").trim(); }
        console.log("sanitizedTaskText", sanitizedTaskText)

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
		if(sanitizedTaskText.search(/Submission|Milestone|Deadline|Upload/gi) > -1){
			milestoneText = "milestone, "
        }
        
        // Add main task
        var statusText = "active"
        if(task.completed){
	        statusText = "done"
        }
        
        var durationText = null
        var duration = ""
		var datesText = null
		
		const durations = sanitizedTaskText.match(/\s([0-9]+)([dhw]|( (Days|Weeks|Months|Day|Week|Month)))/i)
		//console.log("durations", durations)
		if( durations !== null  ){
			durationText = durations[0]
		    duration = durationText.replace(/ (days|day)/i, "d").replace(/ (week|weeks)/i, "w")
		    //console.log("duration",duration) 
			sanitizedTaskText = sanitizedTaskText.replace(durationText, "").trim()
        }
        
		/*
		var dueDate = null
		var completionDate = null
		var startDate = null
		var scheduledDate = null
		*/

		var fromText = null
		var toText = null

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

		if(fromText && !toText && duration){
			toText = duration
		} else if(!fromText && toText){
			//fromText = toText
			//toText = "1d"
		} else if(duration){
			toText = duration
		}
		if(!fromText && !toText)  {
			toText = "1d"
		}

		if(fromText){ 
			datesText = `${fromText}, ${toText}`
		} else {
			datesText = toText
		}

        var out = ""
        if (sanitizedTaskText) {
            out = `${sanitizedTaskText}${progressMarker} :${milestoneText}${statusText}, ${datesText}`;
        }
		
        return out
    }

    module.exports = getMermaid