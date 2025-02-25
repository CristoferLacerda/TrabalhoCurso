var prompt = require('prompt-sync')();


const reais = +prompt ("Digite o numero em reais: ")
const cotacao = +prompt ("Digite a cotação do dólar ")

if (cotacao > 0) {
    console.log(reais * cotacao);
}

else {
    console.log("Cotação inválida");
}

