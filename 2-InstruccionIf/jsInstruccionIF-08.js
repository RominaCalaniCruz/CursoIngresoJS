/*
	Romina Calani Cruz
	DIV X
	Enunciado:

	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
	pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	let edad;
	let soltero;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	soltero = document.getElementById("estadoCivil").value;

	if(edad >= 18 && soltero == "Soltero")
	{
		alert("Es soltero y no es menor");

	}

}//FIN DE LA FUNCIÓN