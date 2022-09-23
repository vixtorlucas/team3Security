const AES = require("crypto-js/aes");
const CryptoJS = require("crypto-js")
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');


const rl = readline.createInterface({ input, output });
let option 
let message
let secretkey

function encryptAES(message, secretKey){
    const hash = AES.encrypt(message, secretKey).toString()

    return `a hash encriptografado para a mensagem selecionada é: ${hash}`
}

function decryptAES(hash, secretKey){
    const decryptedMessage = AES.decrypt(hash, secretKey).toString(CryptoJS.enc.Utf8)

    if(decryptedMessage === '') return 'hash ou secretKey invalida'
    return `o texto desencriptografado para a hash selecionada é: ${decryptedMessage}`

}

function makeQuestion(question) {
    return new Promise(resolve => rl.question(question, answ => resolve(answ)))
}

async function getOption() {
    option = await makeQuestion('selecione o numero da opção desejada: ')
    return Number(option)
}

async function getTextToHash() {
    message = await makeQuestion('Digite uma frase para ser encriptografada: ')
    return message
}

async function getHashToText() {
    message = await makeQuestion('Digite a hash para desencriptografar: ')
    return message
}

async function getSecretKey(){
    secretkey = await makeQuestion('Digite a secretKey: ')
    return secretkey
}

async function main(){

    console.log('Bem vindo ao encriptador/desencriptador AES, o que deseja?')
    console.log(`1 - Encriptografar uma mensagem \n2 - Desencriptografar uma mensagem`)
    const option = await getOption()

    switch(option){
        case 1:
            message = await getTextToHash()
            secretkey = await getSecretKey()
            console.log(encryptAES(message, secretkey))
            break
        case 2:
             message = await getHashToText()
             secretkey = await getSecretKey()
             console.log(decryptAES(message, secretkey))
             break


    }
    
    rl.close()
}

main()

