//8 Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **.

function calcularPotencia(base, exponente) {
  let resultado = 1;
  let i = 0;
  do {
    resultado *= base; 
    i++;
  } while (i < exponente)
  return resultado;
}
console.log(calcularPotencia(2, 2));
console.log(calcularPotencia(3, 4));
console.log(calcularPotencia(4, 6));