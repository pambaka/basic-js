const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (value = true) {
    this.isDirect = value;

    const N = 26; // number of letters
    this.firstLetterCode = 65;
    this.letters = [];
    this.re = /[A-Z]/;

    for (let i = 0; i < N; i += 1) {
      this.letters[i] = String.fromCharCode((this.firstLetterCode + i) % N + this.firstLetterCode); 
    }
  }

  encrypt(str, value) {
    if (!str || !value) {
      throw new Error('Incorrect arguments!');
    }

    let upperStr = str.toUpperCase();
    let upperValue = value.toUpperCase();
    let encLetter = ''; 
    let encStr = '';
    let key = '';
    let shift = 0;

    for (let i = 0; i < str.length; i += 1) {
      if (String(upperStr[i]).match(this.re)) {
        key += upperValue[(i - shift) % value.length];
      } else {
        key += ' ';
        shift += 1;
      }
    }
    
    for (let i = 0; i < str.length; i += 1) {
      if (String(upperStr[i]).match(this.re)) {
      const charCode = (this.letters.indexOf(upperStr[i]) + 
        this.letters.indexOf(key[i])) % this.letters.length + this.firstLetterCode;
      
      encLetter = String.fromCodePoint(charCode);
      encStr += encLetter;
      }
      else encStr += upperStr[i];
    }

    if (!this.isDirect) {
      let reversedStr = encStr.split('').reverse().join('');
      
      return reversedStr;
    }
    
    return encStr;
  }

  decrypt(str, value) {
    if (!str || !value) {
      throw new Error('Incorrect arguments!');
    }

    let upperStr = str.toUpperCase();
    let upperValue = value.toUpperCase();
    let decLetter = '';
    let decStr = '';
    let key = '';

    let shift = 0;
    for (let i = 0; i < str.length; i += 1) {
      if (String(upperStr[i]).match(this.re)) {
        key += upperValue[(i - shift) % value.length];
      } else {
        key += ' ';
        shift += 1;
      }
    }

    for (let i = 0; i < str.length; i += 1) {
      if (String(upperStr[i]).match(this.re)) {
        const charCode = (this.letters.indexOf(upperStr[i]) - this.letters.indexOf(key[i]) 
          + this.letters.length) % this.letters.length + this.firstLetterCode;
        
        decLetter = String.fromCodePoint(charCode);
        decStr += decLetter;
      } else {
        decStr += upperStr[i];
      }
    }

    if (!this.isDirect) {
      let reversedStr = decStr.split('').reverse().join('');
      
      return reversedStr;
      }

    return decStr;
  }
}

module.exports = {
  VigenereCipheringMachine
};