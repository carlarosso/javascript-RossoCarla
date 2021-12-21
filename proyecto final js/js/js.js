
// ............... DESAFIO GENERAR HTML ................................

// CREO ARRAY DE OBJETOS - PRODUCTOS

/* let productos = [{
        id: '0',
        nombreProducto: "Good day sunshine",
        precio: "CHF 20",
        imagen : 'https://i.postimg.cc/QtkK1Nc6/sunshine.jpg card-img-top img-product',

    }, 
    {
        id: '1',
        nombreProducto: "Willy Wonka",
        precio: "CHF 10",
        imagen : 'https://i.postimg.cc/HjDx0ysM/willy-wonka.jpg card-img-top',

    },
    {
        id: '2',
        nombreProducto: "El Argento",
        precio: "CHF 5",
        imagen : '',

    },
    {
        id: '3',
        nombreProducto: "Bedfast",
        precio: "CHF 24",
        imagen : 'https://i.postimg.cc/JzGXvLWn/bedfast.jpg card-img-top img-product',

    },
    {
        id: '4',
        nombreProducto: "Swiss dreams are made of this",
        precio: "CHF 32",
        imagen : 'https://i.postimg.cc/SNnb6wkq/cheese.jpg card-img-top img-product',

    },
    {
        id: '5',
        nombreProducto: "Guilt-free",
        precio: "CHF 68",
        imagen : 'https://i.postimg.cc/2SMWfKzx/guilt-free.jpg card-img-top img-product',

    },
    {
        id: '6',
        nombreProducto: "El Argento",
        precio: "CHF 44",
        imagen : 'https://i.postimg.cc/3NDNDB77/el-argento.jpg',
    },
    {
        id: '7',
        nombreProducto: "Marie Antoinette",
        precio: "CHF 21",
        imagen : 'https://i.postimg.cc/nh5gyBCD/marie-antoinette.jpg card-img-top',

    },
    {
        id: '8',
        nombreProducto: "Le macaron",
        precio: "CHF 15",
        imagen : 'https://i.postimg.cc/ZYVq98jN/macaron.jpg card-img-top img-product',
    },
    {
        id: '9',
        nombreProducto: "Everyday I'm waffling",
        precio: "CHF 8", 
        imagen: 'https://i.postimg.cc/X7GTQrDD/waffle.jpg card-img-top img-product',
    },
]

// CREO VARIABLE CARRITO

let carrito = document.getElementById("carrito");

// ITERO SOBRE CADA OBJETO DEL ARRAY Y CREO UNA CARD

for (var prod of productos) {
    carrito.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">${prod.nombreProducto}</h5>
      <p class="card-text"> Get this product only for ${prod.precio}.</p>
      <img src=${prod.imagen} class="card-img-top" alt="...">
    </div>
  </div>`
}
 */

// ............... DESAFIO JQUERY  ................................


// TRAIGO DIV CART DE CART.HTML

let cart = $(".cart-section1");

// CREO VARIABLE PARA BOTONES CON SELECTOR JQUERY

let btns = $(".addCart");

// FUNCION PARA AGREGAR AL CARRITO

$(".addCart").click(function(e){

    // CAPTURO EL EVENTO CLICK

    let clicked = e.target; 

    // CAPTURO EL TITULO DEL PRODUCTO CLICKEADO

    let title = clicked.parentNode.querySelector(".products-title").textContent;
 
    // APPEND UN NUEVO LI CON EL NOMBRE DEL PRODUCTO CLICKEADO

    $(".cartList").append( `<li> ${title} </li> `)

})


// CODIGO SIN USAR AÚN (ESTOY EXPLORANDO)


/* let botones = $(".addCart");

for (let clickedBtn of botones) {
    clickedBtn.addEventListener("click", addToCart)
};

function addToCart(e){
    let btn = e.target;
    let title = btn.parentNode.querySelector("h2").textContent;

    shoppingList.push((title))
}

console.log(shoppingList)
 */


//show/hide shopping cart when first item is choosen or is empty

/* if(cart.has(itemData).length > 0) {
   $(this).css('opacity', 1);
} else {
   $(this).css('opacity', 0);
} 
 */