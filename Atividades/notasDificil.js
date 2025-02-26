var prompt = require('prompt-sync')();

const primeiraNota = +prompt ("Digite a primeira nota: ")
const segundaNota = +prompt ("Segunda: ")
const terceiraNota = +prompt ("Terceira: ")


const primeiraNotaPeso = (primeiraNota * 2)
const segundaNotaPeso = (segundaNota * 3)
const terceiraNotaPeso = (terceiraNota * 5)

const media = (primeiraNotaPeso + segundaNotaPeso + terceiraNotaPeso ) / 3;
console.log("media" + media);


if (media > 8 && primeiraNota > 6 && segundaNota > 6 && terceiraNota > 6) {
    console.log("Exelente!");
    
}

else {
    console.log("Burro");

    
}