var  lowerCase = "abcdefghijklmnopqrstuvwxyz";
var  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var  numbers = '0123456789';
var  specialChars = '!@#$%^&*()';

var generateBtn = document.querySelector("#generate");

var passwordOptions = '';

var newPassword = '';

var criterias = function() {
  var passwordLength = window.prompt("How long would you like your password to be? (8-128 characters)");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("That was not a valid answer");
    return criterias(); 
  }
  // binary options - utilize .confirm instead of .prompt
  var dataLower = window.confirm("Do you want to include lowercase letters?\nPress Okay for YES or Cancel for NO"); 
  var dataUpper = window.confirm("Do you want to include uppercase letters?\nPress Okay for YES or Cancel for NO");
  var dataNumbers = window.confirm("Do you want to include numerical digits?\nPress Okay for YES or Cancel for NO");
  var dataSpecial = window.confirm("Do you want to include special characters?\nPress Okay for YES or Cancel for NO");


  if (dataLower === true) {
    passwordOptions.concat(lowerCase);
  } 

  if (dataUpper === true) {
    passwordOptions.concat(upperCase);
  } 

  if (dataNumbers === true) {
    passwordOptions.concat(numbers);
  } 

  if (dataSpecial === true) {
    passwordOptions.concat(specialChars);
  }  

  function generatePassword() {
    for (var i = 0; i <= passwordLength; i++) {
      var randomPick = Math.floor(Math.random() * passwordOptions.length);
      newPassword += passwordOptions.substring(randomPick, randomPick +1);
    }
  }
  generatePassword();

  var password = document.querySelector('#password');
  var writePassword = newPassword;

  password.value = writePassword;
};

generateBtn.addEventListener("click", criterias);