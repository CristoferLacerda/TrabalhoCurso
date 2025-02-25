var prompt = require('prompt-sync')();

const fahrenheit = +prompt ("Digite uma temperatura em Fahrenheit: ")

if (fahrenheit <= 1000 && fahrenheit >= -1000) {
    console.log("Celcius " + (5/9) * (fahrenheit - 32) );
}

else {
    console.log("Valor irreai");
}