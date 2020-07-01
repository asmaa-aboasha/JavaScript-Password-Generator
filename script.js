// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays
var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var alphaUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Variable Declaration
var confirmLength = "";
var confirmSpecialChar;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters in password
function generatePassword() {
  var confirmLength = prompt(
    "How many characters would you like your password to contain?"
  );

  while (confirmLength < 8 || confirmLength > 128) {
    alert(
      "Please choose a length of at least 8 characters and no more than 128 characters."
    );
    var confirmLength = prompt(
      "How many characters would you like your password to contain?"
    );
  }

  var confirmSpecialChar = confirm(
    "Click OK to confirm including special characters."
  );
  var confirmNumber = confirm(
    "Click OK to confirm including numeric characters."
  );
  var confirmLowerCase = confirm(
    "Click OK to confirm including lowercase characters."
  );
  var confirmUpperCase = confirm(
    "Click OK to confirm including uppercase characters."
  );

  var passwordChar = [];

  if (confirmSpecialChar) {
    passwordChar = passwordChar.concat(specialChar);
  }

  if (confirmNumber) {
    passwordChar = passwordChar.concat(number);
  }

  if (confirmLowerCase) {
    passwordChar = passwordChar.concat(alphaLower);
  }

  if (confirmUpperCase) {
    passwordChar = passwordChar.concat(alphaUpper);
  }

  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword =
      randomPassword +
      passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
