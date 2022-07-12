/*
	Romina Calani Cruz
	DIV X
	Enunciado:

	Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.
*/

function mostrar()
{
	let numero;
	let mensaje;

	numero = Math.floor(Math.random() * 10) + 1;
	mensaje = "Número random (del 1 al 10): "+ numero;

	alert(mensaje);	

}//FIN DE LA FUNCIÓN