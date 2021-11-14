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

/* // DESASFÍO OBJETOS

let user = prompt("inserte usuario");
let edad = parseInt(prompt("inserte su edad"));
let lugar = prompt("inserte su lugar de residencia");

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


let usuarioNuevo = new usuarios(user, edad, lugar);
usuarioNuevo.persona(); */

// DESAFÍO ARRAYS

let productos = [{
        id: '0',
        nombreProducto: "Good day sunshine",
        stock: 20,
    }, {
        id: '1',
        nombreProducto: "Willy Wonka",
        stock: 10,
    },
    {
        id: '2',
        nombreProducto: "El Argento",
        stock: 5,
    },
    {
        id: '3',
        nombreProducto: "Bedfast",
        stock: 24,
    },
    {
        id: '4',
        nombreProducto: "Swiss dreams are made of this",
        stock: 32,
    },
    {
        id: '5',
        nombreProducto: "Guilt-free",
        stock: 68,
    },
    {
        id: '6',
        nombreProducto: "El Argento",
        stock: 44,
    },
    {
        id: '7',
        nombreProducto: "Marie Antoinette",
        stock: 21,
    },
    {
        id: '8',
        nombreProducto: "Le macaron",
        stock: 15,
    },
    {
        id: '9',
        nombreProducto: "Everyday I'm waffling",
        stock: 8,
    },
];​​
// Deberias completar el resto de los items asi como los escribi, si no el usuario no va a saber que dato ingresar... 
let compra = prompt(`Inserte nombre de producto a comprar: 
1. Good day sunshine
2. Willy Wonka
3. El Argento
4. Bedfast
5. Swiss dreams are made of this
6. Guilt-free
7. Marie Antoinette
8. Le macaron
9. Everyday I'm waffling
`);​​
// ME GUSTA USAR FOR OF PARA RECORRER ARRAYS, CREO QUE ES MAS SENCILLO DE ENTENDER. LO QUE HACE ES ITERAR CADA UNO DE LOS ELEMENTOS DEL ARRAY Y GUARDARLOS EN UNA VARIABLE QUE DEFINIS A CONTINUACION.. POR EJEMPLO PRODUCTO. 
// ENTONCES LE DIGO QUE ME MUESTRE CADA PRODUCTO DEL ARRAY PRODUCTOS...
for (producto of productos) {​
    // APLIQUE UNA LOGICA PARECIDA A LA TUYA. HICE LO QUE ESCRIBI MAS ABAJO..
    // COMPARE LA COMPRA, CON LA PROPIEDAD NOMBREPRODUCTO DEL PRODUCTO ITERADO
    if (compra == producto.nombreProducto) {​
        // Y ACA LE ASIGNE UN NUEVO VALOR A LA PROPIEDAD PRODUCTO.STOCK, LE DIJE QUE SU NUEVO VALOR VA A SER: 
        // EL VALOR QUE TENIA ANTES MENOS 1, ENTONCES SE VA A ACTUALIZAR Y LO VA A CAMBIAR EN EL ARRAY. 
        producto.stock = producto.stock - 1;

    }

}​
//LO 'CONSOLIE' PARA COMPROBAR SI SE ACTUALIZO EL STOCK
console.log(productos)​​
    // TU FOR EACH NO ESTABA MAL, EL PROBLEMA ES QUE ESTABAS USANDO UN  CICLO PARA ITERAR EL ARRAY, Y DENTRO OTRO CICLO PARA ITERAR EL ARRAY TAMBIEN Y CREO QUE AHI PUEDE ESTAR EL PROBLEMA.  SI TENIAS EL FOR EACH, EL FOR COMUN CAPAZ QUE NO HACIA FALTA. 
    ​​
    // productos.forEach((producto) => {

// ACA LE ESTABAS DICIENDO QUE MIDA LA LONGITUD DE PRODUCTO, Y PRODUCTO ES EL ELEMENTO QUE SE ESTA ITERANDO, NO EL ARRAY ENTERO.. EN ESE CASO DEBERIA SER PRODUCTOS QUE ES QUIEN CONTIENE TODO LO DEL ARRAY.. 
//     for (let i = 0; i < producto.lenght; i++){
​
// EN TU IF LA LOGICA ESTA BIEN TAMBIEN, EL PROBLEMA ESTA EN QUE TENIAS QUE ENTRAR A PRODUCTO(ES EL ELEMENTO DEL ARRAY QUE SE ESTA ITERANDO, Y LUEGO ENTRAR A SU PROPIEDAD NOMBRE PRODUCTO PARA COMPARAR ESO.. ) 
//         if (compra == nombreProducto) {
​
// ACA LA VARIABLE STOCK NO LA DECLARASTE, OSEA, NO PUSISTE LET STOCK, O CONST STOCK, SE PUEDE USAR ASI, PERO NO ES BUENA PRACTICA.. ESTO ESTABA BIEN, SOLO QUE EN LUGAR DE STOCK, TENIAS QUE DECIRLE QUE AL STOCK DE PRODUCTO LE DESCUENTE UNO, Y SE ACTUALICE EN EL ARRAY. 
//             stock = producto.stock -1;
//         }
​
// Y ESTE RETURN NO LO VEO NECESARIO, EN REALIDAD COMO NO FUNCIONABA NO ENTENDI PARA QUE SERVIA, YO SAQUE LOS RESULTADOS POR UN CONSOLE.LOG PERO SI ERA NECESARIO USAR UN RETURN AVISAME :) 
//     return producto.nombreProducto + producto.stock;
//     }
// })
​​