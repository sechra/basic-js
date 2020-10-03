const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  let newStr = String(str);
  let newAddition = "";

  if (String(addition) && addition !== undefined) {
    newAddition = String(addition);
    if (additionRepeatTimes) {
      let newAdditionSeparator = "|";
      if (additionSeparator) {
        newAdditionSeparator = additionSeparator;
      }
      newAddition += newAdditionSeparator;
      newAddition = newAddition.repeat(additionRepeatTimes);
      newAddition = newAddition.slice(
        0,
        newAddition.length - newAdditionSeparator.length
      );
    }
  }

  if (repeatTimes) {
    let newSeparator = "+";
    if (separator) {
      newSeparator = separator;
    }
    newStr = newStr + newAddition + newSeparator;
    newStr = newStr.repeat(repeatTimes);
    newStr = newStr.slice(0, newStr.length - newSeparator.length);
  } else {
    newStr += newAddition;
  }

  return newStr;
};
  
