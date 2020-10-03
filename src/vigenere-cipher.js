const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
   constructor(boolean) {
        this.dir = boolean;
    }
  encrypt(message, key) {
   message = message.toUpperCase();
        key = key.toUpperCase();
        let res = "";
        let notLetterCounter = 0;

        for (let i = 0; i < message.length; i++) {
            if (message.charAt(i).match(/[\W\d]/)) {
                res += message.charAt(i);
                notLetterCounter++;
                continue;
                }
            let mCode = message.codePointAt(i);
            let kCode = key.codePointAt(i - notLetterCounter);
            if (i >= key.length) kCode = key.codePointAt((i - notLetterCounter)%key.length);
            let resCharCode = (mCode + kCode) % 26 + 65;
            res += String.fromCodePoint(resCharCode);
        }
        if (this.dir===false) return res.split('').reverse().join('');
        return res;
  }    
  decrypt(encryptedMessage, key) {
    key = key.toUpperCase();
        let res = "";
        let notLetterCounter = 0;

        for (let i = 0; i < encryptedMessage.length; i++) {
            if (encryptedMessage.charAt(i).match(/[\W\d]/)) {
                res += encryptedMessage.charAt(i);
                notLetterCounter++;
                continue;
            }
            let eCode = encryptedMessage.codePointAt(i);
            let kCode = key.codePointAt(i - notLetterCounter);
            if (i >= key.length) kCode = key.codePointAt((i - notLetterCounter)%key.length);
            let resCharCode = (eCode + 26 - kCode) % 26 + 65;
            res += String.fromCodePoint(resCharCode);
        }
        if (this.dir===false) return res.split('').reverse().join('');
        return res;
  }
}

module.exports = VigenereCipheringMachine;
