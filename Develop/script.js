// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    var promptNumbers = window.prompt("Would you like UPPERCASE letters in your password? Please type YES or NO.");

    if (promptNumbers === "YES") {
      keys.uppercase();
    }
    
    if (promptNumbers === "NO") {
      return false;
    }

    promptNumbers = promptNumbers.toLowerCase();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

writePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate").addEventListener("submit", function()) {

};

// Assignment code here

const keys = {
  uppercase: "ABCDEFGHIJKLMOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~|}{[]:;?><,./-=",
};

const getKey = [
  function uppercase() {
    return keys.uppercase[Math.floor(Math.random() * keys.uppercase.length)];
  },
  function lowercase() {
    return keys.lowercase[Math.floor(Math.random() * keys.lowercase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  }
];