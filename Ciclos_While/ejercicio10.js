//10 Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero. 

const generarTabla = N => { 
    let i = 0;
    while (i <= 9) {
         i++
        console.log(`${N} x ${i} = ${N * i}`);
    }
}
generarTabla(5);