//7 Implementa una función que calcule la suma de los cuadrados de los primero N número naturales.

function sumaCuadrados(N) {
    let sumaTotal = 0;
    for (let i = 1; i <= N; i++) {
        const cuadrado = i * i; 
        sumaTotal += cuadrado;
    }
    return sumaTotal;
}
console.log(sumaCuadrados(4)); 
console.log(sumaCuadrados(10));