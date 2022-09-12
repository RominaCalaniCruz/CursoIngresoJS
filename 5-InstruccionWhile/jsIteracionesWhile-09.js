/*
Romina Calani Cruz
DIV X

Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{	// declarar variables
	let bandera;
	let numero;
	let numeroMax;
	let numeroMin;
	let respuesta;
	//iniciar variables
	bandera=0;
	respuesta="si";

	while(respuesta=="si")
	{
		do{
			numero = prompt("Ingrese un numero: ");
			numero = parseFloat(numero);
		}while(isNaN(numero));
		
		if(bandera==0){
			numeroMax=numero;
			numeroMin=numero;
			bandera=1;
		}
		else{
			if(numero<numeroMin){
				numeroMin=numero;
			}
			else if(numero>numeroMax){
				numeroMax=numero;
			}
		}
		respuesta=prompt("desea continuar? si/no");
		respuesta=respuesta.toLowerCase();
	}

	document.getElementById("txtIdMaximo").value = numeroMax;
	document.getElementById("txtIdMinimo").value = numeroMin;
}//FIN DE LA FUNCIÓN