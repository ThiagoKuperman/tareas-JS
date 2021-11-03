function loopDePares (numero){
    for(let i=1; i<=100; i++){
        console.log(i)
        let suma = i + numero
        if (suma%2 == 0)
		  console.log("El numero " + suma + " es par");
    }
}
//esta funcion te retorna todos los numeros del 1 al 100, y te dice cuales de esos sumados a la variable que agregaste es par
