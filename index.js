function shout(string) {return string.toUpperCase()}
function whisper(string) {return string.toLowerCase()}
function logShout(string) {console.log(string.toUpperCase())}
function logWhisper(string) {console.log(string.toLowerCase())}
function sayHiToGrandma(string) {
  var uppercase = "HELLO" 
  //YES INDEED!
  var lowercase = "hello!"
  //I Can't hear you!
  var mixedcase = "I love you, Grandma."
  //I love you, too.
  
  if (string.toLowerCase() === lowercase) {return 'I can\'t hear you!'}
  else if (string.toUpperCase() === uppercase) {return 'YES INDEED!'}
  else if (string === "I love you, Grandma.") {return "I love you, too."}
}