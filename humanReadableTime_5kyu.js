/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function padZero(num) {
  return (num < 10) ? ('0' + num.toString()) : (num.toString());
}

function humanReadable(seconds) {
  var hour = Math.floor(seconds / 3600);
  var min = Math.floor((seconds - 3600 * hour) / 60);
  var sec = seconds - 3600 * hour - 60 * min;
  return padZero(hour) + ':' + padZero(min) + ':' + padZero(sec);
}
