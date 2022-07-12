/*
	Romina Calani Cruz
	DIV X
	Enunciado:

	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
	mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

*/

function mostrar()
{
	let edad;
	let soltero;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	soltero = document.getElementById("estadoCivil").value;

	if(edad < 18 && soltero != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");

	}

}//FIN DE LA FUNCIÓN