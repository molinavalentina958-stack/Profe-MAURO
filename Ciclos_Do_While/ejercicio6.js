//6 Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.

let numero = [3, 5, 7, 2, 8, 9, 10]; 
let i = 0;
function darmePares(array){
    do {
        i++;
        if (array [i] % 2 === 0){
            console.log(array[i]);
        }
    } while( i < array.length)
}
let arrayNuevo = darmePares(numero);