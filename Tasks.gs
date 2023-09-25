/*
================ GETTING TASK LISTS ================
*/

function getTaskLists() {
  taskListArray = []

  const taskLists = Tasks.Tasklists.list();
  // Returns all the authenticated user's task lists.

  for (let i = 0; i < taskLists.items.length; i++) {
    const taskList = taskLists.items[i];

    if (!taskList.title.includes('My Tasks')) {
      // Skip the default Task List
      taskListEmoji = taskList.title.slice(0, 2).trim();
      // Get first 2 chars of the title (some emojis have a length of 2), remove trailing whitespace
      taskListArray.push({'id' : taskList.id, 'emoji' : taskListEmoji})
        // Store each Task List id and its associated emoji
    }
  }
  return taskListArray
}

/*
================ ADDING EMOJIS ================
*/

function addTaskEmoji(task, emoji, taskListID) {
  newTitle = emoji + ' ' + task.title;
  // Put emoji in front of the title
  task = Tasks.Tasks.patch({'title' : newTitle}, taskListID, task.id)
  // Push changes
} 
