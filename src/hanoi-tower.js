const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const totalTurns = 2 ** disksNumber - 1;
  const turnsPerSec = turnsSpeed / 3600;

  return {
    turns: totalTurns,
    seconds: parseInt(totalTurns / turnsPerSec),
  }
}

