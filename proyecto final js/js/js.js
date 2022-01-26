// CREO ARRAY DE OBJETOS - PRODUCTOS

let productos = [{
        id: '0',
        nombreProducto: "Good day sunshine",
        precio: "CHF 20",
        imagen: 'https://i.postimg.cc/QtkK1Nc6/sunshine.jpg card-img-top img-product',

    },
    {
        id: '1',
        nombreProducto: "Willy Wonka",
        precio: "CHF 25",
        imagen: 'https://i.postimg.cc/HjDx0ysM/willy-wonka.jpg card-img-top',

    },
    {
        id: '2',
        nombreProducto: "El Argento",
        precio: "CHF 28",
        imagen: 'https://i.postimg.cc/3NDNDB77/el-argento.jpg',

    },
    {
        id: '3',
        nombreProducto: "Bedfast",
        precio: "CHF 24",
        imagen: 'https://i.postimg.cc/JzGXvLWn/bedfast.jpg card-img-top img-product',

    },
    {
        id: '4',
        nombreProducto: "Swiss dreams are made of this",
        precio: "CHF 32",
        imagen: 'https://i.postimg.cc/SNnb6wkq/cheese.jpg card-img-top img-product',

    },
    {
        id: '5',
        nombreProducto: "Guilt-free",
        precio: "CHF 28",
        imagen: 'https://i.postimg.cc/2SMWfKzx/guilt-free.jpg card-img-top img-product',

    },

    {
        id: '6',
        nombreProducto: "Marie Antoinette",
        precio: "CHF 21",
        imagen: 'https://i.postimg.cc/nh5gyBCD/marie-antoinette.jpg card-img-top',

    },
    {
        id: '7',
        nombreProducto: "Le macaron",
        precio: "CHF 15",
        imagen: 'https://i.postimg.cc/ZYVq98jN/macaron.jpg card-img-top img-product',
    },
    {
        id: '8',
        nombreProducto: "Everyday I'm waffling",
        precio: "CHF 19",
        imagen: 'https://i.postimg.cc/X7GTQrDD/waffle.jpg card-img-top img-product',
    },
]


// ............... CARD FLIP ........................................


// CREO VARIABLE CARD CON SELECTOR QUERY

const card = document.querySelectorAll(".card-inner");

// FUNCION PARA GIRAR CARD

function flipCard() {

    this.classList.toggle('is-flipped');

}

// ITERO SOBRE CADA CARD Y AGREGO UN EVENT LISTENER CON FUNCION ON CLICK

card.forEach((card) => card.addEventListener("click", flipCard));





// ............... AGREGAR PRECIO EN CADA PRODUCTO ........................

let productPrices = $(".productPrice")

let productTitle = $(".products-title").html();




for (let prodSeleccionado of productos) {

    let title = prodSeleccionado.nombreProducto;

    /* console.log(title)

    console.log(productTitle) */

    if (productTitle === title) {

        precioTotal = prodSeleccionado.precio;
        productPrices.append(precioTotal)

    }
}





// ............... AGREGAR ELEMENTOS AL CARRITO CON JQUERY  ................................


// CREO VARIABLE PARA BOTONES CON SELECTOR JQUERY

let btns = $(".addCart");

// CREO ARRAY VACIO PARA CARRITO

let cart = [];

// LOOP DE ELEMENTOS

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {

        // CAPTURO EL EVENTO CLICK

        let btnClicked = e.target;

        // CAPTURO EL TITULO DEL PRODUCTO CLICKEADO

        let item = btnClicked.closest('.col');

        let title = item.querySelector('.products-title').textContent;



        // .PUSH() EL TÍTULO DEL ELEMENTO CLICKEADO EN ARRAY CART

        cart.push(title)

        console.log(cart)

        // GUARDO DATA DE CARRITO EN LOCALSTORAGE

        let storage = localStorage.setItem('fullCart', cart)



    })
}





// GUARDAR PRODUCTOS SELECCIONADOS EN STORAGE

// CREO VARIABLE CART CON ARRAY VACIO Y .PUSH() EL ELEMENTO CLICKEADO

/* let cartFilled = [];

cartFilled.push(cartList)
 */














// CODIGO SIN USAR AÚN (ESTOY EXPLORANDO)

/* 
// OCULTO CONTENIDO DEL CARRITO CUANDO SE AGREGUE ELEMENTOS

    $('.carrito').each(function() { 
        if($(this).hasClass('active')) { 
            $(this).removeClass('active');
        } else { 
            $(this).addClass('active');
        }
})
 */


//show/hide shopping cart when first item is choosen or is empty

/* if(cart.has(itemData).length > 0) {
   $(this).css('opacity', 1);
} else {
   $(this).css('opacity', 0);
} */