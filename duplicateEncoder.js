/*
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples:
"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("
*/

var frequencyInString = function(string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

function duplicateEncode(word){
  word = word.toLowerCase();
  var finalString = '';
  for (var i = 0; i < word.length; i++) {
    if (frequencyInString(word, word.charAt(i)) < 2)  {
      finalString += '(';
    } else {
      finalString += ')';
    }
  }
  return finalString;
}
