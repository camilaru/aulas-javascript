/* objeto
Estrutura de dados não indexados
baseada em pares ompostos por uma chave
e um valor. Estes pares são conhecidos 
como propriedades ou atributos. */

//Exemplo 1:Objeto simples
let livro = {
    // chave: valor
    titulo : "Senhor dos Anéis", //propriedade
    ano: 1954,
    volume: 3,
    autor: "J.R.R.Tolkien"
};

console.log(livro.titulo);
console.log(livro.ano);
console.log(livro.autor);
console.log(livro.volume);

console.log("---------")

//Exemplo 2: objetocom array e outro objeto
let pessoa = {
    nome: "Ozzy Osbourne",
    idade: 70,
    telefones: ["11-9600-4789", "11-2135-0300"],
    endereco: {
        logradouro: "Rua xyz",
        numero: "2112",
        bairro: "Penha",
        cidade: "São Paulo"
    }
};

console.log(pessoa.nome); //Ozzy Osbourne
console.log(pessoa.telefones[1]); //11-2135-0300
console.log(pessoa.endereco.bairro); //Penha

console.log("-----------");

//Exemplo 3: Array de Objetos
let livros = [
    {
        titulo: "Inside out",
        autor: "Nick Manson",
        ano: 2012
    },
    {
        titulo: "o Hobbit",
        autor: "J.R.R. Tolkie",
        ano: 1950

    },
    {
        titulo: "Game of Thrones",
        autor: "Geoge R.R. Martin",
        ano: 2010
    }

];

console.log(livros[1].titulo); //O Hobbit
console.log(livros[0].autor);  //Nick Manson







