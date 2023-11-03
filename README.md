# About this project

This simple script automatically changes the names of Google Calendar events and tasks, adding emojis taken from their parent calendars and task lists, respectively. 

For example:
- Monthly event named `Netflix` saved to the calendar `🔄 Billing` automatically gets renamed to  `🔄 Netflix`
- If the task `Pay Rachel for the tickets` is added to the task list `💸 Payments`,  it becomes `💸 Pay Rachel for the tickets`


New emojis are appended when the calendar / task list is changed, but the ones already in the title are **not**  replaced or removed in the process, e.g.:
- Once an event `🚆 Train to London` is moved from the calendar `🚆 Travel` to a one named `❌ Cancelled` it's renamed to `❌ 🚆 Train to London`

Emojis are sourced from any part of the task / calendar name, not only from the beginning - for example, both `📆 Long term` and `Long term 📆` calendar names would result in the `📆` emoji being appended to all events.

# Usage

1. Create a new project in [Google Cloud Developer Console](https://console.cloud.google.com) - this will be necessary for authentication later
2. Create a new [Apps Script](https://script.google.com/home) project - this is where all the actual code and triggers will be
3.  In the *Editor* tab:
    -  Upload all the project files - `Emojify.gs`, `Calendar.gs` and `Tasks.gs`
    -  Add and authenticate Calendar and Tasks services
4.  Automate script execution - In the *Triggers* tab create a time-driven trigger running `main` every minute
5.  Done!