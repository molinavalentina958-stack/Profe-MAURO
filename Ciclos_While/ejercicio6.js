//6 Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.

let numero = [3, 5, 7, 2, 8, 9, 10]; 
function darmePares(array) {
    let arrayPares = [];
    let i = 0;
    while ( i < array.length){
        if (array [i] % 2 === 0) {
            arrayPares.push(array[i]);
        }
         i++;
    }
    return arrayPares;
}
let arrayNuevo = darmePares(numero);
console.log("Array original: ", numero);
console.log("Números pares: ", arrayNuevo);