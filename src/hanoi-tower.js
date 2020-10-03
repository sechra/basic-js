const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let data = {
        turn: 0,
        second: 0
    }
    data.turn = Math.pow(2,disksNumber)-1;
    data.second = Math.floor(data.turn/(turnsSpeed/3600));
    return data;
}

