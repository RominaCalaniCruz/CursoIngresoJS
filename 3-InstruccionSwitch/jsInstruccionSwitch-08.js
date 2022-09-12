/*
Romina Calani Cruz
DIV X

Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	let destinoIngresado;
	let clima;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			clima = "FRIO";
		break;
		case "Cataratas":
		case "Mar del plata":
			clima = "CALOR";
		break;
	}

	mensaje = "En "+destinoIngresado+" hace "+clima;

	alert(mensaje);

}//FIN DE LA FUNCIÓN