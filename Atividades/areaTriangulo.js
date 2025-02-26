var prompt = require('prompt-sync')();

const base = +prompt ("Digite o numero da base: ");

const altura = +prompt ("Digite o numero da altura: ");

if (altura <= 0 || base <= 0) {
    console.log("Valores invalidos!");
}
else {
    console.log(altura * base);
}