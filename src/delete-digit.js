const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = String(n)
  const nArray = [];

  nArray[0] = Number(nStr.slice(1, nStr.length));
  nArray[nStr.length - 1] = Number(nStr.slice(0, nStr.length - 1));

  for (i = 1; i < nStr.length - 1; i +=1) {
    nArray[i] = Number(nStr.slice(0, i) + nStr.slice(i + 1, nStr.length));
  }

  let maxNum = nArray[0];
  
  for (let i = 1; i < nStr.length; i += 1) {
    if (maxNum < nArray[i]) {
      maxNum = nArray[i];
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
