var generateBtn = document.querySelector("#generate");
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var specialcharacters = '!@#$%^&*_'
var numbers = '123456789'
var lenthinput = 10;
var haslowercase = true;
var hasuppercase = false;
function generatePassword() {
  var password = "";
  
  var length = window.prompt('how many characters do you want your password to be')
  console.log (length)
  var lowercaseanswer = window.confirm('do you want to have lower case letters in it?')
  var uppercaseanswer = window.confirm('do you want to have upper case letters in it?')
  var specialcharacters = window.confirm('do you want to have special characters in it?')
  var numbers = window.confirm('do you want it to have numbers in it?')
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
