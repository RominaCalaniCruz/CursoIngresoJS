/*
Romina Calani Cruz
DIV X

Enunciado:
al presionar el botón pedir la repeticiones de veces que quiero repetir el mensaje "Hola UTN FRA"
*/

function mostrar()
{
	let repeticiones;
	let i;
	
	do{
		repeticiones = prompt("ingrese el número de repeticiones");
		repeticiones = parseInt(repeticiones);
	}while(isNaN(repeticiones) || repeticiones<0);

	for(i=0;i<repeticiones;i++){
		document.write("Hola UTN FRA. <br>");
	}

}//FIN DE LA FUNCIÓN