/*
Romina Calani Cruz
DIV X

Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numero;
	let bandera;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	bandera = 0;

	do{
		numero = prompt("Ingrese los numeros: (Para finalizar escriba FIN");
		if(!(isNaN(numero))){
			numero = parseFloat(numero);
			if(numero<0){
				multiplicacionNegativos = multiplicacionNegativos * numero;
				bandera++;
			}
			else{
				sumaPositivos = sumaPositivos + numero;
			}
		}
		else{
			respuesta = numero.toUpperCase();
		}
	}while(respuesta!="FIN");

	document.getElementById("txtIdSuma").value = sumaPositivos;

	if(bandera==0){
		multiplicacionNegativos = 0;
	}
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN