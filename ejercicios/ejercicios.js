/* votacion */

let edadUsuario = prompt("inserte su edad");
let edad = edadUsuario;

if (edad > 16) {
    console.log("puede votar");
} else {
    console.log("no puede votar")
}

/* FIN votacion */

/* Notas */

let nota = prompt("Nota de evaluación");

if (nota >= 7) {
    console.log("Aprobado");
} else if (nota >= 4) {
    console.log("recuperatorio");
} else {
    console.log("alto burro");
}

/* FIN Notas */
/* PROGRAMA QUE PIDA DOS NUMEROS Y LOS SUME; INFORME SI LA SUMA ES MENOR, MAYOR O IGUAL A 100*/

let NumeroA = prompt("inserte un número");
let NumeroB = prompt("inserte otro número");

let numero = parseInt(NumeroA) + parseInt(NumeroB);

if (numero > 100) {
    console.log("su numero es mayor que 100");
} else if (numero == 100) {
    console.log("su numero es igual que 100");
} else {
    console.log("su numero es menor que 100");
}

/* FIN PROGRAMA*/

/* PROGRAMA DOS */

let usuarioR = "Pepe";
let passR = 1234;

let usuario = prompt("ingrese usuario");
let contraseña = prompt(parseInt("ingrese constraseña"));

if (usuario == usuarioR && contraseña == passR) {
    console.log("bienvenido Pepe");
} else {
    console.log("intente nuevamente");
}

/* FIN PROGRAMA DOS */