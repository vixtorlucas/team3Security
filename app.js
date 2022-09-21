
const myString   = "Teste de mensagem";
const myPassword = "wwwwwwwwwwwwwwww";


var keySize = 256;
var ivSize = 128;
var iterations = 100;

var message = "Hello World";
var password = "Secret Password";


$( "#execute" ).click(function() {
  var message = $('#input').val();
  document.getElementById("demo0").innerHTML = message;

  // var encrypted = CryptoJS.AES.encrypt(message, myPassword);
  // document.getElementById("demo1").innerHTML = encrypted;

  var hash = CryptoJS.SHA256(message);
  document.getElementById("demo2").innerHTML = hash;

  var mixed = CryptoJS.AES.encrypt((message+ hash), myPassword);
  document.getElementById("demo3").innerHTML = mixed;

  // var mixed2 = CryptoJS.SHA256(encrypted.ciphertext);
  // document.getElementById("demo4").innerHTML = mixed2;

  var resolution = CryptoJS.AES.decrypt(mixed, myPassword);
  document.getElementById("demo4").innerHTML = resolution.toString(CryptoJS.enc.Utf8);
});
