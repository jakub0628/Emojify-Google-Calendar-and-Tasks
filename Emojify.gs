/*
================ EXTRACT EMOJIS ================
*/

function extractEmoji(nameString) {
  emojiList = nameString.match(/(\u200d)|(\ufe0f)|\p{EPres}|\p{ExtPict}/gu)
  // match ZWJ, Variation Selector-16, {Emoji_Presentation} and {Extended_Pictographic} in the name

  if (emojiList === null) {
    return '' // no emoji
  } else {
    return emojiList.join('')
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