//8 Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **.

function calcularPotencia(base, exponente) {
  let resultado = 1;
  let i = 0;
  while (i < exponente) {
    resultado *= base; 
    i++;
  }
  return resultado;
}
console.log(calcularPotencia(4, 3));
console.log(calcularPotencia(3, 6));
console.log(calcularPotencia(2, 5));