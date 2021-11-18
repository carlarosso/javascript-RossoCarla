 // DESAFIO ORDENAR UN ARRAY DE OBJETOS

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


 // PRIMERA ENTREGA PROYECTO FINAL


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
     }
 ]

 let compra = prompt(`Inserte el número del producto a comprar: 
0. Good day sunshine
1. Willy Wonka
2. El Argento
3. Bedfast
4. Swiss dreams are made of this
5. Guilt-free
6. Marie Antoinette
7. Le macaron
8. Everyday I'm waffling
`)

 let productoComprado = '';
 let cantidad = '';
 for (let producto of productos) {​
     if (compra == producto.id) {​
         cantidad = producto.stock - 1;
         productoComprado = producto.nombreProducto
     }
 }​

 let usuario = prompt('inserte su nombre de Usuario');

 console.log(`Hola ${usuario}! Ordenaste el producto ${compra}: ${productoComprado}. Nos quedan en stock ${cantidad}`);