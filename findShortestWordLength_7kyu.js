/*
x Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  var wordCollection =  s.split(' ');
  return wordCollection.reduce(function(min, word) { 
    return (min < word.length) ? (min) : (word.length); 
  }, wordCollection[0].length); 
}
