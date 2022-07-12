/* 
	Romina Calani Cruz
	DIV X 
	Enunciado:

	Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
	o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/ 

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	if(edad < 13 || edad > 17)
	{
		if(edad<13)
		{
			alert("Es un niño");
		}
		else{
			alert("Usted es mayor de edad");
		}
	}
	else{
		alert("Usted es adolescente");
	}


}//FIN DE LA FUNCIÓN