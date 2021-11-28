// DESAFÍO INTERACTUAR CON HTML

// CREO UN NUEVO ELEMENTO PÁRRAFO
let parrafo = document.createElement("p");


// INCLUYO CONTENIDO DENTRO DEL ELEMENTO PARRAFO
parrafo.innerHTML = "In this section, you can see all our products and choose one of them. Click the Add button and it will automatically be added to your cart!"

// CREO EL ESPACIO CONTENEDOR DEL ELEMENTO PARRAFO
let container = document.getElementById("container");

// AGREGO MARGEN AL DIV CONTAINER
container.style.margin = "50px";

// LINKEO EL ELEMENTO PARRAFO CON EL CONTENEDOR PARA QUE SE MUESTRE EN LA INTERFAZ
container.appendChild(parrafo)


// FUNCION PARA AGREGAR ELEMENTOS A LA LISTA

function agregarElemento() {

    let lista = document.getElementById("listado");
    let prod = document.getElementById("nombreCombo");

    let nuevoElemento = document.createElement("li");

    nuevoElemento.style.fontSize = "15px";

    nuevoElemento.innerHTML = `${nombreCombo.value}`;

    lista.appendChild(nuevoElemento);

}