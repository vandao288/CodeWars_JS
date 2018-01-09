/*
  Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !
*/

var isInRange = function(num, begin, end) {
  return (num >= begin && num <= end);
};

function pigIt(str){
  var words = str.split(' ');
  var pigLatin = words.map(function(word) {
    if (isInRange(word.charCodeAt(0), 65, 90) || isInRange(word.charCodeAt(0), 97, 122)) {
      var pigTail = word.charAt(0) + 'ay';
      return word.slice(1) + pigTail;
    }
  });
  return pigLatin.join(' ');
}
