/*
Romina Calani Cruz
DIV X

Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/

function mostrar()
{
	let estacionIngresada;
	let destino;
	let mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destino=="Bariloche"){
				mensaje = "Se viaja";
			}
			else{
				mensaje = "No se viaja";
			}
		break;
		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas"){
				mensaje = "Se viaja";
			}
			else{
				mensaje = "No se viaja";
			}
		break;
		case "Otoño":
			mensaje = "se viaja";
		break;
		case "Primavera":
			if(destino == "Bariloche"){
				mensaje = "no se viaja";
			}
			else{
				mensaje = "se viaja";
			}
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN