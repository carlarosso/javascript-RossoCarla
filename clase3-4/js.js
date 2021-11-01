/*

// CREAR UN ALGORITMO UTILIZANDO UN CICLO

let hello = 0;

do {
    console.log("Hello, World!");
    hello++;
} while (hello < 5)

*/

// DESAFIO ENTREGABLE --> FUNCIONES RELACIONADAS

let anioIngresado = parseInt(prompt("Inserte su año de nacimiento"));
let anioIngresado2 = parseInt(prompt("Inserte un año futuro"));
let currentDate = new Date();
let Year = currentDate.getFullYear();

function aniosActuales(anioIngresado) {
    let edad = Year - anioIngresado;
    return edad;
}
let edad = aniosActuales(anioIngresado);

function aniosFuturos(edad) {
    let anioNext = edad + 1;
    return anioNext;
}

function futuro(anioIngresado2) {
    let edadEnFuturo = anioIngresado2 - anioIngresado;
    return edadEnFuturo;
}

let edadEnFuturo = futuro(anioIngresado2);
let edadFutura = aniosFuturos(edad);

console.log(`Hola! Tu edad es ${edad} y el año que viene tendrás ${edadFutura}. En el año ${anioIngresado2} tendrás ${edadEnFuturo}. Feeling old yet?`);