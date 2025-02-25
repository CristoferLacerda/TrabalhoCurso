var prompt = require('prompt-sync')();

const numeroDigitado = +prompt ("Digite um número: ")

const numeroAnterior = (numeroDigitado - 1);
const numeroPosterior = (numeroDigitado + 1);

if (numeroDigitado % 2 === 0) {

    console.log(numeroAnterior);
    console.log(numeroPosterior);
    
    console.log("É par");
    
}

else {
    
    console.log(numeroAnterior);
    console.log(numeroPosterior);
    
    console.log("É impar");
}

