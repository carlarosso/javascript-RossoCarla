let userName = prompt("Inserte su usuario");
let pass = parseInt(prompt("inserte su contraseña numérica"));


if (pass == "1234") {
    alert(`Bienvenidx al sistema, ${userName}`);
} else {
    alert(`Su contraseña es incorrecta`);
}

const alertIndex = document.querySelector(".boton-index");

function alertOne(alertIndex) {
    alert("You are being redirected to Our Products page");
}