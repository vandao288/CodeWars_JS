/*
Task
You are given an integer n(in string format). Find the smallest integer m such that both m and its reversed version (a number that is obtained by reversing the order of its digits) are not less than n.

Note: After reversing all leading zeros are omitted.

Examples
For n = "5314", the result should be `"5316".

Because both numbers 5316 and 6135 are not less than 5314.

The result is not 5315 because 5135(5315 reversed) < 5314.

For n = "23456", the result is also "23456".

Input/Output
[input] string n

string representation of a positive integer n. 0 < n < 10^100

[output] a string

string representation of an integer m
*/

var reverseNumber = function(num) {
  var numToString = num.toString();
  var reverseString = '';
  for (var i = numToString.length - 1; i >= 0; i--) {
    reverseString += numToString.charAt(i);
  }
  return parseFloat(reverseString);
};

function doublyNotLess(n) {
  n = parseFloat(n);
  var m = n;
  while (reverseNumber(m) < n) {
    m++;
  }
  return m.toString();
}
