var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var password = "";
  var possible = "";
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var specialcharacters = '!@#$%^&*_'
  var numbers = '123456789'
  var lengthinput = 10;
  // var haslowercase = true;
  // var hasuppercase = true;
  // var hasspecialcharacters = true;
  // var hasnumbers = true;



  if (haslowercaseanswer) {
    possiblecharacters += lowercase;
    console.log(possiblecharacters);
  }

  if (hasuppercaseanswer) {
    possiblecharacters += uppercase;
    console.log(possiblecharacters);
  }

  if (hasspecialcharacters) {
    possiblecharacters += specialcharacters;
    console.log(possiblecharacters);
  }

  if (hasnumbersanswer) {
    possiblecharacters += numbers;
    console.log(possiblecharacters);
  }


  var length = window.prompt('how many characters do you want your password to be')
  console.log(length)
  var lowercaseanswer = window.confirm('do you want to have lower case letters in it?')
  var uppercaseanswer = window.confirm('do you want to have upper case letters in it?')
  var specialcharactersanswer = window.confirm('do you want to have special characters in it?')
  var numbersanswer = window.confirm('do you want it to have numbers in it?')

  for (var i = 0; i < inputLength; i++) {
    var random = Math.floor(Math.random() * possiblecharacters.length);
    password += possiblecharacters[random];
  }

  return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
