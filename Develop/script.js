// Assignment code here

const keys = {
  letter: "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  number: "0123456789"
  symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-=",
};

const getKey = [
  function letter() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  }
];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate")