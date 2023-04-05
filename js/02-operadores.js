// Exemplo: de calculo de IMC

// Dados de entrada da aplicação
let peso = 80;
let altura = 1.81;

// Processamento de dados 
let imc = peso / (altura * altura);

// Saída
console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura}`);
console.log(`IMC: ${imc.toFixed(2)}`);

console.log("---------");

let preco = 1000;
let desconto = 50;
valorFinal = preco - desconto;

let configuracoes = {
    style: "currency",
    currency: "BRL"
}

console.log(
    `preco: ${preco.toLocaleString("pt-br", configuracoes)}`
);

console.log(`Desconto de: ${desconto.toLocaleString("pt-br", configuracoes)}`);
console.log(`Valor Final: ${valorFinal.toLocaleString("pt-br", configuracoes)}`);









