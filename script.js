//event listeners
document.getElementById("generatePasswordButton").addEventListener("click", generatePassword);
document.getElementById("copyButton").addEventListener("click", copyText);

// vars representing ids
var passwordTextArea = document.getElementById("password");
var copyButton = document.getElementById("copyButton");

//array of objects with information about character sets
var charsets = [
  {
    name: "specialCharset",
    characters: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    id: document.getElementById("checkSpecial"),
  },
  {
    name: "numericCharset",
    characters: "123456789",
    id: document.getElementById("checkNumbers")
  },
  {
    name: "uppercaseCharset",
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    id: document.getElementById("checkUppercase")
  },
  {
    name: "lowercaseCharset",
    characters: "abcdefghijklmnopqrstuvwxyz",
    id: document.getElementById("checkLowercase")
  }
]

//object containing error messages
var errorMessages={
  errorLengthCheck: "Password length must be between 8-128 characters and select at least one character type.",
  errorLength: "Password length must be between 8-128 characters.",
  errorCheck: "Please select at least one character type."
}


//returns true if at least one of the checkboxes are checked
function checked(){
  for (i=0; i < charsets.length; i++){
    if(charsets[i].id.checked){
      return true;
    }
  }
}

//gives user feedback when application's requirements are not met
function errorHandling(){
  copyButton.setAttribute("disabled","");
    //error: user needs to adjust number of characters and check at least one checkbox
  if(!checked() && (charCount < 8 || charCount > 128)){
      password=errorMessages.errorLengthCheck;
      passwordTextArea.innerText=password;
    // error: user needs to adjust number of characters
  } else if (charCount < 8 || charCount > 128){
      password="errorMessages.errorLength"
      passwordTextArea.innerText=errorMessages.errorLength;
      //error user needs to check at least one checkbox
  } else if(!checked()){
      password = errorMessages.errorCheck;
      passwordTextArea.innerText = password;
  } else {
      //no error, so user is able to use copy button to copy password
      copyButton.removeAttribute("disabled");
      //return false when no error handling needed
      return false;
  }
}

//called when 'generate password' button is clicked
function generatePassword() {
  //no character sets have been chosen yet
  var passwordCharset = "";
  //the password resets to blank each time generatePassword is called
  password="";
  //when generate password is called, password length is checked
  charCount=parseInt(document.getElementById('passwordLength').value);
  if (errorHandling()===false){
    //adds selected  character sets to pool of available characters to use in password
    for (i = 0; i<charsets.length; i++){
      if (charsets[i].id.checked){
        passwordCharset = passwordCharset + charsets[i].characters;
      }
    }
    //for each character of the length of the selected password length, a random character is selected from the pool of selected characters
    for (var i = 0; i < charCount; i++) {
      password = password + passwordCharset[Math.floor((Math.random()* passwordCharset.length))]
    }
    //The read only text area is filled with the generated password
    passwordTextArea.innerText = password;
  }
}

//when the copy button is clicked, this function will select and copy text from the text area
function copyText(){
  passwordTextArea.select();
  passwordTextArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
}