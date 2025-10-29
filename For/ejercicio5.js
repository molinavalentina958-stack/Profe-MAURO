//5 Algoritmo para calcular el factorial de un número.

let numero = 4;
let factorial = 1;
for (let i = 1; i <= numero; i++) {
    factorial *= i; 
}
console.log("El factorial de " + numero + " es: " + factorial);