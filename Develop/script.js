// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // variables to create password
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numList = '123456789';
  var specChar = '!@#$%^&*+=?';
  var pwdString = '';

  console.log("Hey! You clicked the button!");

    // prompt for length of password
  var lengthOfPwd = window.prompt("How long would you like your password to be? Please choose between 8 - 128 characters.");
  if (lengthOfPwd < 8 || lengthOfPwd > 128 ) {
    // returns user to length of window prompt
    return "Please choose a character length between 8 and 128.";
    // confirms length of lengthOfPwd
  } else { 
    window.alert(" Your password will be " + lengthOfPwd + " characters. ");
  }

  console.log("You decided password length");

  // confirm window for lower case letters, using confirm to only allow 2 possible choices
  lowerCaseCheck = window.confirm("Would you like to include lower case letters?");
  if (lowerCaseCheck) {
    var lowerCaseCheckYes = window.alert("Your password WILL include lower case letters!");
  } else {
    window.alert("Your password WILL NOT include lower case letters.");
  }

  console.log("You decided on IF lower case alphabet in your password.");

  // confirm window for upper case letter, same thought process as above
  upperCaseCheck = window.confirm("Would you like to include upper case letters?");
  if (upperCaseCheck) {
    window.alert("Your password WILL include upper case letters!");
  } else {
    window.alert("Your password WILL NOT include upper case letters.");
  }

  console.log("You decided on IF upper case alphabet in your password.");

  // Same previous two, but for numbers
  numberCheck = window.confirm("Would you like to include numbers?");
  if (numberCheck = true) {
    window.alert("Your password WILL include upper case letters!");
  } else {
    window.alert("Your password WILL NOT include numbers.");
  }

  console.log("You decided on IF numbers in your password.");

  // Same as previous three, but for special characters
  symbolCheck = window.confirm ("Would you like to include special characters?");
  if (symbolCheck) {
    window.alert("Your password WILL include special characters!");
  } else {
    window.alert("Your password WILL NOT include special characters.");
  }

  console.log("You decided on IF special characters in your password.");

  // use concat to assign value to password string
  if (lowerCaseCheck) {
    pwdString = pwdString.concat(lowerCase);
  }

  if (upperCaseCheck) {
    pwdString = pwdString.concat(upperCase);
  }

  if (numberCheck) {
    pwdString = pwdString.concat(numList);
  }

  if (symbolCheck) {
    pwdString = pwdString.concat(specChar);
  }

  // need all false reaction to user
  if (lowerCaseCheck === false && upperCaseCheck === false && numberCheck === false && symbolCheck === false) {
    window.alert("Please select one possible password function next time.");
  }

  //random math function...
  let thePassword = "";
  for (let i = 0; i < lengthOfPwd; i++) {
    var randNum = [Math.floor(Math.random() * pwdString.length)];
    thePassword = thePassword + pwdString[randNum];
  }

  console.log(thePassword);
  return thePassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Get references to the #generate element
generateBtn.addEventListener("click", writePassword);

// Java for copying button to Clipboard
function copyBtn() {
  var copyText = document.getElementById('password');

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard
    .writeText(copyText.value.trim())
    .then(() => {
      console.log('Copied');
    })
    .catch((err) => {
      console.log('something went wrong', err);
    });
}

// checking git status