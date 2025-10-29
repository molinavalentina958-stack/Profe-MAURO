//7 Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.

function sumaCuadrados(Numero) {
  let suma = 0
  let i = 1
  do {
    suma += i * i
    i++
  } while (i <= Numero)
  return suma
}
console.log(sumaCuadrados(4))
console.log(sumaCuadrados(10))