//5 Algoritmo para calcular el factorial de un número.

let numero = 4;
let factorial =1; 
let i = 1;
while (i <= numero) {
    factorial = factorial * i;
    i++;
}
console.log(factorial);