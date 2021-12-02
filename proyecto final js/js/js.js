// ............... DESAFIO INCORPORAR EVENTOS ................................

//SELECCIONO TODOS LOS BOTONES "ADD TO CART"

let CartBtn = document.querySelectorAll(".addCart");

// CREO ARRAY CARRITO DE COMPRAS VACÍO

let cart = [];

// CREO UNA VARIABLE A PARTIR DE BOTONES "ADD TO CART" Y LE AGREGO UN EVENTO

for (let selection of CartBtn) {
    selection.addEventListener("click", addCart)
}

// FUNCIÓN AGREGAR A CARRITO

function addCart(e) {

    // RECOLECCION DE DATOS DEL EVENTO
    let product = e.target;

    // CAPTURA DE DATOS DEL PADRE DEL BOTÓN CLICKEADO
    let divProduct = product.parentNode;

    // GUARDAR EL NOMBRE DEL PRODUCTO EN UNA VARIABLE
    let prodTitle = divProduct.querySelector("h2").textContent;


    // MENSAJE DE ALERTA SOBRE QUÉ PRODUCTO SE SELECCIONÓ
    alert(`You have selected ${prodTitle}`)

    // PUSH DEL TITULO DEL PRODUCTO AL CARRITO
    cart.push(prodTitle);
    console.log(cart)
};