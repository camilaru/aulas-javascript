/* Loops (ou estruturas/laços de repetição) 

Tradicionais: While, do/while, for
Específicos: for/of, for/in
*/

// Exemplo 1: while (enquanto)

//variavél de controle de repetição
/* let contador = 1;

while(contador <= 4){
    console.log(`valor de contador: ${contador}`);
    contador++; //incremento
    contador = contador + 1;
} */

//Exemplo 2: do/while (faça/enquanto)
/* let contador = 1;
do{
    console.log(`contador vale ${contador}`);
    contador++;
}while(contador <= 5); */

//Exemplo 3: for (para)
//i, j, k (nomes comuns para variavéis de controle)

//for(variavel de controle; condição; atualização)
// for(let i = 1; i <=5; i++ ){
//     console.log(`valor de i:${i}`);
// }

//Exemplo4: Loop com array
const alunos = [
    "Daniel", "Raphael", "Camila", "Valeska", "Thiago", "Ricardo", "Vinicius"
];
//guardando taanho/ comprimento do array
let quantidade = alunos.length;

for(let i = 0; i < 7; i++){
    console.log(`nome: ${alunos[i]}`);
}