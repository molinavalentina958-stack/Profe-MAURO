//4 Algoritmo para contar ocurrencias de 'a' en un texto.

let texto = "Valentina";
let contador = 0; 
for (let i = 0; i < texto.length; i++) {
   let valor = texto[i].toLowerCase();
   if(valor==='a'){
    contador++;
   }
}
console.log ('Encontré '+contador+' letras vocales a');