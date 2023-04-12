const converteMoeda = (valor) => {
    const real = valor * 4.94;
    return real.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })
}
let resultadoemReais = converteMoeda(25);
console.log(resultadoemReais);

// Arrow Fuction
//const convertMoeda = valor => valor * cotacaoDolar;

let valorConvertido = converteMoeda(valorEmDolares);

console.log(`valor em dólares: ${valorEm Dolares}`);
console.log(`valor em dolares (convertido):${valorConveertido}`);
