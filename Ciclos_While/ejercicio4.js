//4 Algoritmo para contar ocurrencias de 'a' en un texto.

let texto = "Valentina";
let i = 0;
let contador = 0;
while (i < texto.length) {
    if (texto[i] === "a") {
        contador++;
    }
    i++;
}
console.log(contador);