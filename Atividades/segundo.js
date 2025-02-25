var prompt = require('prompt-sync')();

const numeroHora = +prompt ("Digite um numero de horas: ")

if (numeroHora > 0) {
    console.log("Numero em segundos: " + numeroHora * 3600);
}

else {
    console.log("Colocou a hora errado trouxa");
}

