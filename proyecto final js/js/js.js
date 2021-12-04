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

    // LOCAL STORAGE

    let listaProds = localStorage.setItem("cartList", JSON.stringify(cart));
};


// ............... DESAFIO GENERAR HTML ................................

// SELECCIONO DIV #CARRITO EN CART.HTML Y LE AGREGO CONTENIDO


let carrito = document.getElementById("carrito");

let nuevoP = document.createElement("p");

nuevoP.innerHTML = `<h3>Su carrito</h3>

 <p> En su carrito tiene: </p>`;

carrito.appendChild(nuevoP);

// LLAMO A LOCAL STORAGE

let selectedProd = localStorage.getItem("cartList");
let JSONprod = JSON.parse(selectedProd);

// PUSH DATA EN NUEVO ELEMENTO "LI" DENTRO DE #LISTACOMPLETA

let listaCompleta = document.getElementById("listaCompleta");
let listaProd = document.createElement("li");

listaProd.innerHTML = JSONprod;


listaCompleta.appendChild(listaProd);