var prompt = require('prompt-sync')();

const valorTotal = +prompt ("Dite o valor total: ")

const numeroPessoas = +prompt ("Dite o numero de pessoas: ")

if (numeroPessoas < 2) {
    console.log("Não dá pra dividir a conta com menos de uma pessoa patrão!");
    
}
else {
    console.log("R$" + valorTotal / numeroPessoas + " para cada.");
}