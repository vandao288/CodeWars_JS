/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

function list(names){
  var nameArray = names.map(function(obj) { return obj['name']; });
  if (nameArray.length === 0) {
    return '';
  } else if (nameArray.length === 1) {
    return nameArray[0];
  } else {
    return nameArray.slice(0, nameArray.length - 1).join(', ') + ' & ' + nameArray[nameArray.length - 1];
  }
}
