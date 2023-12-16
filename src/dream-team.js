const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const firstChars = members.filter(member => 
    typeof member === 'string').map(member => 
      member.trimStart()[0].toUpperCase()
  );

  if (firstChars.length === 0) {
    return false;
  }

  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < firstChars.length - 1; i += 1) {
      if (firstChars[i] > firstChars[i + 1]) {
        [firstChars[i], firstChars[i + 1]] = [firstChars[i + 1], firstChars[i]];
        isSwapped = true;
      }
    }
  } while (isSwapped);
  
  let teamName = '';
  for (let i = 0; i < firstChars.length; i += 1) {
    teamName += firstChars[i];
  }

  return teamName;
}

module.exports = {
  createDreamTeam
};
