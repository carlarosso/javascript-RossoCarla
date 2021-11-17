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