/*
================ GET TASKS LIST ID'S AND EMOJIS ================
*/

function getTaskLists() {
  taskListArray = []

  const taskLists = Tasks.Tasklists.list();
  // Returns all the authenticated user's task lists.

  for (taskList of taskLists.items) {
    taskListArray.push({'id' : taskList.id, 'emoji' : extractEmoji(taskList.title)})
    // Store each Task List id and its associated emoji
  }
  console.log(taskListArray)
  return taskListArray
}

/*
================ ADD EMOJIS ================
*/

function addTaskEmoji(task, emoji, taskListID) {
  newTitle = emoji + ' ' + task.title;
  // Put emoji in front of the title
  task = Tasks.Tasks.patch({'title' : newTitle}, taskListID, task.id)
  // Push changes
}

/*
================ LOOP ================
*/

function tasksLoop() {
  for (taskList of getTaskLists()) { // For a given Task List
    tasks = Tasks.Tasks.list(taskList.id);
    
    for (task of tasks.items) { // For a given Task
      if (!task.title.includes(taskList.emoji)) {
        addTaskEmoji(task, taskList.emoji, taskList.id);
      }
    }
  }
} 
