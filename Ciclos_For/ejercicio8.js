//8 Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **. 

const calcularPotencia = (base, exponente) => {
    if (exponente === 0) return 1;
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}
console.log(calcularPotencia(2, 3));