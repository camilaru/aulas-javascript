console.log("condicionais!");
/* Comandos condicionais
if (SE) / else (SENÂO)

else if (SENÂO SE)

switch (ESCOLHA/ANALISE) / case (CASO)

Operadores raclacionais:
> (MAIOR QUE)
< (MENOR QUE)
>= (MAIOR IGUAL)
<= (MENOR IGUAL)
== (IGUALDADE)
!= (DIFERENTE)*/

//Exemplos
let aluno = "Chaves";
let nota1 = 10;
let nota2 = 5;
let media = (nota1 + nota2) / 2;
let faltas = 7;
console.log(`aluno(a): ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Media:${media}`);

//Critério de aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

/* Se a média obtida pelo aluno(a) for maior ou igual a media minima da escola, então ele estará aprovado. Caso contrário ele estara reprovado */

if (media >= mediaMinima && faltas < limiteDeFaltas){
console.log("aprovado"); 
} else {
    console.log("reprovado");
}























