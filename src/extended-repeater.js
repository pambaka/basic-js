const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = '';
  let defaultSeparator = '';

 function repeatStr (str, times, separator = defaultSeparator) {
  let repeatedStr = '';

  for (let i = 0; i < times - 1; i += 1) {
    repeatedStr += str + separator;
   }
   repeatedStr += str;

   return repeatedStr;
 }
 
 if (options.addition !== undefined) {
  defaultSeparator = '|';
  
  addition = repeatStr(options.addition, options.additionRepeatTimes, options.additionSeparator);
}

defaultSeparator = '+';

return (repeatStr(str + addition, options.repeatTimes, options.separator));
}

module.exports = {
  repeater
};
