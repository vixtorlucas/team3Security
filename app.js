const myPassword = "wwwwwwwwwwwwwwww";

$( "#execute" ).click(function() {

  var message = $('#message').val();
  var senhaQ4 = $('#senhaQ4').val();

  document.getElementById("demo0").innerHTML = message;

  var hash = CryptoJS.SHA256(message);
  //document.getElementById("demo2").innerHTML = hash;

  var mixed = CryptoJS.AES.encrypt((message+ hash), senhaQ4);
  document.getElementById("MessageLabel").innerHTML = "Mensagem Encripitda AES (MESSAGEM + SHA256)"
  document.getElementById("demo3").innerHTML = mixed;

  //document.getElementById("demo4").innerHTML = resolution.toString(CryptoJS.enc.Utf8);
});

$( "#validate" ).click(function() {

  var message = $('#message').val();
  var senhaQ4 = $('#senhaQ4').val();

  document.getElementById("demo0").innerHTML = message;

  var resolution = CryptoJS.AES.decrypt(message, senhaQ4);

  var resolutionString = resolution.toString(CryptoJS.enc.Utf8)
  var validated = false;
  for (let i = 0; i < resolutionString.length; i++) {
    var messageDecrypted = resolutionString.substring(0, i);
    if (CryptoJS.SHA256(messageDecrypted) == resolutionString.substring(i)) {
      validated = true;

      document.getElementById("MessageLabel").innerHTML = "Mensagem Validada:"
      document.getElementById("demo3").innerHTML = resolutionString.substring(0, i);
      console.log(true);
    }

  }

  if (!validated){
    document.getElementById("MessageLabel").innerHTML = "Error na validação:"
    document.getElementById("demo3").innerHTML = "Mensagem Invalida ou Corrompida";
  }
  //document.getElementById("demo4").innerHTML = resolution.toString(CryptoJS.enc.Utf8);
});
