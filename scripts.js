//tarea 3
/*
function loopDePares (numero){
    for(let i=1; i<=100; i++){
        console.log(i)
        let suma = i + numero
        if (suma%2 == 0)
		  console.log("El numero " + suma + " es par");
    }
}
//esta funcion te retorna todos los numeros del 1 al 100, y te dice cuales de esos sumados a la variable que agregaste es par

//tarea 4

function middleCharacter(texto){
    let caracteres = texto.length;
    let division = caracteres/2 ;
    if(caracteres % 2 == 0){
        return(texto [division - 1] + texto[division]);
    }
    else{
        return(texto[division - 0.5]);
    }
}

//esta funcion retorna la letra del medio de la palabra que pasen como parametro. Si la palabra no tiene letra central retorna las 2 letras del medio

//tarea 5
//calculadora de iva

let valor = prompt("ingrese el valor del articulo");

function iva(valor){
    let iva = valor * 0.21;
    let valorFinal = iva + valor;
    console.log(valorFinal);
    
}


//tarea 6
//objetos

function Votacion (fecha, voto, hora){
    this.fecha = fecha;
    this.voto = voto;
    this.hora = hora;
}

let fecha = prompt("ingrese la fecha de votacion");
let voto = prompt("ingrese su voto");
let hora = prompt("ingrese el horario de votacion");

let voto1 = new Votacion (fecha, voto, hora);

console.log(voto1);

*/

//tarea 7
//incorporar arrays

function nuevoArreglo(numero){
    let arreglo = [];
    for (let i = 1; i<=numero; i++){
        arreglo.push(i);
    }
    return (arreglo);
}
//esta funcion agrega a un arreglo todos los numeros anteriores al que pases como parametro

