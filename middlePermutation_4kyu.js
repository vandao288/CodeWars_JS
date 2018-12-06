/*
Task

You are given a string s. Every letter in s appears once.

Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)

Example

For s = "abc", the result should be "bac".

The permutations in order are:
"abc", "acb", "bac", "bca", "cab", "cba"
So, The middle term is "bac".
Input/Output

[input] string s

unique letters (2 <= length <= 26)
[output] a string

middle permutation.

describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertEquals(middlePermutation("abc"),"bac")

Test.assertEquals(middlePermutation("abcd"),"bdca")

Test.assertEquals(middlePermutation("abcdx"),"cbxda")

Test.assertEquals(middlePermutation("abcdxg"),"cxgdba")

Test.assertEquals(middlePermutation("abcdxgz"),"dczxgba")

})})
*/

function middlePermutation(s) {
  //coding and coding..
  var sorted = s.split('').sort().join('');
  if (sorted.length === 2) return sorted;
  if (sorted.length === 3) return sorted[1] + sorted[0] + sorted[2];
  
  var midIndex = Math.ceil(sorted.length / 2) - 1;
  var mid = sorted[midIndex];
  sorted.split('').splice(midIndex, 1).join('');
  return mid + middlePermutation(sorted);
}
