var prompt = require('prompt-sync')();

const celcius = +prompt ("Digite uma temperatura em Celcius: ");
 
const temperatura = (celcius * 1.8 + 32);

if (celcius > 0) {
    console.log("Celcius " + (celcius * 1.8 + 32) );
}

else {
    console.log("Temperatura abaixo de zero!");
}
