/*
Romina Calani Cruz
DIV X

Enunciado:
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/
function mostrar()
{
	let numero;

	numero = prompt("Ingrese un número entre 0 y 9 (inclusive): ");
	numero = parseInt(numero);

	while(!(numero>=0 && numero<=9)){
		numero = prompt("Re-ingrese un número entre 0 y 9 (inclusive): ");
		numero = parseInt(numero);
	}

	document.getElementById("txtIdNumero").value = numero;

}//FIN DE LA FUNCIÓN