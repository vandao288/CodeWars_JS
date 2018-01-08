/*
digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
*/

function digital_root(n) {
  if (n < 10) {
    return n;
  }
  while (n >= 10) {
    var sumDigits = n.toString().split('').reduce(function(sum, char) { return sum + parseInt(char) }, 0);
    n = digital_root(sumDigits);
  }
  return n;
}
