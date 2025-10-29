//3 Algoritmo para generar la tabla de un número dado por argumento en una función.

function generarTabla(numero) {
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
generarTabla(7);