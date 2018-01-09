/*
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9. (you mean 1 to 9?)
*/

function hasValidNums(array) {
  var isFrom1To9 = array.reduce(function(bool, num) {
    return bool && (num >= 1) && (num <= 9);
  }, true);
  var hasNoDuplicate = array.every(function(num) {
    return array.indexOf(num) === array.lastIndexOf(num);
  });
  return isFrom1To9 && hasNoDuplicate;
}

function validSolution(board){
  // make sure all rows are valid
  if (!board.reduce(function(bool, row) { return bool && hasValidNums(row) }, true)) {
    return false;
  }
  // make sure all columns are valid
  for (var col = 0; col < 9; col++) {
    var column = board.map(function(row) { return row[col]; });
    if (!hasValidNums(column)) {
      return false;
    }
  }
  // make sure all sub squares of 3x3 are valid
  var subSquare = [];
  for (col = 0; col <= 6; col = col + 3) {
    for (row = 0; row <=6; row = row + 3) {
      for (var subCol = col; subCol <= col + 2; subCol++) {
        for (var subRow = row; subRow <= row + 2; subRow++) {
          subSquare.push(board[subRow][subCol]);
        }
      }
      if (!hasValidNums(subSquare)) {
        return false;
      }
      subSquare = [];
    }
  }
  return true;
}
