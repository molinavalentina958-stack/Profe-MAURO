//9  Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci.

function generarFibonacci(N) {
  if (N <= 0) return [];
  if (N === 1) return [0];
  let serie = [0, 1];
  let i = 2; 
  do {
    let siguiente = serie[i - 1] + serie[i - 2];
    serie.push(siguiente);
    i++;
  } while (i < N)
  return serie;
}
console.log(generarFibonacci(5));
console.log(generarFibonacci(10));