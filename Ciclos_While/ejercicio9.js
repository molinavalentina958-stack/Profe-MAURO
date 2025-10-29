//9 Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci.
function generarFibonacci(N) {
  if (N <= 0) return [];
  if (N === 1) return [0];
  let serie = [0, 1];
  let i = 2; 
  while (i < N) {
    let siguiente = serie[i - 1] + serie[i - 2];
    serie.push(siguiente);
    i++;
  }
  return serie;
}
console.log(generarFibonacci(4));
console.log(generarFibonacci(15));