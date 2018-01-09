/*
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
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


function nextBigger(n){
  var str = n.toString();
  var numsInString = permutations(str);
  var nums = numsInString.map(function(string) { return parseInt(string); });
  var bigger = nums.filter(function(num) { return num > n });
  if (bigger.length === 0) {
    return -1;
  } else {
    return +bigger.reduce(function(min, num) { return (min < num) ? min : num; }, bigger[0]);
  }
}

var num = 141523795;
console.log(nextBigger(num));
