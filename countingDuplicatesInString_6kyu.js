/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
  var inputAllSmall = text.toLowerCase();
  var inputArray = inputAllSmall.split('');
  var count = 0;
  for (var i = 0; i < inputArray.length - 1; i++) {
  	for (var j = i + 1; j < inputArray.length; j++) {
  	  if (inputArray[j] === inputArray[i]) {
  	  	count++;
  	    for (var k = j; k < inputArray.length; k++) {
          if (inputArray[k] === inputArray[i]) {
          	inputArray.splice(k, 1);
          }
        }
  	  }
  	}
  }
  return count; 
}