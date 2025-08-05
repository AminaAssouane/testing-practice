export function capitalize(str) {
  if (str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str.charAt(i);
  }
  return newStr;
}

export let calculator = {
  add: function (a, b) {
    return a + b;
  },

  substract: function (a, b) {
    return a - b;
  },

  divide: function (a, b) {
    return a / b;
  },

  multiply: function (a, b) {
    return a * b;
  },
};

function checkLowerCase(character) {
  if (character === character.toLowerCase()) return true;
}

function checkLetter(character) {
  chr = character.codePointAt(0);
  if ((chr >= 65 && chr <= 90) || (chr >= 97 && chr <= 122)) return true;
}

export function caesarCipher(str, key) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (checkLetter(str.charAt(i))) {
      if (checkLowerCase(str.charAt(i))) {
        console.log(str.charAt(i) + " is a lowercase letter");
        if (str.codePointAt(i) + key > 122) {
          newStr += String.fromCodePoint(str.codePointAt(i) - 26 + key);
        } else {
          newStr += String.fromCodePoint(str.codePointAt(i) + key);
        }
      } else {
        console.log(str.charAt(i) + " is an uppercase letter");
        if (str.codePointAt(i) + key > 90) {
          newStr += String.fromCodePoint(str.codePointAt(i) - 26 + key);
        } else {
          newStr += String.fromCodePoint(str.codePointAt(i) + key);
        }
      }
    } else {
      console.log("it's a punctuation");
      newStr += str.charAt(i);
    }
  }
  return newStr;
}
