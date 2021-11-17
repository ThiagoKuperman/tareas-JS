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



//tarea 7
//ordenar un array de objetos


var arregloNumeros = [75 , 125, 3, 44, 12, 56];

arregloNumeros.sort(function(a, b){return b - a});

console.log(arregloNumeros)

*/

//primera pre-entrega

//variables

let cart = [];
const selectedQty = 'Cuanta cantidad desea llevar?';
let resp = 'si';

let products = [
    { id:"1", name:"Microscopio digital", price:50000, stock:2 },
    { id:"2", name:"Telescopio galileo", price:15000, stock:10 },
    { id: "3", name: "binoculares 20x50", price:5000, stock:20 },
];


//mostrar los elementos dentro de el objeto products

const elements = () =>{
    let element = "Escoge un producto \n";
    products.forEach((product)=>{
        element += product.id + ".-" + product.name + "\n"
    });
    element += (products.length + 1) + ".-Salir";
    let opt = parseInt(prompt(element));
    return opt;
};

//saber si hay stock o no

const stockSuficiente = (cantidad , stock ) => {
    if(cantidad > stock){
        alert(`No tenemos suficiente stock, el disponible es ${stock}`);
        return false;
    }
    return true;
}

//agregar producto al carrito

const addCart = ( opcion, cantid ) => {
    const found = products.find(product => product.id === opcion.toString());
    if(stockSuficiente(cantid, found.stock)){
        let item = {
            cantidad: cantid,
            price:found.price * cantid,
            name: found.name,
        }
        cart.push(item);
        products[opcion - 1].stock -= cantid;
        alert(`${found.name} fueron agregados al carrito`)
    }
};

//mostrar el total

const showTotal = () => {
    let dataToShow = "";
    let total = 0;
    cart.forEach(product => {
        dataToShow += `Producto: ${product.name} Cantidad: ${product.cantidad} Precio: ${product.price} \n`;
        total += product.price
    })
    dataToShow += `Total: ${total}`;
    alert(dataToShow);
}

//main
alert("Bienvenidos, ¡Esta pagina es sobre Ciencia y te ayudará a comprar elementos de lo que se te ocurra!");

do{
    let opcion = elements();
    if(opcion === (products.length + 1)){
        break;
    }

    let cantid = parseInt(prompt(selectedQty));
    addCart(opcion,cantid);
    
    resp = prompt("Desea continuar comprando? si / no");

}while(resp === 'si');

if(cart.length > 0) showTotal();

