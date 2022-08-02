// Assignment code here
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log("Hey! You clicked the button!");

    // prompt for length of password
  lengthOfPwd = window.prompt("How long would you like your password to be? Please choose between 8 - 128 characters.");
  if (lengthOfPwd < 8 || lengthOfPwd > 128 ) {
    // returns user to length of window prompt
    return "Please choose a character length between 8 and 128.";\
    // confirms length of lengthOfPwd
  } else { 
      window.alert("Your password will be" + lenghtOfPwd + "characters.");
  }

  // confirm window for lower case letters, using confirm to only allow 2 possible choices
  lowerCaseCheck = window.confirm("Would you like to include lower case letters?");
  if (lowerCaseCheck) {
    window.alert = ("Your password WILL include lower case letters!");
  } else {
    window.alert = ("Your password WILL NOT include lower case letters.");
  }

  // confirm window for upper case letter, same thought process as above
  upperCaseCheck = window.confirm("Would you like to include upper case letters?");
  if (upperCaseCheck) {
    window.alert = ("Your password WILL include upper case letters!");
  } else {
    window.alert = ("Your password WILL NOT include upper case letters.");
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