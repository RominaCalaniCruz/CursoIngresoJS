/*
Romina Calani Cruz
DIV X

Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	let mensaje;
	let mesDelAnio;

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tiene 30 dias";
		break;
		case "Febrero":
			mensaje = "Tiene 28 dias";
		break;
		default:
			mensaje = "Tiene 31 dias";
		break;

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN