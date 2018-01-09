/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
*/

function permutations(string) {
  var result = [];
  if (string.length <= 1) {
    return [string];
  } else if (string.length === 2) {
    var a = string.charAt(0);
    var b = string.charAt(1);
    return (a === b) ? [a + a] : [a + b, b + a];
  } else {
    a = string.charAt(0);
    var subPermtt = permutations(string.slice(1));
    subPermtt.forEach(function(subStr) {
      for (var i = 0; i < string.length; i++) {
        var newPermtt = subStr.slice(0, i) + a + subStr.slice(i);
        if (result.indexOf(newPermtt) === -1) {
          result.push(newPermtt);
        }
      }
    });
    return result;
  }
}
