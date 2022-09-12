/*
Romina Calani Cruz
DIV X

Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave: ");

	while(clave != "utn750")
	{
		clave = prompt("Incorrecto, re-ingrese la clave:");
	}
	
	alert("Clave correcta.");

}//FIN DE LA FUNCIÓN
