/*
================ GETTING CALENDARS ================
*/

function getCalendars() {
  calendarArray = []

  calendars = Calendar.CalendarList.list({minAccessRole : 'owner'});
  // Returns all the calendars OWNED by the authenticated user.

  for (let i = 0; i < calendars.items.length; i++) {
    const calendar = calendars.items[i];

    if (!calendar.summary.includes('My Calendar')) {
      // Skip the default Calendar
      calendarEmoji = calendar.summary.slice(0, 2).trim();
      // Get the first 2 chars of the title (some emojis have a length of 2), remove trailing whitespace
      calendarArray.push({'id' : calendar.id, 'emoji' : calendarEmoji})
      // Store each Calendar id and its associated emoji
    }
  }
  return calendarArray
}

/*
================ ADDING EMOJIS ================
*/

function addEventEmoji(event, emoji, calendarID) {
  newTitle = emoji + ' ' + event.summary;
  // Put emoji in front of the title
  event = Calendar.Events.patch({'summary' : newTitle}, calendarID, event.id)
  // Push changes
} 
