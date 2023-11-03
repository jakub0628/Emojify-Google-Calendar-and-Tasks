/*
================ GET CALENDAR ID'S AND EMOJIS ================
*/

function getCalendars() {
  calendarArray = []

  calendars = Calendar.CalendarList.list({minAccessRole : 'owner'});
  // Returns all the calendars OWNED by the authenticated user.

  for (calendar of calendars.items) {
    calendarArray.push({'id' : calendar.id, 'emoji' : extractEmoji(calendar.summary)})
    // Store each Calendar id and its associated emoji
  }
  console.log(calendarArray)
  return calendarArray
}

/*
================ ADD EMOJIS ================
*/

function addEventEmoji(event, emoji, calendarID) {
  newTitle = emoji + ' ' + event.summary;
  // Put emoji in front of the title
  event = Calendar.Events.patch({'summary' : newTitle}, calendarID, event.id)
  // Push changes
}

/*
================ LOOP ================
*/

function calendarLoop() {
  for (calendar of getCalendars( )) { // For a given Calendar
    events = Calendar.Events.list(calendar.id);
    
    for (event of events.items) { // For a given Event
      if (!event.summary.includes(calendar.emoji)) {
        addEventEmoji(event, calendar.emoji, calendar.id);
      }
    }
  }
} 
