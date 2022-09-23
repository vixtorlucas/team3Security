function encryptAES(message, secretKey){
    const hash = CryptoJS.AES.encrypt(message, secretKey).toString()
    if(message === '' || secretKey === ''){
        alert('Mensagem ou secretKey vazias')
        return ''
    }
    return hash
}

function decryptAES(hash, secretKey){
    const decryptedMessage = CryptoJS.AES.decrypt(hash, secretKey).toString(CryptoJS.enc.Utf8)

    if(hash === '' || secretKey === '') alert('Hash ou secretKey vazias')
    

    else if(decryptedMessage === '') alert('chave secreta ou hash invalida')
    

    return decryptedMessage

}

function encryptInput() {
    let text = document.getElementById("aesTextInput").value;
    let secretKey = document.getElementById("aesSecretKey").value;
  
    document.getElementById("hashOrText").innerHTML = encryptAES(text, secretKey)
  }

function decryptInput() {
    let text = document.getElementById("aesTextInput").value;
    let secretKey = document.getElementById("aesSecretKey").value;

    const decrypted = decryptAES(text, secretKey)

    document.getElementById("hashOrText").innerHTML = decrypted

}