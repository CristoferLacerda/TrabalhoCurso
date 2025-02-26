var prompt = require('prompt-sync')();

let valorProduto = parseFloat(prompt("Digite o valor do produto: R$"));

let parcelar = prompt("Você deseja parcelar? (sim/não): ").toLowerCase();
  
if (parcelar === "sim") {
    let valorParcelado = valorProduto /3;
    const resultado = valorParcelado * 1.10;
    console.log("À vista: R$" + valorProduto.toFixed(2)); 
    console.log("Parcelado (3x): R$" + resultado.toFixed(2));
} else {
    console.log("À vista: R$" + valorProduto.toFixed(2));
}