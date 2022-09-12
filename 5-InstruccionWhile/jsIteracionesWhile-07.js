/*
Romina Calani Cruz
DIV X

Enunciado:
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let num;

	contador=0;
	acumulador=0;
	
	do{
		num = prompt("Ingrese el numero a sumar. Para finalizar escriba FIN");
		if(!(isNaN(num))){
			num = parseFloat(num);
			acumulador = acumulador + num;
			contador++;
		}
		else{
			respuesta = num.toUpperCase();
		}		
	}while(respuesta!="FIN");

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;

}//FIN DE LA FUNCIÓN