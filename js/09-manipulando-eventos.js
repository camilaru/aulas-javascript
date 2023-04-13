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


