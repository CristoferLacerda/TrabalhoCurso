var prompt = require('prompt-sync')();

const primeiroNumero = +prompt ("Dite um numero: ")

const operacao = prompt ("Digite a operação: ")

const segundoNumero = +prompt ("Digite outro: ")





const soma  = primeiroNumero + segundoNumero;

const multipicacao = primeiroNumero * segundoNumero ;

const subtracao = primeiroNumero - segundoNumero;

const divisao = primeiroNumero / segundoNumero;


if (divisao == primeiroNumero/0) {
    console.log("Por zero não cara!");
}

else if (operacao == "+"){
    console.log(soma);
}

else if (operacao == "-") {
    console.log(subtracao);
}

else if (operacao == "/") {
    console.log(divisao.toFixed(1));
}


else if (operacao == "*") {
    console.log(multipicacao);
}

else {
    console.log("Operação invalida");
    
}