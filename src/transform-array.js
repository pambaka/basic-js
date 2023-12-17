const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }

  const newArr = [];
  let i = 0;

  for (let j = 0; j < arr.length; j += 1) {
    if (typeof arr[j] !== 'string') {
      newArr[i] = arr[j];
      i += 1;
    } else {
      let word = arr[j];

      switch (word) {
        case '--double-next':
          if (j + 1 === arr.length) {
            break;
          }
          newArr[i] = arr[j + 1];
          i += 1;
          break;    
        case'--double-prev':
          if (i === 0) {
            break;
          }
          newArr[i] = newArr[i - 1];
          i += 1;
          break;
        case '--discard-prev': 
          newArr[i - 1] = null;
          break;    
        case '--discard-next': 
          newArr[i] = null;
          i += 1;
          j += 1;
          break;
        default:
          newArr[i] = arr[j];
          i += 1;
          break;
      }
    }     
  }

  const transformedArr = newArr.filter(num => num !== null);
  return transformedArr;
}

module.exports = {
  transform
};
