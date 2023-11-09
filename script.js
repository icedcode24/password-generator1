var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var password = "";
  var possiblecharacters = "";
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var specialcharacters = '!@#$%^&*_'
  var numbers = '123456789'
  var lengthinput = 10;
  // var haslowercase = true;
  // var hasuppercase = true;
  // var hasspecialcharacters = true;
  // var hasnumbers = true;

  var length = window.prompt('how many characters do you want your password to be')
  console.log(length)
  if (length < 8 ||  length > 128){
    alert("password not long enough") 
    return null
  } 
  var lowercaseanswer = window.confirm('do you want to have lower case letters in it?')

  if (lowercaseanswer) {
    possiblecharacters += lowercase;
    console.log(possiblecharacters);
  }
  var uppercaseanswer = window.confirm('do you want to have upper case letters in it?')
  if (uppercaseanswer) {
    possiblecharacters += uppercase;
    console.log(possiblecharacters);
  }
  var specialcharactersanswer = window.confirm('do you want to have special characters in it?')
  if (specialcharactersanswer) {
    possiblecharacters += specialcharacters;
    console.log(possiblecharacters);
  }
  var numbersanswer = window.confirm('do you want it to have numbers in it?')

  if (numbersanswer) {
    possiblecharacters += numbers;
    console.log(possiblecharacters);
  }


  
  
  

  for (var i = 0; i < length; i++) {
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
