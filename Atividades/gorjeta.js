var prompt = require('prompt-sync')();

const valorJantar = +prompt ("Qual o valor do jantar? ")

const atendimento = prompt ("O atendimento foi bom? ").toLowerCase()

if (atendimento == "sim") {

    console.log(valorJantar + (valorJantar * (10/100) ) );
}
 else {
    console.log(valorJantar);
 }