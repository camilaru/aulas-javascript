//Versão 1: sem refatoração
// const nome = prompt("Qual o seu nome?");
// const idade = prompt("Qual é sua idade?");

// if (idade >= 18 && idade < 60) {
//         console.log (`${nome},você é uma pessoa adulta`);
// } else if (idade >= 60) {
//         console.log(`${nome},você é uma pessoa idosa`)
// } else {
//     console.log (`${nome} você é uma pessoa menor de idade`)
// }

//versão2: com refatoração (melhorias)
const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual é sua idade?");
let mensagem;
if (idade >= 18 && idade < 60) {
    mensagem = "adulto";
} else if (idade >= 60) {
    mensagem = "idosa;"
} else {
    mensagem = "menor de idade"
}

alert(`${nome},você é uma pessoa ${mensagem}`);