/*
================ LOOPS ================
*/

// TASKS
function tasksLoop() {
  taskLists = getTaskLists()
  // Get an array of Task Lists

  for (let i = 0; i < taskLists.length; i++) {
    // For a given Task List
    taskListID = taskLists[i].id;
    emoji = taskLists[i].emoji;
    tasks = Tasks.Tasks.list(taskListID);
    
    for (let j = 0; j < tasks.items.length; j++) {
      // For a given Task
      task = tasks.items[j];

      if (!task.title.includes(emoji)) {
        addTaskEmoji(task, emoji, taskListID);
      }
    }
  }
} 

// CALENDARS
function calendarLoop() {
  calendars = getCalendars()
  // Get an array of Calendars

  for (let i = 0; i < calendars.length; i++) {
    // For a given Calendar
    calendarID = calendars[i].id;
    emoji = calendars[i].emoji;
    events = Calendar.Events.list(calendarID);
    
    for (let j = 0; j < events.items.length; j++) {
      // For a given Event
      event = events.items[j];

      if (!event.summary.includes(emoji)) {
        addEventEmoji(event, emoji, calendarID);
      }
    }
  }
} 

/*
================ MAIN ================
*/

function main() {
  try {
    tasksLoop()
    calendarLoop()
  }
  catch (err) {
    console.log(err.message);
  }
} 
