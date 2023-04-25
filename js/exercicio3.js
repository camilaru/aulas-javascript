const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let palpiteDigitado = (campoPalpite.value);
    console.log(`Palpite: ${palpiteDigitado}`);
    /* Se o palpite digitado pelo usuario for igual ao número aleatorio que o jogo gerou */
    if (palpiteDigitado == numeroAleatorio) {
        // então acertou!
        resultado.innerHTML = "acertou🥰";
        resultado.style.color = "blue";
        //Se não errou!
        //Senão se o palpite digitado for menor que 0 ou maior que 10
    } else if (palpiteDigitado < 0 || palpiteDigitado > 10) {
        //Então informar que os valores precisam ser entre 0 e 10. 
        resultado.innerHTML = "Digite um valor entre 0 e 10!🙃";
        resultado.style.color = "orange";
    } else {
        resultado.innerHTML = "Errou!💀";
        resultado.style.color = "red";
    }
});


//  Gerar valores entre0 e 10(sem casa decimal)
let numeroAleatorio = parseInt(Math.random() * 11);
console.log(numeroAleatorio);



