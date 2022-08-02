// Assignment code here
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log("Hey! You clicked the button!");
  
  const lowerCaseCheck = confirm("Would you like to use lower case letters?");
    if (lowerCaseCheck) {
      pwdString = lowerCase;
    }
    console.log(pwdString);

  const upperCaseCheck = confirm("Would you like to use upper case letters?");
    if (upperCaseCheck) {
      let pwdString = upperCase;
    }

  const numListCheck = confirm("Would you like to use numbers?");
    if (numListCheck) {
      let pwdString = numList;
    }

  const specCharCheck = confirm("Would you like to use special characters?");
    if (specCharCheck) {
      let pwdString = specChar;
    };

  console.log(pwdString);




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