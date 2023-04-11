const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual é sua idade?");

if (idade >= 18 && idade < 60) {
        console.log (`${nome},você é uma pessoa adulta`);
} else if (idade >= 60) {
        console.log(`${nome},você é uma pessoa idosa`)
} else {
    console.log (`${nome} você é uma pessoa menor de idade`)
}
