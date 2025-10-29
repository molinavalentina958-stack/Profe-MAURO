//6 Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.

let numeros = [3, 5, 7, 2, 8, 9, 10];
 
function darmePares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}
let arrayNuevo = darmePares(numeros);
console.log(arrayNuevo);