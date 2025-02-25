var prompt = require('prompt-sync')();

const nome = prompt ("Escreva seu nome: ")


if (nome !== '') {
console.log("Oie, " + nome);   
}

else {
    console.log("Nome inválido!");
}

