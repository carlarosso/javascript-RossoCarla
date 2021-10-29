// DESAFIO UNO

/*
let NombreUsuario = prompt("Ingresá tu nombre");
let ApellidoUsuario = prompt("Ingresá tu apellido");

let Usuario = NombreUsuario + ApellidoUsuario;

console.log("Hola" + Usuario);

alert("Gracias por ingresar tus datos")

*/

// DESAFIO DOS
let userName = "Carla";

let usuario = prompt("Ingrese su usuario");
let edad = prompt(parseInt("ingrese su edad"));

if (userName == usuario && edad > 20) {
    console.log("Bienvenida" + userName);
} else {
    alert("Usuario incorrecto");
}