/*
Romina Calani Cruz
DIV X

Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let num;
	let promedio;
	const limite = 5;

	contador=0;
	acumulador=0;
	
	do{
		contador++;
		num = prompt("Ingrese el numero ("+contador+"/"+limite+"): ");
		num = parseFloat(num);
		acumulador = acumulador + num;
	}while(contador<limite)

	promedio = acumulador/limite;

	document.getElementById("txtIdSuma").value = acumulador.toFixed(2);
	document.getElementById("txtIdPromedio").value = promedio.toFixed(2); 

}//FIN DE LA FUNCIÓN