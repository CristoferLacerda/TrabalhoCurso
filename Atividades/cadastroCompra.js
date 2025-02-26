var prompt = require('prompt-sync')();

const nome = prompt ("Qual seu nome: ")

const porcas = +prompt ("Qual a quantidade de porcas: ")
const parafusos = +prompt ("Qual a quantidade de parafusos: ")
const arruelas = +prompt ("Qual a quantidade de arruelas: ")

if (porcas < 0 || parafusos < 0 || arruelas < 0) {
    console.log("Quantidade invalida");
}

else if (parafusos < (porcas + arruelas) ) {
    console.log("Verifique se há parafusos suficientes");
    
}

else {
    console.log("Tamo junto patrão");
    
}