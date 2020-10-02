const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
   if (members == null || members.length == 0) 
     return false
  let name = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') 
      continue
    name.push(members[i].trim().slice(0,1).toUpperCase())
  }
  return name.sort().join('');
};
