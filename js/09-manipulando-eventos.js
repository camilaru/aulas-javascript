//Exemplo 1
const exemplo1 = document.querySelector("span");

/* Ouvinte/monitor de evento 
addEventListener
("tipo de evento", função com as açoes)*/
exemplo1.addEventListener("click",function(){
   exemplo1.textContent = "Belezaaa!";
   exemplo1.style.fontFamily = "Verdana";
   exemplo1.style.textTransform = "uppercase";
   exemplo1.style.color = "red";
});

exemplo1.addEventListener("mouseout", function(){
    exemplo1.textContent = "Exemplo 01";
    //exemplo1.style.all = "unset";
    
    exemplo1.style.fontFamily = "Time New Roman";
    exemplo1.style.textTransform = "none";
    exemplo1.style.color = "black";
})

//Exemplo 2: modo noturno
const pagina = document.querySelector("body");

/* Etapa 2: selecionar do objeto/elemento que será o responsável por ativar/desativar a classe  */
const botao = document.querySelector("#noturno");

/* Etapa 3: Prograçao do evento de clique no botão */
botao.addEventListener("click", function(){
   
    /* Etapa 4: colocar a classe da pagina */
    pagina.classList.toggle("modo-noturno");
    /* Etapa 5: condicional para mudar o texto do botão*/
    if(botao.textContent == "Ativar"){
        botao.textContent = "Desativar";
    }else{
        botao.textContent = "Ativar";
    }


});


/*  Exemplo1: simulação de cadastro
Captura de dados de formulário, cálculos de valores, verificação condicional,criação de HTML viaJS, adição de conteúdo/resultados na página (DOM) */

/* Etapa 1: acessar e selecionar os elementos que serão usados */
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");
/*  Etapa 2:
Monitorar o evento de acionamento do formulário,
ou seja, detectar quando o usuário clica no botãodo formulário ou pressiona ENTER. */
formulario.addEventListener("submit", function(event){
      /*Usamos o comonado abaixo para anular o comportamento padrão do navegador de tentar fazer um redirecionamento de página ao adicionar o formulário. Isso é importante para que as ações programadas na função possam ser interpretada */
     event.preventDefault();
    /* Etapa 3: capturar valores digitados 
    DENTRO de cada campo ( através do value)*/
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);
    let media = (nota1 + nota2) /2
    let resultado = media >= 7 ? "APROVADO" : "REPROVADO";
    // 1) Criar um elemento/tag que sera colocado no HTML
    let paragrafo = document.createElement("p");

    // 2) montar o conteúdo da nova tag
    paragrafo.innerHTML = `${nome} - ${media} - ${resultado}`;

    // 3)Adicionar ao HTML de destino (injetar no DOM)
    divResultados.appendChild(paragrafo);

    //Limpar os campos
    formulario.reset();

    //Devolver o foco (cursor) para o campo nome
    campoNome.focus();

    // console.log(`Nome:${nome}`);
    // console.log(`Nota 1: ${nota1}`);
    // console.log(`Nota2: ${nota2}`);
    // console.log(`Média: ${media.toFixed(1)}`);
    // console.log(`Situação:${resultado}`);
    



});

/*  Exercícios */

    // 1) Calcule e guarde a média destas notas

    // 2) Com a média calculada, determine a situação do aluno (aprovado ou reprovado). Para aprovação, média tem que ser maior ou igual a 7.

    // 3) Mostre no console o nome do aluno, suas notas, sua média e sua situação (aprovado ou reprovado.)




