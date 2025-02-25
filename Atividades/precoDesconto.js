var prompt = require('prompt-sync')();

const preco = +prompt ("Digite o preço: ")

const desconto = +prompt ("Digite o desconto: ")
 
if (desconto <= 50) {

    console.log(preco + (preco - (desconto/100)) );
    
} 

else {
    console.log("Desconto muito alto, confira a promoção!");
}