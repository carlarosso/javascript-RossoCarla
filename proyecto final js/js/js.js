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

Hay un error en cuando queres ejecutar ese metodo, El problema esta en que no creaste ningun objeto en base a tu funcion constructora. Los datos por prompt estan bien pedidos, despues de pedir esos datos, deberias crear tu objeto algo asi por ejemplo: 

let persona1 = new usuarios(user,edad,lugar)  // Creo una variable que va a ser el objeto y en los parametros que le asignaste a la funcion usuarios, pasas esas 3 variables donde guardaste los datos de los prompts


persona1.persona(); // Y aca llamo a ese objeto que acabo de crear, y el metodo que creaste antes, para que imprima por consola los datos :) 


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

/* let productos = [{
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
let compra = prompt(`Inserte el número del producto a comprar: 
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

for (producto of productos) {​
    if (compra == producto.id) {​
        producto.stock = producto.stock - 1;

    }

}​
console.log(productos)​​ */






​​ // DESAFIO ORDENAR UN ARRAY DE OBJETOS

let size = 5;
let edadesUsuarios = [];

for (let i = 0; i < size; i++) {
    let año = parseInt(prompt('Ingrese el año de nacimiento'));
    let edad = 2021 - año;
    edadesUsuarios.push(edad);
}

let numberSorter = (a, b) => a - b;
edadesUsuarios.sort(numberSorter);

console.log(edadesUsuarios)