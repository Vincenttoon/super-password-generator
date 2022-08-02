// Assignment code here
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log("Hey! You clicked the button!");
  
  lengthOfPwd = window.prompt("How long would you like your password to be? Please choose between 8 - 128 characters.");
  if (lengthOfPwd < 8 || lengthOfPwd > 128 ) {
    return "Please choose a character length between 8 and 128.";
  } else { 
      window.alert("Your password will be" + lenghtOfPwd + "characters.");
  }

  console.log(lengthOfPwd);



      // 1. Prompt User for the password criteria
     //  a. Password length 8 < 128
      //  b. Lowercase, uppercase, numbers, special characters

      // 2. Validate the input

      // 3.Display password on the page
  return "Generated Password here";
};

const pwdlength = [8 <= 128];
const lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
const upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const numList = ['123456789'];
const specChar = ['!@#$%^&*+=?'];
const pwdString = '';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Get references to the #generate element
generateBtn.addEventListener("click", writePassword);