const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const counters = [];
  for (let r = 0; r < matrix.length; r += 1) {
    counters[r] = [];
    for (let c = 0; c < matrix[r].length; c +=1) {
      counters[r][c] = 0;
    }
  }
  const rows = matrix.length;
  const columns = matrix[0].length; // suppose all arrays have the same length
  
  function isValid (x, y) {
    if (x >= 0 && x < columns && y >= 0 && y < rows) {
      return true;
    }
    return false;
  }

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < columns; c += 1) {
      for (let y = r - 1; y <= r + 1; y += 1) {
        for (let x = c - 1; x <= c + 1; x += 1) {
          if (isValid(x, y) && (x !== c || y !== r)) {
            if (matrix[y][x] === true) {
              counters[r][c] += 1;
            }
          }  
        }
      }
    }
  }

  return counters;
}

module.exports = {
  minesweeper
};
