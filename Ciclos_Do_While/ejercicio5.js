//5 Algoritmo para calcular el factorial de un número.

let numero = 3;
let factorial = 1; 
let i = 1;
do  {
    factorial = factorial * i;
    i++;
} while (i <= numero)
console.log(factorial);