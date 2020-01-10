alert("Welcome to the password generator!")

var password = ""

var passwordCharset = "";

var specialCharset = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var numericCharset = "123456789"
var upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz"

var charCount = prompt("How many characters would you like in your password? (Must be between 8-128)");

if(specialChars!==true && numericChars!==true && upperCaseChars!==true && lowerCaseChars !==true){
  var specialChars = confirm("Press OK to include special characters, cancel for no special characters.");
  if (specialChars) {
    passwordCharset = passwordCharset + specialCharset;
  }
  var numericChars = confirm("Press OK to include numeric character, cancel for no numeric characters.");
  var upperCaseChars = confirm("Press OK to include uppercase characters, cancel for no uppercase characters.");
  var lowerCaseChars = confirm("Press OK to include lowercase characters, cancel for no lowercase characters.");
}

if (specialChars) {
  passwordCharset = passwordCharset + specialCharset;
}

if (numericChars) {
  passwordCharset = passwordCharset + numericCharset;
}

if (upperCaseChars) {
  passwordCharset = passwordCharset + upperCaseCharset;
}

if (lowerCaseCharset) {
  passwordCharset = passwordCharset +lowerCaseCharset;
}

for (var i = 0; i < charCount; i++) {
  password = password + passwordCharset[Math.floor((Math.random()* passwordCharset.length))]
}

alert("Your password is " + password);