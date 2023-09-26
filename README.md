# About this project

This simple script automatically changes the names of Google Calendar events and tasks, adding emojis (or any other symbols) taken from their parent calendars and task lists, respectively. **Due the way it's implemented it forces the `<emoji><space><name>` naming convention for everything apart from the default calendar and task list.**

For example:
- Monthly event named `Netflix`  saved to the calendar `🔄 Billing` automatically gets renamed to  `🔄 Netflix`
- If the task `Pay Rachel for the tickets` is added to the task list `💸 Payments`,  it becomes `💸 Pay Rachel for the tickets`


New emojis are appended when the calendar / task list is changed, but the ones already in the title are **not**  replaced or removed in the process, e.g.:
- Once an event `🚆 Train to London` is moved from the calendar `🚆 Travel` to a one named `❌ Cancelled` it's renamed to `❌ 🚆 Train to London`

Importantly, this script doesn't *actually* check if the calendar / task list name starts with an emoji, it just blindly uses its first 2 characters. **Currently, the default calendar and task list (`My Calendar`,  `My Tasks`) are the only exceptions to this process. Anything else has to either follow the `<emoji><space><name>` naming convention, or be explicitly excluded in the code.** For example:
- Event `5K run` in the default calendar (`My Calendar`) will be safe from any changes...
- ... but if the calendar named `Exercise` is used instead, it will become `Ex 5K run`
- To prevent this, either follow the naming convention, using a name like `⚡ Exercise`, or manually modify the code to ignore that particular calendar

# Usage

1. Create a new [Apps Script](https://script.google.com/home) project
2.  In the *Editor* tab:
    -  Upload all the project files - `Emojify.gs`, `Calendar.gs` and `Tasks.gs`
    -  Add and authenticate Calendar and Tasks services
3.  Automate script execution - In the *Triggers* tab create a time-driven trigger running `main` every minute