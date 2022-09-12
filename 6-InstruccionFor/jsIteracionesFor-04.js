/*
Romina Calani Cruz
DIV X

Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/

function mostrar()
{
	let i;

	document.write("Se acaba en el numero 6 (break) <br>");
	for(i=0;i<10;i++){
		document.write(i+"<br>");
		if(i==6){
			break;
		}		
	}

}//FIN DE LA FUNCIÓN