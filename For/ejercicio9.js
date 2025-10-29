//9 Desarrolla una función que genere y devuelva los primero N términos de la serie de Fibonacci.
 
function generarFibonacci(N) {
    if (N <= 0) {
        return [];
    }
    const serie = [0, 1];
    if (N === 1) {
        return [0];
    }
    for (let i = 2; i < N; i++) {
        const siguienteTermino = serie[i - 1] + serie[i - 2];
        serie.push(siguienteTermino);
    }
    return serie;
}
console.log("Fibonacci (N=8):", generarFibonacci(8)); 
console.log("Fibonacci (N=10):", generarFibonacci(10));