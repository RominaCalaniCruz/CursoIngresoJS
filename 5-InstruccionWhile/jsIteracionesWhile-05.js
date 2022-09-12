/*
Romina Calani Cruz
DIV X

Enunciado:
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	let genero;

	genero = prompt("Ingrese F ó M.").toUpperCase();

	while(genero != 'F' && genero != 'M') 
	{
		genero = prompt("Dato invalido. Re-ingrese F ó M.").toUpperCase();
	}

	document.getElementById("txtIdSexo").value = genero;

}//FIN DE LA FUNCIÓN