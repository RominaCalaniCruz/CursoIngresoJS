/*
Romina Calani Cruz 
DIV X

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata 
tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata 
tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata 
tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	let estacionIngresada;
	let destino;
	const tarifa = 150;
	let precioFinal;
	let subPrecio;
	let mensaje;
	//codigo del desafio en clases
	let tiempo;
	let distancia;
	let velocidad;
	let mensaje2;
	//--------------------

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	subPrecio = 1;

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destino == "Bariloche"){
				subPrecio = 1.20;
			}
			else if(destino == "Mar del plata"){
				subPrecio = 0.80;
			}
			else{
				subPrecio = 0.90;
			}
		break;
		case "Verano":
			if(destino == "Bariloche"){
				subPrecio = 0.80;
			}
			else if(destino == "Mar del plata"){
				subPrecio = 1.20;
			}
			else{
				subPrecio = 1.10;
			}
		break;
		case "Otoño":
		case "Primavera":
			if(destino != "Cordoba"){
				subPrecio = 1.10;
			}
		break;
	}

	precioFinal = tarifa * subPrecio;

	mensaje = "El precio final es de: " + precioFinal;

	alert(mensaje);

	//codigo del desafio en clases----------------------------------------------------
	tiempo = prompt("Ingrese cuanto tiempo (en horas) tardo en su viaje");
	distancia = prompt("Ingrese la distancia que recorri (en kilometros)");
	tiempo = parseInt(tiempo);
	distancia = parseInt(distancia);

	velocidad = distancia/tiempo;

	if(velocidad<=60){
		mensaje2 = "Muy Lento";
	}
	else if(velocidad<=80){
		mensaje2 = "Lento";
	}
	else if(velocidad <=100){
		mensaje2 = "Buen ritmo";
	}
	else if(velocidad<=120){
		mensaje2 = "ahí de la ley";
	}
	else{
		mensaje2 = "eso no se hace";
	}
	mensaje2 = "La velocidad fue de: "+velocidad.toFixed(2)+" km/h - "+mensaje2;
	alert(mensaje2);
	//--------------------------------------------------------------------------------

}