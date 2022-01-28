// CREO ARRAY DE OBJETOS - PRODUCTOS

let productos = [{
        id: '0',
        nombreProducto: "Good day sunshine",
        precio: 20,
        imagen: 'https://i.postimg.cc/QtkK1Nc6/sunshine.jpg card-img-top img-product',
        inCart: 0,

    },
    {
        id: '1',
        nombreProducto: "Willy Wonka",
        precio: 25,
        imagen: 'https://i.postimg.cc/HjDx0ysM/willy-wonka.jpg card-img-top',
        inCart: 0,

    },
    {
        id: '2',
        nombreProducto: "El Argento",
        precio: 28,
        imagen: 'https://i.postimg.cc/3NDNDB77/el-argento.jpg',
        inCart: 0,

    },
    {
        id: '3',
        nombreProducto: "Bedfast",
        precio: 24,
        imagen: 'https://i.postimg.cc/JzGXvLWn/bedfast.jpg card-img-top img-product',
        inCart: 0,

    },
    {
        id: '4',
        nombreProducto: "Swiss dreams are made of this",
        precio: 32,
        imagen: 'https://i.postimg.cc/SNnb6wkq/cheese.jpg card-img-top img-product',
        inCart: 0,

    },
    {
        id: '5',
        nombreProducto: "Guilt-free",
        precio: 28,
        imagen: 'https://i.postimg.cc/2SMWfKzx/guilt-free.jpg card-img-top img-product',
        inCart: 0,

    },

    {
        id: '6',
        nombreProducto: "Marie Antoinette",
        precio: 21,
        imagen: 'https://i.postimg.cc/nh5gyBCD/marie-antoinette.jpg card-img-top',
        inCart: 0,

    },
    {
        id: '7',
        nombreProducto: "Le macaron",
        precio: 15,
        imagen: 'https://i.postimg.cc/ZYVq98jN/macaron.jpg card-img-top img-product',
        inCart: 0,

    },
    {
        id: '8',
        nombreProducto: "Everyday I'm waffling",
        precio: 19,
        imagen: 'https://i.postimg.cc/X7GTQrDD/waffle.jpg card-img-top img-product',
        inCart: 0,

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









// ............... AGREGAR ELEMENTOS AL CARRITO CON JQUERY  ................................


// CREO VARIABLE PARA BOTONES CON SELECTOR JQUERY

let btns = $(".addCart");

// CREO ARRAY VACIO PARA CARRITO

let cart = [];

// CREO ARRAY VACIO PARA LISTADO DE PRECIOS

let listadoPrecios = [];

// CREO VARIABLES PARA BOTON CHECKOUT, PRECIO TOTAL Y TITULO "CART", Y OCULTO EL CONTENIDO

let checkoutBtn = $('.checkoutBtn').hide()

let totalSum = $('#sum-prices').hide()

let cartTitle = $('.cartTitle').hide()

// CREO VARIABLE PARA LISTA CARRITO

let cartList = $('.cartList');







// LOOP DE ELEMENTOS - FUNCION PARA AGREGAR ITEMS AL CARRITO ON CLICK

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {

        // CAPTURO EL EVENTO CLICK

        let btnClicked = e.target;

        // LLAMO FUNCION PARA OCULTAR CONTENIDO DEL CARRITO UNA VEZ LLENADO

        emptyCart();

        // CAPTURO EL TITULO DEL PRODUCTO CLICKEADO

        let item = btnClicked.closest('.col');

        let title = item.querySelector('.products-title').textContent;

        let price = item.querySelector('.productPrice').textContent;


        // .APPEND() EL TITULO DEL PRODUCTO CLICKEADO
        // .APPEND() PRECIO DEL PRODUCTO CLICKEADO

        cartList.append(`<li> ${title} </li>`);

        $('.prices').append(`<li> ${price} </li>`)

        cart.push(title)

        // LLAMO FUNCION SETITEMS PARA VER CANT DE PRODS EN CARRITO

        setItems(productos[i]);

        // FUNCION TOTALPRICE PARA CALCULAR PRECIO TOTAL

        totalPrice(productos[i]);




    })
}


// FUNCION EMPTYCART PARA MODIFICAR EL CONTENIDO ESTÁTICO DEL CARRITO

function emptyCart() {

    $('.icon-title').hide(); // OCULTO "YOUR CART IS EMPTY"
    cartTitle.show(); // MUESTRO TITULO "HIDE"
    checkoutBtn.show() // MUESTRO CHECKOUT BUTTON
    totalSum.show() // MUESTRO SUMA TOTAL



};

// CHECKOUT ALERT



// FUNCION SETITEMS PARA CALCULAR CANTIDAD DE PRODUCTOS EN EL CARRITO

function setItems(product) {

    // TRAIGO PRODUCTOS DE LOCAL STORAGE
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
    cartItems = (cartItems);

    if (cartItems != null) { // SI EN CARTITEMS HAY ALGO YA GUARDADO

        // SI EL PRODUCT.ID ES = A UNDEFINED, AGREGAR NUEVO PRODUCTO A CONTENIDO ANTERIOR

        if (cartItems[product.id] == undefined) {
            cartItems = {
                ...cartItems,
                [product.id]: product,
            };

        }

        cartItems[product.id].inCart += 1;


    } else { //SI EL CARTITEM = NULL 
        product.inCart = 1;
        cartItems = {
            [product.id]: product,
        }

    }

    // ENVIO PRODUCTOS A LOCAL STORAGE CON JSON

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}


// FUNCION PARA CALCULAR PRECIO TOTAL

function totalPrice(product) {

    let cartCost = localStorage.getItem('totalCost');


    if (cartCost != null) {

        cartCost = parseInt(cartCost);

        localStorage.setItem('totalCost', cartCost + product.precio)

    } else {

        localStorage.setItem('totalCost', product.precio);

    }

    totalSum.append(`${cartCost}`);

}