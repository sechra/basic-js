const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrChain: [],
  getLength() {
     return this.arrChain.length
  },
  addLink(value) {
   (value === undefined) ? this.arrChain.push(`( )` ) : this.arrChain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position % 1 === 0 && position > 0 && position < this.arrChain.length) {
      this.arrChain.splice(position - 1, 1);
      return this;
    }else {
      this.arrChain =[];
      throw new Error();
    }
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
  },
  finishChain() {
    const result = [...this.arrChain].join('~~');
    this.arrChain = []
    return result
  }
};

module.exports = chainMaker;
