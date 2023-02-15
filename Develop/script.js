var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = '0123456789';
var specialChars = '!@#$%^&*()';

var generateBtn = document.querySelector("#generate");

var passwordLength = window.prompt("How long would you like your password to be? (8-128 characters)");
var dataLower = window.prompt("Y or N: Do you want to include lowercase letters?"); 
var dataUpper = window.prompt("Y or N: Do you want to include uppercase letters?");
var dataNumbers = window.prompt("Y or N: Do you want to include numerical digits?");
var dataSpecial = window.prompt("Y or N: Do you want to include special characters?");

dataLower = dataLower.toUpperCase();
dataUpper = dataUpper.toUpperCase();
dataNumbers = dataNumbers.toUpperCase();
dataSpecial = dataSpecial.toUpperCase();

var criterias = function() {
  passwordLength();
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("That was not a valid answer");
      return passwordLength();   
    } else {
      dataLower();
    } 

    if (dataLower !== "Y" || dataLower !== "N") {
      window.alert("That was not a valid answer");
      return dataLower();   
    } else {
      dataUpper();
    } 

    if (dataUpper !== "Y" || dataUpper !== "N") {
      window.alert("That was not a valid answer");
      return dataUpper();   
    } else {
      dataNumbers();
    }

    if (dataNumbers !== "Y" || dataNumbers !== "N") {
      window.alert("That was not a valid answer");
      return dataNumbers();   
    } else {
      dataSpecial();
    }

    if (dataSpecial !== "Y" || dataSpecial !== "N") {
      window.alert("That was not a valid answer");
      return dataSpecial();   
    } else {
      window.alert("Thank you!");
    }
    writePassword();
};

function generatePassword() {


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", criterias);