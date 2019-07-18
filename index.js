function shout(string) { return string.toUpperCase()}
function whisper(string) {return string.toLowerCase()}
var consoleLog = call console.log
function logShout(string) {consoleLog.toUpperCase()}