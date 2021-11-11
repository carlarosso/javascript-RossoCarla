/* let userName = prompt("Inserte su usuario");
let pass = parseInt(prompt("inserte su contraseña numérica"));


if (pass == "1234") {
    alert(`Bienvenidx al sistema, ${userName}`);
} else {
    alert(`Su contraseña es incorrecta`);
}

const alertIndex = document.querySelector(".boton-index");

function alertOne(alertIndex) {
    alert("You are being redirected to Our Products page");
} */

// DESASFÍO OBJETOS



function usuarios(user, edad, lugar) {
    this.user = user,
        this.edad = edad,
        this.lugar = lugar;

    this.persona = function() {
        console.log("su user es: " + this.user);
        console.log("su edad es: " + this.edad);
        console.log("usted vive en: " + this.lugar);
    }
}

let user = prompt("inserte usuario");
let edad = parseInt(prompt("inserte su edad"));
let lugar = prompt("inserte su lugar de residencia");

usuarios.persona();