var prompt = require('prompt-sync')();

const primeiraNota = +prompt ("Qual a primeira nota? ")
const segundaNota = +prompt ("Qual a segunda nota? ")

const media = (primeiraNota + segundaNota) / 2;

if (media >= 6 ){
    console.log("Aprovado!");
}

else {
    console.log("Reprovado!");
    
}