//10 Desarrolla una función que genere el total de las tablas de multiplicar dado un número entero. 

const generarTabla = N => { 
    for (let i = 1; i <= 10; i++) {
        console.log(`${N} x ${i} = ${N * i}`);
    }
}
generarTabla(8);