var prompt = require('prompt-sync')();

const altura = prompt ("Qual a altura: ")
const largura = prompt ("Qual a largura: ")

if ( largura > 0 && altura > 0) {
    console.log(altura * largura);
}

else {
    console.log("Digite os numeros positivos");
}