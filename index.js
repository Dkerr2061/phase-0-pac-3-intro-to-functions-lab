function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  return console.log(string.toUpperCase());
}

function logWhisper(string) {
  return console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  let result = '';

  if(string === string.toLowerCase()) {
    result = "I can't hear you!"
  } else if(string === string.toUpperCase()) {
    result = 'YES INDEED!';
  } else if(string === "Let's have dinner together!") {
    result = 'I would love to!'
  }
  return result;
}