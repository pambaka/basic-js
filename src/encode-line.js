const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = '';

  for (let i = 0; i < str.length; i += 1) {
    let letter = str[i];
    let letterIndex = i;
    let counter = 0;

    while (str[letterIndex] === letter) {
      counter += 1;
      letterIndex += 1;
    }
    if (counter >= 2) {
      encodedStr += counter + letter;
    } else {
      encodedStr += letter;
    }

    i = letterIndex - 1;
  }

  return encodedStr;
}

module.exports = {
  encodeLine
};
