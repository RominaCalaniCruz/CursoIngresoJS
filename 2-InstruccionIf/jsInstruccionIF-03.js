/* 
	Romina Calani Cruz
	DIV X
	Enunciado:
	Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/


function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		alert("Usted NO es mayor de edad");
	}

}//FIN DE LA FUNCIÓN