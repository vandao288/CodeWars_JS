/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

var isInteger = function(num) {
  return num === Math.round(num);
}

var isPrime = function(num) {
  if (!(isInteger(num)) || num <= 1) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  var mid = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= mid; i++) {
    if (!(num % i)) {
      return false;
    }
  }
  return true;
};

function primeFactors(n){
  var result = '';
  if (!(isInteger(n)) || n <= 1) {
    return 'Invalid input. Input must be integer and greater than 1';
  }
  var sub = n;
  for (var primeDiv = 2; primeDiv <= n / 2; primeDiv++) {
    var factor = 0;
    if (isPrime(primeDiv)) {
      var sub = sub / primeDiv;
      while (isInteger(sub)) {
        factor++;
        sub = sub / primeDiv;
      }
      sub = Math.round(sub * primeDiv);
      if (factor === 1) {
        result += '(' + primeDiv.toString()+')';
      } else if (factor > 1) {
        result += '(' + primeDiv.toString() + '**' + factor.toString() + ')';
      }
    }
  }
  return result;
}
