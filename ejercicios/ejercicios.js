/* votacion */
"
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

/* BOOKLET - EJERCICIO 4 - Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.  */

let nombre1 = prompt("inserte nombre")
let nombre2 = prompt("inserte nombre")
let nombre3 = prompt("inserte nombre")
let nombre4 = prompt("inserte nombre")
let nombre5 = prompt("inserte nombre")

alert("Bievenidxs" + nombre1 + nombre2 + nombre3 + nombre4 + nombre5)

/* BOOKLET - EJERCICIO 5 - Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.
 */

let precio1 = prompt(parseInt("ingrese precio uno"));

let descuento20 = precio1 * 20 / 100;
let preciofinal = precio1 - descuento20;
console.log("El precio con 20% de descuento es" + " " + preciofinal)

// optimizado

let precio = parseFloat(prompt('INGRESAR PRECIO'));
let descuento20 = precio - (precio * 0.2);
let descuento30 = precio - (precio * 0.3);
console.log(descuento20);
console.log(descuento30);

/* BOOKLET - Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”. */

nombre = "Bart"
let nombreUsuario = prompt("Ingrese nombre")

if (nombreUsuario === nombre) {
    alert("Fui yo")
} else {
    alert("El niño yo no fui")
}

/* BOOKLET - Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”. */

let tecla = prompt('inserte tecla');

if (tecla == "y" || tecla == "Y") {
    console.log("correcto");
} else {
    console.log("error")
}

/* Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.
 */

let numero = prompt(parseInt('inserte un numero'));

if (numero == 1) {
    console.log('Elegiste a Homero');
} else if (numero == 2) {
    console.log('Elegiste a Marge');
}
if (numero == 3) {
    console.log('Elegiste a Bart');
} else if (numero == 4) {
    console.log('Elegiste a Lisa');
}

// ejercicio clase 3



let username = "carla";
let contraseña = "1234";

for (let i = 0; i < 4; i++) {

    let usuario = prompt('ingrese su usuario');
    let pass = prompt('ingrese su contraseña');

    if (usuario == username && pass == contraseña) {
        console.log('Bienvenida');
    }
}
} else {
    console.log('usuario incorrecto');
    break;
}

// ejercicio votación

let partidoA = 0;
let partidoB = 0;
let user = prompt("ingrese su nombre");
let voto = prompt('Ingrese su partido A o B');


do {

    if (voto == "A") {

        console.log(`gracias ${user} por votar a partido A`);
        partidoA = partidoA + 1;
    } else if (voto == "B") {

        console.log(`gracias ${user} por votar a partido B`);
        partidoB = partidoB + 1;
    } else {
        console.log('intente de nuevo');
    }
} while (voto = !"ESC")

console.log(partidoA);
console.log(partidoB);