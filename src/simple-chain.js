const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);

    return this;
  },

  removeLink(position) {
    if (position <= 0 || position > this.chain.length || typeof position !== 'number') {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }

    if (position === 0) {
      this.chain.shift();
    }
    else if (position === this.chain.length) {
      this.chain.pop();
    } else {
      this.chain.splice(position - 1, 1);
    }
    
    return this;
  },

  reverseChain() {
    this.chain.reverse();

    return this;
  },

  finishChain() {
    let chainStr;

    if (this.chain.length !== 0) {
      chainStr = this.chain.reduce((acc, value) => String(acc).concat('~~', value));
      this.chain.length = 0;
    } else {
      chainStr = '';
    }

    return chainStr;
  }
};

module.exports = {
  chainMaker
};
