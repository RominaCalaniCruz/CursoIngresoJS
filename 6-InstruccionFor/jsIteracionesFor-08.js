/*
Romina Calani Cruz
DIV X

Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar()
{
	let numero;
	let bandera;
	let i;

	bandera = 1;

	do{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
	}while(isNaN(numero) || numero<=0);

	for(i=2;i<numero;i++){
		if(numero%i==0){
			bandera=0;
			break;
		}
	}
	
	if(bandera==0 || numero==1){
		alert("No es primo");
	}
	else{
		alert("Es primo");
	}
}//FIN DE LA FUNCIÓN