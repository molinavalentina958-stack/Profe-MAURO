//4 Algoritmo para contar ocurrencias de 'a' en un texto. 

let texto = "Valentina";
let i = 0;
let contador = 0;
do {
    if (texto[i] === "a") {
        contador++;
    }
    i++;
} while (i < texto.length)
console.log(contador);