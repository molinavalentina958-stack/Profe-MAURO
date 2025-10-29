// 7 Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.

function sumaCuadrados(N) {
    let suma = 0;
    let i = 1;
    while (i <= N) {
        let cuadrado = i * i;
        suma += cuadrado;
        i++;
    }
    return suma;
}
console.log(sumaCuadrados(4));
console.log(sumaCuadrados(10));