/*
Romina Calani Cruz
DIV X

Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/

function mostrar()
{
	let numero;
	let i;

	for(i=0; ;i++){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		if(numero==9){
			break;
		}
	}

}//FIN DE LA FUNCIÓN