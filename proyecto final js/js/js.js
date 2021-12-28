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
] */


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


// ----------------------------- DESAFIO ANIMACIONES -------------------------

// CREO VARIABLES PARA OCULTAR Y MOSTRAR

let hideDiv = $(".hideShow");
let showBtn = $(".showContent")

// OCULTAR CONTENIDO
hideDiv.hide();



// MOSTRAR CONTENIDO ON CLICK

    showBtn.click(function(e){
        $(this).next().toggle();
        showBtn.text(function(i, text){
            return text === "See less" ? "See more" : "See less";
        })
    
    })

  
//  ---------------------------- DESAFIO AJAX

// GUARDO URL EN VARIABLE

let url = "https://jsonplaceholder.typicode.com/photos";

$(".getImg").click(function(){
    

    $.get(url, function(data){
        let info = data;
        
        for (let datos of info) {

            let idIn = $("#idGet").val();
            let idData = datos.id;

            if (idIn === idData) {
                $(".imgPlaceholder").append(`<div> 
                            <h2> ${datos.id} </h2>
                            <p> ${datos.title} </p>
                           </div>`);

        } else {
            alert("try another number");
        }

        }
    })
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