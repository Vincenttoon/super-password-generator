// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!");

// 1. Prompt User for the password criteria
//  a. Password length 8 < 128
//  b. Lowercase, uppercase, numbers, special characters

// 2. Validate the input

// 3.Display password on the page

  return "Generated Password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Get references to the #generate element
generateBtn.addEventListener("click", writePassword); 