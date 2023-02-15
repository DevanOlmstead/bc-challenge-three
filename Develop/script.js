var  lowerCase: "abcdefghijklmnopqrstuvwxyz";
var  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var  numbers: '0123456789';
var  specialChars: '!@#$%^&*()';

var generateBtn = document.querySelector("#generate");

var passwordOptions = '';

var criterias = function() {
  var passwordLength = window.prompt("How long would you like your password to be? (8-128 characters)");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("That was not a valid answer");
    return criterias(); 
  }
  // binary options - utilize .confirm instead of .prompt
  var dataLower = window.confirm("Do you want to include lowercase letters?n/Press Okay for YES or Cancel for NO"); 
  var dataUpper = window.confirm("Do you want to include uppercase letters?n/Press Okay for YES or Cancel for NO");
  var dataNumbers = window.confirm("Do you want to include numerical digits?n/Press Okay for YES or Cancel for NO");
  var dataSpecial = window.confirm("Do you want to include special characters?n/Press Okay for YES or Cancel for NO");

  dataLower = dataLower.toUpperCase();
  dataUpper = dataUpper.toUpperCase();
  dataNumbers = dataNumbers.toUpperCase();
  dataSpecial = dataSpecial.toUpperCase();

    // if (dataLower === true) {
    //   passwordOptions.concat(lowerCase);
    //
    // } 

    if (dataUpper !== "Y" || dataUpper !== "N") {
      window.alert("That was not a valid answer");
      return dataUpper;   
    } else {
      dataNumbers;
    }

    if (dataNumbers !== "Y" || dataNumbers !== "N") {
      window.alert("That was not a valid answer");
      return dataNumbers;   
    } else {
      dataSpecial;
    }

    if (dataSpecial !== "Y" || dataSpecial !== "N") {
      window.alert("That was not a valid answer");
      return dataSpecial;   
    } else {
      window.alert("Thank you!");
    }
    writePassword();
};

function generatePassword() {
  let newPassword = "";


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", criterias);