var password = ""

var passwordCharset = "";

var specialCharset = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var numericCharset = "123456789"
var upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz"

function generatePassword() {
  password="";
  charCount=parseInt(document.getElementById('passwordLength').value);

  if(document.getElementById("checkSpecial").checked!==true && document.getElementById("checkNumbers").checked!==true && document.getElementById("checkUpperCase").checked!==true && document.getElementById("checkLowerCase").checked !==true || charCount < 8 || charCount > 128){
    password="Please specify between 8-128 characters and check at least one critera above.";
    document.getElementById("password").innerHTML=password;
  } else{

    if (document.getElementById("checkSpecial").checked) {
      passwordCharset = passwordCharset + specialCharset;
    }

    if (document.getElementById("checkNumbers").checked) {
      passwordCharset = passwordCharset + numericCharset;
    }

    if (document.getElementById("checkUpperCase").checked) {
      passwordCharset = passwordCharset + upperCaseCharset;
    }

    if (document.getElementById("checkLowerCase").checked) {
      passwordCharset = passwordCharset +lowerCaseCharset;
    }

    for (var i = 0; i < charCount; i++) {
      password = password + passwordCharset[Math.floor((Math.random()* passwordCharset.length))]
    }
    document.getElementById("password").innerHTML = "Your password is: " + password;
    // return password;
  }
}

// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function copyText(){
  var copiedText = document.getElementById("password");
  copiedText.select();
  copiedText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

// https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript-jquery-or-vanilla