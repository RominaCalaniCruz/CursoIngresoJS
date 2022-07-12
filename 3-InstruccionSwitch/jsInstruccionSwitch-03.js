/*
Romina Calani Cruz 
DIV X

Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	//tomo el mes
	let mesDelAnio;
	let mensaje;

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Febrero":
			mensaje = " Este mes no tiene más de 29 días.";
		break;
		default:
			mensaje = "Este mes tiene 30 o más días";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN