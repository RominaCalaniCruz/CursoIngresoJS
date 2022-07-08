/*
Romina Calani Cruz DIV X 
TP 2 -- Enunciado:

    2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let total;
    
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    total = (largo+ancho)*2*3;

    alert("La cantidad de alambre a comprar es: " + total.toFixed(2));
}
function Circulo () 
{
	let radio;
    let total;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat();

    total = 2*radio*Math.PI*3;

    alert("La cantidad de alambre a comprar es: " + total.toFixed(2));
}
function Materiales () 
{
    let largo;
    let ancho;
    let bolsaCal;
    let bolsaCe;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    /*Para que la cantidad de bolsas lo muestre en numeros redondos, utlice Math.ceil una funcion que redondea hacia arriba los decimales*/

    bolsaCal=Math.ceil(largo*ancho*3); 
    bolsaCe=Math.ceil(largo*ancho*2);

    alert("Se van a necesitar "+ bolsaCal+" bolsas de cal y "+bolsaCe+" bolsas de cemento."); 
}