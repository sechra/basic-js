const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
const sequences = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];
  if (!(arr instanceof Array)) throw new Error('Error');
  
  const result = [];
  let isDiscarded = false;
  for (let i = 0; i < arr.length; i++) {
    if (isDiscarded) {
      isDiscarded = false;
    } else if (arr[i] === '--discard-next') {
      isDiscarded = true;
    } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
      result.pop();
    } else if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) result.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next') {
      if (arr[i - 1] !== undefined) result.push(arr[i - 1]);
    } else {
      
      if (!sequences.includes(arr[i])) result.push(arr[i]);
    }
  }
  return result;
};
